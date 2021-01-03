<template>
  <div id="country-page">
    <div class="card">
      <img :src="flag" class="card-img-top align-self-top" :alt="name" />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="m-0 mb-1">
          population: <span>{{ population | putComa }}</span>
        </p>
        <p class="m-0 mb-1">
          Region: <span>{{ region }}</span>
        </p>
        <p class="m-0 mb-1">
          Capital: <span>{{ capital }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// https://restcountries.eu/rest/v2/name/eesti
export default {
  name: "CountryCard",
  props: ["flag","name","population","region","capital"],
};
</script>

<style lang="scss" scoped>
//== card country style ==//
//== start ==//
.card{
    background-color: var(--elements);
    border: none;
    outline: none;
    width: 18rem;
    height: 375px;
    overflow: hidden;
    cursor: pointer;
    &:hover{
        transition: all 0.2s;
        transform: scale(1.05);
        box-shadow: 0px -2px 10px 1px black;
    }
    .card-img-top{
        width: 288px;
        height: 192px;
    }
    .card-body{
    padding-bottom: 46px;
    .card-title{
        color: var(--text);
    }
    p{
        color: var(--text);
        font-weight: 600;
        span{
            color: var(--text);
            font-weight: 300; 
            font-size: 0.6rem;
        }
    }
}
}
//== end ==//

//==cards media==//
@media screen and (max-width: 1320px){
    .card{
        max-width: 17rem !important;
    }
}
@media screen and (max-width: 1250px){
    .card{
        max-width: 16rem !important;
    }
}
@media screen and (max-width: 1200px){
    .card{
        max-width: 18rem !important;
    }
}
@media screen and (max-width: 1050px){
    .card{
        max-width: 16.5rem !important;
    }
}
@media screen and (max-width: 990px){
    .card{
        max-width: 18rem !important;
    }
}
@media screen and (max-width: 280px){
    .card{
        max-width: 16rem !important;
    }
}
</style>