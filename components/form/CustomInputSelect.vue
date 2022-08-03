<template>
  <select :name="name" @change="onValueChange">
    <option v-for="(val, key) in options" :key="key" :value="val.value">
      {{ val.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomInputSelect',
  props: {
    onChange: { type: Function, required: false, default: undefined },
    value: { type: String || Number, required: true },
    name: { type: String, required: false, default: '' },
    options: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      error: false,
      localValue: this.value,
    }
  },
  methods: {
    onValueChange(e) {
      this.onChange && this.onChange({ name: this.name, value: e.target.value })
    },
  },
}
</script>

<style lang="scss" scoped></style>
