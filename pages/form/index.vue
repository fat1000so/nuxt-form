<template>
  <div class="container">
    <div>User: fatso1000; Password: abc123</div>
    <form action="">
      <div>
        <label for="username">Username</label>
        <FormCustomInputText
          type="text"
          name="username"
          :onChange="onInputChange"
          :value="formValues.username"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <FormCustomInputText
          type="password"
          name="password"
          :onChange="onInputChange"
          :value="formValues.password"
        />
      </div>
      <div>
        <button type="button" @click="onSubmit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormPage',
  data() {
    return {
      formValues: { password: '', username: '' },
    }
  },
  methods: {
    onInputChange(e) {
      this.formValues = { ...this.formValues, [e.name]: e.value }
    },
    onSubmit() {
      if (
        this.formValues.username === 'fatso1000' &&
        this.formValues.password === 'abc123'
      )
        this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 80px;
  display: flex;
  form {
    margin: auto;
    row-gap: 20px;
    div {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
