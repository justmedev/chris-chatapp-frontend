<template style="height: 100%">
  <div class="topbar">
    <div class="account-container">
      <img src="../assets/placeholder.jpg" alt="account icon">
      <span>
        Justme
      </span>
      <button @click="logout">Logout</button>
    </div>
  </div>

  <div class="sidebar">
    <RoomTile :room="rooms[1]" active></RoomTile>
    <RoomTile v-for="room in rooms" :key="room.id" :room="room"/>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";
import RoomTile from "../components/RoomTile.vue";
import {Room} from "@/types/room";

const rooms: Ref<Room[]> = ref([
  {
    name: '123',
    id: 1,
    members: 1,
  },
  {
    name: 'chris',
    id: 2,
    members: 5,
  }
]);

function logout() {
  // TODO: Actually logout and send user to home without token
  console.log("Abmelden");
}

</script>

<style lang="scss" scoped>
@import "../vars";

.topbar {
  background: $gray--3;
  color: white;
  padding: 10px;

  > .account-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;

    > img {
      height: 2.5em;
      width: 2.5em;
      object-fit: cover;
      border-radius: 100px;
    }

    > span {
      font-weight: 500;
    }

    > button {
      cursor: pointer;
      font-size: 15px;
      margin-left: 10px;
      background: $gray--1;
      border-radius: 5px;
      border: none;
      padding: 8px;
      color: $gray-2;
      transition: all 200ms ease-in-out;

      &:hover {
        background: $gray-2;
        color: $gray--1;
      }
    }
  }
}

.sidebar {
  width: fit-content;
  background: $gray--2;
  height: 100%;
}
</style>
