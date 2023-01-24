<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar/>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "vars";

main {
  width: 100vw;
  height: 100%;
  justify-content: center;
  display: flex;

  > .container {
    width: $container-width;
    height: $content-height;
  }
}

</style>
