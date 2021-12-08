<template>
  <my-header />
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-7">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    "my-header": Header,
  },
  created() {
    this.$store.dispatch("getArt");
    this.$store.dispatch("tryAutoLogin");
  },
};
</script>
