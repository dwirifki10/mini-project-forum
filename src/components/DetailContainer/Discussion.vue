<template>
	<div class="font-base mt-2">
		<div class="row g-0">
			<div class="col-lg-8 p-3">
				<div class="card">
					<img
						class="card-img-top"
						src="../../assets/img/P04.jpg"
						alt="Card image cap"
					/>
					<div class="card-img-overlay">
						<!-- Profanity score -->
						<label class="btn btn-success shadow-lg pe-3 ps-3">
							Free Profanity {{ item[0].score }}%
						</label>
					</div>
					<div class="card-body color-base mt-2">
						<!-- Title -->
						<h5 class="card-title fw-bold">
							{{ item[0].title }}
						</h5>
						<!-- Category, star and views -->
						<div class="d-flex fs-25">
							<p class="opacity-75 fw-bold m0 pe-3">
								{{ item[0].category }}
							</p>
							<b-icon
								icon="people-fill"
								variant="bg-base opacity-75 m2"
							></b-icon>
							<p class="opacity-75 fw-bold m1 ps-1 pe-3">
								{{ item[0].views }} viewers
							</p>
							<b-icon
								icon="star-fill"
								variant="warning mt-2"
							></b-icon>
							<p class="text-warning fw-bold m1 ps-1">
								{{ item[0].star }}
							</p>
						</div>
						<!-- Writer Name -->
						<p class="fs-25 opacity-75">
							Ditulis oleh : <b>{{ item[0].name }}</b>
						</p>
						<!-- Description Post -->
						<p class="card-text fs-25 text-justify">
							{{ item[0].slug }}
						</p>
						<!-- Updated Post -->
						<p class="card-text">
							<small class="text-muted">
								Last Updated {{ item[0].created }}
							</small>
						</p>
					</div>
				</div>
			</div>
			<div class="col-lg-4 mt-1 p-3 mb-3">
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
									{{ item.list }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-12">
				<Comment />
			</div>
		</div>
	</div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
	name: "Discussion",
	components: { Comment },
	data() {
		return {
			item: [
				{
					id: 1,
					score: 85,
					title: "India Sita Aset Xiaomi Senilai $725 Juta, Berikut Ini Sebabnya",
					category: "Technology",
					star: 4.2,
					views: 120,
					name: "Dwi Rifki Novianto",
					slug: "Dikabarkan sebelumnya, Badan anti-pencucian uang India mengatakan pada router  hari Sabtu, 30 April 2022, bahwa pihaknya telah menyita aset senilai  $725 juta atau  setara Rp 10.5 Triliun  dari Xiaomi India karena  dianggap melanggar undang-undang valuta asing negara itu, Tentu ini merupakan pukulan besar bagi pembuat ponsel pintar asal  China yang dikabarkan  sangat menguasai pasar ponsel di India.",
					created: "06 April 2022",
				},
			],
			items: [
				{
					list: "Bagaimana cara mudah belajar JavaScript",
				},
				{
					list: "Bagaimana cara memasak nasi goreng yang enak ?",
				},
				{
					list: "Bagaimana cara agar mudah menghafal rumus ?",
				},
				{
					list: "Mengapa kita memiliki selera seni yang berbeda - beda ?",
				},
				{
					list: "Apa olahraga favoritmu dan kenapa ?",
				},
			],
		};
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
</style>
