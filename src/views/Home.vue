<template>
  <div class="container-fluid">
    <Navbar />
    <Header />
    <Service />
    <FAQ />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Service from "@/components/Service.vue";
import FAQ from "@/components/FAQ.vue";

export default {
  name: "Home",
  components: { Navbar, Header, Service, FAQ },
};
</script>
