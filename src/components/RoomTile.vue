<template>
  <div class="room" :class="{ 'active': active }">
    <div>
      <div class="name">{{ props.room.name }}</div>
      <div class="members">
        {{ props.room.members }} {{ props.room.members <= 1 ? "Member" : "Members" }}
      </div>
    </div>


    <img src="../assets/arrow-right.svg" alt="arrow-right-icon" class="icon">
  </div>
</template>

<script lang="ts" setup>
import {Room} from "../types/room";

const props = withDefaults(defineProps<{
  room: Room,
  active: boolean,
}>(), {
  active: false,
});
</script>

<style scoped lang="scss">
@import "../vars";

.active {
  background: $gray !important;

  &:hover {
    background: $gray--1 !important;
  }
}

.room {
  cursor: pointer;
  width: 13rem;
  border-bottom: 3px solid $gray;
  background: $gray--1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 200ms ease-in-out;

  .name {
    font-size: 18px;
    font-weight: 550;
    color: $gray-2;
  }

  .members {
    color: $gray-1;
  }

  .icon {
    height: .9rem;
    width: auto;
    object-fit: cover;
  }

  &:hover {
    background-color: $gray
  }
}
</style>
