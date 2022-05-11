<template>
	<div class="mt-3 mb-3 font-base color-base">
		<div class="row g-0">
			<div class="col-lg-4 mt-3 ps-3 pe-3">
				<div class="card shadow-sm" style="width: 100%">
					<img
						class="rounded-circle mt-5 mb-3 mx-auto"
						src="../../assets/img/L01.jpg"
						alt="Card image cap"
						width="250"
						height="250"
					/>
					<div class="card-body">
						<h5 class="card-title fw-bold">Dwi Rifki Novianto</h5>
						<p class="card-text fw-bold opacity-75 mb-2">
							Kabupaten Tangerang
						</p>
						<p class="card-text opacity-75 fs-25 mb-1">
							Jember State Polytechnic Student, Informatics
							Engineering Program, Class of 2019
						</p>
						<b-icon icon="star-fill" variant="warning"></b-icon>
						<span class="text-warning fw-bold ps-1"> 4.5 </span>
						<button class="btn bg-base text-white w-100 mb-3 mt-3">
							Ubah Profile
						</button>
					</div>
				</div>
			</div>
			<div class="col-lg-8 pe-3 ps-3 pt-3">
				<div class="card shadow-sm">
					<div class="card-body">
						<h5 class="fw-bold">Daftar Post</h5>
						<div class="table-responsive mt-4 wrapper">
							<table class="table table-hover table-striped">
								<caption class="fs-25 ps-1">
									List of Post
								</caption>
								<thead class="bg-base text-white">
									<tr>
										<td scope="col">No</td>
										<td scope="col">Judul</td>
										<td scope="col" class="text-center">
											Viewers
										</td>
										<td scope="col" class="text-center">
											Actions
										</td>
									</tr>
								</thead>
								<tbody class="fs-25 align-items-center">
									<tr v-for="item in items" :key="item.id">
										<!-- id -->
										<td scope="col">{{ item.id }}</td>
										<!-- title -->
										<td>{{ item.title }}</td>
										<!-- views -->
										<td scope="col" class="text-center">
											{{ item.views }}
										</td>
										<!-- action -->
										<td class="text-center">
											<router-link
												:to="{
													name: 'Detail',
													params: '1',
												}"
												class="btn btn-success btn-sm mb-2 me-3 ms-3"
											>
												&nbsp;Detail&nbsp;
											</router-link>
											<router-link
												:to="{
													name: 'Detail',
													params: '1',
												}"
												class="btn btn-danger btn-sm mb-2"
											>
												Hapus
											</router-link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Mini",
	data() {
		return {
			items: [
				{
					id: 1,
					title: "Bagaimana cara terbaik menghafal rumus ?",
					views: 167,
				},
				{
					id: 2,
					title: "Bagaimana cara terbaik belajar JavaScript ?",
					views: 350,
				},
				{
					id: 3,
					title: "Bagaimana cara terbaik belajar bahasa ?",
					views: 130,
				},
			],
		};
	},
};
</script>
<style scoped>
.wrapper {
	max-height: 25rem;
	overflow-y: auto;
	display: block;
}

.table > :not(:first-child) {
	border-top: 2px solid #083d77 !important;
}
</style>
