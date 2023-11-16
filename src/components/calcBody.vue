<script >
import canvasD from "../components/canvas.vue";
import { RouterLink, RouterView } from 'vue-router'

import axios from "axios";
import taket from "./taken.vue";
import matrials from "../assets/matrials.json";
import proj4 from "proj4";
import jsPDF from "jspdf";
import "../assets/style.css"

//import image carousel
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'



//import pageslider for animating page transitions. 
import PageSlider from './pageSlider.vue';
import { Motion, Presence } from "motion/vue";

export default {
  components: {
    Motion, Presence,
      Carousel,
      Slide,
      Pagination,
      PageSlider,
    taket,
  },
  props: {
    langIsSe: Boolean,
    userId:String,

  },

  data() {
    return {

      current: 0,
      current2: 0,

      //////////////////////////////////////////////////////////////// variables
      center: { lat: 62.218112, lng: 14.977494 },
      markers: [
        {
          position: {
            lat: 57.69867104470487,
            lng: 14.46878589846311,
          },
        }, // Along list of clusters
      ],

      matrials: matrials,

      laglutandeCountMatrial: [
        {
          AntalPneler: 1,
          AntalRaderMedPaneler: 1,
          AntalAvDennaKonfigurationen: 1,
        },
      ],

      laglutandeCountMatrialsVChecker: [
        "LL1505",
        "LL1530",
        "KL3050",
        "TP3552",
        "GB0010",
        "VB1305",
        "VB1301",
        "MU1010",
        "MU1001",
        "MA1008",
        "MA5105",
      ],
      laglutandeCountMatrialsSChecker: [
        "LL1505",
        "LL1530",
        "SKL3050",
        "TP3552",
        "GB0010",
        "VB1305",
        "VB1301",
        "MU1010",
        "MU1001",
        "MA1008",
        "MA5105",
      ],

      finalResultArrObjects: [],
      finalResult: [],

      TotalFinalResult: [],

      finalCalc: [],
      totalFinalCalc: {},

      isLaglutand: false,
      AvstandMellanFasten: 1200,
      colorName: "black",
      projektNamn:"",
      sno: 0,
      vind: 0,
      offsetX: 0,
      offsetY: 0,
      Terrängtyp: 0,
      allTaken: 1,
      showKon: [false],
      whenPdf:'block',
      addressValue:{address:'',langlat:{ lat: 0, lng: 0 }},
    };
  },
  computed: {
    convertCoordinates() {
      proj4.defs(
        "EPSG:3006",
        "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
      );

      const wgs84 = [
        this.markers[0].position.lng,
        this.markers[0].position.lat,
      ];
      const sweref99tm = proj4("EPSG:4326", "EPSG:3006", wgs84);

      return sweref99tm;
    },
  },
  watch: {
    convertCoordinates: function () {
      this.getSnoAndVind();
    },
  },
  mounted() {
    this.getSnoAndVind();

    //////////////////////////////////////////////////////////////////// import data
  },
  methods: {
    //////////////////////////////////////////////////////////////////// Functions

    //sets the position of marker when dragged
    getLatLng(event) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      //this.addressValue=event.va;
      this.markers[0].position = { lat: lat, lng: lng };
      this.addressValue.langlat = { lat: lat, lng: lng };

    },

    setPlace(e) {
      const lat = e.geometry.location.lat();
      const lng = e.geometry.location.lng();

      this.markers[0].position = { lat: lat, lng: lng };
      this.addressValue.langlat = { lat: lat, lng: lng };
      this.addressValue.address = e.formatted_address;

    },

     getSnoAndVind() {
      /*let klimatlastX =
        Math.floor((118181.8182 + (200000 / 66) * this.offsetX) * 1000) / 1000;
      let klimatlastY =
        Math.floor((8021212.1212 - (200000 / 66) * this.offsetY) * 1000) / 1000;
*/

      let klimatlastX = this.convertCoordinates[0];
      let klimatlastY = this.convertCoordinates[1];
      this.sno = 0;
      this.vind = 0;

      axios
        .get(
          `https://api.boverket.se/klimatlast/v1/snolast?x-koord=${klimatlastY}&y-koord=${klimatlastX}`

        )
        .then((response1) => {
          this.sno = response1.data.värde.replace(",", ".");
          console.log(this.sno);

        });

      axios
        .get(
          `https://api.boverket.se/klimatlast/v1/vindlast?x-koord=${klimatlastY}&y-koord=${klimatlastX}`
        )
        .then((response2) => {
          this.vind = response2.data.värde.replace(",", ".");
        });
        
    },


    goLaglutand() {
      this.isLaglutand = false;
      this.laglutandeCountMatrial = [
        {
          AntalPneler: 1,
          AntalRaderMedPaneler: 1,
          AntalAvDennaKonfigurationen: 1,
        },
      ];

      this.finalResultArrObjects = [];
      this.finalResult = [];

      this.TotalFinalResult = [];

      this.finalCalc = [];
      this.totalFinalCalc = {};
      this.colorName = "black";
    },
    goParallella() {
      this.isLaglutand = true;
    },

    cheker(checkerArr) {
      this.finalResultArrObjects = [];
      for (let i in checkerArr) {
        for (let j in this.matrials) {
          if (checkerArr[i] == this.matrials[j].ArtNr) {
            this.finalResultArrObjects.push(this.matrials[j]);
            break;
          }
        }
      }
    },
    selectCheap(largeArtNr, smallArtNr, c, largeCount, smallCount) {
      let VB5P = this.finalResultArrObjects.find(
        (element) => element.ArtNr == largeArtNr
      );

      let VB1P = this.finalResultArrObjects.find(
        (element) => element.ArtNr == smallArtNr
      );

      let MVB1 = Math.floor(VB5P.Pris / VB1P.Pris);
      let VB5C = Math.floor((2 * c) / largeCount);

      let VB1C = Math.ceil((2 * c - VB5C * largeCount) / smallCount);

      if (VB1C > MVB1) {
        VB5C++;
        VB1C = 0;
      }
      return [VB5C, VB1C];
    },
    calculateAntal(a, b, ant) {
      let ifAntal = 0;
      let c = (2 + a * 2) * ((b + 1) / 2);
      let assist = [];

      let VB13 = this.selectCheap("VB1305", "VB1301", c, 50, 10);

      let MU10 = this.selectCheap("MU1010", "MU1001", c, 100, 10);

      for (let frao in this.finalResultArrObjects) {
        switch (this.finalResultArrObjects[frao].ArtNr) {
          case "LL1505":
            ifAntal = (a + 1) * b;
            break;
          case "LL1530":
            ifAntal = (a + 1) * b;
            break;
          case "SKL3050":
            ifAntal = 4 * b;
            break;
          case "KL3050":
            ifAntal = 4 * b;
            break;
          case "TP3552":
            ifAntal = c;
            break;
          case "GB0010":
            ifAntal = 2 * c;
            break;
          case "VB1305":
            ifAntal = VB13[0];
            break;
          case "VB1301":
            ifAntal = VB13[1];
            break;
          case "MU1010":
            ifAntal = MU10[0];
            break;
          case "MU1001":
            ifAntal = MU10[1];
            break;
          case "MA1008":
            ifAntal = 1;
            break;
          case "MA5105":
            ifAntal = 1;
            break;
          default:
            ifAntal = 0;
            break;
        }

        assist.push({
          ArtNr: this.finalResultArrObjects[frao].ArtNr,
          Benämning: this.finalResultArrObjects[frao].Benämning,
          GS1: this.finalResultArrObjects[frao].GS1,
          Vikt: this.finalResultArrObjects[frao].Vikt,
          Pris: this.finalResultArrObjects[frao].Pris,
          Antal: ifAntal * ant,
        });
      }

      this.finalResult.push(assist);
    },
    calculateIt() {
      if (this.colorName == "black") {
        this.cheker(this.laglutandeCountMatrialsSChecker);
      } else {
        this.cheker(this.laglutandeCountMatrialsVChecker);
      }

      this.finalResult = [];
      this.finalCalc = [];
      this.TotalFinalResult = [];

      for (let lcm in this.laglutandeCountMatrial) {
        var a = this.laglutandeCountMatrial[lcm].AntalPneler;
        var b = this.laglutandeCountMatrial[lcm].AntalRaderMedPaneler;
        var ant = this.laglutandeCountMatrial[lcm].AntalAvDennaKonfigurationen;

        this.calculateAntal(a, b, ant);

        this.finalCalc.push({
          tAntal: a * b * ant,

          tPris:
            Math.round(
              100 *
                this.finalResult[lcm].reduce(
                  (acc, item) => acc + item.Pris * item.Antal,
                  0
                )
            ) / 100,

          tVikt:
            Math.round(
              100 *
                this.finalResult[lcm].reduce(
                  (acc, item) => acc + item.Vikt * item.Antal,
                  0
                )
            ) / 100,
        });
      }
      this.totalFinalCalc = {};
      this.totalFinalCalc = {
        tAntal: this.finalCalc.reduce((acc, item) => acc + item.tAntal, 0),
        tPris: this.finalCalc.reduce((acc, item) => acc + item.tPris, 0),
        tVikt: this.finalCalc.reduce((acc, item) => acc + item.tVikt, 0),
      };

      for (let fr0 in this.finalResult[0]) {
        let rowTotal = 0;

        for (let fr in this.finalResult) {
          rowTotal += this.finalResult[fr][fr0].Antal;
        }

        this.TotalFinalResult.push({
          ArtNr: this.finalResult[0][fr0].ArtNr,
          Benämning: this.finalResult[0][fr0].Benämning,
          GS1: this.finalResult[0][fr0].GS1,
          Vikt: this.finalResult[0][fr0].Vikt,
          Pris: this.finalResult[0][fr0].Pris,
          Antal: rowTotal,
        });
      }
    },

    exportToPDF() {

      this.whenPdf='block';


      var doc = new jsPDF("p", 'pt','a4',true,true);

      let source = document.getElementById("element-to-pdf");

      doc.addFileToVFS("/Montserrat-Regular.ttf");
    doc.addFont("Montserrat-Regular.ttf", "Montserrat", "normal");
    doc.setFont("Montserrat");
    doc.addFileToVFS("/Montserrat-Bold.ttf");
    doc.addFont("Montserrat-Bold.ttf", "Montserrat-Bold", "normal");
    doc.setFont("Montserrat-Bold");
    doc.addFont('FontAwesome', 'FontAwesome', 'normal');
    doc.setFont('FontAwesome');


      doc.html(source, {
        callback: function (doc) {
          doc.save('swemount')
        },
        x: 10,
        y: 10,
      })

      setTimeout(() => {
        this.whenPdf='none';
}, 300)
    },

    mapPointer(event) {
      this.offsetX = event.offsetX - 2;
      this.offsetY = event.offsetY - 2;
      this.getSnoAndVind();

    },
  },
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</script>
<template>

