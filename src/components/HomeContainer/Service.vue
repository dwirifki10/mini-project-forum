<template>
	<div class="pd-top mt-5 font-base">
		<div class="text-center">
			<h3 class="fw-bold color-title">Layanan Kami</h3>
			<p class="opacity-75 fs-30 mb-5 color-base">
				Kami akan memelihara ekosistem diskusi menjadi lebih baik dan
				nyaman. Membuat pengalaman berdiskusi menjadi lebih
				menyenangkan.
			</p>
		</div>
		<div class="mb-5">
			<div class="row g-0 text-center">
				<div
					class="col-lg-4 mb-5 d-flex justify-content-center"
					v-for="item in items"
					:key="item.index"
				>
					<div class="card shadow pt-3" style="width: 18rem">
						<div class="card-body">
							<h5 class="card-title mb-3 color-title fw-bold">
								{{ item.title }}
							</h5>
							<p class="card-text mb-3 color-base opacity-50">
								{{ item.desc }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Service",
	data() {
		return {
			items: [
				{
					title: "Buat Post Baru",
					desc: "Buat post pertama mu dan mulai diskusi untuk membangun relasi pertemanan.",
				},
				{
					title: "Pilih Topik Diskusi",
					desc: "Pilih topik diskusi menarik mu seputar hiburan, seni, olahraga, teknologi dan edukasi.",
				},
				{
					title: "Filter Kata Kasar",
					desc: "Kami menyaring beberapa kata kasar untuk menjadikan diskusi menjadi lebih nyaman.",
				},
			],
		};
	},
};
</script>
