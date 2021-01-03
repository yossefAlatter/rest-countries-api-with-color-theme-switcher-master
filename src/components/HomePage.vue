<template>
  <div>
    <div id="home-page">

        <!-- SearchSec -->
        <!-- start -->
        <search-sec :fetchData="fetchData" />
        <!-- end -->

        <!-- CardsSec -->
        <!-- start -->
        <cards-sec :countries="countries" :showDetail="showDetail" />
        <!-- end -->

    </div>
    <!-- DetailPage -->
    <!-- start -->
    <div class="detail-con">
      <detail-page :countryDetail="countryDetail" />
    </div>
    <!-- end -->
  </div>
</template>

<script>
//== import components ==//
//== start ==//
import SearchSec from "./SearchSec.vue";
import CardsSec from "./CardsSec.vue";
import DetailPage from "./DetailPage.vue";
//== end ==//

//== import jquery ==//
//== start ==//
import $ from "jquery";
//== end ==//

export default {
  components: { SearchSec, CardsSec, DetailPage },
  name: "HomePage",

  data() {
    return {
      countries: {},
      countryDetail: {},
    };
  },

  methods: {
    //== method to fetch Data ==//
    //== start ==//
    fetchData(type = "all", v = "") {
      $('.main-body').hide();
      $('.loader').show(0);
      $('.loader').html(`
      <div class="text-center loading">
        <div class="spinner-grow mr-4" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow mr-4" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow mr-4" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      `)
      if (v == "" && type == "all") {
        fetch(
          "https://restcountries.eu/rest/v2/all"
        )
          .then((res) => res.json())
          .then(this.getResult);
      } else if (v != "" && type == "country") {
        fetch(`https://restcountries.eu/rest/v2/name/${v}?fullText=true`)
          .then(this.responFun)
          .catch(function(err) {
           console.error(` Err: ${err}`)})
          .then(this.getResult)
      } else if (v != "" && type == "region") {
        fetch(`https://restcountries.eu/rest/v2/region/${v}`)
          .then((res) => res.json())
          .then(this.getResult);
      }
    },
    //== end ==//

    //== methods to store data in countries variable ==//
    //== start ==//
    getResult(result) {
      if(result){
        $('.loader').hide();
        $('.main-body').show();
        this.countries = result;
      }
    },
    //== end ==//

    //== method to show detail of country ==//
    //== start ==//
    showDetail(choosenCountry) {
      $("#home-page").fadeOut(200);
      $("#detail-page").fadeIn(400);
      this.countryDetail = choosenCountry;
    },
    //== end ==//

    //== method to control response ==//
    //== start ==//
    responFun(response){
      if (response.ok) {
        return response.json();
      } else{
        $('.main-body').hide();
        $('.loader').show();
        $('.loader').html(`
        <div class="text-center error-message">There is no country having that name</div>
        `)  
      }
    }
    //== end ==//

  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
//== home-page style ==//
//== start ==//
#home-page {
  background-color: var(--background);
  padding: 44px 82px;
  padding-bottom: 0;
}
//== end ==//

//== home-page media==//
//== start ==//
@media screen and (max-width: 700px) {
  #home-page {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 530px) {
  #home-page {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media screen and (max-width: 530px) {
  #home-page {
    padding-left: 15px;
    padding-right: 15px;
  }
}
//== end ==//
</style>