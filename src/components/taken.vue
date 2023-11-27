<script >
////ABS of ccMatt?
import canvasD from "../components/canvas.vue";
var rootBrach = "/swemountnewstyle/";
var appPassword = process.env.VUE_APP_PASSWORD;

import matrials from "../assets/matrials.json";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

import { getFirestore, collection, getDocs,addDoc } from "firebase/firestore";
import { Motion, Presence } from "motion/vue";

const dbfs = getFirestore(); // Get a Firestore instance
let   allDataJS=[];

async function bringData() {
  allDataJS=[];
const querySnapshot = await getDocs(collection(dbfs, "history")); // Query the "myCollection" collection

querySnapshot.forEach((doc) => {
   // Log each document's ID and data
   allDataJS.push({id:doc.id, data:doc.data(),});


});

}

// Get a reference to the "users" collection
const usersCollection = collection(dbfs, "history");

export default {

  props: {
    takNum:Number,
    langIsSe:Boolean,
    projektNamn:String,
    sno: Number,
    vind: Number,
    places: Number,
    userId:String,
    adressInfo:Object,
  },

  components: {
    Motion,
      Presence,

    canvasD,
  },

  data() {
    return {
      current2: 0,
      isSidebarOpen: false, // Initially, the sidebar is closed.

      matrials: matrials,

      dimensionCapacity: {
        FPBF: {
          FxP: 2,
          FxN: 2,
          FyP: 2.5,
          FyN: 2.5,
        },
        LFBF: {
          FxP: 3,
          FxN: 3,
          FyP: 2,
          FyN: 2,
        },
        TKBF: {
          FxP: 2.5,
          FxN: 2.5,
          FyP: 2,
          FyN: 2,
        },
        KLBF: {
          FxP: 2.5,
          FxN: 2.5,
          FyP: 2,
          FyN: 2,
        },

        FPTF: {
          FxP: 2,
          FxN: 2,
          FyP: 2.5,
          FyN: 2.5,
        },
        LFTF: {
          FxP: 3,
          FxN: 3,
          FyP: 2,
          FyN: 2,
        },
        TKTF: {
          FxP: 2.5,
          FxN: 2.5,
          FyP: 2,
          FyN: 2,
        },
        KLTF: {
          FxP: 2.5,
          FxN: 2.5,
          FyP: 2,
          FyN: 2,
        },
        FF: {
          FxP: 1.5,
          FxN: 1.5,
          FyP: 1.7,
          FyN: 3.5,
        },

        TP: {
          FxP: 7,
          FxN: 7,
          FyP: 3,
          FyN: 3,
        },
        CP: {
          FxP: 10,
          FxN: 10,
          FyP: 4,
          FyN: 4,
        },

        skena: {
          FxP: 0,
          FxN: 0,
          FyP: 2.2,
          FyN: 2.2,
        },

        skruvAluminium: {
          FxP: 0.5,
          FxN: 0.5,
          FyP: 0.3,
          FyN: 0,
        },
        skruvStålplåt: {
          FxP: 1.2,
          FxN: 1.2,
          FyP: 0.8,
          FyN: 0,
        },
      },

      BetongpannorFotplatta: [
        "BF1400",
        "FP1400",
        "BU1200",
        "BU1201",

        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",

        "SS6190",
        "SS6191",
        "TS6310",
        "TS6301",

        "MA5111",
        "MA5102",
      ],
      BetongpannorLäktfäste: [
        "BF1400",
        "LF1400",
        "BU1200",
        "BU1201",

        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",

        "SS6190",
        "SS6191",

        "TS6310",
        "TS6301",
        "MA5111",
        "MA5104",
      ],
      TegelpannorFotplatta: [
        "TF1400",
        "FP1400",
        "BU1200",
        "BU1201",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",

        "TS6310",
        "TS6301",
        "MA5111",
        "MA5102",
      ],
      TegelpannorLäktfäste: [
        "TF1400",
        "LF1400",
        "BU1200",
        "BU1201",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",

        "TS6310",
        "TS6301",
        "MA5111",
        "MA5104",
      ],
      BetongpannorTakkroken: [
        "TK1400",
        "BU1200",
        "BU1201",

        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",

        "SS6190",
        "SS6191",
        "TS6310",
        "TS6301",

        "MA5111",
        "MA5102",
      ],
      TegelpannorTakkroken: [
        "TK1400",
        "BU1200",
        "BU1201",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",

        "TS6310",
        "TS6301",
        "MA5111",
        "MA5102",
      ],
      BetongpannorKlämfäste: [
        "TK1400",
        "BU1200",
        "BU1201",

        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",

        "SS6190",
        "SS6191",
        "TS6310",
        "TS6301",

        "MA5111",
        "MA5102",
      ],
      TegelpannorKlämfäste: [
        "TK1400",
        "BU1200",
        "BU1201",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",

        "TS6310",
        "TS6301",
        "MA5111",
        "MA5102",
      ],
      Takkroken: [
        "TK1400",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",

        "TS6310",
        "TS6301",
        "MA5111",
        "MA5102",
      ],

      FalsatPlåttakKlicktakFalsfäste: [
        "FF1400",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",

        "MA5111",
        "MA5101",
      ],
      ProfileratPlåttakLångSkena: [
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",
        "MA5111",
        "MA5101",
      ],
      TegelprofileratPlåttakLångSkena: [
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "SS6190",
        "SS6191",
        "MA5111",
        "MA5101",
      ],

      SlätaTakTätplåtSlät: [
        "CP1400",
        "IS2450",
        "PL5050",
        "SPL5050",

        "KL1000",
        "SKL1000",

        "KL2000",
        "SKL2000",
        "TP3552",
        "VB1305",
        "VB1301",

        "MU1010",
        "MU1001",

        "GB0010",
        "SS6190",
        "SS6191",
        "MA5111",
        "MA1008",
        "MA5103",
      ],

      InfästningArr: [
        [
          {
            name: "Fotplatta",
            pic: `${rootBrach}/products/BF1400.jpg`,
          },

          {
            name: "Läktfäste",
            pic: `${rootBrach}/products/LF1400koplat.jpg`,
          },
          {
            name: "Takkroken",
            pic: `${rootBrach}/products/TK1400.jpg`,
          },
          {
            name: "Takkroken lite",
            pic: `${rootBrach}/products/TK1400l.jpg`,
          },
          {
            name: "Klämfäste",
            pic: `${rootBrach}/products/KL1400.jpg`,
          },
        ],
        [
          {
            name: "Fotplatta",
            pic: `${rootBrach}/products/TF1400.jpg`,
          },

          {
            name: "Läktfäste",
            pic: `${rootBrach}/products/LF1400koplat.jpg`,
          },
          {
            name: "Takkroken",
            pic: `${rootBrach}/products/TK1400.jpg`,
          },
          {
            name: "Takkroken lite",
            pic: `${rootBrach}/products/TK1400l.jpg`,
          },
          {
            name: "Klämfäste",
            pic: `${rootBrach}/products/KL1400.jpg`,
          },
        ],
        [
          {
            name: "Falsfäste",
            pic: `${rootBrach}/products/FF1400.jpg`,
          },
        ],
        [
          {
            name: "Lång skena",
            pic: `${rootBrach}/products/IS2450.jpg`,
          },
        ],
        [
          {
            name: "Lång skena",
            pic: `${rootBrach}/products/IS2450.jpg`,
          },
        ],
        [
          {
            name: "Tätplåt slät",
            pic: `${rootBrach}/products/TP3552.jpg`,
          },
        ],
      ],

      Bredd: 300,
      Höjd: 330,
      AvståndFalser: 600,
      AvståndToppar: 100,
      Material: "Stålplåt",
      colorName: "black",
      snorasskydd: false,
      taktTyp: 0,
      Infästning: 0,
      TypAvTak: 0,
      nockhöjd: 5,
      Taklutning: 1,
      Takform: 0,
      Amatt: 14,
      Bmatt: 7,
      Cmatt: 5,
      PanelBredd: [1170],
      PanelHöjd: [1700],
      PanelVikt: [24],
      panelarAll: [[]],
      panelarRows: [],
      panelarCount: 0,
      showResult: false,
      finalResultArrObjects: [],
      totalFinalResultArrObjects: [],
      SumTotalFinalResultArrObjects: [],
      alongToAcross: [],

      whenPdf: "none",
      imgToExport: null,
      distTop: [],
      distLeft: [],
      distMellanFästningar: [],
      rowLongs: [],

      inProgress: false,
      ccMattInRandzon: 0,
      ccMattOutRandzon: 0,
      MaxAvstandMellanFasteIn: [],
      MaxAvstandMellanFasteOut: [],
      fasteToCanvas: [{}],
      panelsInRandzon: false,
      PCapacity: {},
      tyrensDataToUse: [],
      randzoneLeftRight: 0,
      randzoneUpDown: 0,
      extraFasteCount: [false],
      slataTakExtraFromCanvas: false,
      checkElPower: [[]],
      lastPageCalc: [[]],

      reportNum:0,
      antalFasteArr:[],
      

    };
  },

  computed: {
    selectedTak() {
      if (this.taktTyp == 0 && this.Infästning == 0) {
        return this.BetongpannorFotplatta;
      }
      if (this.taktTyp == 0 && this.Infästning == 1) {
        return this.BetongpannorLäktfäste;
      }
      if (this.taktTyp == 0 && this.Infästning == 2) {
        return this.BetongpannorTakkroken;
      }
      if (this.taktTyp == 0 && this.Infästning == 3) {
        return this.BetongpannorTakkroken;
      }
      if (this.taktTyp == 0 && this.Infästning == 4) {
        return this.BetongpannorKlämfäste;
      }
      if (this.taktTyp == 1 && this.Infästning == 0) {
        return this.TegelpannorFotplatta;
      }
      if (this.taktTyp == 1 && this.Infästning == 1) {
        return this.TegelpannorLäktfäste;
      }
      if (this.taktTyp == 1 && this.Infästning == 2) {
        return this.TegelpannorTakkroken;
      }
      if (this.taktTyp == 1 && this.Infästning == 3) {
        return this.TegelpannorTakkroken;
      }
      if (this.taktTyp == 1 && this.Infästning == 4) {
        return this.TegelpannorKlämfäste;
      }
      if (this.taktTyp == 2) {
        return this.FalsatPlåttakKlicktakFalsfäste;
      }
      if (this.taktTyp == 3) {
        return this.ProfileratPlåttakLångSkena;
      }
      if (this.taktTyp == 4) {
        return this.TegelprofileratPlåttakLångSkena;
      }
      if (this.taktTyp == 5) {
        return this.SlätaTakTätplåtSlät;
      }
    },
  },
  mounted() {
    this.randzoneCalc();
  },

  methods: {

    toggleSidebar() {
        // Toggle the sidebar open/close state
        this.isSidebarOpen = !this.isSidebarOpen;
      },


   async postHistory(){
    let today1 = new Date().toISOString().slice(0, 10);
    let today2 = new Date().toISOString().slice(11, 19);
    let today = today1 +' ' +today2
// Create an object with the data for the new document
     let Infästning=  
            this.selectedTak == this.BetongpannorFotplatta ? "Fotplatta" : 
            this.selectedTak == this.BetongpannorLäktfäste ? "Läktfäste" : 
            this.selectedTak == this.BetongpannorKlämfäste ? "Klämfäste" : 
            this.selectedTak == this.BetongpannorTakkroken ? this.Infästning == 3? "Takkroken lite":"Takkroken" : 
            this.selectedTak == this.TegelpannorFotplatta ? "Fotplatta" : 
            this.selectedTak == this.TegelpannorLäktfäste ? "Läktfäste" : 
            this.selectedTak == this.TegelpannorKlämfäste ? "Klämfäste" : 
            this.selectedTak == this.TegelpannorTakkroken ? this.Infästning == 3? "Takkroken lite":"Takkroken" : 
            this.selectedTak == this.FalsatPlåttakKlicktakFalsfäste ? "Falsfäste" : 
            this.selectedTak == this.ProfileratPlåttakLångSkena ? "LångSkena" : 
            this.selectedTak == this.TegelprofileratPlåttakLångSkena ? "LångSkena" : 
            this.selectedTak == this.SlätaTakTätplåtSlät ? "tplåtSlät" : "";

      let sno =this.sno;
      let vind = this.vind;
      let places = this.places;
     let TypAvTak=this.TypAvTak == 0
          ? "shed"
          : this.TypAvTak == 1
          ? "gable"
          : this.TypAvTak == 2
          ? "butterfly"
          : "shed";


    let nockhöjd = this.nockhöjd;
    let Taklutning = this.Taklutning;
    let Amatt = this.Amatt;
    let Bmatt=this.Bmatt;
    let  Cmatt=this.Cmatt;
    let PanelBredd = this.PanelBredd;
    let  PanelHöjd = this.PanelHöjd;
    let  PanelVikt = this.PanelVikt;
    let  adressInfo = this.adressInfo;
    let snorasskydd = this.snorasskydd? "Ja" : "Nej" ;
    let distTop =this.distTop;       
    let distLeft=this.distLeft;
    let panelarAll=this.panelarAll;
    let panelarRows=this.panelarRows;

    let AntalPerRad =[];


  for (let i = 0; i < panelarAll.length; i++) {
    AntalPerRad.push(panelarAll[i].length / panelarRows[i]);
  }


    let distMellanFästningar = this.distMellanFästningar;       
    let MaxAvstandMellanFasteOut = this.MaxAvstandMellanFasteOut;       
    let MaxAvstandMellanFasteIn = this.MaxAvstandMellanFasteIn;       
    let antalFasteArr = this.antalFasteArr;       
    this.lastPageCalc;

    let lastPageCalc =[];

for (let i = 0; i < this.lastPageCalc.length; i++) {

  lastPageCalc.push({a:this.lastPageCalc[i][0],b:this.lastPageCalc[i][1],c:this.lastPageCalc[i][2],d:this.lastPageCalc[i][3],e:this.lastPageCalc[i][4],f:this.lastPageCalc[i][5],g:this.lastPageCalc[i][6],h:this.lastPageCalc[i][7],i:this.lastPageCalc[i][8],j:this.lastPageCalc[i][9]});
 
}



    let inputToSave={
      Infästning,
      projektNamn,
      sno,
vind,
places,
TypAvTak,
nockhöjd,
Taklutning,
Amatt,
Bmatt,
Cmatt,
PanelBredd,
PanelHöjd,
PanelVikt,
adressInfo,
snorasskydd,
distTop,
distLeft,
panelarRows,
AntalPerRad,
distMellanFästningar,
MaxAvstandMellanFasteOut,
MaxAvstandMellanFasteIn,
antalFasteArr,
lastPageCalc,

    };
const newUserData = {
  email: this.userId.email,
  reportNum:this.reportNum,
  userID:this.userId.uid ,
  date: today,
  invoice: this.SumTotalFinalResultArrObjects,
  inputs:inputToSave,
  trycLyft:this.tyrensDataToUse,
};

// Add the new document to the "users" collection
const newDocRef = await addDoc(usersCollection, newUserData);


    },

    async allDataBring() {
      await bringData();

      this.reportNum=allDataJS.length + 1;
    },


lpc(){
  for (let i = 0; i < this.panelarAll.length; i++) {
    
  const element1 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalEdge /
            this.dimensionCapacity.skena.FyP) *
            10000
        ) / 100;

      const element2 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalNonedge /
            this.dimensionCapacity.skena.FyP) *
            10000
        ) / 100;
      const element3 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalEdge /
            this.dimensionCapacity.skena.FyN) *
            10000
        ) / 100;

      const element4 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalNonedge /
            this.dimensionCapacity.skena.FyN) *
            10000
        ) / 100;

      const element5 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalEdge *
            this.MaxAvstandMellanFasteIn[i]) /
            100 /
            this.headTypeCapacity().FyP) *
            10000
        ) / 100;

      const element6 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalNonedge *
            this.MaxAvstandMellanFasteOut[i]) /
            100 /
            this.headTypeCapacity().FyP) *
            10000
        ) / 100;

      const element7 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalEdge *
            this.MaxAvstandMellanFasteIn[i]) /
            100 /
            this.headTypeCapacity().FyN) *
            10000
        ) / 100;

      const element8 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalNonedge *
            this.MaxAvstandMellanFasteOut[i]) /
            100 /
            this.headTypeCapacity().FyN) *
            10000
        ) / 100;

      const element9 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.horizontal *
            this.MaxAvstandMellanFasteIn[i]) /
            100 /
            this.headTypeCapacity().FxN) *
            10000
        ) / 100;

      const element10 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.horizontal *
            this.MaxAvstandMellanFasteOut[i]) /
            100 /
            this.headTypeCapacity().FxN) *
            10000
        ) / 100;

      let elArr = [
        element1,
        element2,
        element3,
        element4,
        element5,
        element6,
        element7,
        element8,
        element9,
        element10,
      ];
      this.lastPageCalc[i] = elArr;  
    }

},

    checkPower(i) {
      const element1 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalEdge /
            this.dimensionCapacity.skena.FyP) *
            10000
        ) / 100;

      const element2 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalNonedge /
            this.dimensionCapacity.skena.FyP) *
            10000
        ) / 100;
      const element3 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalEdge /
            this.dimensionCapacity.skena.FyN) *
            10000
        ) / 100;

      const element4 =
        Math.round(
          (this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalNonedge /
            this.dimensionCapacity.skena.FyN) *
            10000
        ) / 100;

      const element5 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalEdge *
            this.MaxAvstandMellanFasteIn[i]) /
            100 /
            this.headTypeCapacity().FyP) *
            10000
        ) / 100;

      const element6 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.suction.verticalNonedge *
            this.MaxAvstandMellanFasteOut[i]) /
            100 /
            this.headTypeCapacity().FyP) *
            10000
        ) / 100;

      const element7 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalEdge *
            this.MaxAvstandMellanFasteIn[i]) /
            100 /
            this.headTypeCapacity().FyN) *
            10000
        ) / 100;

      const element8 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.verticalNonedge *
            this.MaxAvstandMellanFasteOut[i]) /
            100 /
            this.headTypeCapacity().FyN) *
            10000
        ) / 100;

      const element9 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.horizontal *
            this.MaxAvstandMellanFasteIn[i]) /
            100 /
            this.headTypeCapacity().FxN) *
            10000
        ) / 100;

      const element10 =
        Math.round(
          ((this.tyrensDataToUse[this.findPanelAPI(i)].data.lineLoad
            .ultimateLimitState.pressure.horizontal *
            this.MaxAvstandMellanFasteOut[i]) /
            100 /
            this.headTypeCapacity().FxN) *
            10000
        ) / 100;

      let elArr = [
        element1,
        element2,
        element3,
        element4,
        element5,
        element6,
        element7,
        element8,
        element9,
        element10,
      ];
      this.lastPageCalc[i] = elArr;
      let boo = false;

      this.checkElPower[i] = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];

      for (let e = 0; e < elArr.length; e++) {

        if (Math.abs(elArr[e]) > 100) {
          this.checkElPower[i][e] = true;
          boo = true;
        }
      }

      return boo;
    },

    inRandzonChange(v) {
      this.panelsInRandzon = v;
    },
   async randzoneCalc() {
      this.randzoneUpDown =
        this.tyrensDataToUse.length > 0
          ? this.tyrensDataToUse[0].data.edgeBase.width
          : this.Bmatt;
      this.randzoneLeftRight =
        this.tyrensDataToUse.length > 0
          ? this.tyrensDataToUse[0].data.edgeBase.length
          : this.Amatt;
    },

    unGroupFastarFromCanvas(v) {
      if (this.fasteToCanvas.length > 1) {
        this.fasteToCanvas.pop();

        this.fasteToCanvas.push(
          {
            fastePerRow: this.fasteToCanvas[v].fastePerRow,
            MaxAvstandMellanFaste: this.fasteToCanvas[v].MaxAvstandMellanFaste,
          },
          {}
        );
      }
    },

    resetCalc() {
      this.Bredd = 300;
      this.Höjd = 330;
      this.AvståndFalser = 600;
      this.AvståndToppar = 100;
      this.Material = "Stålplåt";
      this.colorName = "black";
      this.snorasskydd = false;
      this.taktTyp = 0;
      this.Infästning = 0;
      this.TypAvTak = 0;
      this.nockhöjd = 5;
      this.Taklutning = 1;
      this.Takform = 0;
      this.Amatt = 14;
      this.Bmatt = 7;
      this.Cmatt = 5;
      this.PanelBredd = [1170];
      this.PanelHöjd = [1700];
      this.PanelVikt = [24];
      this.panelarAll = [[]];
      this.panelarRows = [];
      this.panelarCount = 0;
      this.showResult = false;
      this.finalResultArrObjects = [];
      this.totalFinalResultArrObjects = [];
      this.SumTotalFinalResultArrObjects = [];
      this.alongToAcross = [];
      this.whenPdf = "none";
      this.imgToExport = null;
      this.imgToExportPanel = null;
      this.imgToExportInfo = null;

      
      this.distTop = [];
      this.distLeft = [];
      this.distMellanFästningar = [];
      this.rowLongs = [];

      this.inProgress = false;
      this.ccMattInRandzon = 0;
      this.ccMattOutRandzon = 0;
      this.MaxAvstandMellanFasteIn = [];
      this.MaxAvstandMellanFasteOut = [];
      this.fasteToCanvas = [{}];
      this.panelsInRandzon = false;
      this.PCapacity = {};
      this.tyrensDataToUse = [];
      this.randzoneLeftRight = 0;
      this.randzoneUpDown = 0;
      this.extraFasteCount = [false];
      (this.slataTakExtraFromCanvas = false), this.randzoneCalc();

      this.$refs.canvasComp.resetCanvas();

      window.location.reload();

    },

    switchBreddHojd(v) {
      let spare = this.PanelBredd[v];

      this.PanelBredd[v] = this.PanelHöjd[v];

      this.PanelHöjd[v] = spare;
    },

    async tyrensAPI(v) {
      this.tyrensDataToUse = [];
      this.inProgress = true;

      const vind = this.vind;
      const sno = this.sno;
      const palce = this.places;
      const nockhöjd = this.nockhöjd;
      const Takvinkel = this.Taklutning;
      const ByggnadensBredd = this.Amatt;
      const ByggnadensHojd = this.Bmatt;
      const snorasskydd = this.snorasskydd;
      const Taktyp =
        this.TypAvTak == 0
          ? "shed"
          : this.TypAvTak == 1
          ? "gable"
          : this.TypAvTak == 2
          ? "butterfly"
          : "shed";

      const panelInfo = [];

      for (let i = 0; i < this.PanelHöjd.length; i++) {
        panelInfo.push({
          PanelBredd: this.alongToAcross[i]
            ? this.PanelBredd[i] / 1000
            : this.PanelHöjd[i] / 1000,

          PanelHöjd: this.alongToAcross[i]
            ? this.PanelHöjd[i] / 1000
            : this.PanelBredd[i] / 1000,

          PanelVikt: this.PanelVikt[i],
        });
      }

      function isEqual(obj1, obj2) {
        // Get the keys of both objects
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);

        // If the objects don't have the same number of keys, they're not equal
        if (obj1Keys.length !== obj2Keys.length) {
          return false;
        }

        // Check each key to see if the values are equal
        for (const key of obj1Keys) {
          if (obj1[key] !== obj2[key]) {
            return false;
          }
        }

        // If we made it here, the objects are equal
        return true;
      }

      // Define an empty array to store the unique objects
      const uniqueObjs = [];

      // Loop through each object in the array
      for (const obj of panelInfo) {
        // Check if we already have an equal object in the unique array
        const hasEqualObj = uniqueObjs.some((uniqueObj) =>
          isEqual(uniqueObj, obj)
        );

        // If we don't have an equal object, add this one to the unique array
        if (!hasEqualObj) {
          uniqueObjs.push(obj);
        }
      }
