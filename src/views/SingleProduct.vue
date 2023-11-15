<script >
import picsrc from "../assets/productsinfo.json";


export default {
  props:{
    langIsSe:Boolean,
  },

  data() {
    return {

      en:[
      "We apologize, but this information about this product is not optimized for small screens with a width less than 768 pixels. For the best experience, please visit this page on a device with a larger screen or adjust your screen resolution to at least 768 pixels wide",
  
  ],
  se:[
      "Vi beklagar, men denna produkt info är inte anpassad för skärmar med en bredd mindre än 768 pixlar. För bästa upplevelse, vänligen besök denna sida på en enhet med större skärm eller justera skärmens upplösning till minst 768 pixlar bred.",

  ],


      rootBrach:"",

      isingleProduct:picsrc.productsinfo.find(i=> i.artNum==this.$route.params.id),
      identifiering: picsrc[(this.$route.params.id+'a')] ? picsrc[(this.$route.params.id+'a')] :'',
      Prestanda: picsrc[(this.$route.params.id+'b')] ? picsrc[(this.$route.params.id+'b')] :'',


    };
  },
  mounted(){
console.log(this.Prestanda);
  },
  computed:{
    PrestandaHeadings() {
      if (this.Prestanda[0]){
     return Object.keys(this.Prestanda[0]);
    }    
  return ''
  
  },
  identifieringHeadings() {
      if (this.identifiering[0]){
     return Object.keys(this.identifiering[0]);
    }    
  return ''
  
  },
  },
  methods: {
  },
};
</script>

<template>
    <main>
      

      <div class="product-head">
      <img :src="rootBrach+'/products/'+isingleProduct.artNum+'.'+isingleProduct.pic" alt="" class="product-img img-back-box" />
      <div>
        <div class="second-head" style="margin: 0; "> 
        <h2 style="text-align: left; margin-top: 0;">{{ isingleProduct.name }}</h2>
   <hr style="margin:0; ">
  </div>


        <ul class="product-list">
          <li>Artikelnr: {{ isingleProduct.artNum }}</li>
          <li>Längd: {{ isingleProduct.Längd }}</li>
          <li>Bredd: {{ isingleProduct.Bredd }}</li>
          <li>Höjd: {{ isingleProduct.Höjd }}</li>
          <li>Snözon: {{ isingleProduct.Snözon }}</li>

        </ul>
      </div></div>
      <div class="less768">
      <div class="signup-msg">{{ langIsSe? se[0]: en[0] }}</div>


    </div>

  

<div class="over768">
      <div class="identifiering">
        <div class="second-head"> 
        <h1>Ingående artiklar och identifiering</h1>
   <hr>
  </div>

      <table>
        <tr>
        <th  v-for="heading in identifieringHeadings" :key="heading">{{heading}}</th>
      </tr>
      <tr v-for="(i,index) in identifiering" :key="index">
        <td v-for="ii in identifieringHeadings" :key="ii">{{ i[ii] }}</td>

      </tr>
    </table>

      </div>


      <div class="Prestanda"><h4></h4>

        <div class="second-head"> 
        <h1>Prestanda</h1>
   <hr>
  </div>

      <table>

      <tr>
        <th  v-for="heading in PrestandaHeadings" :key="heading">{{heading}}</th>
      </tr>
      <tr v-for="(i,index) in Prestanda" :key="index">
        <td v-for="ii in PrestandaHeadings" :key="ii">{{ i[ii] }}</td>

      </tr>

    </table>

      </div>
    </div>

    
    </main>
  </template>
  <style>
@media screen and (min-width: 414px) {





}

@media screen and (min-width: 1200px) {



}


</style>