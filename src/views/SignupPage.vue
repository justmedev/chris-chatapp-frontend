<template>
  <div class="container">
    <div class="card">
      <div class="title">
        Signup
      </div>
      <div class="subtitle">
        Already have an account? Login
        <router-link :to="{ name: 'login' }" style="color: black; text-decoration: underline">
          here
        </router-link>
        .
      </div>

      <label for="username">Username</label>
      <input id="username" ref="username" type="text">

      <label for="email">Email</label>
      <input id="email" ref="email" type="text">

      <label for="password">Password</label>
      <input id="password" ref="password" type="password">

      <button @click="signup()">
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { Ref, ref } from 'vue';
import feathersClient, { JWTPayload } from '../feathers-client';

const username: Ref<HTMLInputElement | null> = ref(null);
const email: Ref<HTMLInputElement | null> = ref(null);
const password: Ref<HTMLInputElement | null> = ref(null);

async function signup() {
  await feathersClient.service('users').create({
    username: username.value?.value,
    email: email.value?.value,
    password: password.value?.value,
  } as JWTPayload).then(() => {
    console.log('Account created!');
  }).catch((e) => console.error('err: ', e));
}
</script>

<style scoped lang="scss">
@import "../vars.scss";

.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > .card {
    border-radius: 10px;
    border: 1px solid #000;
    background: #fff;
    padding: 1.7em;
    width: 400px;

    display: flex;
    flex-direction: column;

    .title {
      font-size: 20px;
      color: $gray;
      font-weight: 600;
    }

    .subtitle {
      font-size: 16px;
      color: $gray;
    }

    label {
      margin-top: 1em;
    }

    input {
      border: 1px solid #000;
      border-radius: 5px;
      padding: 4px 6px;
    }

    button {
      margin-top: 1em;
      padding: 8px;
      border: none;
      border-radius: 5px;
      background: #17a9a9;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background: #169393;
      }
    }
  }
}
</style>
