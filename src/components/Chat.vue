<template>
  <div class="container">
    <div>
      <div class="topbar">
        <div class="name">
          {{ props.room.name }}
        </div>
        <div class="online">
          Online: {{ props.room.online.map((r) => r.name).join(", ") }}
        </div>
      </div>
    </div>

    <div class="input-container">
      <label for="inp" style="display: none">Message Input</label>
      <input id="inp" type="text">
      <button>Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Room } from '../types/room';

const props = defineProps<{
  room: Room;
}>();
</script>

<style scoped lang="scss">
@import "../vars";

.topbar {
  background: $gray--3;
  padding: 10px;
  color: $gray-2;

  > .name {
    color: white;
  }

  > .online {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: -8px;
    font-size: 14px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  background: $gray--1;
}

.input-container {
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
