<template>
  <div class="container">
    <button>Create new Room</button>
    <div class="input-container">
      <input type="text">
      <button>Send</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
@import "../vars";

.container {
  display: flex;
  height: 3.5em;
}

button {
  width: 16.5em;
  font-size: 15px;
  background: $gray;
  color: $gray-1;
  height: 100%;
  border: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: $gray-1;
    color: $gray--2;
  }
}

.input-container {
  flex-grow: 1;
  display: flex;
  column-gap: .5em;
  background: $gray;
  padding: 10px;

  > input {
    width: 100%;
    background-color: $gray--1;
    border: none;
    outline: none;
    color: $gray-2;
    font-weight: 550;
    padding: 0 5px;
    border-radius: 5px;

    &:focus {
      background-color: lighten($gray--1, 5);
    }
  }

  > button {
    background-color: $gray--2;
    border-radius: 5px;
    border: none;
    color: $gray-2;
    font-weight: 550;
    padding: 7px 10px;
    width: 5em;
    transition: background-color 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: lighten($gray--1, 5);

    }
  }
}
</style>
