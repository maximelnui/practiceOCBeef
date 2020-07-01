<template>
  <div class="the-authorization">
    <AppButton :buttons="valueAuthAndReg" :selected="selected" @click="selected = $event" class="the-authorization__buttons"/>
    <TheLogin v-if="selected.key === 'entry' || !selected.key" @selectedLogin="entryUser"/>
    <TheRegistration v-else-if="selected.key === 'registration'" :dataRegistration="dataRegistration" @selectedRegistration="registrationUser"/>
  </div>
</template>

<script>
import AppButton from '../common/AppButton'
import TheLogin from './TheLogin'
import TheRegistration from './TheRegistration'
export default {
  components: {
    AppButton,
    TheLogin,
    TheRegistration
  },
  data () {
    return {
      dataRegistration: {
        name: '',
        password: '',
        mail: ''
      },
      valueAuthAndReg: [
        { val: 'Войти', key: 'entry' },
        { val: 'Регистрация', key: 'registration' }
      ],
      selected: {
        key: 'entry',
        val: 'Войти'
      },
      currentUser: {}
    }
  },
  methods: {
    entryUser (value) {
      this.$store.dispatch('auth/userAuthorization', value).then(() => {
        this.$store.dispatch('auth/getCurrentUser').then(response => this.currentUser = response)
      })
    },
    registrationUser (value) {
      this.$store.dispatch('auth/userRegistration', value)
    }
  }
}
</script>

<style scoped lang="scss">
  .the-authorization {
    width: 100%;
    max-width: 500px;
    min-height: 280px;
    background: white;
    padding: 15px;
    &__buttons {
      margin-bottom: 30px;
    }
  }
</style>
