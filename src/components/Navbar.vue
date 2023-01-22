<template>
  <nav>
    <a>ChatApp</a>
    <a>Home</a>
    <a>Chat</a>
    <a>Settings</a>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
nav {
  font-weight: 500;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  background: #151c1e;
  color: #fff;
  padding: 20px;

  >a{
    cursor:pointer;
    transition: all 200ms;

    &:hover {
      color: #646cff;
    }
  }
}
</style>
