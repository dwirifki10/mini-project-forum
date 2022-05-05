<template>
	<div class="pd-top font-base">
		<div class="row g-0">
			<div class="col-lg-5 ps-4 align-self-center">
				<h1 class="fw-bold color-title">
					Situs Forum Berbagi Cerita, Pengalaman dan <br />
					Pengetahuan
				</h1>
				<p class="mt-3 color-base fs-30 opacity-75">
					Situs berbagi cerita, pengalaman dan pengetahuan. Buat post
					pertama mu dan lakukan diskusi sekarang juga.
				</p>
				<button class="btn bg-base pe-4 ps-4 pt-2 pb-2 rounded-pill">
					<router-link
						class="text-white font-base text-decoration-none"
						:to="{ name: 'Home' }"
					>
						Buat Post
					</router-link>
				</button>
			</div>
			<div class="col-lg-7">
				<img
					src="@/assets/img/H01.jpg"
					class="img-fluid"
					alt="Responsive image"
				/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Header",
};
</script>
