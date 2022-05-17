<template>
	<div class="font-base color-base col-lg-8 mt-2 pe-3 ps-3 mb-3">
		<div v-for="item in post" :key="item.id" class="mb-4">
			<div class="card shadow">
				<div class="card-body">
					<img
						src="../../assets/img/L01.jpg"
						class="rounded-circle"
						width="35"
						height="35"
					/>
					<router-link class="card-title ps-1" :to="{ name: 'Home' }">
						{{ item.CommentHasOneUser.name }}
					</router-link>
					<p class="fs-25 mt-3 mb-4 text-justify">
						{{ item.comment }}
					</p>
					<span class="fs-25 fw-bold color-title">Reply</span>
				</div>
			</div>
			<div
				class="ml-auto card shadow mt-3 w-75 ms-auto"
				v-for="element in item.CommentHaveManyChilds"
				:key="element.id"
			>
				<div class="card-body">
					<img
						src="../../assets/img/L01.jpg"
						class="rounded-circle"
						width="35"
						height="35"
					/>
					<router-link class="card-title ps-1" :to="{ name: 'Home' }">
						{{ element.CommentHasOneUser.name }}
					</router-link>
					<p class="fs-25 mt-2 mb-4 text-justify">
						{{ element.comment }}
					</p>
					<span class="fs-25 fw-bold color-title">Reply</span>
				</div>
			</div>
		</div>
		<div class="mt-5">
			<h5 class="color-title fw-bold">Buat Komentar</h5>
			<form class="col-lg-8">
				<div class="form-group mb-3">
					<input
						type="email"
						class="form-control"
						placeholder="Reply : Dwi Rifki Novianto"
						disabled
					/>
				</div>
				<div class="form-group">
					<textarea
						class="form-control"
						rows="5"
						placeholder="Tuliskan Komentar"
					></textarea>
				</div>
				<button class="btn bg-base text-white pe-4 ps-4 mt-3">
					<span class="fs-25">Kirim</span>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { GET_COMMENT } from "@/graph/index.js";

export default {
	name: "Comment",
	data() {
		return {
			post: [],
		};
	},
	watch: {
		$route() {
			this.getItemPost();
		},
	},
	async mounted() {
		this.getItemPost();
	},
	methods: {
		async getItemPost() {
			const post_id = Number(this.$route.params.id);
			const data = await this.$apollo.query({
				query: GET_COMMENT,
				variables: { id: post_id },
			});
			this.post = data.data.post[0].PostHaveManyComments;
		},
	},
};
</script>

<style scoped>
.card-title {
	text-decoration: none;
	color: #031b4e !important;
	font-size: 15px;
	font-weight: bold;
	opacity: 0.75;
}
.text-justify {
	text-align: justify;
}
</style>
