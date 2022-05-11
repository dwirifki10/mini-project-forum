<template>
  <div class="container-fluid">
    <Navbar />
    <Header />
    <Service />
    <FAQ />
    <Popular />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/HomeContainer/Navbar.vue";
import Header from "../components/HomeContainer/Header.vue";
import Service from "../components/HomeContainer/Service.vue";
import FAQ from "../components/HomeContainer/FAQ.vue";
import Popular from "../components/HomeContainer/Popular.vue";
import Footer from "../components/HomeContainer/Footer.vue";

export default {
  name: "Home",
  components: { Navbar, Header, Service, FAQ, Popular, Footer },
};
</script>
