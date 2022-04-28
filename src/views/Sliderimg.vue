<template>
<div class="slider_img">
    <h2 class="head_slider">Slieder Image</h2>    
      <div v-for="i in [currentIndex]" :key="i">
        <img class="imgII" :src="currentImg" />
      </div>   
    <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a> -->
</div>
</template>

<script>
export default {
    name:'Sliderimg',
    data() {
    return {
      images: [
        "/assets/banner/b1.jpg",
        "/assets/banner/b2.jpg",
        "/assets/banner/b3.jpg",
        "/assets/banner/bs1.png",
        "/assets/banner/bs2.png",
        "/assets/banner/bs3.png",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
}
</script>

<style scoped>
 .slider_img{
     margin: auto;
     padding: 30px;
     align-content: center;
 }
 .head_slider{
     margin-left: 40rem;
     align-items: center;
     font-size: 2rem;
 }
 .imgII{
     max-width: 100%;
     height: auto;
 }

</style>