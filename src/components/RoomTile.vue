<template>
  <div class="room" :class="{ 'active': active }">
    <div>
      <div class="name">{{ title }}</div>
      <div class="members">
        {{ getSubtitleFormatted(subtitle, "Member", "Members") }}
      </div>
    </div>


    <img :src="`/icons/${icon}.svg`" alt="arrow-right-icon" class="icon">
  </div>
</template>

<script lang="ts" setup>
import {Room} from "../types/room";
import {ref} from "vue";
import {Icons} from "../types/generic";

const props = withDefaults(defineProps<{
  title?: string,
  subtitle?: string,
  icon?: Icons,

  room: Room | null,
  active: boolean,
}>(), {
  active: false,
  icon: 'arrow-right',
});

const title = ref(props.room?.name ?? props.title ?? "ERR");
const subtitle = ref(props.room?.members ?? props.subtitle ?? "ERR");

function getSubtitleFormatted(subtitle: string | number, singular: string, plural: string) {
  if (typeof subtitle == "number") return subtitle <= 1 ? `${subtitle} ${singular}` : `${subtitle} ${plural}`;
  return subtitle;
}
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
