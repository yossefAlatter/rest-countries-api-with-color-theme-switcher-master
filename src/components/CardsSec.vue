<template>
    <div id="cards-sec">
        <div class="main-body">
            <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" v-for="country in countries" :key="countries.indexOf(country)">
                <div class="d-flex justify-content-center">
                    <div @click="showDetail(country)">
                        <country-card 
                    :flag="country.flag"
                    :name="country.name"
                    :population="country.population"
                    :region="country.region"
                    :capital="country.capital"
                />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="loader"></div>
    </div>
</template>

<script>
//== import components ==//
//== start ==//
import CountryCard from './CountryCard.vue'
//== end ==//

export default {
  components: { CountryCard },

    name: 'CardsSec',

    props: ["countries","showDetail"]
    
}
</script>

<style lang="scss" scoped>
//== cards-sec style ==//
//== start ==//
#cards-sec{
    padding-top: 44px;
}
//== end ==//

</style>