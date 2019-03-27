<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import tab from "./components/tab.vue";
export default {
  name: "App",
  components: {
    tab
  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
  }
  input {
    outline: none;
    background: transparent;
    border: none;
    outline: medium;
    border:1px solid #999999;
  }

  *:focus {
    outline: none;
    background-color: transparent;
  }
</style>