let checkErr=true;
/* 
      try {
        const response = await axios.post(
          process.env.VUE_APP_IDP + "/connect/token",
          {
            client_id: process.env.VUE_APP_ID,
            client_secret: appPassword,
            grant_type: "client_credentials",
            service_id: process.env.VUE_APP_SERVICEID,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const accessToken = response.data.access_token;

        for (let i = 0; i < uniqueObjs.length; i++) {
          const tyrensURL = process.env.VUE_APP_DATA+`?baseWindSpeed=${vind}&terrain=t${palce}&roof.angle=${Takvinkel}&roof.apex=${nockhöjd}&roof.width=${ByggnadensBredd}&roof.type=${Taktyp}&snow.pressure=${sno}&snow.secured=${snorasskydd}&panel.weight=${uniqueObjs[i].PanelVikt}&panel.along=${uniqueObjs[i].PanelHöjd}&panel.across=${uniqueObjs[i].PanelBredd}&roof.length=${ByggnadensHojd}`;
          const apiResponse = await axios.get(tyrensURL, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              //invokerid: process.env.VUE_APP_INVOKERID,
            },
          });

          this.tyrensDataToUse.push({
            data: apiResponse.data,
            matchId:
              uniqueObjs[i].PanelBredd * 1000 +
              "" +
              uniqueObjs[i].PanelHöjd * 1000 +
              "" +
              uniqueObjs[i].PanelVikt,
          });
        }

        await this.randzoneCalc();
        await this.passValuesAssist(v);
        await this.allDataBring();
        await this.$refs.canvasComp.imageToReport();
         this.lpc();
        await this.postHistory();

      } catch (error) {
        checkErr=false;
        console.error(error);

        error.response.status == "400"
          ? alert("You have added a wrong value")
          : alert(error);

      } finally { 
        if (checkErr) {
       // setTimeout(() => {
        this.antalCalc();
        let firstErr=true;
        for (let i = 0; i < this.panelarAll.length; i++) {
          console.log(this.checkPower(i));
          if (this.checkPower(i)) {

            if(firstErr){
            alert(
              "Swemount kan inte godkänna denna konfiguration. Om du väljer att fortsätta trots detta friskriver du Swemount från allt ansvar."
            );
            firstErr=false;
          }
          }
        }
      //}, 9000 * (uniqueObjs.length > 1 ? uniqueObjs.length * 0.5 : 1));
    } else { 
      //setTimeout(() => {

      this.resetCalc();
    //}, 9000 * (uniqueObjs.length > 1 ? uniqueObjs.length * 0.5 : 1));

    }

      //setTimeout(() => {

        this.inProgress = false;
  
      //}, 10400 * (uniqueObjs.length > 1 ? uniqueObjs.length * 0.5 : 1));
      }
      */
      
      let value1 = { "edgeBase": { "length": 10, "width": 7 }, "reductionFactorSnow": 0.7, "lineLoad": { "ultimateLimitState": { "pressure": { "horizontal": 0, "verticalEdge": 1.6727448705882353, "verticalNonedge": 1.7145386116471115 }, "suction": { "horizontal": 0.05677115294117647, "verticalEdge": -1.6846347245120044, "verticalNonedge": -0.77910366823635 } } }, "areaLoad": { "ultimateLimitState": { "pressure": { "horizontal": 0, "verticalEdge": 2.8593929411764707, "verticalNonedge": 2.9308352335848067 }, "suction": { "horizontal": 0.09704470588235295, "verticalEdge": -2.8797174777982977, "verticalNonedge": -1.3318011422843592 } } } };
      let value2 = { "edgeBase": { "length": 10, "width": 7 }, "reductionFactorSnow": 0.7, "areaLoad": { "ultimateLimitState": { "pressure": { "horizontal": 0.05, "verticalEdge": 3.3, "verticalNonedge": 2.95 }, "suction": { "horizontal": 0.05677115294117647, "verticalEdge": -2.16, "verticalNonedge": -0.42 } } }, "lineLoad": { "ultimateLimitState": { "pressure": { "horizontal": 0.05, "verticalEdge": 3.82, "verticalNonedge": 3.42 }, "suction": { "horizontal": 0.09704470588235295, "verticalEdge": -2.5, "verticalNonedge": -0.49 } } } };
    
      for(let i=0; i<uniqueObjs.length;i++){
        this.tyrensDataToUse.push({data:this.alongToAcross[0]? value2 : value1,matchId:uniqueObjs[i].PanelBredd*1000+''+uniqueObjs[i].PanelHöjd*1000+''+uniqueObjs[i].PanelVikt});

      }

 await this.randzoneCalc();
        await this.passValuesAssist(v);
       // await this.allDataBring();
        await this.$refs.canvasComp.imageToReport();
         this.lpc();
                       this.inProgress = false;
                     
