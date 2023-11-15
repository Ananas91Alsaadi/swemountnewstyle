<script>
let allDataJS=[];
// /*: if request.auth.uid == userId*/
import { getFirestore, collection, getDocs } from "firebase/firestore";

const dbfs = getFirestore(); // Get a Firestore instance

async function bringData() {
  allDataJS=[];
const querySnapshot = await getDocs(collection(dbfs, "history")); // Query the "myCollection" collection

querySnapshot.forEach((doc) => {
   // Log each document's ID and data
   allDataJS.push({id:doc.id, data:doc.data(),});

});

}


export default {
  props: {
    langIsSe: Boolean,
    loggedInUser: Boolean,
    userId: String,
  },

  data() {
    return {
      allData:[],
      admins:[
        'AM95NMyBr0fu66qR723YlFGAKnO2',
        'eAMIii9xQ5OnsDhZkSBgJ7rCkpj1',
        'tkl3oQPesVat8JQTwTzBmR3ug4i2',
        'jV1FKaHFBEhNrK7vwmdtFCEe9wc2',
    ],
      notAdmin:true,
      activeHistory:0,
    };
  },
  computed: {
  },
  methods: {
   async allDataBring() {
      await bringData();

      this.allData=allDataJS;
     // AM95NMyBr0fu66qR723YlFGAKnO2
      this.allData = this.allData.sort((a, b) => a.data.reportNum - b.data.reportNum);
      this.notAdmin=true;

      for (let i = 0; i < this.admins.length; i++) {
        if (this.admins[i]==this.userId.uid) {
          this.notAdmin=false;

        }
        
      }


      if (this.notAdmin) {
      this.allData = this.allData.filter((e) => this.userId.uid == e.data.userID);
    }

    
    },
  },
  mounted() {
    this.allDataBring();
  },
};
</script>
<template>
  <main>
      <img class="head-imgs " src="/img/swemount15.jpg" alt="">

<h1 @click="check">{{ langIsSe? "Min Projekthistoria": "Min Projekthistoria" }}</h1>
<div class="second-head  second-head-histoy"> 
   <h1> User email: {{ userId.email }}</h1>
   <hr>
  </div>

<div class="his-body">
  <ul class="history-list scroller">
    <li
    v-for="(i, index) in allData"
      v-bind:key="index"
      @click="activeHistory=index"
      :class="['', activeHistory == index ? '  marked' : '']"
  >{{ i.data.reportNum +')  ' }} <b> {{  i.data.email }} </b>{{   ' | ' + i.data.date}}</li>
  </ul>
<div class="invoice scroller" v-if="allData[activeHistory]">

  <div class="head-rapport">
 <b> Rapportnummer: {{ allData[activeHistory].data.reportNum }}</b>
 <b> {{ allData[activeHistory].data.date }}</b>
