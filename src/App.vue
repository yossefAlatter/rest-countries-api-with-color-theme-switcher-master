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
    setInterval(()=>{
      $(':root').niceScroll({
      mousescrollstep: 100,
      cursorborder:"none",
      cursorcolor: "var(--input)", 
      background: "var(--elements)",
      cursorwidth: 7,
      cursorborderradius: "none",
      // cursorfixedheight: 200,
      enablekeyboard: true,
      autohidemode: false,
      cursorborderraduis: 0,
      boxzoom: true,

    });
    $(":root").getNiceScroll().resize();
    })
  }
}
</script>

<style lang="scss">
#app{
  background-color: var(--background);
  height: fit-content;
}
</style>
