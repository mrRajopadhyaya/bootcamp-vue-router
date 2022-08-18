<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const user = ref();

onMounted(async () => {
  const response = await axios.get(
    `http://localhost:3000/users/${route.params.id}`
  );
  user.value = response.data;
});
</script>

<template>
  <h2>user profile view</h2>
  <div class="user-detail">
    <div class="user-field">
      <div class="label">Id:</div>
      <div class="value">{{ user?.id }}</div>
    </div>
    <div class="user-field">
      <div class="label">Name:</div>
      <div class="value">{{ user?.name }}</div>
    </div>
    <div class="user-field">
      <div class="label">Address:</div>
      <div class="value">{{ user?.address }}</div>
    </div>
  </div>
</template>

<style scoped>
.user-field {
  display: flex;
  font-size: 18px;
}
.label {
  margin-right: 10px;
  font-weight: 700;
}
</style>