<main>


<div v-if="!isLaglutand" id="Parallella">

<!--implementing motion div for page animation-->
<div class="message-mobile-size">
  <h1>{{ langIsSe ? 'Vi ber om ursäkt.' : 'We apologize for any inconvenience.' }}</h1>
  <p>
    {{ langIsSe ? 'Vår webbplats/applikation är optimerad för skärmar större än mobilstorlek (768px och större).' : 'Our website/application is optimized for screens larger than mobile size (768px and above).' }}
  </p>
  <p>
    {{ langIsSe ? 'Om du använder en enhet med en mindre skärm, överväg att använda en enhet med större skärm för att få full upplevelse.' : 'If you are viewing this on a small screen, please consider using a device with a larger display to access the full experience.' }}
  </p>
  <p>{{ langIsSe ? 'Tack för din förståelse.' : 'Thank you for your understanding.' }}</p>

 <!-- <div class="logo">
    <span class="logo-span">SOL</span>IFOKUS
  </div>-->
</div>
<div class="animation-container">
  <Presence>
    <Motion :key="current" :initial="{ opacity: 0, y: 100 }" :animate="{
        opacity: 1,
        y: 0,
        transition: { delay: 0 }
      }" :exit="{ opacity: 0, y: -100 }" class="slide">

      <!--Set current === page/div number in order-->
      <div v-if="current === 0" class="motion-div">
        <div class=" intro-container">
          <div class="intro-img">
            <img src="../../public/img/swemount13.jpg" alt="">

          </div>
          <div class="intro-body">
            <div class="multi_elements">
              <RouterLink to="/history" class="a-button history">
                {{ langIsSe? "Min Projekthistoria": "Min Projekthistoria" }}
                <!--to change color of svg icon, change the fill in the svg file-->
                <img src="../../public/icons/svgs/open_in_new_FILL0_wght400_GRAD0_opsz24.svg" alt="">
              </RouterLink>

              <!--<div
          :class="['selection', isLaglutand ? ' selection-pre' : '']"
          @click="goParallella"
        >
          <img
            src="/img/swemount14.jpg"
            alt=""
            :class="['img-back-box', isLaglutand ? ' img-back-box-active' : '']"
          />
          <p>
            Låglutande system
            <span v-if="isLaglutand"
              >&nbsp;&nbsp;&nbsp;&nbsp;<i
                class="fa-solid fa-square-check white"
              ></i>
            </span>
          </p>
        </div>-->

              <div :class="['selection', !isLaglutand ? '  selection-pre' : ''] " @click="goLaglutand">
                <img src="/img/swemount11.png" style="width:200px ;" alt=""
                  :class="['img-back-box', !isLaglutand ? ' img-back-box-active' : '']" />
                <p>
                  Parallella system
                  <span v-if="!isLaglutand">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                  </span>
                </p>
              </div>
              <div>
                <div class="second-head">
    <h1>{{ langIsSe ? "Projekt Namn" : "Project Name" }}</h1>
    <input class="long_input" placeholder="Project Name" type="text" v-model="projektNamn" />

  </div>
    
              </div>
            </div>
