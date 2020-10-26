<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://i.ytimg.com/vi/hTia6xmdFTc/maxresdefault.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://www.gannett-cdn.com/-mm-/d23ff8a937abb120626ad7f81b094062320079e0/c=0-31-2109-1222/local/-/media/2017/09/11/TXGroup/SanAngelo/636407683622540790-0918-SALO-RiverFest02.JPG?width=2109&height=1191&fit=crop&format=pjpg&auto=webp"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROfjzZV2Us7m8EL1_xc2FoP3q7bUFcz2l0Hg&usqp=CAU"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Fourth Slide"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGJjOFIgO6ennlmPEEFQvRVjbCV0m6Xsc1gQ&usqp=CAU"
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
      fthimg: String
    }
  }
</script>
