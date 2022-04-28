<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view :key="$route.path"></router-view>
</template>

<script>
export default {
  name:'App'
}
</script>

<style scoped>

</style>