<!--
            <div v-if="isLaglutand" id="Laglutande">
              <div class="second-head">
                <h1>{{ langIsSe ? "Inställningar" : "Inställningar" }}</h1>
                <hr />
              </div>

              <div class="p1 correct-top">
                <div class="Visual-select">
                  <div class="p3">
                    <label for="">Avstånd mellan fästen <br />
                      <div class="measurement">
                        <input type="number" v-model="AvstandMellanFasten" /><span class="unit">mm</span>
                      </div>
                    </label>
                  </div>

                  <div :class="['selection', colorName == 'gray' ? '  selection-pre' : '']"
                    @click="colorName = 'gray'">
                    <div :class="[
                  'imgs-selects color-box varmforzinkat',
                  colorName == 'gray' ? ' imgs-selects-active' : '',
                ]"></div>
                    <p>
                      Varmförzinkat
                      <span v-if="colorName == 'gray'">&nbsp;&nbsp;&nbsp;&nbsp;<i
                          class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div :class="[
                'selection',
                colorName == 'black' ? '  selection-pre' : '',
              ]" @click="colorName = 'black'">
                    <div :class="[
                  'imgs-selects color-box svartlackerat',
                  colorName == 'black' ? ' imgs-selects-active' : '',
                ]"></div>
                    <p>
                      Svartlackerat
                      <span v-if="colorName == 'black'">&nbsp;&nbsp;&nbsp;&nbsp;<i
                          class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />

              <div v-for="(item, index) in laglutandeCountMatrial" v-bind:key="index" style="">
                <div class="second-head" style="margin: 0">
                  <h2 style="text-align: left; margin-top: 0">
                    Konfiguration {{ index + 1 }}
                  </h2>
                  <hr style="margin: 0" />
                </div>

                <div class="Visual-select">
                  <div class="p1">
                    <div class="p3">
                      <label for="">
                        Antal paneler/rad <br />

                        <div class="measurement">
                          <input type="number" min="1" v-model="item.AntalPneler" class="input-short" /><span
                            class="unit">st</span>
                        </div>
                      </label>
                    </div>

                    <div class="p3">
                      <label for="">
                        Antal rader med paneler <br />

                        <div class="measurement">
                          <input type="number" min="1" v-model="item.AntalRaderMedPaneler"
                            class="input-short" /><span class="unit"> st</span>
                        </div>
                      </label>
                    </div>
                    <div class="p3">
                      <label for="">
                        Antal av denna konfigurationen <br />

                        <div class="measurement">
                          <input type="number" min="1" v-model="item.AntalAvDennaKonfigurationen"
                            class="input-short" /><span class="unit"> st</span>
                        </div>
                      </label>
                    </div>
                    <div class="">
                      <button v-if="index + 1 == laglutandeCountMatrial.length" @click="
                    laglutandeCountMatrial.push({
                      AntalPneler: 1,
                      AntalRaderMedPaneler: 1,
                      AntalAvDennaKonfigurationen: 1,
                    });
                    showKon.push(false);
                  ">
                        Lägg till ny konfiguration <span>+</span>
                      </button>
                      <button v-if="
                    laglutandeCountMatrial.length == index + 1 &&
                    laglutandeCountMatrial.length > 1
                  " @click="
                    laglutandeCountMatrial.pop();
                    finalResult.pop();
                    finalCalc.pop();
                    showKon.pop();
                  ">
                        Ta bort konfiguration <span>-</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button class="calculate-button" @click="calculateIt">
                Visa konfiguration
              </button>

              <div v-if="finalResult.length > 0" class="results">
                <div v-for="(kon, indexKon) in finalResult" v-bind:key="indexKon">
                  <br /><br />
                  <div class="second-head" style="margin: 0; cursor: pointer"
                    @click="showKon[indexKon] = !showKon[indexKon]">
                    <h2 style="text-align: left; margin-top: 0">
                      Konfiguration {{ indexKon + 1 }}
                      <span><i v-if="!showKon[indexKon]" class="fa-solid fa-circle-chevron-down"></i><i
                          v-if="showKon[indexKon]" class="fa-solid fa-circle-chevron-up"></i></span>
                    </h2>
                    <hr style="margin: 0" />
                  </div>
                  <div :style="{ display: showKon[indexKon] ? 'block' : 'none' }">
                    <br />
                    <b>Antal:</b>
                    {{ laglutandeCountMatrial[indexKon].AntalAvDennaKonfigurationen }}
                    <br />

                    <b> Antal paneler:</b>
                    {{
                laglutandeCountMatrial[indexKon].AntalPneler *
                laglutandeCountMatrial[indexKon].AntalRaderMedPaneler
              }}
                    <br />

                    <b>Vikt:</b> {{ finalCalc[indexKon].tVikt }} kg <br />
                    <b>Pris:</b> {{ finalCalc[indexKon].tPris }} SEK <br />

                    <table>
                      <tr>
                        <th>Antal</th>
                        <th>ArtNr</th>
                        <th>Benämning</th>
                        <th>GS1</th>
                        <th>Vikt/st</th>
                        <th>Tot.vikt</th>
                        <th>Pris/st</th>
                        <th>Rabatt</th>
                        <th>Totalt (exkl. moms)</th>
                      </tr>
                      <template v-for="(ii, indexii) in kon" v-bind:key="indexii">
                        <tr v-if="ii.Antal > 0">
                          <td>{{ ii.Antal }}</td>
                          <td>{{ ii.ArtNr }}</td>
                          <td>{{ ii.Benämning }}</td>
                          <td>{{ ii.GS1 }}</td>
                          <td>{{ ii.Vikt }} kg</td>
                          <td>{{ Math.round(ii.Vikt * ii.Antal * 100) / 100 }} kg</td>
                          <td>{{ ii.Pris }} SEK</td>
                          <td>0</td>
                          <td>{{ ii.Pris * ii.Antal }} SEK</td>
                        </tr>
                      </template>
                    </table>
                  </div>
                  <hr style="box-shadow: 0px 0px 10px 0px #000" class="correct-top" />
                </div>
                <hr />

                <div class="total-calc">
                  <div class="second-head">
                    <h1>{{ langIsSe ? "Totalt" : "Total" }}</h1>
                    <hr />
                  </div>

                  <b>Antal paneler:</b> {{ totalFinalCalc.tAntal }} <br />

                  <b>Vikt:</b> {{ Math.floor(totalFinalCalc.tVikt * 100) / 100 }} kg
                  <br />
                  <b>Pris:</b> {{ totalFinalCalc.tPris }} SEK <br />

                  <table>
                    <tr>
                      <th>Antal</th>
                      <th>ArtNr</th>
                      <th>Benämning</th>
                      <th>GS1</th>
                      <th>Vikt/st</th>
                      <th>Tot.vikt</th>
                      <th>Pris/st</th>
                      <th>Rabatt</th>
                      <th>Totalt (exkl. moms)</th>
                    </tr>
                    <template v-for="(iii, indexiii) in TotalFinalResult" v-bind:key="indexiii">
                      <tr v-if="iii.Antal > 0">
                        <td>{{ iii.Antal }}</td>
                        <td>{{ iii.ArtNr }}</td>
                        <td>{{ iii.Benämning }}</td>
                        <td>{{ iii.GS1 }}</td>
                        <td>{{ iii.Vikt }} kg</td>
                        <td>{{ Math.round(iii.Vikt * iii.Antal * 100) / 100 }} kg</td>
                        <td>{{ iii.Pris }} SEK</td>
                        <td>0</td>
                        <td>{{ iii.Pris * iii.Antal }} SEK</td>
                      </tr>
                    </template>
                  </table>
                </div>
              </div>

              <div id="element-to-pdf" :style="{display:  whenPdf, width:'565px',}">

                <div style="display:flex; align-items:center; gap: 180px;">
                  <img src="/swemount_logo.png" alt="" style="display:block; width:30%; margin:0 0 0 30px;">

                  <div class="footer-child">
                    <div style="display:flex; align-items: center;"> <i class="fa-solid fa-phone yellow"
                        style="font-size:20px;   "></i>
                      <div>
                        <p class="bold-font" style="font-size:12px; "> 07xxxxxxxx </p>
                        <p> <a class="bold-font" href="mailto:info@swemount.se"
                            style="font-size:12px;">info@swemount.se</a>
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
                <hr style="box-shadow: 0px 0px 5px 1px #22326c; margin-top: 1px;">


                <div class="total-calc" :style="{display:  'block', width:'565px',}">
                  <div class="second-head" style="margin-top: 10px;">
                    <h1 class="bold-font" style="font-size:28px; ">{{ langIsSe ? "Totalt" : "Total" }}</h1>
                    <hr />
                  </div>
                  <div style="display:block; width:30%; margin:0 0 0 30px;">
                    <b class="bold-font" style=" ">Antal paneler:</b> {{ totalFinalCalc.tAntal }} <br />

                    <b class="bold-font" style="">Vikt:</b> {{ Math.floor(totalFinalCalc.tVikt * 100) / 100 }} kg
                    <br />
                    <b class="bold-font" style=" ">Pris:</b> {{ totalFinalCalc.tPris }} SEK <br />
                  </div>
                  <table class="table-pdf" style="width: 80%; font-size: 6px;">
                    <tr>
                      <th>Antal</th>
                      <th>ArtNr</th>
                      <th>Benämning</th>
                      <th>GS1</th>
                      <th>Vikt/st</th>
                      <th>Tot.vikt</th>
                      <th>Pris/st</th>
                      <th>Rabatt</th>
                      <th>Totalt (exkl. moms)</th>
                    </tr>
                    <template v-for="(iii, indexiii) in TotalFinalResult" v-bind:key="indexiii">
                      <tr v-if="iii.Antal > 0">
                        <td>{{ iii.Antal }}</td>
                        <td>{{ iii.ArtNr }}</td>
                        <td>{{ iii.Benämning }}</td>
                        <td>{{ iii.GS1 }}</td>
                        <td>{{ iii.Vikt }} kg</td>
                        <td>{{ Math.round(iii.Vikt * iii.Antal * 100) / 100 }} kg</td>
                        <td>{{ iii.Pris }} SEK</td>
                        <td>0</td>
                        <td>{{ iii.Pris * iii.Antal }} SEK</td>
                      </tr>
                    </template>
                  </table>
                </div>




              </div>




              <button v-if="finalResult.length > 0" @click="exportToPDF">
                Ladda ner PDF
              </button>
            </div>

            -->
            <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
            <div class="animation-buttons ">
              <button v-if="current>0" @click="current--">
                <img src="../../public/icons/svgs/arrow-fat-left.svg" alt="">

              </button>
              <button @click="current++">
                <img src="../../public/icons/svgs/arrow-fat-right.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--position-->
      <div v-if="current === 1" class="motion-div position-container">


        <div class="position-body">
          <div class="position-map">
            <GMapMap :center="center" :zoom="4" @click="getLatLng" :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            disableDefaultUi: true,
          }" map-type-id="terrain" class="google-map">
              <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @dragend="getLatLng" :icon="{
              url: '/swemountnewstyle/logomarker.png', //                  url: '/swemounttest/logomarker.png',

              scaledSize: { width: 40, height: 40 },
              labelOrigin: { x: 16, y: -10 },
            }" @drag="handleMarkerDrag" @click="panToMarker" />
            </GMapMap>
            <div class="childpointer" :style="{ top: offsetY + 'px', left: offsetX + 'px' }"></div>
          </div>
          <div class="position-info">
            <div class="second-head">
              <h1>{{ langIsSe ? "Position" : "Position" }}</h1>
              <hr />
            </div>
            <p class="bold-font" style="text-align: center">
              Ange adress för att starta konfiguratorn
            </p>
            <label for="">
              <GMapAutocomplete class="long_input" placeholder="Select address" :component-restrictions="{
                country: 'se',
              }" @place_changed="setPlace">
              </GMapAutocomplete>
              <!--<input type="text" />-->
            </label>

            <div class="p3">
              <label for="">Snö
                <div class="measurement">
                  <input type="number" v-model="sno" class="input-short" /><span class="unit">kN/m²</span>
                </div>
              </label>
              <label for="">Vind <br />
                <div class="measurement">
                  <input type="number" v-model="vind" class="input-short" /><span class="unit">m/s</span>
                </div>
              </label>
            </div>
          </div>


        </div>
        <div class="animation-buttons ">
          <button @click="current--">
            <img src="../../public/icons/svgs/arrow-fat-left.svg" alt="">

          </button>
          <button @click="current++">
            <img src="../../public/icons/svgs/arrow-fat-right.svg" alt="">
          </button>
        </div>
      </div>
      <!--Terrang-->
      <div v-else-if="current === 2" class="motion-div">
        <div class="terrang-container">

          <!--Image slides using Vue Carousel using free images from pexel.com-->
          <div class="terrang-img">
            <!--autoplay="speed in ms", wrap around for looping-->

            <Carousel :autoplay="2000" :wrap-around="true">
              <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                  <img src="/calc/terrang1.jpg" alt="">
                </div>
              </Slide>

              <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                  <img src="/calc/terrang2.jpg" alt="">
                </div>
              </Slide>
              <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                  <img src="/calc/terrang3.jpg" alt="">
                </div>
              </Slide>
              <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                  <img src="/calc/terrang4.jpg" alt="">
                </div>
              </Slide>
              <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                  <img src="/calc/terrang5.jpg" alt="">
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="terrang-body">

            <div class="second-head">
              <h1>
                {{
            langIsSe
              ? "Terräng och förutsättningar"
              : "Terräng och förutsättningar"
          }}
              </h1>
              <hr />
            </div>

            <!-- <p class="paragraphs">
            Terrängtyp Håll muspekaren över alternativen för att läsa mer om varje
            terrängtyp.
          </p> -->

            <div class="Terrangtyp-wrapper">
              <div class="terrangtyp">
                <div @click="Terrängtyp = 0" :class="['selection', Terrängtyp == 0 ? '  selection-pre' : '']">
                  <img src="/calc/1.jpg" alt="" :class="[
              'imgs-selects',
              Terrängtyp == 0 ? ' imgs-selects-active' : '',
            ]" />
                  <p>
                    O
                    <span v-if="Terrängtyp == 0">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <div class="description">
                    Havs- eller kustområde exponerat för öppet hav.
                  </div>
                </div>
              </div>
              <div class="terrangtyp">
                <div @click="Terrängtyp = 1" :class="['selection', Terrängtyp == 1 ? '  selection-pre' : '']">
                  <img src="/calc/2.jpg" alt="" :class="[
              'imgs-selects ',
              Terrängtyp == 1 ? ' imgs-selects-active' : '',
            ]" />
                  <p>
                    I
                    <span v-if="Terrängtyp == 1">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <div class="description">
                    Sjö eller plant och horisontellt område med försumbar vegetation
                    och utan hinder.
                  </div>
                </div>
              </div>
              <div class="terrangtyp">
                <div @click="Terrängtyp = 2" :class="['selection', Terrängtyp == 2 ? '  selection-pre' : '']">
                  <img src="/calc/3.jpg" alt="" :class="[
              'imgs-selects ',
              Terrängtyp == 2 ? ' imgs-selects-active' : '',
            ]" />
                  <p>
                    II
                    <span v-if="Terrängtyp == 2">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <div class="description">
                    Område med låg vegetation som gräs och enstaka hinder (träd,
                    byggnader) med minsta inbördes avstånd lika med 20 gånger hindrets
                    höjd.
                  </div>
                </div>
              </div>
              <div class="terrangtyp">
                <div @click="Terrängtyp = 3" :class="['selection', Terrängtyp == 3 ? '  selection-pre' : '']">
                  <img src="/calc/4.jpg" alt="" :class="[
              'imgs-selects ',
              Terrängtyp == 3 ? ' imgs-selects-active' : '',
            ]" />
                  <p>
                    III
                    <span v-if="Terrängtyp == 3">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <div class="description">
                    Område täckt med vegetation eller byggnader eller med enstaka
                    hinder med största inbördes avstånd lika med 20 gånger hindrets
                    höjd (till exempel byar, förorter, skogsmark).
                  </div>
                </div>
              </div>
              <div class="terrangtyp">
                <div @click="Terrängtyp = 4" :class="['selection', Terrängtyp == 4 ? '  selection-pre' : '']">
                  <img src="/calc/5.jpg" alt="" :class="[
              'imgs-selects ',
              Terrängtyp == 4 ? ' imgs-selects-active' : '',
            ]" />
                  <p>
                    IV
                    <span v-if="Terrängtyp == 4">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <div class="description">
                    Område där minst 15 % av arean är bebyggd och där byggnadernas
                    medelhöjd är > 15 m.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="animation-buttons ">
          <button @click="current--">
            <img src="../../public/icons/svgs/arrow-fat-left.svg" alt="">

          </button>
          <button @click="current++">
            <img src="../../public/icons/svgs/arrow-fat-right.svg" alt="">
          </button>
        </div>
      </div>
      <div v-else-if="current === 3" class="motion-div">

        <div v-for="(i, index) in allTaken" v-bind:key="index">
          <taket :takNum="index" :projektNamn="projektNamn" :sno="sno" :vind="vind" :places="Terrängtyp" :userId="userId"
            :adressInfo="addressValue" />
        </div>
        <div style="max-width:1200px">
          <div class="p-buttons">
           <!-- <button class="nyttTak-button" @click="allTaken++">Lägg till nytt tak <span>+</span></button>-->
            <button class="taBort-button" v-if="allTaken > 1" @click="allTaken--">
              Ta bort tak <span>-</span>
            </button>
          </div>
        </div>
      </div>
    </Motion>
  </Presence>

