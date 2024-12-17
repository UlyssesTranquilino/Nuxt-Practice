<template>
  <div>
    <h1>About</h1>
    <p>lorem ipsum ipsum dolor sit amet conescue</p>

    <div>HELLO DATA DATA {{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped></style>
