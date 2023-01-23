<template>
  <nav>
    <div>
      <div>ChatApp</div>
      <div>Home</div>
      <div>Chat</div>
    </div>
  </nav>
</template>

<script setup lang="ts">

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
  justify-content: space-between;

  > * {
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
}

</style>
