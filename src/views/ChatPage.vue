<template style="height: 100%">
  <div class="main-container">
    <div class="sidebar">
      <div class="account-container-outer">
        <div class="account-container">
          <img src="../assets/placeholder.jpg" alt="account icon">
          <span>Justme</span>
        </div>

        <button @click="logout">
          Logout
        </button>
      </div>
      <div class="sidebar-inner">
        <div>
          <RoomTile :room="getActiveRoom()" active />
          <RoomTile v-for="room in rooms.filter(r => !r.active)" :key="room.id" :room="room" />

          <RoomTile :room="null" title="Create Room" subtitle="Create a new room" icon="plus" />
        </div>
      </div>
    </div>

    <Chat :room="getActiveRoom()" />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import RoomTile from '@/components/RoomTile.vue';
import { Room } from '@/types/room';
import Chat from '@/components/Chat.vue';
import feathersClient from "@/feathers-client";
import { useRouter } from "vue-router";
import { Route } from '@/router';

const router = useRouter();

const rooms: Ref<Room[]> = ref([
  {
    active: false,
    name: '123',
    id: 1,
    members: 1,
    online: [
      {
        name: 'Ilja',
        uuid: '1',
      },
      {
        name: 'Jakob',
        uuid: '2',
      },
      {
        name: 'Chris',
        uuid: '3',
      },
    ],
  },
  {
    active: false,
    name: 'chris',
    id: 2,
    members: 5,
    online: [],
  },
  {
    active: true,
    name: 'Room',
    id: 3,
    members: 20,
    online: [
      {
        name: 'Usman',
        uuid: '',
      },
      {
        name: 'Busman',
        uuid: '',
      },
      {
        name: 'Mussman',
        uuid: '',
      },
      {
        name: 'Kussmann',
        uuid: '',
      },
      {
        name: 'Lustmann',
        uuid: '',
      },
      {
        name: 'Coolmann',
        uuid: '',
      },
      {
        name: 'Flussmann',
        uuid: '',
      },

    ],
  },
]);

async function logout() {
  await feathersClient.logout();
  await router.push({
    name: Route.HOME,
  });
}

function getActiveRoom() {
  return rooms.value.filter((r) => r.active)[0];
}
</script>

<style lang="scss" scoped>
@import "../vars";

.account-container-outer {
  background: $gray--3;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

.sidebar {
  width: fit-content;
  background: $gray--2;
  height: 100%;

  > .sidebar-inner {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 62px);
  }
}

.vertical-layout {
  display: flex;
  flex-direction: column;
}

.main-container {
  display: flex;
  height: calc(100% - 56px);
  width: 100%;
}
</style>
