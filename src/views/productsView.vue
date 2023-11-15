<script>

import picsrc from "../assets/productsinfo.json";

export default {
  props:{
    langIsSe:Boolean,
  },

  data() {
    return {
      rootBrach:"",
      products:picsrc.productsinfo,
    };
  },
  mount(){
  },
  methods: {},
};
</script>

<template>
  <main>
    <img class="head-imgs" src="/img/swemount14.jpg" alt="">

<h1>{{ langIsSe? "Produkter": "Products" }}</h1>
    <div class="all-products" style="max-width: 1200px;">
      <RouterLink
        v-for="(i, index) in products" 
          :key="index"
          :to="`/products/${i.artNum}`"
          class="single-product"
        >
        <div class="artnmr"> <p   style="text-decoration:none; color: white;">{{ i.artNum }}</p></div>

        <img :src="rootBrach+'/products/'+i.artNum+'.'+i.pic" alt="" />
        <div class="product-caption">
        <h3 class="yellow" style="text-align: center;text-decoration:none;">{{ i.name }}</h3>
        <i class="fa-regular fa-circle-right yellow"></i></div>
         </RouterLink> </div>  

  </main>
</template>