<template>
	<div class="font-base mt-2">
		<div class="row g-0">
			<div class="col-lg-8 p-3">
				<div class="card">
					<img
						class="card-img-top"
						src="../../assets/img/I04.jpg"
						alt="Card image cap"
					/>
					<div class="card-img-overlay">
						<!-- Profanity score -->
						<label class="btn btn-success shadow-lg pe-3 ps-3">
							Profanity Score {{ profanity_score }}
						</label>
					</div>
					<div class="card-body color-base mt-2">
						<!-- Title -->
						<h5 class="card-title fw-bold text-capitalize">
							{{ item.title }}
						</h5>
						<!-- Category, star and views -->
						<div class="d-flex fs-25">
							<p class="opacity-75 fw-bold m0 pe-3">
								{{ data.category }}
							</p>
							<b-icon
								icon="people-fill"
								variant="bg-base opacity-75 m2"
							></b-icon>
							<p class="opacity-75 fw-bold m1 ps-1 pe-3">
								{{ item.views }} viewers
							</p>
							<b-icon
								icon="star-fill"
								variant="warning mt-2"
							></b-icon>
							<p
								v-if="data.star == null"
								class="text-warning fw-bold m1 ps-1"
							>
								Belum Ada
							</p>
							<p class="text-warning fw-bold m1 ps-1">
								{{ data.star }}
							</p>
						</div>
						<!-- Writer Name -->
						<p class="fs-25 opacity-75">
							Ditulis oleh : <b>{{ data.name }}</b>
						</p>
						<!-- Description Post -->
						<p
							class="card-text fs-25 text-justify"
							v-html="item.slug"
						></p>
						<!-- Updated Post -->
						<p class="card-text">
							<small class="text-muted">
								Last Updated {{ item.updated }}
							</small>
						</p>
					</div>
				</div>
			</div>
			<div class="col-lg-4 mt-1 p-3 mb-2">
				<div class="card shadow-sm">
					<div class="card-body">
						<div class="input-group mb-3 mt-3">
							<input
								type="text"
								class="form-control"
								placeholder="Type to search ..."
								v-model="search"
							/>
							<button
								class="btn bg-base text-white"
								@click="find"
							>
								Search
							</button>
						</div>
						<div class="mt-3">
							<ul class="list-group list-group-flush mb-3">
								<li class="list-group-item mb-3">
									<h5 class="color-title fw-bold">
										Popular Post
									</h5>
								</li>
								<li
									class="list-group-item color-base opacity-75"
									v-for="post in posts"
									:key="post.index"
								>
									<router-link
										:to="{
											name: 'Detail',
											params: { id: post.id },
										}"
										class="text-decoration-none color-base"
									>
										{{ post.title }}
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-12">
				<h5 class="fw-bold color-title ps-3 mt-2 mb-3">Komentar</h5>
				<Comment />
			</div>
		</div>
	</div>
</template>

<script>
import Comment from "./Comment.vue";
import { mapMutations } from "vuex";
import { DTL_POST, GET_POST, SET_VIEWS } from "@/graph/index.js";
import axios from "axios";

export default {
	name: "Discussion",
	components: { Comment },
	data() {
		return {
			search: "",
			profanity_score: null,
			item: [],
			posts: [],
			data: {
				name: null,
				category: null,
				star: null,
			},
		};
	},
	watch: {
		$route() {
			this.getItemPost();
		},
	},
	async mounted() {
		this.getItemPost();

		const posts = await this.$apollo.query({
			query: GET_POST,
			variables: { total: 20 },
		});
		this.posts = posts.data.post.slice(0, 5);
		this.setItem({ items: posts.data.post });
	},
	methods: {
		...mapMutations({
			setItem: "data/setItem",
			setItemId: "data/setItemId",
		}),
		async getItemPost() {
			const id = this.$route.params.id;
			const data = await this.$apollo.query({
				query: DTL_POST,
				variables: { id },
			});

			this.item = data.data.post[0];
			this.data.name = await this.item.PostHasOneUser.name;
			this.data.category = await this.item.PostHasOneCategory.category;
			this.data.star = await this.item.PostHaveManyStars_aggregate
				.aggregate.avg.value;

			const data_profanity = await axios.post("/filter?merge=true", {
				sentence: this.item.slug,
			});

			this.profanity_score =
				data_profanity.data.data.result.free_profanity_score;

			if (this.profanity_score < 85) {
				await this.$swal({
					toast: true,
					position: "inherit",
					showConfirmButton: false,
					timer: 2000,
					timerProgressBar: true,
					icon: "warning",
					title: "Post ini melanggar ketentuan, kembali ke halaman awal",
				});
				this.$router.push({ name: "Home" });
			}

			if (this.$store.state.data.itemId != id) {
				this.setItemId(id);
				const views = this.item.views + 1;
				await this.$apollo.mutate({
					mutation: SET_VIEWS,
					variables: { id: id, total: views },
				});
			}
		},
		find(search) {
			const data = this.$store.state.data.items.items;
			if (search) {
				this.posts = data
					.filter((item) => {
						return this.search
							.toLowerCase()
							.split(" ")
							.every((v) => item.title.toLowerCase().includes(v));
					})
					.slice(0, 5);
			} else {
				this.posts = data.slice(0, 5);
			}
		},
	},
};
</script>
<style>
.m2 {
	margin-top: 9px !important;
}
.m1 {
	margin-top: 6px !important;
}
.m0 {
	margin-top: 5px !important;
}
.text-justify {
	text-align: justify !important;
}
</style>
