<template>
  <div class="page-authorization">
    <TheAuthorization class="page-authorization__inner"/>
  </div>
</template>

<script>
  import TheAuthorization from "../components/authorization/TheAuthorization";
  export default {
    name: "PageAuthorization",
    components: {
      TheAuthorization
    }
  }
</script>

<style scoped lang="scss">
.page-authorization {
  display: flex;
  width: 100vw;
  justify-content: center;
  &__inner {
    margin-top: 20px;
  }
}
</style>