</div>


</div>

</main>

</template>


<!--
<style scoped>
:root {
  --mw: 12px;
}

#Laglutande {
  width: 90vw;
}
@media screen and (min-width: 414px) {

 .p-buttons{
width: 15vw;
margin-right: 0;
  }
#element-to-pdf *{
font-family:'Montserrat';
  }

  .table-pdf th{
    font-family:'Montserrat-bold';

  }

  .table-pdf *{
    padding: 3px;

font-size: 9px;
font-family:'Montserrat';
text-align: center;
  }
  main {
    margin: 0;
  }
  .multi_elements {
    display: flex;
    width: 58.33333333vw;
    margin-top: 16.66666667vw;
  }
  .multi_elements > div {
    display: flex;
  }

  .multi_elements > div > img {
    width: 21.35416667vw;
  }

  .selection {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
  }

  .selection p {
    font-family: "Montserrat-bold";
    text-align: center;
    width: 90%;
    margin-top: 2vw;
    padding: 1vw;
    background-color: #fcb324;
    color: #22326c;
  }
  .selection:hover p {
    background-color: #8f7348;
    color: #fff;
  }

  .selection-pre p {
    background-color: #22326c;
    color: #fff;
  }

  .position-body {
    display: flex;
    margin-top: 5vw;
    width: 65.625vw;
  }

  .google-map {
    width: 33.75vw;
    height: 33.75vw;
  }
  input {
    width: 24.21875vw;
    padding: 0.5vw;
    border-radius: 0.9vw;
    margin-left: auto;
    margin-right: auto;
  }
  .input-short {
    width: 4.583333333vw;
  }
  .unit {
    background-color: #22326c;
    color: #fcb324;
    padding: 0.5vw 1vw;
    border-radius: 1vw;
  }
  .p3 {
    margin-top: 0vw;
  }
  .p3 label {
    font-family: "Montserrat-bold";
    display: flex;
    flex-direction: column;
  }

  .p3 label > div {
    justify-content: flex-start;
    margin: 0;
  }
  .p3 label > div input {
    margin: 0.5vw 3vw 0.5vw 0;
  }
  .Terrangtyp {
    display: flex;
    margin-top: 5vw;
    width: 70.3125vw;
  }
  .imgs-selects {
    width: 11.97916667vw;
    height: 11.97916667vw;

    box-shadow: 0.5vw -0.5vw 0px 0vw #fcb324;
    border: 1px solid #707070;
  }

  .imgs-selects-active {
    box-shadow: 0.5vw -0.5vw 0px 0vw #22326c;
  }

  .discreption {
    display: none;
    background-color: #22326c;
    color: #fff;
    position: absolute;
    padding: 1vw;
    width: 90%;
    top: 110%;
    z-index: 3;
  }

  .discreption:before {
    content: "";
    position: absolute;
    right: 85px;
    top: -15px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent #22326c transparent;
  }

  .selection:hover .discreption {
    display: block;
  }
  .paragraphs {
    text-align: center;
    margin-top: 4vw;

    margin-bottom: 0;
  }
  .svartlackerat {
    background-color: #010204;
  }

  .varmforzinkat {
    background-color: #979ba4;
  }
  .Visual-select {
    display: flex;
    justify-content: flex-start;
    margin-top: 5vw;
    width: 85.15625vw;
    align-items: center;
  }

  .p1 {
    display: flex;
    column-gap: 5vw;
    align-items: center;
  }

  #Laglutande .Visual-select {
    margin-top: 0;
    margin-bottom: 5vw;
    align-items: center;
    justify-content: space-between;
  }

  .correct-top {
    margin-top: 5vw;
  }
  .calculate-button {
    margin: 0 auto;
    padding: 1.5vw 5vw;
    font-size: 2vw;
  }
}

