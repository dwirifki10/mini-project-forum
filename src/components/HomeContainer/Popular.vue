<template>
	<div class="mt-5 mb-5 font-base">
		<h3 class="color-title fw-bold text-center mb-4">Popular Post</h3>
		<div class="row g-0">
			<div
				class="col-lg-4 d-flex justify-content-center"
				v-for="item in items"
				:key="item.id"
			>
				<div class="card mb-3" style="width: 20rem; height: 30rem">
					<img
						class="card-img-top"
						src="@/assets/img/L01.jpg"
						alt="Card image cap"
						height="250"
					/>
					<div class="card-body color-base">
						<div class="d-flex">
							<p class="card-text mb-0 opacity-75 fw-bold">
								{{ item.PostHasOneCategory.category }}
							</p>
							<div class="star-left text-warning">
								<b-icon
									icon="star-fill"
									variant="warning"
								></b-icon>
								<span class="fw-bold">
									{{
										item.PostHaveManyStars_aggregate
											.aggregate.avg.value
									}}
								</span>
								<span
									class="fw-bold"
									v-if="
										item.PostHaveManyStars_aggregate
											.aggregate.avg.value == null
									"
								>
									Null
								</span>
							</div>
						</div>
						<p class="card-text fs-25 opacity-75">
							{{ item.PostHasOneUser.name }}
						</p>
						<h6 class="card-title fw-bold">
							{{ item.title }}
						</h6>
						<div class="fs-25 card-bottom d-flex">
							<p class="opacity-75">
								{{ item.created }}
							</p>
							<router-link
								:to="{
									name: 'Detail',
									params: { id: 'item.id' },
								}"
								class="fw-bold card-left text-decoration-none color-title"
							>
								Selengkapnya
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-5 text-center">
			<router-link :to="{ name: 'Category', params: { id: 6 } }">
				<button class="btn bg-base-outline p-3 rounded-pill">
					Lebih Banyak
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>
import { POP_POST } from "@/graph/index.js";

export default {
	name: "Popular",
	data() {
		return {
			items: [],
		};
	},
	async mounted() {
		const total = 3;
		const data = await this.$apollo.query({
			query: POP_POST,
			variables: { total },
		});
		this.items = data.data.post;
	},
};
</script>

<style scoped>
.card-bottom {
	position: absolute;
	bottom: 2px;
}
.card-left {
	position: absolute;
	left: 12rem;
}
.star-left {
	position: absolute;
	left: 16rem;
}
.bg-base-outline {
	border-color: #083d77 !important;
	color: #083d77 !important;
	font-weight: bold;
}
</style>
