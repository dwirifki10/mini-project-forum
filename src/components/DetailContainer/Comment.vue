<template>
	<div class="font-base color-base col-lg-8 mt-2 pe-3 ps-3 mb-3">
		<div class="card shadow">
			<div class="card-body">
				<img
					src="../../assets/img/L01.jpg"
					class="rounded-circle"
					width="35"
					height="35"
				/>
				<router-link class="card-title ps-1" :to="{ name: 'Home' }">
					Dwi Rifki Novianto
				</router-link>
				<p class="fs-25 mt-3 mb-4">
					Ambitioni dedisse scripsisse iudicaretur. Cras mattis
					iudicium purus sit amet fermentum. Donec sed odio operae, eu
					vulputate felis rhoncus. Praeterea iter est quasdam res quas
					ex communi. At nos hinc posthac, sitientis piros Afros.
					Petierunt uti sibi concilium totius Galliae in diem certam
					indicere. Cras mattis iudicium purus sit amet fermentum.
				</p>
				<span class="fs-25 fw-bold color-title">Reply</span>
			</div>
		</div>
		<div class="ml-auto card shadow mt-3 w-75 ms-auto">
			<div class="card-body">
				<img
					src="../../assets/img/L01.jpg"
					class="rounded-circle"
					width="35"
					height="35"
				/>
				<router-link class="card-title ps-1" :to="{ name: 'Home' }">
					Dwi Rifki Novianto
				</router-link>
				<p class="fs-25 mt-2 mb-4">
					Ambitioni dedisse scripsisse iudicaretur. Cras mattis
					iudicium purus sit amet fermentum. Donec sed odio operae, eu
					vulputate felis rhoncus.
				</p>
				<span class="fs-25 fw-bold color-title">Reply</span>
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
export default {
	name: "Comment",
};
</script>

<style scoped>
.card-title {
	text-decoration: none;
	color: #031b4e !important;
	font-size: 15px;
	font-weight: bold;
	opacity: 75%;
}
</style>
