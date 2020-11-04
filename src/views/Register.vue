<template>
  <div class="register">
    <Navbar viewname="register"></Navbar>
    <div class="mt-4 pb-4">
      <b-container>
        <Form></Form>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Form from "../components/form.vue";

export default {
  name: 'Register',
  components: {
    Navbar,
    Form
  }
}
</script>

<style lang="scss" scoped>

</style>