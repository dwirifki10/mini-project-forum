<template>
	<div class="mt-5 font-base mb-5">
		<h4 class="ps-2 mb-4 fw-bold color-title text-center">
			Kategori Entertainment
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
									<p class="card-text opacity-75 fw-bold">
										{{ item.category }}
									</p>
									<div class="ms-auto text-warning">
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
								class="form-control"
								placeholder="Type to search ..."
							/>
							<button class="btn bg-base text-white">
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
									v-for="item in items"
									:key="item.index"
								>
									{{ item.title }}
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
export default {
	name: "List",
	data() {
		return {
			items: [
				{
					title: "Bagaimana cara mudah belajar JavaScript",
					id: 1,
					category: "Technology",
					name: "Dwi Rifki Novianto",
					star: 4.5,
					createdAt: "22 Juni 2022",
				},
				{
					title: "Bagaimana cara memasak nasi goreng yang enak dan lezat ada yang tahu ?",
					id: 2,
					category: "Technology",
					name: "Dwi Rifki Novianto",
					star: 4.5,
					createdAt: "22 Juni 2022",
				},
				{
					title: "Bagaimana cara agar mudah menghafal rumus ?",
					id: 3,
					category: "Technology",
					name: "Dwi Rifki Novianto",
					star: 4.5,
					createdAt: "22 Juni 2022",
				},
				{
					title: "Mengapa kita memiliki selera seni yang berbeda - beda ?",
					id: 4,
					category: "Technology",
					name: "Dwi Rifki Novianto",
					star: 4.5,
					createdAt: "22 Juni 2022",
				},
				{
					title: "Apa olahraga favoritmu dan mengapa ?",
					id: 5,
					category: "Technology",
					name: "Dwi Rifki Novianto",
					star: 4.5,
					createdAt: "22 Juni 2022",
				},
			],
		};
	},
};
</script>
<style>
.card-bottom {
	position: absolute;
	bottom: 15px;
}
</style>
