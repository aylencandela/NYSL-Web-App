<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
    >
      <b-carousel-slide
        caption="August 4"
        text="NYSL Fundraiser"
        :img-src="require('../assets/' + fstimg + '.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="August 6"
        text="Season Kick-Off: Meet the Teams"
        :img-src="require('../assets/' + sndimg + '.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="September 1"
        text="First Game of the Season (Check Schedule for details)"
        :img-src="require('../assets/' + trdimg + '.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="More events coming!"
        :img-src="require('../assets/' + fthimg + '.jpg')"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carrousel2",
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
  height: 90vh !important;
  img {
    &.img-fluid {
      height: 100vh !important;
    }
  }
}
</style>
