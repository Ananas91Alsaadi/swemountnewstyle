<script >
var rootBrach = "";

export default {
  props:{
    langIsSe:Boolean,
  },

  data() {
    return {
      partners: [
        {
          name:"BRANDT Fordon",
          type:"partners",
          pic: `${rootBrach}/partners/brandt.jpg`,
          adress1:"",
          adress2:"",
          adress3:"",
          phone:"0775 - 20 10 10",
          email:"info@brandtbil.se",
          website:"https://www.brandtbil.se/",
        },{
          name:"K-bygg Urbans",
          type:"partners",
          pic: `${rootBrach}/partners/kbygg.png`,
          adress1:"Mogölsvägen Hedenstorp",
          adress2:"554 75 Jönköping",
          adress3:"Sweden",
          phone:"036-290 67 00",
          email:"info.jonkoping@k-byggurbans.se",
          website:"https://jonkoping.k-bygg.se/",
        },{
          name:"Areco",
          type:"partners",
          pic: `${rootBrach}/partners/areco.png`,
          adress1:"",
          adress2:"",
          adress3:"",
          phone:"",
          email:"",
          website:"https://www.areco.se/sv/",
        },{
          name:"PEAB",
          type:"partners",
          pic: `${rootBrach}/partners/peab-logo.jpg`,
          adress1:"",
          adress2:"",
          adress3:"",
          phone:"0431-89 000",
          email:"info@peab.se",
          website:"https://peab.se/",
        },{
          name:"Edstroms",
          type:"partners",
          pic: `${rootBrach}/partners/Edstroms_logo.png`,
          adress1:"Edströms",
          adress2:"Solåsvägen 14",
          adress3:"553 03 Jönköping",
          phone:"036-39 20 00",
          email:"info@edstroms.com",
          website:"https://www.edstroms.com/",
        },{
          name:"tyrens",
          type:"partners",
          pic: `${rootBrach}/partners/tyrens_ny.png`,
          adress1:"Tyréns Sverige AB",
          adress2:"Folkungagatan 44",
          adress3:"118 86 Stockholm",
          phone:"010-452 20 00",
          email:"",
          website:"https://www.tyrens.se/sv/",
        },{
          name:"Hellbergs",
          type:"partners",
          pic: `${rootBrach}/partners/hellbergs.png`,
          adress1:"Långgatan 63",
          adress2:"464 33 Mellerud",
          adress3:"Sweden",
          phone:"0530-40 000",
          email:"info@hellbergs.se",
          website:"https://www.hellbergs.se/sv",
        },{
          name:"skanska",
          type:"distributor",
          pic: `${rootBrach}/partners/skanska.png`,
          adress1:"Skanska Sverige",
          adress2:"Warfvinges väg 25",
          adress3:"112 74 Stockholm",
          phone:"+46 10 - 448 00 00",
          email:"",
          website:"https://www.skanska.se/",
        },{
          name:"treform",
          type:"partners",
          pic: `${rootBrach}/partners/treform.png`,
          adress1:"Axeltoftavägen 170",
          adress2:"261 35 Landskrona",
          adress3:"Sweden",
          phone:"+46 418 500 75",
          email:"",
          website:"https://treform.se/",
        },
     

      ],
    };
  },
  computed: {
    onlyPartners() {
      return this.partners.filter(i => i.type == "partners" )
    },
    onlyDistributor() {
      return this.partners.filter(i => i.type == "distributor" )
    },

  },  
  methods: {
  },
};

</script>

<template>
  <main>
    <img class="head-imgs" src="/img/swemount17.jpg" alt="">

    <h1>
      {{ langIsSe? "Distributörer & Partners": "Distributors & Partners" }}  

  </h1>

  <div class="second-head"> 
   <h1> {{ langIsSe? "Distributörer": "Distributors" }}</h1>
   <hr>
  </div>
  <div class="all-partners">
  <div class="single-partner" v-for="(i,index) in onlyDistributor" :key="index" > 
    <img  :src="i.pic" alt="">
  </div>
</div>



<div class="second-head"> 
  <h1> Partners</h1>
<hr>
</div>



  <div class="all-partners">
  <div class="single-partner" v-for="(i,index) in onlyPartners" :key="index"> 
    <img  :src="i.pic" alt="">
  </div>
</div>
  </main>
</template>
