<template>
	<div class="container-fluid">
		<Navbar />
		<Discussion />
		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/HomeContainer/Navbar.vue";
import Footer from "../components/HomeContainer/Footer.vue";
import Discussion from "../components/DetailContainer/Discussion.vue";

export default {
	name: "Detail",
	components: { Navbar, Footer, Discussion },
};
</script>
