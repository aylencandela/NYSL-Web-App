<template>
  <div>
    <b-button v-b-modal="'modal-'+modalId" class="btn-green m-3">{{location.name}}</b-button>

    <b-modal 
      :id="'modal-'+modalId" 
      centered
      :title="location.name"
    >
      <p>{{location.address}}</p>
      <iframe
        :src="location.map"
        width="460"
        height="300"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    location: Object,
    modalId: Number
  }
};
</script>

<style lang="scss" scoped>

.btn-green {
  color: #fff;
  background-color: #50c35d;
  border-color: #50c35d;
  padding: 15px;
  border-radius: 25px;
}
</style>