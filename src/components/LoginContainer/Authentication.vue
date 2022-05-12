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
							<form @submit.prevent="authenticate">
								<div class="form-group mb-3">
									<input
										type="email"
										v-model="form.email"
										class="form-control"
										placeholder="Masukan Email"
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
							<div :class="{ shake: disabled }">
								<a @click="warnDisabled" href="#">
									Lupa Password ?
								</a>
								<span v-if="disabled" class="text-secondary">
									Fitur ini belum tersedia
								</span>
							</div>
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
import { AUTH_USER } from "@/graph/user.js";
import { mapMutations } from "vuex";

export default {
	name: "Authentication",
	data() {
		return {
			disabled: false,
			form: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		...mapMutations({ setUser: "data/setUser" }),
		warnDisabled() {
			this.disabled = true;
			setTimeout(() => {
				this.disabled = false;
			}, 1500);
		},
		async authenticate() {
			/* save attributes */
			const email = this.form.email;
			const password = this.form.password;
			/* authenticate user */
			const data = await this.$apollo.query({
				query: AUTH_USER,
				variables: { email, password },
			});
			/* check condition data */
			if (data.data.user.length >= 1) {
				/* save user */
				this.setUser({ uniqueId: password, name: data.data.user[0] });
				/* get success notification */
				await this.$swal({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					icon: "success",
					title: "Login berhasil",
				});
				/* redirect to home */
				this.$router.push({ name: "Home" });
			} else {
				/* get false notification */
				await this.$swal({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					icon: "error",
					title: "Email atau Password salah",
				});
			}
		},
	},
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
	opacity: 0.75;
	line-height: 2;
}

.shake {
	animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	transform: translate3d(0, 0, 0);
}

@keyframes shake {
	10%,
	90% {
		transform: translate3d(-1px, 0, 0);
	}

	20%,
	80% {
		transform: translate3d(2px, 0, 0);
	}

	30%,
	50%,
	70% {
		transform: translate3d(-4px, 0, 0);
	}

	40%,
	60% {
		transform: translate3d(4px, 0, 0);
	}
}
</style>
