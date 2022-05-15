<template>
	<div class="mt-5 font-base mb-5">
		<h4 class="ps-2 mb-4 fw-bold color-title text-center">
			Kategori {{ category }}
		</h4>
		<div class="row g-0">
			<div class="col-lg-8">
				<div class="row g-0 ps-3 pt-3">
					<div
						class="col-lg-4 d-flex justify-content-center pe-3"
						v-for="item in items"
						:key="item.id"
					>
						<div
							class="card mb-3"
							style="width: 20rem; height: 30rem"
						>
							<img
								class="card-img-top"
								src="@/assets/img/L01.jpg"
								alt="Card image cap"
								height="250"
							/>
							<div class="card-body color-base">
								<div class="d-flex">
									<p
										class="card-text mb-0 opacity-75 fw-bold"
									>
										{{ item.PostHasOneCategory.category }}
									</p>
									<div class="ms-auto text-warning">
										<b-icon
											icon="star-fill"
											variant="warning"
										></b-icon>
										<span class="fw-bold ps-1">{{
											item.PostHaveManyStars_aggregate
												.aggregate.avg.value
										}}</span>
									</div>
								</div>
								<p class="card-text fs-25 opacity-75">
									{{ item.PostHasOneUser.name }}
								</p>
								<h6 class="card-title fw-bold">
									{{ item.title }}
								</h6>
								<div class="fs-25 d-flex card-bottom">
									<router-link
										:to="{
											name: 'Detail',
											params: { id: '1' },
										}"
										class="fw-bold text-decoration-none color-title card-left"
									>
										Selengkapnya
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 p-3">
				<div class="card shadow-sm">
					<div class="card-body">
						<div class="input-group mb-3 mt-3">
							<input
								type="text"
								v-model="search"
								class="form-control"
								placeholder="Type to search ..."
							/>
							<button
								class="btn bg-base text-white"
								@click="find(search)"
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
									v-for="post in posts.slice(0, 5)"
									:key="post.index"
								>
									{{ post.title }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getCategory } from "@/utils/index.js";
import { CTG_POST, GET_POST } from "@/graph/index.js";
import { mapMutations } from "vuex";

export default {
	name: "List",
	data() {
		return {
			category: "",
			search: "",
			items: [],
			posts: [],
		};
	},
	async mounted() {
		this.getCategoryByParams();
		const id = Number(this.$route.params.id);
		if ([1, 2, 3, 4, 5].includes(id)) {
			const data = await this.$apollo.query({
				query: CTG_POST,
				variables: { category_id: id },
			});
			this.items = data.data.post;
		} else {
			this.$router.push({ name: "Home" });
		}
		const posts = await this.$apollo.query({
			query: GET_POST,
			variables: { total: 20 },
		});
		this.posts = posts.data.post;
		this.setItem({ items: posts.data.post });
	},
	watch: {
		async $route() {
			this.getCategoryByParams();
			const id = Number(this.$route.params.id);
			if ([1, 2, 3, 4, 5].includes(id)) {
				const data = await this.$apollo.query({
					query: CTG_POST,
					variables: { category_id: id },
				});
				this.items = data.data.post;
			} else {
				this.$router.push({ name: "Home" });
			}
		},
	},
	methods: {
		...mapMutations({ setItem: "data/setItem" }),
		getCategoryByParams() {
			this.category = getCategory(this.$route.params.id);
		},
		find(search) {
			if (search === "") {
				this.posts = this.$store.state.data.items;
			}
		},
	},
};
</script>
<style>
.card-bottom {
	position: absolute;
	bottom: 15px;
}
</style>
