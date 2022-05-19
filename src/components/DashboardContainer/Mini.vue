<template>
	<div class="mt-3 mb-3 font-base color-base">
		<div class="row g-0">
			<div class="col-lg-4 mt-3 ps-3 pe-3">
				<div class="card shadow-sm" style="width: 100%">
					<img
						class="rounded-circle mt-5 mb-3 mx-auto"
						src="../../assets/img/L01.jpg"
						alt="Card image cap"
						width="250"
						height="250"
					/>
					<div class="card-body">
						<h5 class="card-title fw-bold mb-1">
							{{ user.name }}
						</h5>
						<p class="card-text fw-bold opacity-75 mb-2">
							{{ user.location }}
						</p>
						<p class="card-text text-justify opacity-75 fs-25 mb-1">
							{{ getStatus }}
						</p>
						<b-icon icon="star-fill" variant="warning"></b-icon>
						<span class="text-warning fw-bold ps-1">
							{{ getStar }}
						</span>
						<button
							class="btn bg-base text-white w-100 mb-3 mt-3"
							v-b-modal.modalPopover
						>
							Ubah Profile
						</button>
						<!-- Modal -->
						<b-modal
							id="modalPopover"
							title="Ubah Profile"
							hide-header-close
							ok-only
							@ok="update"
							modal-class="my-modal"
						>
							<input type="file" class="form-control-file mb-3" />
							<input
								type="text"
								class="form-control mb-3"
								placeholder="Masukan nama anda"
								v-model="user.name"
							/>
							<input
								type="text"
								class="form-control mb-3"
								placeholder="Masukan lokasi anda"
								v-model="user.location"
							/>
							<textarea
								class="form-control"
								rows="3"
								placeholder="Masukan status anda"
								v-model="user.status"
							></textarea>
						</b-modal>
					</div>
				</div>
			</div>
			<div class="col-lg-8 pe-3 ps-3 pt-3">
				<div class="card shadow-sm">
					<div class="card-body">
						<h5 class="fw-bold color-title">Daftar Post</h5>
						<div class="table-responsive mt-4 wrapper">
							<table class="table table-hover table-striped">
								<caption class="fs-25 ps-1">
									List of Post
								</caption>
								<thead class="bg-base text-white">
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Judul</th>
										<th scope="col" class="text-center">
											Viewers
										</th>
										<th scope="col" class="text-center">
											Actions
										</th>
									</tr>
								</thead>
								<tbody class="fs-25 align-items-center">
									<tr v-for="item in items" :key="item.id">
										<!-- id -->
										<td scope="col">PU{{ item.id }}</td>
										<!-- title -->
										<td>{{ item.title }}</td>
										<!-- views -->
										<td scope="col" class="text-center">
											{{ item.views }}
										</td>
										<!-- action -->
										<td class="text-center">
											<router-link
												:to="{
													name: 'Detail',
													params: { id: item.id },
												}"
												class="btn bg-base text-white btn-sm mb-2 me-3 ms-3"
											>
												&nbsp;Detail&nbsp;
											</router-link>
											<button
												@click="destroy(item.id)"
												class="btn btn-danger btn-sm mb-2"
											>
												Hapus
											</button>
										</td>
									</tr>
								</tbody>
							</table>
							<div v-if="items.length == 0">
								<img
									src="../../assets/img/T01.jpg"
									class="img-fluid mx-auto"
								/>
								<h5 class="color-title text-center fw-bold">
									Belum Ada Postingan Dibuat
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { DETAIL_USER, UPDATE_USER } from "@/graph/user.js";
import { ALL_POST, DELETE_POST } from "@/graph/dashboard.js";
import { getDate } from "@/utils/index.js";

export default {
	name: "Mini",
	data() {
		return {
			user: {
				name: "",
				location: "",
				status: "",
				star: null,
			},
			items: [],
		};
	},
	computed: {
		getStar() {
			if (this.user.star !== null) {
				return this.user.star;
			}
			return "None";
		},
		getStatus() {
			const status = this.user.status;
			if (status === null || status === "") {
				return "Hai kamu yang disana, sepertinya kamu belum memberikan deskripsi mu nih. Lengkapi ya, agar profile mu semakin menarik.";
			}
			return status;
		},
	},
	async mounted() {
		/* save id user */
		const id = this.$store.state.data.name.id;
		/* check if id user exists */
		if (id !== undefined) {
			const result = await this.$apollo.query({
				query: DETAIL_USER,
				variables: { id },
			});
			const posts = await this.$apollo.query({
				query: ALL_POST,
				variables: { id },
			});
			/* if data is not exist */
			this.user = result.data.user[0];
			if (this.user === undefined) {
				localStorage.clear();
				this.$router.push({ name: "Login" });
			}
			this.items = posts.data.post;
			this.user.star =
				this.user.UserHaveManyStars_aggregate.aggregate.avg.value;
		} else {
			/* id doesn't exist */
			localStorage.clear();
			this.$router.push({ name: "Login" });
		}
	},
	methods: {
		destroy(id) {
			/* notification delete */
			this.$swal({
				title: "Apakah kamu yakin ?",
				text: "Kamu tidak akan bisa mengembalikan ini !",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#083d77",
				cancelButtonColor: "#d33",
				confirmButtonText: "Ya, Hapus",
			}).then(async (result) => {
				if (result.isConfirmed) {
					/* do deletion */
					await this.$apollo.mutate({
						mutation: DELETE_POST,
						variables: { id },
					});
					const post_index = this.items
						.map((value) => {
							return value.id;
						})
						.indexOf(id);
					this.items.splice(post_index, 1);
					console.log(post_index);
					this.$swal({
						position: "inherit",
						title: "Terhapus",
						text: "Data berhasil dihapus",
						icon: "success",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
		},
		async update() {
			/* save attributes */
			const id = this.$store.state.data.name.id;
			const photo = null;
			const name = this.user.name;
			const location = this.user.location;
			const status = this.user.status;
			const updated = getDate();
			/* update profile */
			await this.$apollo.mutate({
				mutation: UPDATE_USER,
				variables: { id, photo, name, location, status, updated },
			});
			/* refetch new data */
			const result = await this.$apollo.query({
				query: DETAIL_USER,
				variables: { id },
			});
			this.user = result.data.user[0];
			this.$swal({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				icon: "success",
				title: "Data berhasil diubah",
			});
		},
	},
};
</script>
<style scoped>
.wrapper {
	max-height: 29.6rem;
	overflow-y: auto;
	display: block;
}

.text-justify {
	text-align: justify !important;
}

.table > :not(:first-child) {
	border-top: 2px solid #083d77 !important;
}

/deep/ .my-modal {
	font-family: "Roboto";
	color: #083d77 !important;
}

/deep/ .my-modal h5 {
	font-weight: bold;
	font-family: "Roboto";
	color: #083d77 !important;
}

/deep/ .my-modal input,
input::-webkit-input-placeholder {
	font-family: "Roboto";
	color: #031b4e !important;
	font-size: 15px;
	opacity: 0.75;
	line-height: 2;
}

/deep/ .my-modal #my-textarea::-webkit-input-placeholder {
	font-family: "Roboto";
	color: #031b4e !important;
	font-size: 15px;
	opacity: 0.6;
	line-height: 2;
}

.form-control {
	font-family: "Roboto";
	font-size: 14px;
	opacity: 0.75;
	color: #031b4e !important;
}

/deep/ .my-modal button {
	border: 1px solid #083d77;
	background: #083d77;
}
</style>
