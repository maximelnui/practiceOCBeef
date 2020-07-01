<template>
  <div class="container-login">
    <AppInput v-model="dataLogin.mail" :placeholder="inputConfig.mail.placeholder"/>
    <AppInput v-model="dataLogin.password" :placeholder="inputConfig.password.placeholder" type="password"/>
    <AppButton :selected="selected" :buttons="buttons" @click="selectedLogin" class="container-login__buttons"/>
  </div>
</template>

<script>
import AppInput from '../common/AppInput'
import AppButton from '../common/AppButton'
export default {
  name: 'TheLogin',
  components: {
    AppInput,
    AppButton
  },
  data () {
    return {
      dataLogin: {
        mail: '',
        password: ''
      },
      selected: {},
      buttons: [
        {
          val: 'Авторизироваться',
          key: 'authorization',
          class: 'button-auth'
        }
      ],
      inputConfig: {
        mail: {
          placeholder: 'Введите почту',
          title: ''
        },
        password: {
          placeholder: 'Введите пароль',
          title: ''
        }
      }
    }
  },
  methods: {
    selectedLogin (value) {
      this.selected = value
      this.$emit('selectedLogin', this.dataLogin)
    }
  }
}
</script>

<style scoped lang="scss">
.container-login {
  &__buttons {
    margin-top: 30px;
  }
}
</style>
