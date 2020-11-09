<template>
  <div class="register">
    <Nav viewname="register"></Nav>
    <div class="mt-4 pb-4">
      <b-container>
        <Form></Form>
      </b-container>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import Form from "../components/form.vue";

export default {
  name: "Register",
  components: {
    Nav,
    Form,
  },
};
</script>

<style lang="scss" scoped>
</style>