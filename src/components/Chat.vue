<template>
  <div class="container">
    <div>
      <div class="topbar">
        <div class="name">{{ props.room.name }}</div>
        <div class="online">Online: {{ props.room.online.map((r) => r.name).join(", ") }}</div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { Room } from "../types/room";

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

</style>
