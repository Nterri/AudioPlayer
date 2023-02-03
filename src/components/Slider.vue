<template>
  <vue3-slider v-model="value" />
</template>

<script>
import slider from "vue3-slider"
export default {
  name: 'slider-custom',
  components: {
    "vue3-slider": slider
  },
  props: {
    value: {
      required: true
    },
  },
}
</script>

<style scoped lang="scss">
</style>