console.log(this.showResult);
  
},

    exportToPDF() {
      this.whenPdf = "none";
      let today = new Date().toISOString().slice(0, 10);
      var doc = new jsPDF("p", "pt", "a4", true, true);
            //595 x 842

      var RaportN= this.reportNum;

      var projektNamn= this.projektNamn;

      doc.addFileToVFS(`${rootBrach}/Montserrat-Bold.ttf`);
      doc.addFont("Montserrat-Bold.ttf", "Montserrat-Bold", "normal");
      doc.setFont("Montserrat-Bold");

      doc.addFileToVFS(`${rootBrach}/Montserrat-Regular.ttf`);
      doc.addFont("Montserrat-Regular.ttf", "Montserrat", "normal");
      doc.setFont("Montserrat");
      var totalPanel = this.panelarAll.length - 1;
      function fotterAndHeader(pageN) {
        doc.addImage(`${rootBrach}/swemount_logo.png`, "png", 20, 30, 129, 26);
        doc
          .setFont("Montserrat-Bold")
          .setFontSize(15)
          .setTextColor("#22326C")
          .text("Sammanställning Konfiguration", 300, 30);
        doc.setFont("Montserrat").setFontSize(12).text('Projektnamn ' + String(projektNamn) + ' / '+ String(RaportN) , 300, 45);
        doc.setFont("Montserrat").setFontSize(12).text('datum '+today, 300, 60);

        doc.setDrawColor("#22326C").setLineWidth(1).line(10, 75, 585, 75);
        doc.setDrawColor("#22326C").setLineWidth(1).line(10, 770, 585, 770);
        doc
          .setFont("Montserrat-Bold")
          .setFontSize(10)
          .setTextColor("#22326C")
          .text("CFW TRADING AB", 20, 790);
        doc
          .setFont("Montserrat")
          .setFontSize(9)
          .setTextColor("#22326C")
          .text("Fabriksgatan 15", 20, 805);
        doc
          .setFont("Montserrat")
          .setFontSize(9)
          .setTextColor("#22326C")
          .text("571 78 Forserum", 20, 820);
        doc
          .setFont("Montserrat-Bold")
          .setFontSize(10)
          .setTextColor("#22326C")
          .text("010-300 14 10", 250, 800);
        doc
          .setFont("Montserrat")
          .setFontSize(8)
          .setTextColor("#22326C")
          .text(String(pageN) + " (" + (6 + totalPanel * 4) + ")", 280, 820);

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(10)
          .setTextColor("#22326C")
          .text("info@swemount.se", 460, 800);
      }
      fotterAndHeader(1);

      doc
        .setFont("Montserrat-Bold")
        .setFontSize(16)
        .setTextColor("#22326C")
        .text("Total", 250, 110);
      doc
        .setDrawColor("#409e99")
        .setLineWidth(4)
        .setLineCap("round")
        .line(250, 120, 290, 120);

      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text(`Antal: ${this.panelarCount}`, 50, 150);
      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text(`Antal paneler:  ${this.panelarCount}`, 50, 165);
      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text(
          "Vikt: " +
            Math.round(
              this.SumTotalFinalResultArrObjects.reduce(
                (accumulator, currentItem) => {
                  return accumulator + currentItem.Vikt * currentItem.Antal;
                },
                0
              ) * 100
            ) /
              100 +
            "kg",
          50,
          180
        );
      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text(
          "Pris: " +
            Math.round(
              this.SumTotalFinalResultArrObjects.reduce(
                (accumulator, currentItem) => {
                  return accumulator + currentItem.Pris * currentItem.Antal;
                },
                0
              ) * 100
            ) /
              100 +
            "kr",
          50,
          195
        );

        doc.setFontSize(3);
        doc.autoTable({
        html: "#table-topdf",
        useCss: true,
        startY: 230,
        startX: 10,

      });

      doc.addPage();

      fotterAndHeader(2);

      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text("Geometri", 50, 130);
      doc.autoTable({
        html: "#Geometri",
        useCss: true,
        startY: 145,
        margin: 50,
        tableWidth: 200,
      });

      doc.autoTable({
        html: "#Geometri2",
        useCss: true,
        startY: 145,
        margin: 300,
        tableWidth: 200,
      });

      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text("Lastförutsättningar", 50, 270);

      doc.autoTable({
        html: "#Lastförutsättningar",
        useCss: true,
        startY: 285,
        margin: 50,
        tableWidth: 450,
      });

      doc
        .setFont("Montserrat-Bold")
        .setFontSize(9)
        .setTextColor("#22326C")
        .text("randzoner", 50, 540);

      doc.autoTable({
        html: "#randzon",
        useCss: true,
        startY: 575,
        margin: 50,
        tableWidth: 200,
        styles: { fontSize: 10 },
      });
      switch (this.TypAvTak) {
        case 1:
          doc.addImage(`${rootBrach}/img/sadel.jpeg`, "jpeg", 300, 530, 200, 200);
          break;
        case 2:
          doc.addImage(
            `${rootBrach}/img/randzoneMot.jpeg`,
            "jpeg",
            300,
            530,
            200,
            200
          );
          break;
        default:
          doc.addImage(
            `${rootBrach}/img/randzone.jpeg`,
            "jpeg",
            300,
            530,
            200,
            200
          );
      }

      doc.addPage();


      const imgW = this.imgToExport.naturalWidth;
      const imgH = this.imgToExport.naturalHeight;
      const ratioWH = imgH/imgW;


      if (imgW>imgH) {
        let tW = 500/ratioWH;
        let tH = 500;
        
        if (tW>780){
          tW = 780;
          tH = 780*ratioWH;
        }

      
      doc.addImage(
        this.imgToExport,
        "png",
        595/2-tH/2,
        -tH +842/2-tW/2,
        tW,
        tH,
        undefined,
        "NONE",
        -90
      );} else {
        let tW = 803/ratioWH;
        let tH = 803;
        
        if (tW>500){
          tW = 500;
          tH = 500*ratioWH;
        }

            //595 x 842

      doc.addImage(
        this.imgToExport,
        "png",
        595/2-tW/2,
        842/2-tH/2,
        tW,
        tH,
        undefined,
        "NONE",
        0
      );}

      for (let i = 0; i < this.panelarAll.length; i++) {
        doc.addPage();

        fotterAndHeader(3 + i * 4);
        doc
          .setFont("Montserrat-Bold")
          .setFontSize(16)
          .setTextColor("#22326C")
          .text("Sektion " + (i + 1), 250, 150);
        doc
          .setDrawColor("#409e99")
          .setLineWidth(4)
          .setLineCap("round")
          .line(250, 160, 325, 160);

        doc.autoTable({
          html: "#sektion" + i,
          useCss: true,
          startY: 200,
          margin: 50,
          tableWidth: 500,
        });

        doc.addPage();
        fotterAndHeader(4 + i * 4);

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(16)
          .setTextColor("#22326C")
          .text("Sektion Bild" + (i + 1), 225, 130);
        doc
          .setDrawColor("#409e99")
          .setLineWidth(4)
          .setLineCap("round")
          .line(250, 140, 325, 140);
          
      const imgW = (this.alongToAcross[i]? this.panelarAll[i].length / this.panelarRows[i]:this.panelarRows[i])*this.PanelBredd[i]/10;
      const imgH = (!this.alongToAcross[i]? this.panelarAll[i].length / this.panelarRows[i]:this.panelarRows[i])*this.PanelHöjd[i]/10;
      const ratioWH = imgH/imgW;
        console.log('test'+imgW+' '+imgH)
      if (imgW<500&&imgH<500) {
        doc.addImage(
          this.imgToExportPanel[i],
          "png",
          50,
          200,
          imgW,
          imgH,
          undefined,
          "NONE"
        );

        doc.addImage(
          this.imgToExportInfo[i],
          "png",
          25,
          170,
          imgW,
          imgH,
          undefined,
          "NONE"
        );

      } else if (imgW>500&&imgH<500) { 
        doc.addImage(
          this.imgToExportPanel[i][0],
          "png",
          50,
          200,
          240,
          imgH,
          undefined,
          "NONE"
        );

        doc.addImage(
          `${rootBrach}/img/zigzag.jpg`,
          "jpg",
          50+240,
          210,
          20,
          imgH-10,
          undefined,
          "NONE"
        );

        doc.addImage(
          this.imgToExportPanel[i][1],
          "png",
          50+240+20,
          200,
          240,
          imgH,
          undefined,
          "NONE"
        );
        doc.addImage(
          this.imgToExportInfo[i],
          "png",
          25,
          170,
          500,
          imgH,
          undefined,
          "NONE"
        );

      } else if (imgW<500&&imgH>500) {
        doc.addImage(
          this.imgToExportPanel[i][0],
          "png",
          50,
          200,
          imgW,
          240,
          undefined,
          "NONE"
        );
        doc.addImage(
          `${rootBrach}/img/zigzag.jpg`,
          "jpg",
          50,
          200+240,
          imgW,
          20,
          undefined,
          "NONE"
        );

        doc.addImage(
          this.imgToExportPanel[i][1],
          "png",
          50,
          200+240+20,
          imgW,
          240,
          undefined,
          "NONE"
        );
        doc.addImage(
          this.imgToExportInfo[i],
          "png",
          25,
          150,
          imgW,
          500,
          undefined,
          "NONE"
        );
} else if (imgW>500&&imgH>500) { 
  doc.addImage(
          `${rootBrach}/img/zigzag.jpg`,
          "jpg",
          50+240,
          210,
          20,
          500-10,
          undefined,
          "NONE"
        );
        doc.addImage(
          `${rootBrach}/img/zigzag.jpg`,
          "jpg",
          50+15,
          200+240,
          500-15,
          20,
          undefined,
          "NONE"
        );
  doc.addImage(
          this.imgToExportPanel[i][0],
          "png",
          50,
          200,
          240,
          240,
          undefined,
          "NONE"
        );
        doc.addImage(
          this.imgToExportPanel[i][1],
          "png",
          50+240+20,
          200,
          240,
          240,
          undefined,
          "NONE"
        );
        doc.addImage(
          this.imgToExportPanel[i][2],
          "png",
          50+240+20,
          200+240+20,
          240,
          240,
          undefined,
          "NONE"
        );
        doc.addImage(
          this.imgToExportPanel[i][3],
          "png",
          50,
          200+240+20,
          240,
          240,
          undefined,
          "NONE"
        );
        doc.addImage(
          this.imgToExportInfo[i],
          "png",
          25,
          150,
          500,
          500,
          undefined,
          "NONE"
        );
}


        doc.addPage();

        fotterAndHeader(5 + i * 4);
        doc
          .setFont("Montserrat-Bold")
          .setFontSize(16)
          .setTextColor("#22326C")
          .text("Result " + (i + 1), 100, 150);
        doc
          .setDrawColor("#409e99")
          .setLineWidth(4)
          .setLineCap("round")
          .line(100, 160, 150, 160);

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(13)
          .setTextColor("#22326C")
          .text("Utbredda laster", 50, 200);
        doc.autoTable({
          html: "#Utbredda" + i,
          useCss: true,
          startY: 215,
          margin: 50,
          tableWidth: 500,
        });

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(13)
          .setTextColor("#22326C")
          .text("Kraft/infästning i skena", 50, 350);
        doc.autoTable({
          html: "#skena" + i,
          useCss: true,
          startY: 365,
          margin: 50,
          tableWidth: 500,
        });

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(13)
          .setTextColor("#22326C")
          .text("Kraft/infästning i tak", 50, 500);
        doc.autoTable({
          html: "#tak" + i,
          useCss: true,
          startY: 515,
          margin: 50,
          tableWidth: 500,
        });

        doc.addPage();

        fotterAndHeader(6 + i * 4);
        doc
          .setFont("Montserrat-Bold")
          .setFontSize(16)
          .setTextColor("#22326C")
          .text("Utnyttjandegrader " + (i + 1), 100, 150);
        doc
          .setDrawColor("#409e99")
          .setLineWidth(4)
          .setLineCap("round")
          .line(100, 160, 150, 160);

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(13)
          .setTextColor("#22326C")
          .text("Kapacitet i infästningsskena", 50, 200);

        /*  doc
          .setFont("Montserrat")
          .setFontSize(12)
          .setTextColor("#22326C")
          .text("Utstickande skena: x.x%", 50, 215);
*/
        if (this.checkPower(i)) {
          doc
            .setFont("Montserrat")
            .setFontSize(12)
            .setTextColor("#f00")
            .text(
              "Swemount kan inte godkänna denna konfiguration. Om du väljer att fortsätta trots detta friskriver du Swemount från allt ansvar.",
              50,
              500,
              { maxWidth: 500 }
            )
            .setTextColor("#22326C");
        }

        doc.autoTable({
          html: "#infästningsskena" + i,
          useCss: true,
          startY: 230,
          margin: 50,
          tableWidth: 500,
        });

        doc
          .setFont("Montserrat-Bold")
          .setFontSize(13)
          .setTextColor("#22326C")
          .text("Kapacitet för infästningar mellan skena och tak", 50, 350);

        doc.autoTable({
          html: "#infästningar" + i,
          useCss: true,
          startY: 365,
          margin: 50,
          tableWidth: 500,
        });
      }

      //doc.output("dataurlnewwindow");

      doc.save("swemount"+ RaportN+".pdf");
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

    deleteThisGroup(v) {
      this.fasteToCanvas.splice(v, 1);

      this.PanelBredd.splice(v, 1);
      this.PanelHöjd.splice(v, 1);
      this.PanelVikt.splice(v, 1);
    },

    addNewGroup(v) {
      this.fasteToCanvas.push({});
      this.PanelBredd.push(v[0]);
      this.PanelHöjd.push(v[1]);
      this.PanelVikt.push(24);
    },

    backHide() {
      this.showResult = false;
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

    headTypeCapacity() {
      let result = {}; //PCapacity

      if (this.taktTyp == 0 && this.Infästning == 0) {
        result = this.dimensionCapacity.FPBF;
      }
      if (this.taktTyp == 0 && this.Infästning == 1) {
        result = this.dimensionCapacity.LFBF;
      }
      if (this.taktTyp == 0 && this.Infästning == 2) {
        result = this.dimensionCapacity.TKBF;
      }
      if (this.taktTyp == 0 && this.Infästning == 3) {
        result = this.dimensionCapacity.TKBF;
      }
      if (this.taktTyp == 0 && this.Infästning == 4) {
        result = this.dimensionCapacity.KLBF;
      }
      if (this.taktTyp == 1 && this.Infästning == 0) {
        result = this.dimensionCapacity.FPTF;
      }
      if (this.taktTyp == 1 && this.Infästning == 1) {
        result = this.dimensionCapacity.LFTF;
      }
      if (this.taktTyp == 1 && this.Infästning == 2) {
        result = this.dimensionCapacity.TKTF;
      }
      if (this.taktTyp == 1 && this.Infästning == 3) {
        result = this.dimensionCapacity.TKTF;
      }
      if (this.taktTyp == 1 && this.Infästning == 4) {
        result = this.dimensionCapacity.KLTF;
      }
      if (this.taktTyp == 2) {
        result = this.dimensionCapacity.FF;
      }

      if (this.taktTyp == 3 && this.Material == "Stålplåt") {
        result = this.dimensionCapacity.skruvStålplåt;
      }
      if (this.taktTyp == 3 && this.Material == "Aluminiumplåt") {
        result = this.dimensionCapacity.skruvAluminium;
      }

      if (this.taktTyp == 4 && this.Material == "Stålplåt") {
        result = this.dimensionCapacity.skruvStålplåt;
      }
      if (this.taktTyp == 4 && this.Material == "Aluminiumplåt") {
        result = this.dimensionCapacity.skruvAluminium;
      }

      if (this.taktTyp == 5) {
        result = this.dimensionCapacity.TP;
      }

      return result;
    },

    avtandMellanFasteCalc(type) {
      let inRand = [];
      let outRand = [];

      for (let i = 0; i < this.tyrensDataToUse.length; i++) {
        let LUSVNEa =
          this.tyrensDataToUse[i].data.lineLoad.ultimateLimitState.suction
            .verticalEdge;
        let LUPVNEa =
          this.tyrensDataToUse[i].data.lineLoad.ultimateLimitState.pressure
            .verticalEdge;
        let LUPH =
          this.tyrensDataToUse[i].data.lineLoad.ultimateLimitState.pressure
            .horizontal;
        let FyP = type.FyP;
        let FyN = type.FyN;
        let FxN = type.FxN;

        let ccV1a = Math.abs(FyP / LUSVNEa);
        let ccV2a = Math.abs(FyN / LUPVNEa);
        let ccV3 = Math.abs(FxN / LUPH);
        //this.MaxAvstandMellanFasteIn = Math.abs(Math.round(1/Math.min(ccV1,ccV2,ccV3)*100)/100);
        inRand.push(Math.round(Math.min(ccV1a, ccV2a, ccV3) * 1000) / 1000);

        let LUSVNEb =
          this.tyrensDataToUse[i].data.lineLoad.ultimateLimitState.suction
            .verticalNonedge;
        let LUPVNEb =
          this.tyrensDataToUse[i].data.lineLoad.ultimateLimitState.pressure
            .verticalNonedge;

        let ccV1b = Math.abs(FyP / LUSVNEb);
        let ccV2b = Math.abs(FyN / LUPVNEb);

        //this.MaxAvstandMellanFasteOut = Math.abs(Math.round(1/Math.min(ccV1,ccV2,ccV3)*100)/100);
        outRand.push(Math.round(Math.min(ccV1b, ccV2b, ccV3) * 1000) / 1000);
      }
      return [inRand, outRand];
    },

    findPanelAPI(num) {
      let matchCode =
        (this.alongToAcross[num] ? this.PanelBredd[num] : this.PanelHöjd[num]) +
        "" +
        (this.alongToAcross[num] ? this.PanelHöjd[num] : this.PanelBredd[num]) +
        "" +
        this.PanelVikt[num];

      return this.tyrensDataToUse.findIndex((e) => e.matchId == matchCode);
    },

    findAllfaste(panel) {
      let cc = 0;
      let type = this.headTypeCapacity();
      //MaxAvstandMellanFasteIn

      let along = this.alongToAcross[panel] ? this.Bredd : this.Höjd;

      if (this.taktTyp == 0 || this.taktTyp == 1) {
        along = along / 10;
      }

      let ccIn =
        this.avtandMellanFasteCalc(type)[0][this.findPanelAPI(panel)] * 100;
      let ccOut =
        this.avtandMellanFasteCalc(type)[1][this.findPanelAPI(panel)] * 100;

      if (this.panelsInRandzon) {
        cc = ccIn;
      } else {
        cc = ccOut;
      }

      if (this.taktTyp == 3 || this.taktTyp == 4) {
        cc = 33;
        ccIn = cc;
        ccOut = cc;
      }

      if (this.taktTyp == 0 && (this.Infästning == 2 || this.Infästning == 3)) {
        if (cc > 120) {
          cc = 120;
          ccIn = cc;
          ccOut = cc;
        }
      }

      if (this.taktTyp == 1 && this.Infästning == 2|| this.Infästning == 3) {
        if (cc > 120) {
          cc = 120;
          ccIn = cc;
          ccOut = cc;
        }
      }

      if (this.taktTyp == 2) {
        if (this.alongToAcross[panel]) {
          cc = this.AvståndFalser / 10;
          ccIn = cc;
          ccOut = cc;
          this.extraFasteCount[panel] = false;

        }
      }

      if (cc > 300) {
          cc = 300;
          ccIn = cc;
          ccOut = cc;
        }

      let fastePerRow = Math.ceil(
        this.rowLongs[panel] / (Math.floor(cc / along) * along)
      );

      if (this.slataTakExtraFromCanvas) {
        cc = this.rowLongs[panel] / fastePerRow;
        fastePerRow++;
        this.extraFasteCount[panel] = false;
      }

      let MaxAvstandMellanFastetoCanvas = 0;
      if (cc < along) {
        alert(
          "Wrong center to center values, but it will be calculated anyway. You need to check it manually"
        );
      } else {
        this.MaxAvstandMellanFasteIn[panel] = Math.floor(ccIn / along) * along;
        this.MaxAvstandMellanFasteOut[panel] =
          Math.floor(ccOut / along) * along;
        MaxAvstandMellanFastetoCanvas = this.panelsInRandzon
          ? Math.floor(ccIn / along) * along
          : Math.floor(ccOut / along) * along;

        if (this.slataTakExtraFromCanvas) {
          MaxAvstandMellanFastetoCanvas = Math.floor(cc / along) * along;

          this.MaxAvstandMellanFasteIn[panel] = Math.floor(cc / along) * along;
          this.MaxAvstandMellanFasteOut[panel] = Math.floor(cc / along) * along;
        }
      }

      this.fasteToCanvas.pop();

      this.fasteToCanvas.push(
        {
          fastePerRow: fastePerRow,
          MaxAvstandMellanFaste: MaxAvstandMellanFastetoCanvas,
        },
        {}
      );

      let Allfaste = fastePerRow * 2 * this.panelarRows[panel];

      if (this.extraFasteCount[panel]) {
        Allfaste += 2 * this.panelarRows[panel];
      }
      
              

      return Allfaste;
    },

    slataTakExtra() {
      this.slataTakExtraFromCanvas = true;

      this.antalCalc();
    },

    antalCalc() {
      this.totalFinalResultArrObjects = [];
      this.fasteToCanvas = [];
      if (this.selectedTak == this.BetongpannorFotplatta) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);
          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];

          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "BF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "FP1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = BU12[0];
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = BU12[1];
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;

              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = TS63[0];
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = TS63[1];
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.BetongpannorLäktfäste) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "BF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "LF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = BU12[0];
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = BU12[1];
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = TS63[0];
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = TS63[1];
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.BetongpannorTakkroken) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);
          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];

          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "TK1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;

              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }
      if (this.selectedTak == this.BetongpannorKlämfäste) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);
          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];

          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "TK1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;

              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.TegelpannorFotplatta) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "TF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "FP1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = BU12[0];
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = BU12[1];
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = TS63[0];
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = TS63[1];
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.TegelpannorLäktfäste) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "TF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "LF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = BU12[0];
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = BU12[1];
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = TS63[0];
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = TS63[1];
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.TegelpannorTakkroken) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "TK1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }
      if (this.selectedTak == this.TegelpannorKlämfäste) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let BU12 = this.selectCheap("BU1200", "BU1201", Allfaste, 100, 10);
          let TS63 = this.selectCheap(
            "TS6310",
            "TS6301",
            Allfaste * 2,
            100,
            10
          );
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "TK1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "BU1200":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "BU1201":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "TS6310":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "TS6301":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.FalsatPlåttakKlicktakFalsfäste) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "FF1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.ProfileratPlåttakLångSkena) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.TegelprofileratPlåttakLångSkena) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;
              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5102":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      if (this.selectedTak == this.SlätaTakTätplåtSlät) {
        for (let i in this.panelarAll) {
          let Allfaste = this.findAllfaste(i);

          let oneRow = this.rowLongs[i] / 100 / 2.26;
          let panelInRow = this.panelarAll[i].length / this.panelarRows[i];
          let VB13 = this.selectCheap("VB1305", "VB1301", Allfaste, 50, 10);
          let MU10 = this.selectCheap("MU1010", "MU1001", Allfaste, 100, 10);
          let SS61 = this.selectCheap(
            "SS6190",
            "SS6191",
            Allfaste + Math.ceil(oneRow * 2 * this.panelarRows[i]) * 2,
            100,
            10
          );

          for (let frao in this.finalResultArrObjects) {
            switch (this.finalResultArrObjects[frao].ArtNr) {
              case "CP1400":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;
              case "IS2450":
                this.finalResultArrObjects[frao].Antal = Math.ceil(
                  oneRow * 2 * this.panelarRows[i]
                ); ////////////fråga korrekt
                break;
              case "PL5050":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SPL5050":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL1000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL1000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      this.panelarRows[i] * 4)
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "KL2000":
                this.colorName == "gray"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;
              case "SKL2000":
                this.colorName == "black"
                  ? (this.finalResultArrObjects[frao].Antal =
                      (panelInRow - 1) * 2 * this.panelarRows[i])
                  : (this.finalResultArrObjects[frao].Antal = 0);
                break;

              case "TP3552":
                this.finalResultArrObjects[frao].Antal = Allfaste;
                break;

              case "VB1305":
                this.finalResultArrObjects[frao].Antal = VB13[0];
                break;
              case "VB1301":
                this.finalResultArrObjects[frao].Antal = VB13[1];
                break;

              case "MU1010":
                this.finalResultArrObjects[frao].Antal = MU10[0];
                break;
              case "MU1001":
                this.finalResultArrObjects[frao].Antal = MU10[1];
                break;

              case "GB0010":
                this.finalResultArrObjects[frao].Antal = Allfaste * 2;
                break;

              case "SS6190":
                this.finalResultArrObjects[frao].Antal = SS61[0];
                break;
              case "SS6191":
                this.finalResultArrObjects[frao].Antal = SS61[1]; ////////////fråga behövs korrekt
                break;

              case "MA5111":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA1008":
                this.finalResultArrObjects[frao].Antal = 0;
                break;
              case "MA5103":
                this.finalResultArrObjects[frao].Antal = 0;
                break;

              default:
                this.finalResultArrObjects[frao].Antal = 0;
                break;
            }
          }
          this.totalFinalResultArrObjects.push(
            JSON.parse(JSON.stringify(this.finalResultArrObjects))
          );
        }
      }

      //Object.values(this.SumTotalFinalResultArrObjects)

      this.SumTotalFinalResultArrObjects = this.finalResultArrObjects;
      this.antalFasteArr=[];

      for (let ant in this.totalFinalResultArrObjects) {
        this.antalFasteArr.push(this.totalFinalResultArrObjects[ant][0].Antal);
    }

      for (let i in this.SumTotalFinalResultArrObjects) {
        let sum = 0;
        for (let j in this.totalFinalResultArrObjects) {
          sum += this.totalFinalResultArrObjects[j][i].Antal;
        }
        this.SumTotalFinalResultArrObjects[i].Antal = sum;
      }
    },
    positionSkenaFromCanvas(v) {
      this.alongToAcross = v[0];
    },
    imageFromCanvas(v) {
      this.imgToExport = v[0];
      this.imgToExportPanel = v[1];
      this.imgToExportInfo = v[2];

    },

   async passValuesAssist(v) {
      let finTotal = 0;
      for (let j in v[0]) {
        finTotal += v[0][j].length;
      }
      this.panelarCount = finTotal;
      //this.imgToExport = v[1];
      this.cheker(this.selectedTak);
      this.panelarAll = v[0];

      for (let q = 0; q < this.panelarAll.length; q++) {
          this.checkElPower[q] = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ];

          this.lastPageCalc[q] = [0,0,0,0,0,0,0,0,0,0];

        }

      this.panelarRows = v[2];
      this.distTop = v[3];
      this.distLeft = v[4];
      this.distMellanFästningar = v[5];
      this.rowLongs = v[6];
      // this.alongToAcross = v[7]; ///////////////////////////////////// excute before
      let TV = this.headTypeCapacity();
      this.avtandMellanFasteCalc(TV);
      this.antalCalc();

      this.showResult = true;
    },
    passValues(v) {
      this.tyrensAPI(v);
    },
    extraFasteFromCanvas(v) {
      this.extraFasteCount = v;
    },
  },
};
</script>

