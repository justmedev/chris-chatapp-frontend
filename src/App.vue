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
  background: black;

  > .container {
    @media only screen and (max-width: $screen-small) {
      max-width: $container-width-full;
      width: $container-width-full;
    }

    width: $container-width-standart;
    max-width: $container-width-standart;
    height: $content-height;

    text-overflow: ellipsis;
    overflow-x: hidden;
  }
}

</style>
