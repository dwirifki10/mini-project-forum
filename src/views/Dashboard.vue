<template>
	<div class="container-fluid">
		<Navbar />
		<Mini />
		<Article />
		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/HomeContainer/Navbar.vue";
import Footer from "../components/HomeContainer/Footer.vue";
import Mini from "../components/DashboardContainer/Mini.vue";
import Article from "../components/DashboardContainer/Article.vue";

export default {
	name: "Dashboard",
	components: { Mini, Navbar, Footer, Article },
};
</script>