</div>
    <table>
      <tr>
        <th>Antal</th>
        <th>ArtNr</th>
        <th>Benämning</th>
        <th>Vikt/st</th>
        <th>Tot.vikt</th>
        <th>Pris/st</th>
        <th>Totalt (exkl. moms)</th>
      </tr>
      <template
        v-for="(ii, indexii) in allData[activeHistory].data.invoice"
        v-bind:key="indexii"
      >
        <tr v-if="ii.Antal > 0">
          <td>{{ ii.Antal }}</td>
          <td>{{ ii.ArtNr }}</td>
          <td>{{ ii.Benämning }}</td>
          <td>{{ ii.Vikt }} kg</td>
          <td>{{ Math.round(ii.Vikt * ii.Antal * 100) / 100 }} kg</td>
          <td>{{ ii.Pris }} SEK</td>
          <td>{{ ii.Pris * ii.Antal }} SEK</td>
        </tr>
      </template>
    </table>

     <div class="head-tables"
     >
     <table id="Geometri">
        <tr>
          <td>Mått A</td>
          <td>{{ allData[activeHistory].data.inputs.Amatt }} m</td>
        </tr>
        <tr>
          <td>Mått B</td>
          <td>{{ allData[activeHistory].data.inputs.Bmatt }} m</td>
        </tr>
        <tr v-if="Takform != 0">
          <td>Mått C</td>
          <td>{{ allData[activeHistory].data.inputs.Cmatt }} m</td>
        </tr>
        <tr>
          <td>Byggnadens höjd</td>
          <td>{{ allData[activeHistory].data.inputs.nockhöjd }} m</td>
        </tr>
      </table>
      <table id="Geometri2">
        <tr>
          <td>Taklutning</td>
          <td>{{ allData[activeHistory].data.inputs.Taklutning }}°</td>
        </tr>
        <tr>
          <td>Taktyp</td>
          <td>
            {{ allData[activeHistory].data.inputs.TypAvTak == 0 ? "Pulpet" : "" }}{{ allData[activeHistory].data.inputs.TypAvTak == 1 ? "Sadel" : ""
            }}{{ allData[activeHistory].data.inputs.TypAvTak == 2 ? "Motfallstak" : "" }}
          </td>
        </tr>
        <tr>
          <td>Typ av infästning</td>
          <td>
            {{ allData[activeHistory].data.inputs.Infästning }}
          </td>
        </tr>
      </table>

      <table id="randzon">
        <tr>
          <td>a1</td>
          <td>
            {{
              Math.round(allData[activeHistory].data.trycLyft[0].data.edgeBase.width * 0.1 * 100) /
              100
            }}
            m
          </td>
        </tr>
        <tr>
          <td>a2</td>
          <td>
            {{
              Math.round(allData[activeHistory].data.trycLyft[0].data.edgeBase.length * 0.1 * 100) /
              100
            }}
            m
          </td>
        </tr>
      </table>

      <table id="Lastförutsättningar">
        <tr>
          <td>Adress</td>
          <td>{{ allData[activeHistory].data.inputs.adressInfo.address }}</td>
        </tr>
        <tr>
          <td>Coordinates</td>
          <td>Lat: {{ allData[activeHistory].data.inputs.adressInfo.langlat.lat }}, Lng: {{ allData[activeHistory].data.inputs.adressInfo.langlat.lng }}</td>
        </tr>
        <tr>
          <td>Säkerhetsklass</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Dimensionerande livslängd</td>
          <td>30 år</td>
        </tr>
        <tr>
          <td>Referensvindhastighet</td>
          <td>{{ allData[activeHistory].data.inputs.vind }} m/s</td>
        </tr>
        <tr>
          <td>Terrängtyp</td>
          <td>{{ allData[activeHistory].data.inputs.places }}</td>
        </tr>

        <tr>
          <td>Lastkombination faktor 0v</td>
          <td>0.3</td>
        </tr>
        <tr>
          <td>Snözon</td>
          <td>{{ allData[activeHistory].data.inputs.sno }} kN/m2</td>
        </tr>
        <tr>
          <td>Lastkombination faktor 0s</td>
          <td>{{ allData[activeHistory].data.trycLyft[0].data.reductionFactorSnow }}</td>
        </tr>
        <tr>
          <td>Snörasskydd</td>
          <td>{{ allData[activeHistory].data.inputs.snorasskydd  }}</td>
        </tr>
      </table>
