import Vue from 'vue'
import App from './App.vue'

//== import jquery ==//
//== start ==//
import "jquery"
//== end ==//

//== import jquery.nicescroll ==//
//== start ==//
import 'jquery.nicescroll'
//== end ==//

//== import bootstrap ==//
//== start ==//
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
//== end ==//

//== import fontawesome ==//
//== start ==//
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
//== end ==//

//== import general-style-config ==//
//== start ==//
import "./general-style-config/main.scss"
//== end ==//

//== create filter ==//
//== start ==//
Vue.filter('putComa',function(value){
  if (!value) return ''
  value = value.toString()
  let res = []
  let len = value.length
  if(len%3 == 0){
      for(let i = 0 ; i <= len-3 ; i=i+3){
          let slide = value.slice(i,i+3);
          res.push(slide);
      }
      return res.join(",")
  }else{
      let modu = len%3 ;
      let adding = value.slice(0,modu);
      let truevalue = value.slice(modu)
      let len1 = truevalue.length
      for(let i = 0 ; i <= len-3 ; i=i+3){
          let slide = value.slice(i,i+3);
          res.push(slide);
      }
      return adding+','+res
  }
  
})
//== end ==//

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
