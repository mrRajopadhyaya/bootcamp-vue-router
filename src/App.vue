<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/start">Start</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
    </nav>
  </header>

  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  font-size: 18px;
  padding: 10px;
  background-color: #5fc1df;
}

.navbar a {
  margin: 10px;
  text-decoration: none;
  color: black;
}
.main {
  margin: 20px;
}
</style>
