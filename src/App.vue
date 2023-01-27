<template>
  <Navbar />
  <main>
    <div class="container" :class="{ center: route.name === 'chat' }">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';

const route = useRoute();
</script>

<style scoped lang="scss">
@import "vars";

main {
  width: 100vw;
  height: 100%;
  justify-content: center;
  display: flex;

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

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
