<template>
  <v-app>
    <v-main>
      <MainContainer>
        <router-view/>
      </MainContainer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MainContainer from "./components/MainContainer.vue";
</script>

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