<div 
v-for="(ii, iindex) in allData[activeHistory].data.inputs.AntalPerRad"
v-bind:key="iindex"
>
<h3>Sektion   {{iindex +1}}</h3>
        <table :id="'sektion' + iindex">
          <tr>
            <td>Startpunkt: Nock:</td>
            <td>{{ allData[activeHistory].data.inputs.distTop[iindex] }} cm</td>
          </tr>
          <tr>
            <td>Startpunkt: Vänster:</td>
            <td>{{ allData[activeHistory].data.inputs.distLeft[iindex] }} cm</td>
          </tr>
          <tr>
            <td>Antal rader</td>
            <td>{{ allData[activeHistory].data.inputs.panelarRows[iindex] }} st</td>
          </tr>
          <tr>
            <td>Antal paneler per rad</td>
            <td>{{ allData[activeHistory].data.inputs.AntalPerRad[iindex]}} st</td>
          </tr>
          <tr>
            <td>Avstånd skenor</td>
            <td>{{ allData[activeHistory].data.inputs.distMellanFästningar[iindex] }} cm</td>
          </tr>
          <tr>
            <td>Avstånd infästning (max)</td>
            <td>{{ allData[activeHistory].data.inputs.MaxAvstandMellanFasteOut[iindex] }} cm</td>
          </tr>
          <tr>
            <td>Avstånd infästning (max) i randzon</td>
            <td>{{ allData[activeHistory].data.inputs.MaxAvstandMellanFasteIn[iindex] }} cm</td>
          </tr>
          <tr>
            <td>Antal infästningar (min)</td>
            <td>{{ allData[activeHistory].data.inputs.antalFasteArr[iindex] }} st</td>
          </tr>
          <tr>
            <td>Panellängd</td>
            <td>
              {{
               allData[activeHistory].data.inputs.PanelHöjd
              }}
              mm
            </td>
          </tr>
          <tr>
            <td>Panelbredd</td>
            <td>
              {{
                             allData[activeHistory].data.inputs.PanelBredd

              }}
              mm
            </td>
          </tr>
          <tr>
            <td>Panelvikt</td>
            <td>{{ allData[activeHistory].data.inputs.PanelVikt[iindex] }} kg</td>
          </tr>
        </table>
        <table :id="'Utbredda' + iindex">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Lyftkraft</td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.areaLoad
                    .ultimateLimitState.suction.verticalEdge * 100
                ) / 100
              }}
              kN/m2
            </td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.areaLoad
                    .ultimateLimitState.suction.verticalNonedge * 100
                ) / 100
              }}
              kN/m2
            </td>
          </tr>
          <tr>
            <td>Tryckkraft</td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.areaLoad
                    .ultimateLimitState.pressure.verticalEdge * 100
                ) / 100
              }}
              kN/m2
            </td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.areaLoad
                    .ultimateLimitState.pressure.verticalNonedge * 100
                ) / 100
              }}
              kN/m2
            </td>
          </tr>
          <tr>
            <td>Horisontell kraft</td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.areaLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m2
            </td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.areaLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m2
            </td>
          </tr>
        </table>
        <table :id="'skena' + iindex">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Lyftkraft</td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.suction.verticalEdge * 100
                ) / 100
              }}
              kN/m
            </td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.suction.verticalNonedge * 100
                ) / 100
              }}
              kN/m
            </td>
          </tr>
          <tr>
            <td>Tryckkraft</td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.verticalEdge * 100
                ) / 100
              }}
              kN/m
            </td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.verticalNonedge * 100
                ) / 100
              }}
              kN/m
            </td>
          </tr>
          <tr>
            <td>Horisontell kraft</td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m
            </td>
            <td>
              {{
                Math.round(
                  allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m
            </td>
          </tr>
        </table>
        <table :id="'tak' + iindex">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Lyftkraft</td>
            <td>
              {{
                Math.round(
                  ((allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.suction.verticalEdge *
                    allData[activeHistory].data.inputs.MaxAvstandMellanFasteIn[iindex]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
            <td>
              {{
                Math.round(
                  ((allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.suction.verticalNonedge *
                    allData[activeHistory].data.inputs.MaxAvstandMellanFasteOut[iindex]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
          </tr>
          <tr>
            <td>Tryckkraft</td>
            <td>
              {{
                Math.round(
                  ((allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.verticalEdge *
                    allData[activeHistory].data.inputs.MaxAvstandMellanFasteIn[iindex]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
            <td>
              {{
                Math.round(
                  ((allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.verticalNonedge *
                    allData[activeHistory].data.inputs.MaxAvstandMellanFasteOut[iindex]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
          </tr>
          <tr>
            <td>Horisontell kraft</td>
            <td>
              {{
                Math.round(
                  ((allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.horizontal *
                    allData[activeHistory].data.inputs.MaxAvstandMellanFasteIn[iindex]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
            <td>
              {{
                Math.round(
                  ((allData[activeHistory].data.trycLyft[0].data.lineLoad
                    .ultimateLimitState.pressure.horizontal *
                    allData[activeHistory].data.inputs.MaxAvstandMellanFasteOut[iindex]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
          </tr>
        </table>
        <table :id="'infästningsskena' + iindex">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Max för lyft</td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].a) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].a }}
              %
            </td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].b ) >100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].b }}
              %
            </td>
          </tr>
          <tr>
            <td>Max för tryck</td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].c) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].c }}
              %
            </td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].d) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].d }}
              %
            </td>
          </tr>
        </table>
        <table :id="'infästningar' + iindex">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Max för lyft</td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].e) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].e }}
              %
            </td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].f) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].f }}
              %
            </td>
          </tr>
          <tr>
            <td>Max för tryck</td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].g) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].g }}
              %
            </td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].h) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].h }}
              %
            </td>
          </tr>
          <tr>
            <td>Max för horisontell kraft</td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].i) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].i }}
              %
            </td>
            <td :class="['', Math.abs( allData[activeHistory].data.inputs.lastPageCalc[iindex].j) > 100 ? '  redAlert' : '']">
              {{ allData[activeHistory].data.inputs.lastPageCalc[iindex].j }}
              %
            </td>
          </tr>
          <!--  <tr>
            <td>Max för komb. lyft + h-last</td>
            <td>xxxxxxxxx %</td>
            <td>xxxxxxxxx %</td>
          </tr>
          <tr>
            <td>Max för komb. tryck + h-last</td>
            <td>xxxxxxxxx %</td>
            <td>xxxxxxxxx %</td>
          </tr>-->
        </table>
      </div>
    </div>

    </div>

  </div>
  

<div class="B-history">
  <button  @click="allDataBring">Refresh</button>
</div>


</main>

</template>    

<style scoped>

h1{
  margin-top: 10vw;
}
@media screen and (min-width: 1201px) {
h1{
  margin-top: 150px;
} 

}

</style>