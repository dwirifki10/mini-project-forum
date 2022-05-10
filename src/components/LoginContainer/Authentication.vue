<template>
	<div class="font-base">
		<div class="card shadow col-lg-11 center">
			<div class="card-body">
				<div class="row g-2">
					<div class="col-lg-4 mt-2 align-self-center">
						<div class="text-center">
							<router-link :to="{ name: 'Home' }">
								<h3 class="card-title">Diskusiku</h3>
							</router-link>
							<p class="fs-25 fw-bold color-base opacity-75">
								Selamat Datang, Silahkan Login
							</p>
						</div>
						<div class="justify-content-center mb-2 pe-2">
							<form>
								<div class="form-group mb-3">
									<input
										type="email"
										class="form-control"
										placeholder="Masukan Email"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="password"
										class="form-control"
										placeholder="Masukan Password"
									/>
								</div>
								<button
									type="submit"
									class="btn bg-base fs-30 p-2 text-white w-100"
								>
									Masuk
								</button>
							</form>
						</div>
						<div class="text-start fs-25 fw-bold mb-4 opacity-75">
							<router-link :to="{ name: 'Register' }">
								Belum punya akun ? Daftar
							</router-link>
							<router-link :to="{ name: 'Home' }">
								Lupa Password ?
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
	name: "Authentication",
};
</script>

<style scoped>
.center {
	width: 90%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
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
