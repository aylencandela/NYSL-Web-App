<template>
  <div class="carrousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- Por qué no reconoce la url? => la toma literal, so hay que usar un require-->
          <img class="d-block w-100" :src="require('../assets/' + fstimg + '.jpg')" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="require('../assets/' + sndimg + '.jpg')" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="require('../assets/' + trdimg + '.jpg')" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="require('../assets/' + fthimg + '.jpg')" alt="Fourth slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>  
</div>
</template>

<script>
export default {
    name: 'Carrousel',
    props: {
      fstimg: String,
      sndimg: String,
      trdimg: String,
      fthimg: String
    }
}
</script>

<style lang="scss" scoped>
  .carousel, .carousel-inner img {
    height: 45vh;
    // opacity: 90%;
  }
</style>