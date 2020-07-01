<template>
  <div class="container-registration">
    <AppInput v-model="dataRegistration.name" :placeholder="inputConfig.name.placeholder"/>
    <AppInput v-model="dataRegistration.password" :placeholder="inputConfig.password.placeholder"/>
    <AppInput v-model="dataRegistration.mail" :placeholder="inputConfig.mail.placeholder"/>
    <slot name="button">
      <AppButton :selected="selected" :buttons="buttons" @click="selectedRegistration" class="container-registration__buttons"/>
    </slot>
  </div>
</template>

<script>
import AppInput from '../common/AppInput'
import AppButton from '../common/AppButton'
export default {
  name: 'TheRegistration',
  props: {
    dataRegistration: {
      type: Object
    },
    isChangeUser: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppInput,
    AppButton
  },
  data () {
    return {
      selected: {},
      buttons: [
        {
          key: 'registration',
          val: 'Зарегистрироваться',
          class: 'button-registration'
        }
      ],
      inputConfig: {
        name: {
          placeholder: 'Введите имя',
          title: ''
        },
        password: {
          placeholder: 'Введите пароль',
          title: ''
        },
        mail: {
          placeholder: 'Введите почту',
          title: ''
        }
      }
    }
  },
  methods: {
    selectedRegistration (value) {
      this.selected = value
      if (!this.isChangeUser) {
        this.$emit('selectedRegistration', this.dataRegistration)
      } else {
        this.$emit('changeUser', this.dataRegistration)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container-registration{
  &__buttons {
    margin-top: 30px;
  }
}
</style>