<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<template>

  <!--implementing motion div-->
  <div class="animation-container">
    <Presence>
      <Motion :key="current2" :initial="{ opacity: 0, y: 50 }" :animate="{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 }
            }" :exit="{ opacity: 0, y: -50 }" class="slide">


        <!--Set current2 (named "current2" to differ from "current" in the calcbody) === page/div number in order-->
        <div v-if="current2 === 0" class="motion-div">


          <div class="Tak-Container">
            <div class="tak-body">
              <div class="second-head">
                <h1>{{ langIsSe ? "Taktäckning " : "Taktäckning " }} {{ takNum + 1 }}</h1>
                <hr />
              </div>

              <div class="Visual-select-taktackning">

                <div :class="['selection', taktTyp == 0 ? '  selection-pre' : '']" @click="
            taktTyp = '0';
            Infästning = 0;
            Bredd = 300;
            Höjd = 330;
          ">
                  <div class="visual-select-taktackning-title">
                    <img :class="['imgs-selects ', taktTyp == 0 ? ' imgs-selects-active' : '']"
                      src="/calc/Betongtakpannor.jpg" alt="" />

                  </div>

                  <div :class="['p3', taktTyp != 0 ? 'hidden-div' : '']">
                    <p>
                      Betongpannor
                      <span v-if="taktTyp == 0">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                    <label for="">
                      Bredd
                      <div class="measurement">
                        <input type="number" v-model="Bredd" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>
                    <label for="">Höjd
                      <div class="measurement">
                        <input type="number" v-model="Höjd" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div :class="['selection', taktTyp == 1 ? '  selection-pre' : '']" @click="
            taktTyp = '1';
            Infästning = 0;
            Bredd = 240;
            Höjd = 375;
          ">
                  <div class="visual-select-title">
                    <img :class="['imgs-selects ', taktTyp == 1 ? ' imgs-selects-active' : '']"
                      src="/calc/Tegeltakpannor.jpg" alt="" />

                  </div>
                  <div :class="['p3', taktTyp != 1 ? 'hidden-div' : '']">
                    <p>
                      Tegelpannor
                      <span v-if="taktTyp == 1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                    <label for="">Bredd
                      <div class="measurement">
                        <input type="number" v-model="Bredd" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>
                    <label for="">Höjd
                      <div class="measurement">
                        <input type="number" v-model="Höjd" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div :class="['selection', taktTyp == 2 ? '  selection-pre' : '']" @click="
            taktTyp = '2';
            Infästning = 0;
            Bredd = 1;
            Höjd = 1;
          ">
                  <div class="visual-select-title">
                    <img :class="['imgs-selects ', taktTyp == 2 ? ' imgs-selects-active' : '']" src="/calc/plattak.jpg"
                      alt="" />

                  </div>
                  <div :class="['p3', taktTyp != 2 ? 'hidden-div' : '']">
                    <p>
                      Falsat plåttak/Klicktak
                      <span v-if="taktTyp == 2">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                    <label for="">Avstånd falser
                      <div class="measurement">
                        <input type="number" v-model="AvståndFalser" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div :class="['selection', taktTyp == 3 ? ' selection-pre' : '']" @click="
            taktTyp = '3';
            Infästning = 0;
            AvståndToppar = 100;
            Bredd = 1;
            Höjd = 1;
          ">
                  <div class="visual-select-title">
                    <img :class="['imgs-selects ', taktTyp == 3 ? ' imgs-selects-active' : '']"
                      src="/calc/Profilerat.jpg" alt="" />

                  </div>
                  <div :class="['p3', taktTyp != 3 ? 'hidden-div' : '']">
                    <p>
                      Profilerat plåttak
                      <span v-if="taktTyp == 3">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                    <label for="">
                      C-C Avstånd toppar
                      <div>
                        <input type="number" v-model="AvståndToppar" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>
                    <label for="">Material
                      <select class="q" v-model="Material">
                        <option>Stålplåt</option>
                        <option>Aluminiumplåt</option>
                      </select></label>
                  </div>
                </div>

                <div :class="['selection', taktTyp == 4 ? '  selection-pre' : '']" @click="
            taktTyp = '4';
            Infästning = 0;
            AvståndToppar = 200;
            Bredd = 1;
            Höjd = 1;
          ">
                  <div class="visual-select-title">
                    <img :class="['imgs-selects ', taktTyp == 4 ? ' imgs-selects-active' : '']"
                      src="/calc/TegelprofileratPlattak.jpg" alt="" />


                  </div>
                  <div :class="['p3', taktTyp != 4 ? 'hidden-div' : '']">
                    <p>
                      Tegelprofilerat plåttak
                      <span v-if="taktTyp == 4">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p><label for="">C-C Avstånd toppar
                      <div>
                        <input type="number" v-model="AvståndToppar" class="input-short" /><span class="unit">mm</span>
                      </div>
                    </label>

                    <label for="">Material
                      <select class="q" v-model="Material">
                        <option>Stålplåt</option>
                        <option>Aluminiumplåt</option>
                      </select></label>
                  </div>
                </div>
                <div :class="['selection', taktTyp == 5 ? '  selection-pre' : '']" @click="
            taktTyp = '5';
            Infästning = 0;
            Bredd = 1;
            Höjd = 1;
          ">
                  <div class="visual-select-title">
                    <img :class="['imgs-selects ', taktTyp == 5 ? ' imgs-selects-active' : '']" src="/calc/SlataTak.jpg"
                      alt="" />
                  </div>
                  <p>
                    Släta tak
                    <span v-if="taktTyp == 5">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="tak-infast">
              <div class="second-head">
                <h1> Infästning {{ takNum + 1 }}</h1>
                <hr />
              </div>

              <div class="Tak-infast-Visual-select">

                <div v-for="(i, index) in InfästningArr[taktTyp]" v-bind:key="index"
                  :class="['selection', Infästning == index ? '  selection-pre' : '']" @click="Infästning = index">
                  <p>
                    {{ i.name }}
                    <span v-if="Infästning == index">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p> <img :src="`${i.pic}`" alt="" :class="[
                    'imgs-selects ',
                    Infästning == index ? ' imgs-selects-active' : '',
                  ]" />

                  <!--<input
                  type="radio"
                  :name="'Infästning' + takNum"
                  :value="index"
                  v-model="Infästning"
                />-->

                </div>
              </div>
            </div>

          </div>

        </div>
        <div v-if="current2 === 1" class="motion-div">

          <div class="klammer-installningar-container">
            <div class="klammer-container">
              <div class="second-head">
                <h1>
                  {{ langIsSe ? "Typ av klammer " : "Typ av klammer " }} {{ takNum + 1 }}
                </h1>
                <hr />
              </div>
              <div class="Visual-select-klammer">
                <div class="selection selection-pre">
                  <img src="/products/KL2000.jpg" alt="" :class="['imgs-selects ', 1 ? ' imgs-selects-active' : '']" />

                  <!--<input type="radio" :name="'klammer' + takNum" value=""checked />-->
                  <p>
                    Komplett
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="installningar-container">
              <div class="second-head">
                <h1>
                  {{ langIsSe ? "Inställningar " : "Inställningar " }} {{ takNum + 1 }}
                </h1>
                <hr />
              </div>
              <div class="Visual-select-installningar">
                <div :class="['selection', colorName == 'gray' ? '  selection-pre' : '']" @click="colorName = 'gray'">
                  <div :class="[
                      'imgs-selects color-box varmforzinkat',
                      colorName == 'gray' ? ' imgs-selects-active' : '',
                    ]">
                    <i v-if="colorName == 'gray'" class="fa-solid fa-check"></i>
                  </div>
                  <p>
                    Varmförzinkat
                    <span v-if="colorName == 'gray'">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <!--<input
                    type="radio"
                    :name="'color' + takNum"
                    value="gray"
                    v-model="colorName"
                  />-->
                </div>
                <div :class="['selection', colorName == 'black' ? '  selection-pre' : '']" @click="colorName = 'black'">
                  <div :class="[
                      'imgs-selects color-box svartlackerat',
                      colorName == 'black' ? ' imgs-selects-active' : '',
                    ]">
                    <i v-if="colorName == 'black'" class="fa-solid fa-check"></i>
                  </div>
                  <p>
                    Svartlackerat
                    <span v-if="colorName == 'black'">&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-square-check white"></i>
                    </span>
                  </p>
                  <!-- <input
                    type="radio"
                    :name="'color' + takNum"
                    value="black"
                    v-model="colorName"
                    checked
                  />-->
                </div>
              </div>
            </div>
          </div>


        </div>
        <div v-if="current2 === 2" class="motion-div">
          <div class="motion-div">

            <div class="second-head">
              <h1>
                {{ langIsSe ? "Egenskaper för tak " : "Egenskaper för tak " }}
                {{ takNum + 1 }}
              </h1>
              <hr />
            </div>
            <h2>Typ av tak</h2>
            <div class="Visual-select-taktyp">
              <div @click="TypAvTak = 0" :class="['selection', TypAvTak == 0 ? '  selection-pre' : '']">
                <img src="/calc/Pulpet.jpg" alt="" :class="[
                    'imgs-selects ',
                    TypAvTak == 0 ? ' imgs-selects-active' : '',
                  ]" />
                <p>
                  Pulpet
                  <span v-if="TypAvTak == 0">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                  </span>
                </p>
              </div>
              <div @click="TypAvTak = 1" :class="['selection', TypAvTak == 1 ? '  selection-pre' : '']">
                <img src="/calc/Sadel.jpg" alt="" :class="[
                    'imgs-selects ',
                    TypAvTak == 1 ? ' imgs-selects-active' : '',
                  ]" />
                <p>
                  Sadel
                  <span v-if="TypAvTak == 1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                  </span>
                </p>
              </div>
              <div @click="TypAvTak = 2" :class="['selection', TypAvTak == 2 ? '  selection-pre' : '']">
                <img src="/calc/Motfalls1.jpeg" alt="" :class="[
                    'imgs-selects ',
                    TypAvTak == 2 ? ' imgs-selects-active' : '',
                  ]" />
                <p>
                  Motfalls
                  <span v-if="TypAvTak == 2">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                  </span>
                </p>
              </div>
            </div>




            <div class="p3 middle-inputs">
              <label for="">Byggnadens nockhöjd <br />
                <div class="measurement">
                  <input type="number" v-model="nockhöjd" /><span class="unit">m</span>
                </div>
              </label>
              <label for="">Taklutning (1-75° endast heltal) <br />
                <div class="measurement">
                  <input type="number" v-model="Taklutning" /><span class="unit">grader</span>
                </div>
              </label>
              <label for="" style="display: flex; flex-direction: row; align-items: center">Snörasskydd
                <input class="check-input" type="checkbox" v-model="snorasskydd" />
              </label>
            </div>
          </div>
        </div>
        <div v-if="current2 === 3" class="motion-div-canvas">


          <div>
            <!-- Button to open/close the sidebar -->
            <button v-if="!showResult" class="toggle-button" @click="toggleSidebar">Egenskaper för tak</button>

            <!-- Sidebar content -->
            <div class="sidebar" :class="{ 'open': isSidebarOpen }">
              <!-- Sidebar content goes here -->
              <div class="canvas-hidden-sidebar" style="max-width: 1920px">

                <div class="second-head">
                  <h1>
                    {{
                      langIsSe
                        ? "Takform på tilltänkt taksida "
                        : "Takform på tilltänkt taksida "
                    }}
                    {{ takNum + 1 }}
                  </h1>
                  <hr />
                </div>

                <div class="Visual-select-sidebar shapes-style">
                  <div @click="
                      Takform = 0;
                      Amatt = 14;
                      Bmatt = 7;
                      Cmatt = 0;
                    " :class="['selection', Takform == 0 ? '  selection-pre' : '']">
                    <img src="/shapes/Rektangel.png" alt=""
                      :class="['imgs-selects ', Takform == 0 ? ' imgs-selects-active' : '']" />
                    <p>
                      Rektangel
                      <span v-if="Takform == 0">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div @click="
                      Takform = 1;
                      Amatt = 14;
                      Bmatt = 7;
                      Cmatt = 5;
                    " :class="['selection', Takform == 1 ? '  selection-pre' : '']">
                    <img src="/shapes/Vinkel_1.png" alt=""
                      :class="['imgs-selects ', Takform == 1 ? ' imgs-selects-active' : '']" />
                    <p>
                      Vinkel 1
                      <span v-if="Takform == 1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div @click="
                      Takform = 2;
                      Amatt = 14;
                      Bmatt = 7;
                      Cmatt = 5;
                    " :class="['selection', Takform == 2 ? '  selection-pre' : '']">
                    <img src="/shapes/Vinkel_2.png" alt=""
                      :class="['imgs-selects ', Takform == 2 ? ' imgs-selects-active' : '']" />
                    <p>
                      Vinkel 2
                      <span v-if="Takform == 2">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div @click="
                      Takform = 3;
                      Amatt = 14;
                      Bmatt = 7;
                      Cmatt = 8;
                    " :class="['selection', Takform == 3 ? '  selection-pre' : '']">
                    <img src="/shapes/Romb_1.png" alt=""
                      :class="['imgs-selects ', Takform == 3 ? ' imgs-selects-active' : '']" />
                    <p>
                      Romb 1
                      <span v-if="Takform == 3">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div @click="
                      Takform = 4;
                      Amatt = 14;
                      Bmatt = 7;
                      Cmatt = 8;
                    " :class="['selection', Takform == 4 ? '  selection-pre' : '']">
                    <img src="/shapes/Romb_2.png" alt=""
                      :class="['imgs-selects ', Takform == 4 ? ' imgs-selects-active' : '']" />
                    <p>
                      Romb 2
                      <span v-if="Takform == 4">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div @click="
                      Takform = 5;
                      Amatt = 14;
                      Bmatt = 7;
                      Cmatt = 8;
                    " :class="['selection', Takform == 5 ? '  selection-pre' : '']">
                    <img src="/shapes/Trapets_1.png" alt=""
                      :class="['imgs-selects ', Takform == 5 ? ' imgs-selects-active' : '']" />
                    <p>
                      Trapets 1
                      <span v-if="Takform == 5">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                  <div @click="
                      Takform = 6;
                      Amatt = 8;
                      Bmatt = 7;
                      Cmatt = 14;
                    " :class="['selection', Takform == 6 ? '  selection-pre' : '']">
                    <img src="/shapes/Trapets_2.png" alt=""
                      :class="['imgs-selects ', Takform == 6 ? ' imgs-selects-active' : '']" />
                    <p>
                      Trapets 2
                      <span v-if="Takform == 6">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-square-check white"></i>
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <div class="second-head">
                      <h1>
                        {{ langIsSe ? "Ange mått för taksida " : "Ange mått för taksida " }}
                        {{ takNum + 1 }}
                      </h1>

                    </div>
                    <!--          v-bind:src="'/swemounttest/shapes/' + (Takform + 1) + '.png'" 
            -->
                    <img v-bind:src="'/shapes/' + (Takform + 1) + '.png'" alt="" class="shape-big-photo" />
                    <div class="p3 middle-inputs-wider" style="display: flex">
                      <label for="">A <br />
                        <div class="measurement">
                          <input class="input-short" type="number" v-model="Amatt" /><span class="unit">m</span>
                        </div>
                      </label>
                      <label for="">B<br />
                        <div class="measurement">
                          <input class="input-short" type="number" v-model="Bmatt" /><span class="unit">m</span>
                        </div>
                      </label>
                      <label for="" v-if="!Takform == 0">C <br />
                        <div class="measurement">
                          <input class="input-short" type="number" v-model="Cmatt" /><span class="unit">m</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="panel-storlek" v-for="(i, index) in PanelBredd" v-bind:key="index">
                    <div class="second-head" style="margin: 0">
                      <h2 style="text-align: left">Panelstorlek {{ index + 1 }}</h2>

                    </div>

                    <p></p>
                    <div class="p3 middle-inputs-wider" style="display: flex">
                      <label for="">Bredd <br />
                        <div class="measurement">
                          <input class="input-short" type="number" v-model="PanelBredd[index]" /><span
                            class="unit">mm</span>
                        </div>
                      </label>
                      <label for="">Höjd<br />
                        <div class="measurement">
                          <input class="input-short" type="number" v-model="PanelHöjd[index]" /><span
                            class="unit">mm</span>
                        </div>
                      </label>
                      <label for="">Vikt per panel <br />
                        <div class="measurement">
                          <input class="input-short" type="number" v-model="PanelVikt[index]" /><span
                            class="unit">kg</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <div class="main-content">
              <div class="divElem">
                <canvasD ref="canvasComp" :A="Amatt * 100" :B="Bmatt * 100" :C="Cmatt * 100" :shape="Takform"
                  :bredd="PanelBredd" :hojd="PanelHöjd" :pannorBredd="Bredd" :pannorHöjd="Höjd" :vikt="PanelVikt"
                  :nockhojd="nockhöjd" :typTak="TypAvTak" :AvståndFalser="AvståndFalser" :taktTyp="taktTyp"
                  :canvasNum="takNum" :edgeLength="randzoneLeftRight" :edgeWidth="randzoneUpDown"
                  :fastePerRowAPI="fasteToCanvas" @inRandzon="inRandzonChange" @extraFaste="extraFasteFromCanvas"
                  @imageOfRoof="imageFromCanvas" @positionSkena="positionSkenaFromCanvas" @rotatePanel="switchBreddHojd"
                  @values="passValues" @Hide="backHide" @newGroup="addNewGroup" @deleteGroup="deleteThisGroup"
                  @unGroupFastar="unGroupFastarFromCanvas" @slataTak="slataTakExtra" />

                <button @click="resetCalc" class="reset-button">Börja om</button>
