<template>
  <input
    :id="name"
    :type="type"
    :name="name"
    :value="localValue"
    @change="onValueChange"
  />
</template>

<script>
export default {
  name: 'CustomInputText',
  props: {
    onChange: { type: Function, required: false, default: undefined },
    value: { type: String || Boolean, required: true },
    name: { type: String, required: false, default: '' },
    type: { type: String, required: true },
  },
  data() {
    return {
      error: false,
      defaultValue: this.value,
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
