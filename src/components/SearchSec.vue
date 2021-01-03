<template>
  <div id="search-sec">
    <div class="d-flex align-items-md-center justify-content-start justify-content-md-between flex-column flex-md-row">
      <!-- search box -->
      <!-- start -->
      <div class="search-box mb-3 mb-md-0">
        <input
          type="text"
          placeholder="Search for a country ...."
          v-model="selectedCountry"
          @keydown="searchCountry"
        />
        <div class="icon-con" v-if="selectedCountry == ''">
          <font-awesome-icon
            class="font-icon"
            :icon="{ prefix: 'fas', iconName: 'search' }"
          />
        </div>
      </div>
      <!-- end -->

      <!-- filter box -->
      <!-- start -->
      <div class="filter-box">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          >
            {{ filterRegion }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#" @click="searchRegion('Africa')">Africa</a></li>
            <li><a class="dropdown-item" href="#" @click="searchRegion('Americas')">Americas</a></li>
            <li><a class="dropdown-item" href="#" @click="searchRegion('Asia')">Asia</a></li>
            <li><a class="dropdown-item" href="#" @click="searchRegion('Europe')">Europe</a></li>
            <li><a class="dropdown-item" href="#" @click="searchRegion('Oceania')">Oceania</a></li>
            <li><a class="dropdown-item" href="#" @click="filterAll">All Regions</a></li>
          </ul>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
//== import fontAwesome icons ==//
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
//== start ==//
//== end ==//

export default {
  name: "SearchSec",

  props:["fetchData"],

  data() {
    return {
      selectedCountry: "",
      filterRegion: "Filter by region"
    };
  },

  methods:{
    
    //== method to search about country ==//
    //== start ==//
    searchCountry(e){
      if(e.key == "Enter"){
        this.fetchData("country",this.selectedCountry);
        this.selectedCountry = "",
        this.filterRegion = "Filter by region"
      }
    },
    //== end ==//

    //== method to search by region ==//
    //== start ==//
    searchRegion(region){
      this.fetchData("region",region);
      this.filterRegion = region;
      this.selectedCountry = ""
    },
    //== end ==//

    //== method to filter by choosen all ==//
    //== start ==//
    filterAll(){
      this.fetchData();
      this.filterRegion = "All Regions";
    }
    //== end ==//
  }

};
</script>

<style lang="scss" scoped>
//== search-box style ==//
//== start ==//
.search-box {
  position: relative;
  width: 452px;
  input {
    border: none;
    outline: none;
    background-color: var(--elements);
    width: 100%;
    padding: 14px 17px;
    color: var(--input);
    height: 50px;
    &::placeholder {
      color: var(--input);
      padding-left: 20px;
    }
    &:focus {
      & + .icon-con {
        display: none;
      }
    }
  }
  .icon-con {
    position: absolute;
    top: 50%;
    left: 17px;
    transform: translateY(-50%);
    .font-icon {
      color: var(--input);
      font-weight: 300;
    }
  }
}
//== end ==//

//== filter box style ==//
//== start ==//
.filter-box {
  .dropdown {
      button {
    transition: none;
    border: none;
    outline: none;
    background-color: var(--elements) !important;
    color: var(--input);
    padding: 12px;
    box-shadow: none !important;
    height: 50px;
    }
  }
  .dropdown-menu{
    background-color: var(--elements) !important;
    .dropdown-item{
        color: var(--input) !important;
        background-color: var(--elements) !important;
        &:hover{
            opacity: 0.6;
        }
    }
  }
}
//== end ==//

//== search sec media ==//
//== start ==//
@media screen and (max-width: 990px){
    .search-box{
        min-width: 380px;
        max-width: 380px;
    }
}
@media screen and (max-width: 720px){
    .search-box{
        min-width: 100%;
        max-width: 100%;
    }
}
//== end ==//
</style>