/***********************************************************************************************************************/
@media screen and (min-width: 1201px) {
  .p-buttons{
    width: 180px;
  }
  .Visual-select {
    display: flex;
    justify-content: flex-start;
    margin-top: 60px;
    width: 1021.875px;
  }

  .multi_elements {
    width: 700px;
    margin-top: 200px;
  }
  .multi_elements > div {
    display: flex;
  }
  .second-head {
    margin-top: 80px;
  }
  .multi_elements > div > img {
    width: 256.25px;
  }

  .selection {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
  }

  .selection p {
    font-family: "Montserrat-bold";
    text-align: center;
    width: 90%;
    margin-top: 24px;
    padding: 12px;
    background-color: #fcb324;
    color: #22326c;
  }
  .selection:hover p {
    background-color: #8f7348;
    color: #fff;
  }

  .selection-pre p {
    background-color: #22326c;
    color: #fff;
  }

  .position-body {
    display: flex;
    margin-top: 60px;
    width: 787.5px;
  }

  .google-map {
    width: 405px;
    height: 405px;
  }
  input {
    width: 290.625px;
    padding: 6px;
    border-radius: 10.8px;
    margin-left: auto;
    margin-right: auto;
  }
  .input-short {
    width: 55px;
  }
  .unit {
    background-color: #22326c;
    color: #fcb324;
    padding: 6px 12px;
    border-radius: 12px;
  }
  .p3 {
    margin-top: 0px;
  }
  .p3 label {
    font-family: "Montserrat-bold";
    display: flex;
    flex-direction: column;
  }

  .p3 label > div {
    justify-content: flex-start;
    margin: 0;
  }
  .p3 label > div input {
    margin: 6px 4px 6px 0;
  }
  .Terrangtyp {
    display: flex;
    margin-top: 60px;
    width: 843.75px;
  }
  .imgs-selects {
    width: 143.75px;
    height: 143.75px;

    box-shadow: 6px -6px 0px 0px #fcb324;
    border: 1px solid #707070;
  }

  .imgs-selects-active {
    box-shadow: 6px -6px 0px 0px #22326c;
  }

  .discreption {
    display: none;
    background-color: #22326c;
    color: #fff;
    position: absolute;
    padding: 12px;
    width: 90%;
    top: 110%;
  }

  .discreption:before {
    content: "";
    position: absolute;
    right: 85px;
    top: -15px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent #22326c transparent;
  }

  .selection:hover .discreption {
    display: block;
  }
  .paragraphs {
    text-align: center;
    margin-top: 48px;

    margin-bottom: 0;
  }
  .p1 {
    display: flex;
    column-gap: 60px;
  }

  #Laglutande {
    width: 980px;
  }
  #Laglutande .Visual-select {
    margin-bottom: 60px;
    margin-top: 0;
  }
  .correct-top {
    margin-top: 60px;
  }
  .calculate-button {
    margin: 0 auto;
    padding: 18px 60px;
    font-size: 24px;
  }
}
</style>
-->