<template>
  <div id="app">

    <!-- HeadApp -->
    <!-- start -->
    <head-app />
    <!-- end -->

    <!-- HomeBage -->
    <!-- start -->
    <home-page />
    <!-- end -->

  </div>
</template>

<script>
//== import components ==//
//== start ==//
import HeadApp from './components/HeadApp.vue'
import HomePage from './components/HomePage.vue'
//== end ==//

//== import jquery ==//
//== start ==//
import $ from 'jquery';
//== end ==//

export default {
  components: { HeadApp, HomePage },
  name: 'App',
  mounted(){
    $('html').niceScroll({
      mousescrollstep: 100,
      cursorborder:"none",
      cursorcolor: "var(--input)", 
		});
  }
}
</script>

<style lang="scss">

</style>
