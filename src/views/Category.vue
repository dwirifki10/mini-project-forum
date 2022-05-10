<template>
	<div class="container-fluid">
		<Navbar />
		<List />
		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/HomeContainer/Navbar.vue";
import List from "../components/CategoryContainer/List.vue";
import Footer from "../components/HomeContainer/Footer.vue";

export default {
	name: "Category",
	components: { Navbar, List, Footer },
};
</script>
