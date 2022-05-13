<template>
	<nav
		class="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
		v-bind:class="{ navbarOpen: show }"
	>
		<router-link class="navbar-brand pt-3 ps-4" :to="{ name: 'Home' }">
			<h3>Diskusiku</h3>
		</router-link>
		<div class="pe-3">
			<button
				class="navbar-toggler shadow-sm"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				@click.stop="toggleNavbar()"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
		<div
			class="collapse navbar-collapse justify-content-end pe-5"
			id="navbarSupportedContent"
			v-bind:class="{ show: show }"
		>
			<ul class="navbar-nav mr-auto fw-bold fs-25 ps-4">
				<li class="nav-item pe-3">
					<router-link
						class="nav-link"
						:to="{ name: 'Category', params: { id: '1' } }"
					>
						Entertainment
					</router-link>
				</li>
				<li class="nav-item pe-3">
					<router-link
						class="nav-link"
						:to="{ name: 'Category', params: { id: '2' } }"
					>
						Arts
					</router-link>
				</li>
				<li class="nav-item pe-3">
					<router-link
						class="nav-link"
						:to="{ name: 'Category', params: { id: '3' } }"
					>
						Technology
					</router-link>
				</li>
				<li class="nav-item pe-3">
					<router-link
						class="nav-link"
						:to="{ name: 'Category', params: { id: '4' } }"
					>
						Sport
					</router-link>
				</li>
				<li class="nav-item pe-3">
					<router-link
						class="nav-link"
						:to="{ name: 'Category', params: { id: '5' } }"
					>
						Education
					</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{ name: 'Login' }" v-if="name == ''">
						<button
							class="btn bg-base pe-4 ps-4 font-base text-decoration-none text-white shadow rounded-pill"
						>
							Sign In
						</button>
					</router-link>
					<div>
						<b-dropdown
							id="dropdown-1"
							:text="name"
							toggle-class="dropdown fw-bold ps-0"
							menu-class="p-auto"
							v-if="name"
						>
							<b-dropdown-item @click="redirect">
								Dashboard
							</b-dropdown-item>
							<b-dropdown-item @click="logout">
								Logout
							</b-dropdown-item>
						</b-dropdown>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			show: false,
			name: "",
		};
	},
	mounted() {
		const name = this.$store.state.data.name.name;
		if (name) this.name = "Hai " + name.split(" ")[0] + " ";
	},
	methods: {
		toggleNavbar() {
			this.show = !this.show;
		},
		redirect() {
			if (this.$route.name !== "Dashboard")
				this.$router.push({ name: "Dashboard" });
		},
		logout() {
			localStorage.clear();
			window.location.reload();
		},
	},
};
</script>

<style>
@font-face {
	font-family: "Satisfy";
	src: local("Satisfy"),
		url(../../assets/fonts/Satisfy-Regular.ttf) format("truetype");
}
.navbar-brand {
	font-family: "Satisfy" !important;
	color: #083d77 !important;
}
.nav-link {
	font-family: "Roboto" !important;
	color: #083d77 !important;
}
.act {
	text-decoration: none;
	color: #6c757d !important;
}
.dropdown {
	font-family: "Roboto" !important;
	border-color: #ffff !important;
	background: #ffff !important;
	color: #083d77 !important;
}
</style>
