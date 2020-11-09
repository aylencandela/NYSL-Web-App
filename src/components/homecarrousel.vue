<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-height="500"
    >
      <b-carousel-slide
        caption="First slide"
        :img-src="require('../assets/' + fstimg + '.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        :img-src="require('../assets/' + sndimg + '.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        :img-src="require('../assets/' + trdimg + '.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Fourth Slide"
        :img-src="require('../assets/' + fthimg + '.jpg')"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carrousel",
  props: {
    fstimg: String,
    sndimg: String,
    trdimg: String,
    fthimg: String,
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  height: 45vh !important;
  img {
    &.img-fluid {
      height: 45vh !important;
    }
  }
}

.img-fluid {
  display: inline;
  height: 45vh !important;
}
</style>
