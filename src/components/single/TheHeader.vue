<template>
  <div class="the-header">
    <h1 class="the-header__title">Игра "Бык или Корова"</h1>

  </div>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped lang="scss">
  .the-header {
    height: 100px;
    width: 100vw;
    background: #ff7204;
    display: flex;
    justify-content: center;
    align-items: center;
    &__title {
      color: white;
      font-size: 28px;
      letter-spacing: 3px;
      font-weight: 100;
    }
  }
</style>
