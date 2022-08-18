<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import axios from "axios";

const users = ref();

onMounted(async () => {
  const response = await axios.get("http://localhost:3000/users");
  users.value = response.data;
});
</script>

<template>
  <div class="about">
    <h1>Users list</h1>
    <div v-for="(user, index) in users" :key="index" class="user-wrapper">
      <RouterLink class="user-name" :to="`users/${user.id}`">
        {{ user.name }}
      </RouterLink>
    </div>
    <router-view />
  </div>
</template>

<style>
.user-wrapper {
  margin-top: 20px;
}
.user-name {
  font-size: 18px;
}
</style>
