<template>
	<div class="mb-5 font-base">
		<div class="row g-0">
			<div class="col-lg-6">
				<img
					src="@/assets/img/F02.jpg"
					class="img-fluid mb-3"
					alt="Responsive image"
				/>
			</div>
			<div class="col-lg-6 mb-3 align-self-center">
				<h3 class="fw-bold mb-4 color-title text-center">
					Pertanyaan Sering Diajukan
				</h3>
				<div
					class="accordion ps-2 pe-2"
					role="tablist"
					v-for="item in items"
					:key="item.id"
				>
					<b-card no-body class="mb-3">
						<b-card-header
							header-tag="header"
							class="p-1"
							role="tab"
						>
							<b-button
								block
								v-b-toggle="'collapse' + item.id"
								class="w-100 bg-base text-white text-start"
								v-html="item.title"
							>
							</b-button>
						</b-card-header>
						<b-collapse
							:id="'collapse' + item.id"
							visible
							accordion="my-accordion"
							role="tabpanel"
						>
							<b-card-body>
								<b-card-text v-html="item.text"></b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FAQ",
	data() {
		return {
			items: [
				{
					id: 1,
					title: "Bagaimana cara membuat akun <b>diskusiku<b> ?",
					text: "Masuk ke menu <a href='#'><b>Login</b></a>. Kemudian, lakukan registrasi sesuai panduan form.",
				},
				{
					id: 2,
					title: "Bagaimana cara mencari topik diskusi ?",
					text: "Ke bagian paling atas Halaman <a href='#'><b>Navbar ataupun Footer</b><a>. Kemudian klik kategori yang ingin dicari.",
				},
				{
					id: 3,
					title: "Mengapa post yang saya buat tidak tampil ?",
					text: "Post anda tidak dapat diakses dikarenakan anda melanggar ketentuan dari <b>diskusiku</b>. Perbaiki kata atau tulisan dalam post anda agar dapat ditampilkan.",
				},
				{
					id: 4,
					title: "Bagaimana cara membuat post ?",
					text: "Anda harus login terlebih dahulu, kemudian cari menu <b>Profile</b> pada bagian bawah terdapat form untuk membuat post.",
				},
			],
		};
	},
};
</script>
