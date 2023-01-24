<template>
  <nav>
    <div @click="pushRoute({ name: 'home' })">ChatApp</div>
    <div @click="pushRoute({ name: 'home' })">Home</div>
    <div @click="pushRoute({ name: 'chat' })">Chat</div>
  </nav>
</template>

<script setup lang="ts">
import {RouteLocationRaw, useRouter} from "vue-router";

const router = useRouter()

function pushRoute(route: RouteLocationRaw) {
  router.push(route); // https://router.vuejs.org/guide/essentials/navigation.html
}
</script>

<style lang="scss" scoped>
nav {
  user-select: none;
  background: #222;
  color: white;

  padding: 18px;
  font-size: 18px;

  display: flex;
  flex-direction: row;

  :first-child {
    font-weight: bold;
    margin-right: 2em;
  }

  > div {
    margin-right: 30px;
    font-weight: 500;
    cursor: pointer;

    &:not(:first-child) {
      &::after {
        content: "";
        margin-left: 1.4em;
        height: 2px;
        background-color: white;
        display: block;

        width: 0;
        transition: width 300ms;
      }

      &:not(:nth-child(2)):hover::after {
        width: calc(100% - 1.4em);
      }

      &:nth-child(2) {
        &:hover::after {
          width: 100%;
        }

        &::after {
          margin-left: 0;
        }
      }


      &:not(:nth-child(2))::before {
        margin-right: 1em;
        content: '/';
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

</style>
