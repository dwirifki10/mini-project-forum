<template>
  <div class="container-fluid g-0">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}
.fs-25 {
  font-size: 15px;
}
.fs-30 {
  font-size: 18px;
}
.font-base {
  font-family: "Roboto" !important;
}
.bg-base {
  background: #083d77 !important;
}
.color-title {
  color: #083d77 !important;
}
.color-base {
  color: #031b4e !important;
}
.pd-top {
  padding-top: 3em;
}
</style>