<br>
                <button v-if="showResult" class="download-button" @click="exportToPDF">
      Ladda ner PDF
    </button>
    <br>
    <br>

              </div>
            </div>
          </div>


        </div>

        

      </Motion>



    </Presence>
    <div class="animation-buttons ">
      <!-- If current2 === 0, display a button that goes back to calcbody -->
      <button v-if="current2 < 0" @click="calcbody"> <img src="../../public/icons/svgs/arrow-fat-left.svg" alt="">
        
      </button>

      <!-- If current2 > 0, display a button that decrements current2 -->
      <button v-else-if="current2<3&&current2>0" @click="current2--"> <img src="../../public/icons/svgs/arrow-fat-left.svg" alt="">

      </button>


      <!-- <button v-if="current2===0" @click="current2--">
        <img src="../../public/icons/svgs/arrow-fat-left.svg" alt=""> 
      </button>-->
      <button v-if="current2<3" @click="current2++">
        <img src="../../public/icons/svgs/arrow-fat-right.svg" alt="">
      </button>
    </div>
  </div>
































  <!--Disabling Loader under development, changed 2023-10-04
  enable it before production,
  -->


  <!-- <div :class="['wait-message-bg ', !inProgress ? 'hidden-div' : '']">
    <div :class="['wait-message ', !inProgress ? 'hidden-div' : '']">
      <div class="loader"></div>

      {{
        langIsSe
          ? "Operations in progress please wait..."
          : "Pågående operationer, vänligen vänta..."
      }}
    </div>
  </div> -->








  <div v-if="showResult" class="konfiguration-info" style="display: none">
    <!--<div class="head-tables">
      <table>
        <tr>
          <th>Utbredda laster</th>
          <th>I randzon (F, G & J)</th>
          <th>Innanför randzon (H & I)</th>
        </tr>
        <tr>
          <th>Lyftkraft</th>
          <td>
            {{
              Math.round(
                tyrensDataToUse[tyrensDataToUse.findIndex(e=> e.matchId==1 )].areaLoad.ultimateLimitState.suction
                  .verticalEdge * 100
              ) / 100
            }}
            kN/m2
          </td>
          <td>
            {{
              Math.round(
                tyrensDataToUse.areaLoad.ultimateLimitState.suction
                  .verticalNonedge * 100
              ) / 100
            }}
            kN/m2
          </td>
        </tr>
        <tr>
          <th>Tryckkraft</th>
          <td>
            {{
              Math.round(
                tyrensDataToUse.areaLoad.ultimateLimitState.pressure
                  .verticalEdge * 100
              ) / 100
            }}
            kN/m2
          </td>
          <td>
            {{
              Math.round(
                tyrensDataToUse.areaLoad.ultimateLimitState.pressure
                  .verticalNonedge * 100
              ) / 100
            }}
            kN/m2
          </td>
        </tr>
        <tr>
          <th>Horisontell kraft</th>
          <td>
            {{
              Math.round(
                tyrensDataToUse.areaLoad.ultimateLimitState.pressure
                  .horizontal * 100
              ) / 100
            }}
            kN/m2
          </td>
          <td>
            {{
              Math.round(
                tyrensDataToUse.areaLoad.ultimateLimitState.pressure
                  .horizontal * 100
              ) / 100
            }}
            kN/m2
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Kraft/infästning i skena</th>
          <th>I randzon (F, G & J)</th>
          <th>Innanför randzon (H & I)</th>
        </tr>
        <tr>
          <th>Lyftkraft</th>
          <td>
            {{
              Math.round(
                tyrensDataToUse.lineLoad.ultimateLimitState.suction
                  .verticalEdge * 100
              ) / 100
            }}
            kN/m
          </td>
          <td>
            {{
              Math.round(
                tyrensDataToUse.lineLoad.ultimateLimitState.suction
                  .verticalNonedge * 100
              ) / 100
            }}
            kN/m
          </td>
        </tr>
        <tr>
          <th>Tryckkraft</th>
          <td>
            {{
              Math.round(
                tyrensDataToUse.lineLoad.ultimateLimitState.pressure
                  .verticalEdge * 100
              ) / 100
            }}
            kN/m
          </td>
          <td>
            {{
              Math.round(
                tyrensDataToUse.lineLoad.ultimateLimitState.pressure
                  .verticalNonedge * 100
              ) / 100
            }}
            kN/m
          </td>
        </tr>
        <tr>
          <th>Horisontell kraft</th>
          <td>
            {{
              Math.round(
                tyrensDataToUse.lineLoad.ultimateLimitState.pressure
                  .horizontal * 100
              ) / 100
            }}
            kN/m
          </td>
          <td>
            {{
              Math.round(
                tyrensDataToUse.lineLoad.ultimateLimitState.pressure
                  .horizontal * 100
              ) / 100
            }}
            kN/m
          </td>
        </tr>
      </table>  
    </div>-->
    <div style="display: flex">
      <div class="second-head" style="margin: 0">
        <h2 style="text-align: left; margin-top: 0">
          Konfiguration {{ takNum + 1 }}
        </h2>
        <hr style="margin: 0" />
      </div>

      <div>
        <ul>
          <li>Antal: {{ panelarAll.length }}</li>
          <li>Antal paneler: {{ panelarCount }}</li>
          <li>
            Vikt:
            {{
              Math.round(
                SumTotalFinalResultArrObjects.reduce(
                  (accumulator, currentItem) => {
                    return accumulator + currentItem.Vikt * currentItem.Antal;
                  },
                  0
                ) * 100
              ) / 100
            }}
            kg
          </li>
          <li>
            Pris:
            {{
              Math.round(
                SumTotalFinalResultArrObjects.reduce(
                  (accumulator, currentItem) => {
                    return accumulator + currentItem.Pris * currentItem.Antal;
                  },
                  0
                ) * 100
              ) / 100
            }}
            SEK
          </li>
        </ul>
      </div>
    </div>


    <table id="table-topdf">
      <tr>
        <th>Antal</th>
        <th>ArtNr</th>
        <th>Benämning</th>
        <!-- <th>GS1</th> -->
        <th>Vikt/st</th>
        <th>Tot.vikt</th>
        <th>Pris/st</th>
        <!-- <th>Rabatt</th> -->
        <th>Totalt (exkl. moms)</th>
      </tr>
      <template v-for="(ii, indexii) in SumTotalFinalResultArrObjects" v-bind:key="indexii">
        <tr v-if="ii.Antal > 0">
          <td>{{ ii.Antal }}</td>
          <td>{{ ii.ArtNr }}</td>
          <td>{{ ii.Benämning }}</td>
          <!-- <td>{{ ii.GS1 }}</td> -->
          <td>{{ ii.Vikt }} kg</td>
          <td>{{ Math.round(ii.Vikt * ii.Antal * 100) / 100 }} kg</td>
          <td>{{ ii.Pris }} SEK</td>
          <!--  <td>0</td> -->
          <td>{{ ii.Pris * ii.Antal }} SEK</td>
        </tr>
      </template>
    </table>






    
    <div class="to-export-tabels" style="display: none">
      <table id="Geometri">
        <tr>
          <td>Mått A</td>
          <td>{{ Amatt }} m</td>
        </tr>
        <tr>
          <td>Mått B</td>
          <td>{{ Bmatt }} m</td>
        </tr>
        <tr v-if="Takform != 0">
          <td>Mått C</td>
          <td>{{ Cmatt }} m</td>
        </tr>
        <tr>
          <td>Byggnadens höjd</td>
          <td>{{ nockhöjd }} m</td>
        </tr>
      </table>
      <table id="Geometri2">
        <tr>
          <td>Taklutning</td>
          <td>{{ Taklutning }}°</td>
        </tr>
        <tr>
          <td>Taktyp</td>
          <td>
            {{ TypAvTak == 0 ? "Pulpet" : "" }}{{ TypAvTak == 1 ? "Sadel" : ""
            }}{{ TypAvTak == 2 ? "Motfallstak" : "" }}
          </td>
        </tr>
        <tr>
          <td>Typ av infästning</td>
          <td>
            {{ selectedTak == BetongpannorFotplatta ? "Fotplatta" : "" }}
            {{ selectedTak == BetongpannorLäktfäste ? "Läktfäste" : "" }}
            {{ selectedTak == BetongpannorTakkroken ? "Takkroken" : "" }}

            {{ selectedTak == TegelpannorFotplatta ? "Fotplatta" : "" }}
            {{ selectedTak == TegelpannorLäktfäste ? "Läktfäste" : "" }}
            {{ selectedTak == TegelpannorTakkroken ? "Takkroken" : "" }}

            {{
              selectedTak == FalsatPlåttakKlicktakFalsfäste ? "Falsfäste" : ""
            }}
            {{ selectedTak == ProfileratPlåttakLångSkena ? "LångSkena" : "" }}
            {{
              selectedTak == TegelprofileratPlåttakLångSkena ? "LångSkena" : ""
            }}
            {{ selectedTak == SlätaTakTätplåtSlät ? "tplåtSlät" : "" }}
          </td>
        </tr>
      </table>

      <table id="randzon">
        <tr>
          <td>a1</td>
          <td>
            {{
              Math.round(tyrensDataToUse[0].data.edgeBase.width * 0.1 * 100) /
              100
            }}
            m
          </td>
        </tr>
        <tr>
          <td>a2</td>
          <td>
            {{
              Math.round(tyrensDataToUse[0].data.edgeBase.length * 0.1 * 100) /
              100
            }}
            m
          </td>
        </tr>
      </table>

      <table id="Lastförutsättningar">
        <tr>
          <td>Adress</td>
          <td>{{ adressInfo.address }}</td>
        </tr>
        <tr>
          <td>Coordinates</td>
          <td>Lat: {{ adressInfo.langlat.lat }}, Lng: {{ adressInfo.langlat.lng }}</td>
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
          <td>{{ vind }} m/s</td>
        </tr>
        <tr>
          <td>Terrängtyp</td>
          <td>{{ places }}</td>
        </tr>

        <tr>
          <td>Lastkombination faktor 0v</td>
          <td>0.3</td>
        </tr>
        <tr>
          <td>Snözon</td>
          <td>{{ sno }} kN/m2</td>
        </tr>
        <tr>
          <td>Lastkombination faktor 0s</td>
          <td>{{ tyrensDataToUse[0].data.reductionFactorSnow }}</td>
        </tr>
        <tr>
          <td>Snörasskydd</td>
          <td>{{ snorasskydd ? "Ja" : "Nej" }}</td>
        </tr>
      </table>

      <div v-for="(s, indexS) in panelarAll" :key="indexS">
        <table :id="'sektion' + indexS">
          <tr>
            <td>Startpunkt: Nock:</td>
            <td>{{ distTop[indexS] }} cm</td>
          </tr>
          <tr>
            <td>Startpunkt: Vänster:</td>
            <td>{{ distLeft[indexS] }} cm</td>
          </tr>
          <tr>
            <td>Antal rader</td>
            <td>{{ panelarRows[indexS] }} st</td>
          </tr>
          <tr>
            <td>Antal paneler per rad</td>
            <td>{{ panelarAll[indexS].length / panelarRows[indexS] }} st</td>
          </tr>
          <tr>
            <td>Avstånd skenor</td>
            <td>{{ distMellanFästningar[indexS] }} cm</td>
          </tr>
          <tr>
            <td>Avstånd infästning (max)</td>
            <td>{{ MaxAvstandMellanFasteOut[indexS] }} cm</td>
          </tr>
          <tr>
            <td>Avstånd infästning (max) i randzon</td>
            <td>{{ MaxAvstandMellanFasteIn[indexS] }} cm</td>
          </tr>
          <tr>
            <td>Antal infästningar (min)</td>
            <td>{{ antalFasteArr[indexS] }} st</td>
          </tr>
          <tr>
            <td>Panellängd</td>
            <td>
              {{
                this.alongToAcross[i]
                  ? this.PanelBredd[indexS]
                  : this.PanelHöjd[indexS]
              }}
              mm
            </td>
          </tr>
          <tr>
            <td>Panelbredd</td>
            <td>
              {{
                this.alongToAcross[i]
                  ? this.PanelHöjd[indexS]
                  : this.PanelBredd[indexS]
              }}
              mm
            </td>
          </tr>
          <tr>
            <td>Panelvikt</td>
            <td>{{ PanelVikt[indexS] }} kg</td>
          </tr>
        </table>
        <table :id="'Utbredda' + indexS">
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
                  tyrensDataToUse[findPanelAPI(indexS)].data.areaLoad
                    .ultimateLimitState.suction.verticalEdge * 100
                ) / 100
              }}
              kN/m2
            </td>
            <td>
              {{
                Math.round(
                  tyrensDataToUse[findPanelAPI(indexS)].data.areaLoad
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
                  tyrensDataToUse[findPanelAPI(indexS)].data.areaLoad
                    .ultimateLimitState.pressure.verticalEdge * 100
                ) / 100
              }}
              kN/m2
            </td>
            <td>
              {{
                Math.round(
                  tyrensDataToUse[findPanelAPI(indexS)].data.areaLoad
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
                  tyrensDataToUse[findPanelAPI(indexS)].data.areaLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m2
            </td>
            <td>
              {{
                Math.round(
                  tyrensDataToUse[findPanelAPI(indexS)].data.areaLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m2
            </td>
          </tr>
        </table>
        <table :id="'skena' + indexS">
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
                  tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.suction.verticalEdge * 100
                ) / 100
              }}
              kN/m
            </td>
            <td>
              {{
                Math.round(
                  tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
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
                  tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.verticalEdge * 100
                ) / 100
              }}
              kN/m
            </td>
            <td>
              {{
                Math.round(
                  tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
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
                  tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m
            </td>
            <td>
              {{
                Math.round(
                  tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.horizontal * 100
                ) / 100
              }}
              kN/m
            </td>
          </tr>
        </table>
        <table :id="'tak' + indexS">
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
                  ((tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.suction.verticalEdge *
                    MaxAvstandMellanFasteIn[indexS]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
            <td>
              {{
                Math.round(
                  ((tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.suction.verticalNonedge *
                    MaxAvstandMellanFasteOut[indexS]) /
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
                  ((tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.verticalEdge *
                    MaxAvstandMellanFasteIn[indexS]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
            <td>
              {{
                Math.round(
                  ((tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.verticalNonedge *
                    MaxAvstandMellanFasteOut[indexS]) /
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
                  ((tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.horizontal *
                    MaxAvstandMellanFasteIn[indexS]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
            <td>
              {{
                Math.round(
                  ((tyrensDataToUse[findPanelAPI(indexS)].data.lineLoad
                    .ultimateLimitState.pressure.horizontal *
                    MaxAvstandMellanFasteOut[indexS]) /
                    100) *
                    100
                ) / 100
              }}
              kN
            </td>
          </tr>
        </table>
        <table :id="'infästningsskena' + indexS">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Max för lyft</td>
            <td :class="['', checkElPower[indexS][0] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][0] }}
              %
            </td>
            <td :class="['', checkElPower[indexS][1] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][1] }}
              %
            </td>
          </tr>
          <tr>
            <td>Max för tryck</td>
            <td :class="['', checkElPower[indexS][2] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][2] }}
              %
            </td>
            <td :class="['', checkElPower[indexS][3] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][3] }}
              %
            </td>
          </tr>
        </table>
        <table :id="'infästningar' + indexS">
          <tr>
            <th></th>
            <th>I randzon (F, G & J)</th>
            <th>Innanför randzon (H & I)</th>
          </tr>
          <tr>
            <td>Max för lyft</td>
            <td :class="['', checkElPower[indexS][4] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][4] }}
              %
            </td>
            <td :class="['', checkElPower[indexS][5] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][5] }}
              %
            </td>
          </tr>
          <tr>
            <td>Max för tryck</td>
            <td :class="['', checkElPower[indexS][6] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][6] }}
              %
            </td>
            <td :class="['', checkElPower[indexS][7] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][7] }}
              %
            </td>
          </tr>
          <tr>
            <td>Max för horisontell kraft</td>
            <td :class="['', checkElPower[indexS][8] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][8] }}
              %
            </td>
            <td :class="['', checkElPower[indexS][9] ? '  redAlert' : '']">
              {{ lastPageCalc[indexS][9] }}
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

    <button class="reset-button" @click="exportToPDF" style="text-align: center">
      Ladda ner PDF
    </button>
  </div>
</template>



<!--
<style scoped>
.redAlert {
  color: red;
}
.divElem {
  max-width: 1140px;
  margin: 0 auto;
}
#table-pdf * {
  padding: 3px;

  font-size: 9px;
  font-family: "Montserrat";
  text-align: center;
}
#element-to-pdfa * {
  font-family: "Montserrat";
}

#element-to-pdfa {
  font-family: "Montserrat";
  width: 565px;
}
th {
  font-family: "Montserrat-bold";
  border-color: #aaa;
}
.head-tables {
  display: flex;
}
.wait-message-bg {
  width: 100vw;
  height: 100vh;
  background-color: #0005;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 100000;
}
.wait-message {
  width: 30vw;
  height: 30vh;
  background-color: #eee;
  position: fixed;
  top: 20vh;
  left: 30vw;
  z-index: 1000000;
  padding: 6vw;
  text-align: center;
  font-size: 2vw;
  overflow: hidden;
}
.fa-check {
  font-size: 8vw;
  display: block;
  text-align: center;
  text-align-last: center;
  margin: auto;
  color: #eee;
}

input[type="checkbox"] {
  width: 2vw;
  height: 2vw;
  margin: 1vw;
}

@media screen and (min-width: 414px) {
  #table-pdf th {
    font-family: "Montserrat-bold";
  }

  #table-pdf * {
    padding: 3px;

    font-size: 9px;
    font-family: "Montserrat";
    text-align: center;
  }

  main {
    margin: 0 auto;
  }
  .multi_elements {
    display: flex;
    max-width: 1920px;
    margin-top: 8.072916667vw;
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
    margin: 0;
    margin-right: 2vw;
  }

  .selection p {
    font-family: "Montserrat-bold";
    text-align: center;
    width: 90%;
    margin-top: 2vw;
    padding: 0.5vw;
    background-color: #409e99;
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
    color: #409e99;
    padding: 0.5vw 1vw;
    border-radius: 1vw;
  }

  .p3 {
    width: 105%;
    margin-top: 2vw;
    border-right: #707070 solid 1px;
    border-left: #707070 solid 1px;
    padding: 0 0.5vw;
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
  .Visual-select {
    display: flex;
    justify-content: flex-start;
    margin-top: 5vw;
    width: 85.15625vw;
  }
  .shapes-style {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2vw;
  }
  .shapes-style img {
    width: 14.0625vw;

    height: 7.083333333vw;
  }

  .imgs-selects {
    width: 11.97916667vw;
    height: 11.97916667vw;

    box-shadow: 0.5vw -0.5vw 0px 0vw #409e99;
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

  .q {
    padding: 0.5vw;
    margin-top: 0.5vw;
    margin-left: 0;
  }
  .svartlackerat {
    background-color: #010204;
  }

  .varmforzinkat {
    background-color: #979ba4;
  }
  .color-box {
    display: flex;
    width: 11.97916667vw;
    height: 11.97916667vw;
  }

  h2 {
    margin-top: 4vw;
  }
  .middle-inputs {
    width: 35vw;
    border: 0;
  }

  .middle-inputs-wider {
    width: 62.5vw;
    border: 0;
  }
  .shape-big-photo {
    width: 27.39583333vw;
    height: 17.08333333vw;
    margin: 0 auto;
    display: block;
  }
  .panel-storlek {
    width: 25vw;
    margin: 0 0 0 20vw;
  }

  .second-head {
    margin-top: 0vw;
  }

  .second-head h1 {
    color: #22326c;
    margin-top: 4.5vw;
  }

  .konfiguration-info {
    width: 80vw;
  }
  .konfiguration-info > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1vw;
  }
  .konfiguration-info > div div {
    margin: 0;
    width: 50%;
  }

  .konfiguration-info > div li {
    margin: 0;
    width: 50%;
    font-family: "Montserrat-bold";
  }
}

/***********************************************************************************************************************/
@media screen and (min-width: 1201px) {
  main {
    margin: 0;
  }
  .multi_elements {
    display: flex;
    margin-top: 96.875px;
  }
  .multi_elements > div {
    display: flex;
  }

  .multi_elements > div > img {
    width: 256.25px;
  }

  .selection {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    margin: 0;
    margin-right: 24px;
  }

  .selection p {
    font-family: "Montserrat-bold";
    text-align: center;
    width: 90%;
    margin-top: 24px;
    padding: 6px;
    background-color: #409e99;
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
    color: #409e99;
    padding: 6px 12px;
    border-radius: 12px;
  }

  .p3 {
    width: 105%;
    margin-top: 24px;
    border-right: #707070 solid 1px;
    border-left: #707070 solid 1px;
    padding: 0 6px;
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
    margin: 6px 36px 6px 0;
  }
  .Visual-select {
    display: flex;
    justify-content: flex-start;
    margin-top: 60px;
    width: 1021.875px;
  }
  .shapes-style {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 24px;
  }
  .shapes-style img {
    width: 168.75px;

    height: 85px;
  }

  .imgs-selects {
    width: 143.75px;
    height: 143.75px;

    box-shadow: 6px -6px 0px 0px #409e99;
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

  .q {
    padding: 6px;
    margin-top: 6px;
    margin-left: 0;
  }
  .svartlackerat {
    background-color: #010204;
  }

  .varmforzinkat {
    background-color: #979ba4;
  }
  .color-box {
    width: 143.75px;
    height: 143.75px;
  }

  h2 {
    margin-top: 48px;
  }
  .middle-inputs {
    width: 420px;
    border: 0;
  }

  .middle-inputs-wider {
    width: 750px;
    border: 0;
  }
  .shape-big-photo {
    width: 328.75px;
    height: 205px;
    margin: 0 auto;
    display: block;
  }
  .panel-storlek {
    width: 300px;
    margin: 0 0 0 240px;
  }

  .second-head {
    margin-top: 0px;
  }

  .second-head h1 {
    color: #22326c;
    margin-top: 54px;
  }

  .konfiguration-info {
    width: 960px;
  }
  .konfiguration-info > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
  .konfiguration-info > div div {
    margin: 0;
    width: 50%;
  }

  .konfiguration-info > div li {
    margin: 0;
    width: 50%;
    font-family: "Montserrat-bold";
  }

  .fa-check {
    font-size: 96px;
  }

  input[type="checkbox"] {
    width: 24px;
    height: 24px;
    margin: 12px;
  }
}
</style>

-->