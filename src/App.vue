<template>
  <div class="app">
    <TheHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from "./components/single/TheHeader";
  export default {
    name: 'App',
    components: {
      TheHeader
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">

</style>
