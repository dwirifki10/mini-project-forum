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
								{{ item.category }}
							</p>
							<div class="star-left text-warning">
								<b-icon
									icon="star-fill"
									variant="warning"
								></b-icon>
								<span class="fw-bold ps-1">{{
									item.star
								}}</span>
							</div>
						</div>
						<p class="card-text fs-25 opacity-75">
							{{ item.name }}
						</p>
						<h6 class="card-title fw-bold">
							{{ item.title }}
						</h6>
						<div class="fs-25 card-bottom d-flex">
							<p class="opacity-75">
								{{ item.createdAt }}
							</p>
							<router-link
								:to="{ name: 'Detail', params: { id: '1' } }"
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
			<button class="btn bg-base-outline p-3 rounded-pill">
				Lebih Banyak
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Popular",
	data() {
		return {
			items: [
				{
					id: 1,
					title: "Apa ada cara terbaik belajar JavaScript bagi pemula ?",
					category: "Technology",
					name: "Dwi Rifki Novianto",
					star: 4.5,
					createdAt: "22 Juni 2022",
				},
				{
					id: 2,
					title: "Saya ingin membuat menu nasi goreng. Ada yang tahu resep dan cara membuatnya ?",
					category: "Entertainment",
					name: "Dwi Rifki Novianto",
					star: 4.9,
					createdAt: "22 Juni 2021",
				},
				{
					id: 3,
					title: "Cara terbaik menghafal rumus, bagaimana ?",
					category: "Education",
					name: "Dwi Rifki Novianto",
					star: 4.7,
					createdAt: "22 Juni 2023",
				},
			],
		};
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
