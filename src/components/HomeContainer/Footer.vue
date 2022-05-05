<template>
	<div class="mt-3 font-base bg-base text-white">
		<div class="row g-0">
			<div class="col-lg-6 mt-5 mb-2 ps-5">
				<router-link :to="{ name: 'Home' }" class="title-footer">
					<h3>Diskusiku</h3>
				</router-link>
				<p>Situs berbagi cerita, pengalaman dan pengetahuan.</p>
			</div>
			<div class="col-lg-2 mt-5 ps-5 mb-2">
				<p class="mb-3 fw-bold">Kategori</p>
				<router-link :to="{ name: 'Home' }">
					<p class="g-0">Entertainment</p>
				</router-link>
				<router-link :to="{ name: 'Home' }"> <p>Arts</p> </router-link>
				<router-link :to="{ name: 'Home' }">
					<p>Technology</p>
				</router-link>
				<router-link :to="{ name: 'Home' }"> <p>Sport</p> </router-link>
				<router-link :to="{ name: 'Home' }">
					<p>Education</p>
				</router-link>
			</div>
			<div class="col-lg-2 mt-5 ps-5 mb-2">
				<p class="mb-3 fw-bold">Fitur</p>
				<router-link :to="{ name: 'Home' }">
					<p>Buat Post</p>
				</router-link>
				<router-link :to="{ name: 'Home' }">
					<p>Pilih Topik Diskusi</p>
				</router-link>
				<router-link :to="{ name: 'Home' }">
					<p>Filter Kata Kasar</p>
				</router-link>
			</div>
			<div class="col-lg-2 mt-5 ps-5 mb-5">
				<p class="mb-3 fw-bold">Pusat Bantuan</p>
				<router-link :to="{ name: 'Home' }">
					<p>Tentang</p>
				</router-link>
				<router-link :to="{ name: 'Home' }">
					<p>Kritik dan Saran</p>
				</router-link>
				<router-link :to="{ name: 'Home' }">
					<p>Bantuan</p>
				</router-link>
			</div>
		</div>
		<div class="bg-light">
			<p class="color-title fs-25 fw-bold text-center pt-2">
				Copyright &copy; Dwi Rifki Novianto. All rights reserved
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "Footer",
};
</script>
<style scoped>
.title-footer {
	font-family: "Satisfy";
	text-decoration: none;
}
a {
	text-decoration: none;
	color: #ffffff;
}
a:hover {
	color: #ffffff;
	font-weight: bold;
}
p {
	margin-bottom: 0.5em;
}
</style>
