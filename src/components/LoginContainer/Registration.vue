<template>
	<div class="font-base mt-4 mb-3 p-3">
		<div class="card shadow col-lg-11 mx-auto">
			<div class="card-body">
				<div class="row g-2">
					<div class="col-lg-4 mt-2 align-self-center">
						<div class="text-center">
							<router-link :to="{ name: 'Home' }">
								<h3 class="card-title">Diskusiku</h3>
							</router-link>
							<p class="fs-25 fw-bold color-base opacity-75">
								Bergabung bersama kami
							</p>
						</div>
						<div class="justify-content-center mb-2 pe-2">
							<form>
								<div class="form-group mb-3">
									<input
										type="text"
										class="form-control"
										placeholder="Masukan Nama ex: Anonim"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="email"
										class="form-control"
										placeholder="Masukan Email ex: anonim@gmail.com"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="password"
										class="form-control"
										placeholder="Masukan Password"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="text"
										class="form-control"
										placeholder="Masukan Lokasi ex: Jakarta"
									/>
								</div>
								<button
									type="submit"
									class="btn bg-base fs-30 p-2 text-white w-100"
								>
									Daftar
								</button>
							</form>
						</div>
						<div class="text-start fs-25 fw-bold mb-4 opacity-75">
							<router-link :to="{ name: 'Login' }">
								Sudah punya akun ? Login disini
							</router-link>
						</div>
					</div>
					<div class="col-lg-8">
						<img
							src="../../assets/img/L01.jpg"
							class="img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Registration",
};
</script>

<style scoped>
.card-title {
	font-family: "Satisfy" !important;
	color: #083d77 !important;
}
a {
	text-decoration: none;
	display: block;
	color: #031b4e !important;
}
a:hover {
	color: #083d77 !important;
	font-weight: bolder;
}
input,
input::-webkit-input-placeholder {
	color: #031b4e !important;
	font-size: 15px;
	opacity: 65%;
	line-height: 2;
}
</style>
