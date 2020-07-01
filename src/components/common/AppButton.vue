<template>
  <div class="wrapper-buttons" :class="{
    'wrapper-buttons__vertical' : direction === 'vertical',
    'wrapper-buttons__between' : isBetween
    }">
    <button v-for="(button, index) in buttons"
            :key="index"
            class="button_default"
            :class="[{'button-active': (selected === button || (selected.key === button.key)) && button.class !== 'button-auth'}, button.class]"
            @click="choosedButton(button)">
      {{button.val}}
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    buttons: {
      type: Array,
      require: true
    },
    classProp: {
      type: String,
      require: false
    },
    selected: {
      require: true
    },
    direction: {
      type: String,
      default: '',
      require: false
    },
    isBetween: {
      type: Boolean,
      default: false
    }
  },
  date () {
    return {
      newSelected: {}
    }
  },
  methods: {
    choosedButton (button) {
      this.newSelected = this.buttons.find(item => item.key === button.key)
      this.$emit('click', this.newSelected)
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper-buttons {
    display: flex;
    &__vertical {
      flex-direction: column;
    }
    &__between {
      justify-content: space-between;
    }
  }
  .button_default {
    min-width: 180px;
    height: 40px;
    margin-right: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #0071BE;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    padding: 5px;
  }
  .button-active {
    font-size: 22px;
  }
  .button-auth {
    border: 1px solid black;
    border-radius: 3px;
    &:hover {
      color: white;
      background: #ff7204;
      border: 1px solid #ff7204;
      transition: 0.3s;
    }
  }
</style>
