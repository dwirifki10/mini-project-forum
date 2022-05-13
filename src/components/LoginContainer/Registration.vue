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
								Bergabung bersama kami
							</p>
						</div>
						<div class="justify-content-center mb-2 pe-2">
							<form @submit.prevent="register" method="POST">
								<div class="form-group mb-3">
									<input
										type="text"
										class="form-control"
										v-model="form.name"
										placeholder="Masukan Nama ex: Anonim"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="email"
										class="form-control"
										v-model="form.email"
										placeholder="Masukan Email ex: anonim@gmail.com"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="password"
										v-model="form.password"
										class="form-control"
										placeholder="Masukan Password"
									/>
								</div>
								<div class="form-group mb-3">
									<input
										type="text"
										v-model="form.location"
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
import { ADD_USER, CHECK_EMAIL } from "@/graph/user.js";
import { getDate } from "@/utils/index.js";

export default {
	name: "Registration",
	data() {
		return {
			form: {
				name: "",
				email: "",
				password: "",
				location: "",
			},
		};
	},
	methods: {
		async register() {
			/* save attributes */
			const name = this.form.name;
			const email = this.form.email;
			const password = this.form.password;
			const location = this.form.location;
			const created = getDate();
			const updated = created;
			/* check email is active */
			const data = await this.$apollo.query({
				query: CHECK_EMAIL,
				variables: { email },
			});
			if (data.data.user.length >= 1) {
				/* get notification */
				await this.$swal({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					icon: "error",
					title: "Email sudah ada",
				});
			} else {
				/* insert to database */
				await this.$apollo.mutate({
					mutation: ADD_USER,
					variables: {
						name,
						email,
						password,
						location,
						created,
						updated,
					},
				});
				/* get notification */
				await this.$swal({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					icon: "success",
					title: "Berhasil mendaftarkan akun",
				});
				/* push to login */
				this.$router.push({ name: "Login" });
			}
		},
	},
};
</script>

<style scoped>
.center {
	width: 88%;
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
	opacity: 0.75;
	line-height: 2;
}
</style>
