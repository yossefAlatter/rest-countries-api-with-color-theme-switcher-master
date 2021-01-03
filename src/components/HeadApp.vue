<template>
  <div id="head-app">
    <div class="d-flex justify-content-between align-items-center">

      <!-- the title of app -->
      <!-- start -->
      <h2 class="app-title m-0">Where in the world</h2>
      <!-- end -->

      <!-- mode controller -->
      <!-- start -->
      <div class="mode d-flex align-items-center" @click="convertMode">
        <span class="mr-2">
          <font-awesome-icon class="dark" :icon="{ prefix: 'fas', iconName: 'moon' }"/>
          <font-awesome-icon class="light" :icon="{ prefix: 'fas', iconName: 'sun' }"/>
        </span>
        <span class="mode-name"></span>
      </div>
      <!-- start -->
      
    </div>
  </div>
</template>

<script>
//==import font-awesome-icons==//
//== start ==//
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon,faSun } from "@fortawesome/free-solid-svg-icons";
library.add([faMoon,faSun]);
//== end ==//

//== import jquery ==//
//== start ==//
import $ from "jquery";
//== end ==//

export default {
  name: "HeadApp",
  data() {
    return {
      mode: localStorage.getItem("mode")?localStorage.getItem("mode"):0,
    };
  },
  methods: {
    //== method to convert modes ==//
    //== start ==//
    convertMode() {
      if (this.mode == 1) {
        this.mode = 0;
      } else if (this.mode == 0) {
        this.mode = 1;
      } else {
        this.mode = 0;
      }
      localStorage.setItem("mode", this.mode);
      this.checkMode();
    },
    //== end ==//

    //== method to check mode ==//
    //== start ==//
    checkMode() {
      if (typeof this.mode == undefined || this.mode == 0) {
        $(":root").css({
          "--elements": "hsl(209, 23%, 22%)",
          "--background": "hsl(207, 26%, 17%)",
          "--text": "hsl(0, 0%, 100%)",
          "--input": "hsl(0, 0%, 100%)",
          "--detailBg": "hsl(207, 26%, 17%)"
        });
        $('.dark').css("display","block");
        $('.light').css("display","none");
        $('.mode-name').html("Dark Mode");
      } else {
        $(":root").css({
          "--elements": "hsl(0, 0%, 100%)",
          "--background": "hsl(0, 0%, 98%)",
          "--text": "hsl(200, 15%, 8%)",
          "--input": "hsl(0, 0%, 52%)",
          "--detailBg": "hsl(0, 0%, 100%)"
        });
        $('.dark').css("display","none");
        $('.light').css("display","block");
        $('.mode-name').html("Light Mode");
      }
    },
    //== end ==//
  },
  mounted() {
    this.checkMode();
  },
};
</script>

<style lang="scss" scoped>

//== head-app style==//
//== start ==//
#head-app {
  padding: 20px 82px;
  background-color: var(--elements);
}
.app-title {
  color: var(--text);
}
.mode {
  cursor: pointer;
  &:hover {
    transition: 0.3s all;
    color: rgb(74, 74, 185);
  }
  span {
    color: var(--input);
  }
}
//== end ==//

//== head-app media==//
//== start ==//
@media screen and (max-width: 700px) {
  #head-app {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 530px) {
  #head-app {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media screen and (max-width: 530px) {
  #head-app {
    padding-left: 15px;
    padding-right: 15px;
  }
  .app-title {
    font-size: 1.3rem;
  }
  .mode {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 315px) {
  .app-title {
    font-size: 1rem;
  }
  .mode {
    font-size: 0.65rem;
  }
}
//== end ==//

</style>