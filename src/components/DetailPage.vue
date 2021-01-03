<template>
    <div id="detail-page">
        <div class="main-body">
        <!-- back btn -->
        <!-- start -->
        <div class="btn-con">
            <button @click="hideDetailPage" class="d-flex align-items-center justify-content-center">
                <font-awesome-icon :icon="{ prefix: 'fas' ,iconName: 'long-arrow-alt-left'}" class="mr-3"/>
                Back
            </button>
        </div>
        <!-- end  -->

        <!-- country detail sec -->
        <!-- start -->
        <div class="d-flex justify-content-between flex-column flex-lg-row">
            <div class="left-side w-50 w-media-100">
                <img :src="mycountry.flag" :alt="mycountry.name" class="shadow">
            </div>
            <div class="right-side w-50 w-media-100">
                <h3>{{ mycountry.name?mycountry.name:"Not Found"}}</h3>
                <div class="d-flex justify-content-between spe-m flex-column flex-lg-row">
                    <div class="w-50 w-media-100 mb-4 mb-lg-0">
                        <p>Native Name: <span>{{ mycountry.nativeName?mycountry.nativeName:"Not Found" }}</span></p>
                        <p>population: <span>{{ mycountry.population?mycountry.population:"Not found" | putComa }}</span></p>
                        <p>Region: <span>{{ mycountry.region }}</span></p>
                        <p>Sub Region: <span>{{ mycountry.subregion?mycountry.subregion:"Not Found" }}</span></p>
                        <p>Capital: <span>{{ mycountry.capital?mycountry.capital:"Not Found" }}</span></p>
                    </div>
                    <div class="w-50 w-media-100">
                        <p>Top Level Domain: <span v-for="domain in mycountry.topLevelDomain" :key="domain">{{ domain?domain:"Not Found" }}</span></p>
                        <p>Currencies: <span v-for="curr in mycountry.currencies" :key="curr.name">{{ curr.name?curr.name: "Not Found" }}</span></p>
                        <p>Languages: <span v-for="lang in mycountry.languages" :key="lang.name">{{ lang.name?lang.name: "Not Found" }}</span></p>
                    </div>
                </div>
                <div class="d-flex align-items-start align-items-lg-center flex-column flex-lg-row">
                    <div class="mr-2 bolding mb-1 mb-lg-0">Borders: </div>
                    <div>
                        <div class="borderN fs-sm float-left mb-2 mb-lg-0" v-for="border in mycountry.borders" :key="border">{{ border?border:"Not Found" }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end -->
        </div>
        <div class="loader"></div>

    </div>
</template>

<script>

//== import jquery ==//
//== start ==//
import $ from 'jquery';
//== end ==//

//== import fontawesome icon ==//
//== start ==//
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faLongArrowAltLeft);
//== end ==//

export default {
    name: "DetailPage",

    props: ["countryDetail"],

    data(){
        return {
            mycountry: {}
        }
    },

    methods:{

        //== method to show detail page ==//
        //== start ==//
        hideDetailPage(){
            $("#detail-page").fadeOut(200);
            $("#home-page").fadeIn(400);
        },
        //== end ==//
    },
    
    watch:{

        countryDetail(){
            this.mycountry = this.countryDetail
        }
    },

}
</script>

<style lang="scss" scoped>

//== detail-page style ==//
//== start ==//
#detail-page{
    background-color: var(--detailBg);
    margin-top: 4px;
    padding-top: 51px;
    padding-bottom: 51px;
    padding-left: 82px;
    padding-right: 82px;
    height: fit-content;
    min-height: 100vh;
    display: none;
}
//== end ==//

//== btn style ==//
//== start ==//
.btn-con{
    margin-bottom: 51px;
    button{
        border: none;
        outline: none;
        width: 143px;
        background-color: var(--elements);
        padding: 10px;
        box-shadow: 0px 0px 4px 0px gray;
        border-radius: 8px;
        color: var(--text);
    }
}
//== end ==//

//== left side style ==//
//== start ==//
.left-side{
    margin-right: 86px;
    img{
        max-width: 559px;
        max-height: 400px;
        width: 100%;
    }
}
//== end ==//

//== right side style ==//
//== start ==//
.right-side{
    h3{
        padding-top: 21px;
        padding-bottom: 21px;
        font-weight: 600;
        color: var(--text);
    }
    .spe-m{
        margin-bottom: 33px;
    }
    .borderN{
        margin-right: 10px;
        border-radius: 8px;
        background-color: var(--elements);
        padding: 5px 18px;
        box-shadow: 0px 0px 4px 0px gray;
        color: var(--text);
    }
    p{
        color: var(--text);
        font-weight: 600;
        font-size: 1rem;
        span{
            color: var(--text);
            font-weight: 300; 
            font-size: 0.9rem;
        }
    }
    .bolding{
        font-weight: 600;
        color: var(--text);
    }
    .fs-sm{
        font-weight: 300; 
        font-size: 0.8rem;
    }
}
//== end ==//

//== media of detail page ==//
//== start ==//
@media screen and (max-width: 990px) {
  #detail-page {
    background-color: var(--background);
  }
}
@media screen and (max-width: 700px) {
  #detail-page {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 530px) {
  #detail-page {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media screen and (max-width: 530px) {
  #detail-page {
    padding-left: 15px;
    padding-right: 15px;
  }
}
//== end ==//

//== media of width ==//
//== start ==//
@media screen and (max-width: 990px){
    .w-media-100{
        width: 100% !important;
    }
}
//== end ==//

</style>