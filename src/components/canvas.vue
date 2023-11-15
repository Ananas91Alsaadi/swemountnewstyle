<script>
const width = window.innerWidth;
const height = window.innerHeight;
//20mm

/*    {
                                'fastePerRow':fastePerRow,
                                'MaxAvstandMellanFaste':this.MaxAvstandMellanFasteIn,
                              }; */

export default {
  props: {
    A: Number,
    B: Number,
    C: Number,
    shape: Number,
    bredd: Array,
    hojd: Array,
    pannorBredd: Number,
    pannorHöjd: Number,
    AvståndFalser: Number,
    taktTyp: Number,
    vikt: Array,
    nockhojd: Number,
    typTak: Number,
    canvasNum: Number,
    edgeLength: Number,
    edgeWidth: Number,
    fastePerRowAPI: Object,
  },

  data() {
    return {
      canvasSize: width < 1200 ? 95 : (1200 / width) * 95,

      scalePercentage: 0.5,

      panelar: [
        [
          {
            x:
              (width * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 -
              this.bredd[0] / 20,
            y:
              (height * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 -
              this.hojd[0] / 20,
            redOut: "#44444499",
            outSurf: false,
          },
        ],
      ],

      panelGrouper: [
        {
          x:
            (width * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 -
            58.5,
          y:
            (height * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 - 85,
        },
      ],

      scaleXG: [1],
      scaleYG: [1],
      mousePos: { x: 100, y: 50 },
      rulerXB: [],
      rulerYB: [],
      rulerXS: [],
      rulerYS: [],
      fixElement: true,
      rows: [1],
      columns: [1],
      mouseDistX: 0,
      mouseDistY: 0,
      //bredd1: this.bredd.map((x) => x / 10),

      //hojd1: this.hojd.map((x) => x / 10),
      breddToHojd: [false],
      fastTillBredd: [true],
      topLine: [[]],
      leftLine: [[]],
      allRight: [[]],
      allBottom: [[]],
      topLineFaste: [[]],
      leftLineFaste: [[]],

      topDist: [0],
      leftDist: [0],
      imageTrash: null,
      imageCalc: null,

      imageBack: null,
      imageFullScreen: null,
      imageSmallScreen: null,
      imageUngroup: null,

      markedGroup: 0,
      scaleShiftX: 0,
      scaleShiftY: 0,
      fullToSmall: false,
      shapesPoints: [],
      randzonPoints: [],
      TLShow: false,
      WHShow: false,

      randUpDown: 0,
      randLeftRight: 0,
      inRandzon: false,

      extraFaste: [false],
      newFaste: [0],
      extraFasteAvstånd: [0],
    };
  },

  created() {
    const imageTrash = new window.Image();
    imageTrash.src = "./icons/trash.png";
    imageTrash.onload = () => {
      // set image only when it is loaded
      this.imageTrash = imageTrash;
    };

    const imageCalc = new window.Image();
    imageCalc.src = "./icons/calculate.png";
    imageCalc.onload = () => {
      this.imageCalc = imageCalc;
    };
    const imageBack = new window.Image();
    imageBack.src = "./icons/back.png";
    imageBack.onload = () => {
      this.imageBack = imageBack;
    };
    const imageFullScreen = new window.Image();
    imageFullScreen.src = "./icons/fullScreen.png";
    imageFullScreen.onload = () => {
      this.imageFullScreen = imageFullScreen;
    };
    const imageSmallScreen = new window.Image();
    imageSmallScreen.src = "./icons/smallScreen.png";
    imageSmallScreen.onload = () => {
      this.imageSmallScreen = imageSmallScreen;
    };
    const imageUngroup = new window.Image();
    imageUngroup.src = "./icons/ungroup.png";
    imageUngroup.onload = () => {
      this.imageUngroup = imageUngroup;
    };

    this.createShapesPoints();
    this.randzonDrowAPI();
    this.createRandzonPoints();
  },
  computed: {
    bredd1() {
      let arr = [];
      for (let i = 0; i < this.bredd.length; i++) {
        this.breddToHojd[i]
          ? arr.push(this.hojd[i] / 10)
          : arr.push(this.bredd[i] / 10);
      }

      return arr;
    },

    hojd1() {
      let arr = [];

      for (let i = 0; i < this.hojd.length; i++) {
        this.breddToHojd[i]
          ? arr.push(this.bredd[i] / 10)
          : arr.push(this.hojd[i] / 10);
      }

      return arr;
    },

    stageSize() {
      let obj = {
        width: (width * this.canvasSize) / 100,
        height: (height * this.canvasSize) / 100,
      };

      return obj;
    },

    w() {
      return (width * this.canvasSize) / 100;
    },
    h() {
      return (height * this.canvasSize) / 100;
    },

    distMellanFäst() {
      let arr = [];
      for (let i = 0; i < this.bredd1.length; i++) {
        this.fastTillBredd[i]
          ? arr.push(
              (this.hojd1[i] * 10 -
                Math.round((this.hojd1[i] * 6) / this.pannorHöjd) *
                  this.pannorHöjd) /
                20
            )
          : arr.push(
              (this.bredd1[i] * 10 -
                Math.round((this.bredd1[i] * 6) / this.pannorBredd) *
                  this.pannorBredd) /
                20
            );

        if (!this.fastTillBredd[i] && this.taktTyp == 2) {
          arr.pop();
          arr.push((this.bredd1[i] * 10 - this.AvståndFalser) / 20);
        }
      }
      return arr;
    },
    distMellanFästToExport() {
      let arr = [];
      for (let i = 0; i < this.distMellanFäst.length; i++) {
        arr.push(
          (this.fastTillBredd[i] ? this.hojd1[i] : this.bredd1[i]) -
            this.distMellanFäst[i] * 2
        );
      }
      return arr;
    },

    distTop() {
      let arr = [];

      for (let i = 0; i < this.topLineFaste.length; i++) {
        arr.push(
          Math.round(
            this.distance12(
              this.topLineFaste[i][0],
              this.topLineFaste[i][1],
              this.topLineFaste[i][2],
              this.topLineFaste[i][3]
            )
          )
        );
      }
      return arr;
    },

    distLeft() {
      let arr = [];

      for (let i in this.topLine) {
        arr.push(
          Math.round(
            this.distance12(
              this.leftLineFaste[i][0],
              this.leftLineFaste[i][1],
              this.leftLineFaste[i][2],
              this.leftLineFaste[i][3]
            )
          )
        );
      }

      return arr;
    },
    rowsCount() {
      let arr = [];

      for (let i = 0; i < this.fastTillBredd.length; i++) {
        let arrAssist = 0;
        if (!this.fastTillBredd[i]) {
          arrAssist = this.rows[i];
        } else {
          arrAssist = this.columns[i];
        }
        arr.push(arrAssist);
      }

      return arr;
    },

    rowsLong() {
      let arr = [];
      for (let i in this.panelar) {
        if (!this.fastTillBredd[i]) {
          arr.push(
            this.distance12(
              this.allRight[i][0],
              this.allRight[i][1],
              this.allRight[i][2],
              this.allRight[i][3]
            )
          );
        } else {
          arr.push(
            this.distance12(
              this.allBottom[i][0],
              this.allBottom[i][1],
              this.allBottom[i][2],
              this.allBottom[i][3]
            )
          );
        }
      }

      return arr;
    },
    startPoint() {
      let arr = [];

      for (let i in this.panelar) {
        let fastePerRow = this.fastePerRowAPI[i].fastePerRow;
        let ccFaste = this.fastePerRowAPI[i].MaxAvstandMellanFaste;

        let fasteDist = (fastePerRow - 1) * ccFaste;

        this.extraFaste[i] = false;

        let fasteTillKanten = (this.rowsLong[i] - fasteDist) / 2;

        if (fasteTillKanten > 25) {
          let along = this.fastTillBredd[i]
            ? this.pannorBredd / 10
            : this.pannorHöjd / 10;

          if (this.taktTyp == 2) {
            along = this.fastTillBredd[i] ? this.AvståndFalser / 10 : 1;
          }

          let extraFasteAvståndCalc =
            Math.floor((fasteTillKanten * 2) / along) * along;

          fasteTillKanten = (fasteTillKanten * 2 - extraFasteAvståndCalc) / 2;
          this.extraFasteAvstånd[i] = extraFasteAvståndCalc;

          this.newFaste[i] = this.rowsLong[i] - fasteTillKanten;

          this.extraFaste[i] = true;
          if (this.taktTyp == 2 && this.fastTillBredd[i]) {
            this.extraFaste[i] = false;
          }

          if (this.taktTyp == 5) {
            this.$emit("slataTak", true);
          }
        }

        arr.push(fasteTillKanten);
      }
      this.$emit("extraFaste", this.extraFaste);

      return arr;
    },
  },
  mounted() {
    this.distanceLines();
    this.distanceLinesFaste();

    this.distanceLinesRB();

    this.rulersCounter();
    this.randzonDrowAPI();

    for (let t = 0; t < this.panelar.length; t++) {
      this.checkIfOut(t);
    }
  },
  watch: {
    A() {
      this.createShapesPoints();
      this.createRandzonPoints();
    },
    B() {
      this.createShapesPoints();
      this.createRandzonPoints();
    },
    C() {
      this.createShapesPoints();
      this.createRandzonPoints();
    },

    edgeLength() {
      this.randzonDrowAPI();
      this.createShapesPoints();
      this.createRandzonPoints();
    },
    edgeWidth() {
      this.randzonDrowAPI();
      this.createShapesPoints();
      this.createRandzonPoints();
    },
    startpoint() {
      this.distanceLinesFaste();
    },
  },
  methods: {
    resetCanvas() {
      this.scalePercentage = 0.5;
      this.panelar = [
        [
          {
            x:
              (width * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 -
              this.bredd[0] / 20,
            y:
              (height * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 -
              this.hojd[0] / 20,
            redOut: "#44444499",
            outSurf: false,
          },
        ],
      ];

      this.panelGrouper = [
        {
          x:
            (width * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 -
            58.5,
          y:
            (height * (width < 1200 ? 95 : (1200 / width) * 95)) / 100 / 2 - 85,
        },
      ];

      this.scaleXG = [1];
      this.scaleYG = [1];
      this.rulerXB = [];
      this.rulerYB = [];
      this.rulerXS = [];
      this.rulerYS = [];
      this.fixElement = true;
      this.rows = [1];
      this.columns = [1];
      this.mouseDistX = 0;
      this.mouseDistY = 0;
      //bredd1: this.bredd.map((x) => x / 10);

      //hojd1: this.hojd.map((x) => x / 10);
      this.breddToHojd = [false];
      this.fastTillBredd = [true];
      this.topLine = [[]];
      this.leftLine = [[]];
      this.allRight = [[]];
      this.allBottom = [[]];
      this.topLineFaste = [[]];
      this.leftLineFaste = [[]];

      this.topDist = [0];
      this.leftDist = [0];

      this.markedGroup = 0;
      this.scaleShiftX = 0;
      this.scaleShiftY = 0;
      this.fullToSmall = false;
      this.shapesPoints = [];
      this.randzonPoints = [];
      this.TLShow = false;
      this.WHShow = false;

      this.randUpDown = 0;
      this.randLeftRight = 0;
      this.inRandzon = false;

      this.extraFaste = [false];
      this.newFaste = [0];
      this.extraFasteAvstånd = [0];

      this.createShapesPoints();
      this.createRandzonPoints();

      this.distanceLines();
      this.distanceLinesFaste();

      this.distanceLinesRB();

      this.rulersCounter();
      this.randzonDrowAPI();

      for (let t = 0; t < this.panelar.length; t++) {
        this.checkIfOut(t);
      }
    },
    randzonDrowAPI() {
      this.randUpDown = this.edgeWidth * 10;
      this.randLeftRight = this.edgeLength * 10;
    },

    unGroup(e) {
      if (!this.fastTillBredd[e]) {
        let finished = true;
        do {
          let arr = [];

          let arrsX = this.panelar[e].filter(
            (el) => el.x == this.panelar[e][0].x
          );
          let firstRow = 0;

          for (let i = 0; i < arrsX.length; i++) {
            firstRow = i + 1;

            if (arrsX[i].y != this.panelar[e][0].y + i * (this.hojd1[e] + 2)) {
              firstRow--;
              break;
            }
          }

          arrsX.splice(firstRow);
          arrsX.map((el) => arr.push(el));

          firstRow = 0;

          let arrsY = this.panelar[e].filter(
            (el) => el.y == this.panelar[e][0].y
          );

          for (let i = 0; i < arrsY.length; i++) {
            firstRow = i + 1;

            if (arrsY[i].x != this.panelar[e][0].x + i * (this.bredd1[e] + 2)) {
              firstRow--;
              break;
            }
          }

          arrsY.splice(firstRow);
          firstRow = 0;

          for (let i = 1; i < arrsY.length; i++) {
            firstRow = i + 1;

            let arrsYX = this.panelar[e].filter((el) => el.x == arrsY[i].x);

            for (let i = 0; i < arrsYX.length; i++) {
              if (
                arrsYX[i].y !=
                this.panelar[e][0].y + i * (this.hojd1[e] + 2)
              ) {
                arrsYX.splice(i);

                break;
              }
            }

            if (arrsX.length !== arrsYX.length) {
              firstRow--;
              break;
            }

            for (let j = 0; j < arrsX.length; j++) {
              if (arrsX[j]["y"] !== arrsYX[j]["y"]) {
                firstRow--;
                break;
              }
            }

            arrsYX.map((el) => arr.push(el));
          }

          this.$emit("unGroupFastar", e);

          this.addNewPanelGroup(this.bredd1[e] * 10, this.hojd1[e] * 10, false);
          this.panelar[this.panelar.length - 1] = arr;
          this.panelGrouper[this.panelGrouper.length - 1].x = arr[0].x;
          this.panelGrouper[this.panelGrouper.length - 1].y = arr[0].y;

          this.rows[this.rows.length - 1] = firstRow == 0 ? 1 : firstRow;
          this.columns[this.columns.length - 1] = arrsX.length;

          this.scaleXG[this.scaleXG.length - 1] =
            Math.round(
              (this.rows[this.rows.length - 1] +
                (2 * this.rows[this.rows.length - 1]) /
                  this.bredd1[this.rows.length - 1] -
                2 / this.bredd1[this.rows.length - 1]) *
                100
            ) / 100;
          this.scaleYG[this.scaleYG.length - 1] =
            Math.round(
              (this.columns[this.columns.length - 1] +
                (2 * this.columns[this.columns.length - 1]) /
                  this.hojd1[this.columns.length - 1] -
                2 / this.hojd1[this.columns.length - 1]) *
                100
            ) / 100;

          if (arr.length != this.panelar[e].length) {
            for (let i = 0; i < arr.length; i++) {
              let index = this.panelar[e].findIndex(
                (obj) => obj.x === arr[i].x && obj.y === arr[i].y
              );
              this.panelar[e].splice(index, 1);
            }
          } else {
            this.deletePanelGroup(e);
            finished = false;
          }
        } while (finished);
      }

      if (this.fastTillBredd[e]) {
        let finished = true;
        do {
          let arr = [];

          let arrsX = this.panelar[e].filter(
            (el) => el.y == this.panelar[e][0].y
          );
          let firstRow = 0;

          for (let i = 0; i < arrsX.length; i++) {
            firstRow = i + 1;

            if (arrsX[i].x != this.panelar[e][0].x + i * (this.bredd1[e] + 2)) {
              firstRow--;
              break;
            }
          }

          arrsX.splice(firstRow);
          arrsX.map((el) => arr.push(el));

          firstRow = 0;

          let arrsY = this.panelar[e].filter(
            (el) => el.x == this.panelar[e][0].x
          );

          for (let i = 0; i < arrsY.length; i++) {
            firstRow = i + 1;

            if (arrsY[i].y != this.panelar[e][0].y + i * (this.hojd1[e] + 2)) {
              firstRow--;
              break;
            }
          }

          arrsY.splice(firstRow);
          firstRow = 0;

          for (let i = 1; i < arrsY.length; i++) {
            firstRow = i + 1;

            let arrsYX = this.panelar[e].filter((el) => el.y == arrsY[i].y);

            for (let i = 0; i < arrsYX.length; i++) {
              if (
                arrsYX[i].x !=
                this.panelar[e][0].x + i * (this.bredd1[e] + 2)
              ) {
                arrsYX.splice(i);

                break;
              }
            }

            if (arrsX.length !== arrsYX.length) {
              firstRow--;
              break;
            }

            for (let j = 0; j < arrsX.length; j++) {
              if (arrsX[j]["x"] !== arrsYX[j]["x"]) {
                firstRow--;
                break;
              }
            }

            arrsYX.map((el) => arr.push(el));
          }
          this.$emit("unGroupFastar", e);

          this.addNewPanelGroup(this.bredd1[e] * 10, this.hojd1[e] * 10, true);

          this.panelar[this.panelar.length - 1] = arr;
          this.panelGrouper[this.panelGrouper.length - 1].x = arr[0].x;
          this.panelGrouper[this.panelGrouper.length - 1].y = arr[0].y;

          this.columns[this.columns.length - 1] = firstRow == 0 ? 1 : firstRow; //*
          this.rows[this.rows.length - 1] = arrsX.length; //*

          this.scaleXG[this.scaleXG.length - 1] =
            Math.round(
              (this.rows[this.rows.length - 1] +
                (2 * this.rows[this.rows.length - 1]) /
                  this.bredd1[this.rows.length - 1] -
                2 / this.bredd1[this.rows.length - 1]) *
                100
            ) / 100;
          this.scaleYG[this.scaleYG.length - 1] =
            Math.round(
              (this.columns[this.columns.length - 1] +
                (2 * this.columns[this.columns.length - 1]) /
                  this.hojd1[this.columns.length - 1] -
                2 / this.hojd1[this.columns.length - 1]) *
                100
            ) / 100;

          if (arr.length != this.panelar[e].length) {
            for (let i = 0; i < arr.length; i++) {
              let index = this.panelar[e].findIndex(
                (obj) => obj.x === arr[i].x && obj.y === arr[i].y
              );
              this.panelar[e].splice(index, 1);
            }
          } else {
            this.deletePanelGroup(e);

            finished = false;
          }
        } while (finished);
      }

      for (let t = 0; t < this.panelar.length; t++) {
        this.checkIfOut(t);
      }

      this.distanceLines();
      this.distanceLinesFaste();

      this.distanceLinesRB();
    },

    stopScrolling() {},

    createShapesPoints() {
      this.shapesPoints = [];
      this.shapesPoints.push(
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,
          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,
          this.w / 2 + this.A / 2,
          this.h / 2 + this.B / 2,
          this.w / 2 - this.A / 2,
          this.h / 2 + this.B / 2,
        ],
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + (this.C - this.A / 2),
          this.h / 2 + this.B / 2,

          this.w / 2 - this.A / 2,
          this.h / 2 + this.B / 2,
        ],
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2,
          this.h / 2 + this.B / 2,

          this.w / 2 - (this.C - this.A / 2),
          this.h / 2 + this.B / 2,
        ],
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2 + Math.sqrt(this.C ** 2 - this.B ** 2),
          this.h / 2 + this.B / 2,

          this.w / 2 - this.A / 2 + Math.sqrt(this.C ** 2 - this.B ** 2),
          this.h / 2 + this.B / 2,
        ],
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,

          this.w / 2 + this.A / 2 - Math.sqrt(this.C ** 2 - this.B ** 2),
          this.h / 2 + this.B / 2,

          this.w / 2 - this.A / 2 - Math.sqrt(this.C ** 2 - this.B ** 2),
          this.h / 2 + this.B / 2,
        ],
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,
          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,
          this.w / 2 + this.C / 2,
          this.h / 2 + this.B / 2,
          this.w / 2 - this.C / 2,
          this.h / 2 + this.B / 2,
        ],
        [
          this.w / 2 - this.A / 2,
          this.h / 2 - this.B / 2,
          this.w / 2 + this.A / 2,
          this.h / 2 - this.B / 2,
          this.w / 2 + this.C / 2,
          this.h / 2 + this.B / 2,
          this.w / 2 - this.C / 2,
          this.h / 2 + this.B / 2,
        ]
      );
    },
    createRandzonPoints() {
      this.randzonDrowAPI();

      this.randzonPoints = [];
      this.randzonPoints.push(
        [
          this.w / 2 - this.A / 2 + this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,
          this.w / 2 + this.A / 2 - this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,
          this.w / 2 + this.A / 2 - this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,
          this.w / 2 - this.A / 2 + this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,
        ],
        [
          this.w / 2 - this.A / 2 + this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 +
            this.A / 2 -
            (((this.A - this.C) * this.randUpDown) / this.B +
              this.randLeftRight),
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 +
            this.A / 2 -
            (((this.A - this.C) * (this.B - this.randUpDown)) / this.B +
              this.randLeftRight),
          this.h / 2 + this.B / 2 - this.randUpDown,

          this.w / 2 - this.A / 2 + this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,
        ],
        [
          this.w / 2 -
            this.A / 2 +
            (((this.A - this.C) * this.randUpDown) / this.B +
              this.randLeftRight),
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 + this.A / 2 - this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 + this.A / 2 - this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,

          this.w / 2 -
            this.A / 2 +
            (((this.A - this.C) * (this.B - this.randUpDown)) / this.B +
              this.randLeftRight),
          this.h / 2 + this.B / 2 - this.randUpDown,
        ],
        [
          this.w / 2 -
            this.A / 2 +
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) * this.randUpDown +
            this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 +
            this.A / 2 +
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) * this.randUpDown -
            this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 +
            this.A / 2 +
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) *
              (this.B - this.randUpDown) -
            this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,

          this.w / 2 -
            this.A / 2 +
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) *
              (this.B - this.randUpDown) +
            this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,
        ],
        [
          this.w / 2 -
            this.A / 2 -
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) * this.randUpDown +
            this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 +
            this.A / 2 -
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) * this.randUpDown -
            this.randLeftRight,
          this.h / 2 - this.B / 2 + this.randUpDown,

          this.w / 2 +
            this.A / 2 -
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) *
              (this.B - this.randUpDown) -
            this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,

          this.w / 2 -
            this.A / 2 -
            (Math.sqrt(this.C ** 2 - this.B ** 2) / this.B) *
              (this.B - this.randUpDown) +
            this.randLeftRight,
          this.h / 2 + this.B / 2 - this.randUpDown,
        ],
        [
          this.w / 2 -
            this.A / 2 +
            (((this.A / 2 - this.C / 2) * this.randUpDown) / this.B +
              this.randLeftRight),
          this.h / 2 - this.B / 2 + this.randUpDown,
          this.w / 2 +
            this.A / 2 -
            (((this.A / 2 - this.C / 2) * this.randUpDown) / this.B +
              this.randLeftRight),
          this.h / 2 - this.B / 2 + this.randUpDown,
          this.w / 2 +
            this.A / 2 -
            (((this.A / 2 - this.C / 2) * (this.B - this.randUpDown)) / this.B +
              this.randLeftRight),
          this.h / 2 + this.B / 2 - this.randUpDown,
          this.w / 2 -
            this.A / 2 +
            (((this.A / 2 - this.C / 2) * (this.B - this.randUpDown)) / this.B +
              this.randLeftRight),
          this.h / 2 + this.B / 2 - this.randUpDown,
        ],
        [
          this.w / 2 -
            this.A / 2 +
            (((this.A / 2 - this.C / 2) * this.randUpDown) / this.B +
              this.randLeftRight),
          this.h / 2 - this.B / 2 + this.randUpDown,
          this.w / 2 +
            this.A / 2 -
            (((this.A / 2 - this.C / 2) * this.randUpDown) / this.B +
              this.randLeftRight),
          this.h / 2 - this.B / 2 + this.randUpDown,
          this.w / 2 +
            this.A / 2 -
            (((this.A / 2 - this.C / 2) * (this.B - this.randUpDown)) / this.B +
              this.randLeftRight),
          this.h / 2 + this.B / 2 - this.randUpDown,
          this.w / 2 -
            this.A / 2 +
            (((this.A / 2 - this.C / 2) * (this.B - this.randUpDown)) / this.B +
              this.randLeftRight),
          this.h / 2 + this.B / 2 - this.randUpDown,
        ]
      );
    },

    tester() {
      let eName = "shape" + this.shape;
      const shapeType = this.$refs.stage.getNode().findOne("." + eName);

      const shapeType1 = this.$refs.stage.getNode().findOne(".panelGroup0");
    },
    fullCanvas() {
      this.canvasSize = 100;
      this.fullToSmall = !this.fullToSmall;
      this.stopScrolling();
    },
    smallCanvas() {
      this.canvasSize = width < 1200 ? 95 : (1200 / width) * 95;

      this.fullToSmall = !this.fullToSmall;

    },

    deletePanelGroup(num) {
      this.$emit("deleteGroup", num);
      this.panelGrouper.splice(num, 1);

      this.panelar.splice(num, 1);

      this.scaleXG.splice(num, 1);
      this.scaleYG.splice(num, 1);
      this.rows.splice(num, 1);
      this.columns.splice(num, 1);
      this.breddToHojd.splice(num, 1);
      this.fastTillBredd.splice(num, 1);
      this.topLine.splice(num, 1);
      this.leftLine.splice(num, 1);
      this.allBottom.splice(num, 1);
      this.allRight.splice(num, 1);
      this.topLineFaste.splice(num, 1);
      this.leftLineFaste.splice(num, 1);

      this.topDist.splice(num, 1);
      this.leftDist.splice(num, 1);
    },

    addNewPanelGroup(x, y, FTB) {
      this.$emit("newGroup", [x, y]);

      this.newPanelaGroup(FTB);

      this.distanceLines();
      this.distanceLinesFaste();

      this.distanceLinesRB();
    },
    newPanelaGroup(FTB) {
      this.panelar.push([
        {
          x: this.w / 2 - 58.5,
          y: this.h / 2 - 85,
          redOut: "#44444499",
          outSurf: false,
        },
      ]);

      this.scaleXG.push(1);
      this.scaleYG.push(1);
      this.rows.push(1);
      this.columns.push(1);
      this.breddToHojd.push(false);
      this.fastTillBredd.push(FTB);
      this.topLine.push([]);
      this.leftLine.push([]);
      this.allBottom.push([]);
      this.allRight.push([]);
      this.topLineFaste.push([]);
      this.leftLineFaste.push([]);

      this.topDist.push(0);
      this.leftDist.push(0);

      this.panelGrouper.push({
        x: this.w / 2 - 58.5,
        y: this.h / 2 - 85,
      });
    },
    cursorMove() {
      document.getElementById("mCanvas" + this.canvasNum).style.cursor = "move";
    },
    cursorPoint() {
      document.getElementById("mCanvas" + this.canvasNum).style.cursor =
        "pointer";
    },

    cursorNorm() {
      document.getElementById("mCanvas" + this.canvasNum).style.cursor =
        "default";
    },
    rotateFaster() {
      if (this.fixElement) {
        this.fastTillBredd[this.markedGroup] =
          !this.fastTillBredd[this.markedGroup];
      }
    },

    rotatePaler(t) {
      if (this.fixElement) {
        /*let x1 = this.bredd1[t];
        let x2 = this.hojd1[t];
        this.bredd1[t] = x2;
        this.hojd1[t] = x1;*/
        let eName = "panelGroup" + t;
        const shapeType = this.$refs.stage.getNode().findOne("." + eName);

        //this.breddToHojd[t] = !this.breddToHojd[t];
        this.$emit("rotatePanel", t);

        setTimeout(() => {
          this.drawPanelar(shapeType);
        }, 10);
      }
    },
    backProcess() {
      this.fixElement = true;
      this.$emit("Hide", 1);
    },
    distanceLinesRB() {
      for (let i = 0; i < this.panelar.length; i++) {
        this.allRight[i] = [
          this.panelar[i][0].x - 10,
          this.panelar[i][0].y,
          this.panelar[i][0].x - 10,
          this.panelar[i][this.panelar[i].length - 1].y + this.hojd1[i],
        ];
        this.allBottom[i] = [
          this.panelar[i][this.panelar[i].length - 1].x + this.bredd1[i],
          this.panelar[i][0].y - 20,
          this.panelar[i][0].x,
          this.panelar[i][0].y - 20,
        ];
      }
    },
    distanceLines() {
      for (let i = 0; i < this.panelar.length; i++) {
        this.topLine[i] = [
          this.panelar[i][0].x,
          this.panelar[i][0].y,
          this.panelar[i][0].x,
          this.panelar[i][0].y + this.topDist[i],
        ];
        this.leftLine[i] = [
          this.panelar[i][0].x,
          this.panelar[i][0].y,
          this.panelar[i][0].x + this.leftDist[i],
          this.panelar[i][0].y,
        ];
      }
    },
    async distanceLinesFaste() {
      for (let i = 0; i < this.panelar.length; i++) {
        this.topLineFaste[i] = [
          this.panelar[i][0].x +
            (!this.fastTillBredd[i]
              ? this.distMellanFäst[i]
              : this.startPoint[i]
              ? this.startPoint[i]
              : 0),
          this.panelar[i][0].y +
            (this.fastTillBredd[i]
              ? this.distMellanFäst[i]
              : this.startPoint[i]
              ? this.startPoint[i]
              : 0),
          this.panelar[i][0].x +
            (!this.fastTillBredd[i]
              ? this.distMellanFäst[i]
              : this.startPoint[i]
              ? this.startPoint[i]
              : 0),
          this.panelar[i][0].y + this.topDist[i],
        ];
        this.leftLineFaste[i] = [
          this.panelar[i][0].x +
            (!this.fastTillBredd[i]
              ? this.distMellanFäst[i]
              : this.startPoint[i]
              ? this.startPoint[i]
              : 0),
          this.panelar[i][0].y +
            (this.fastTillBredd[i]
              ? this.distMellanFäst[i]
              : this.startPoint[i]
              ? this.startPoint[i]
              : 0),
          this.panelar[i][0].x + this.leftDist[i],
          this.panelar[i][0].y +
            (this.fastTillBredd[i]
              ? this.distMellanFäst[i]
              : this.startPoint[i]
              ? this.startPoint[i]
              : 0),
        ];
      }
    },

    showHideArrows() {
      this.TLShow = !this.TLShow;
      this.WHShow = !this.WHShow;
    },

    async completeProcess() {
      this.$emit("positionSkena", [this.fastTillBredd, this.breddToHojd]);

      this.deletRedPanel();

      this.fixElement = false;

      for (let i = 0; i < this.panelar.length; i++) {
        let toBeGrouped =
          this.rows[i] * this.columns[i] != this.panelar[i].length;

        if (toBeGrouped) {
          this.unGroup(i);
          i = -1;
        }
      }

      this.distanceLines();
      this.distanceLinesFaste();

      this.distanceLinesRB();
      this.randzonDrowAPI();

      /*
      var goToDefult = false;

      if (!this.TLShow) {
        this.showHideArrows();
        goToDefult = true;
      }

      let imgToExport;

      let scaleholder = this.scalePercentage;
      this.scalePercentage = 1;

      setTimeout(() => {
        const childrenBounds = this.$refs.toexport
          .getNode()
          .children.map((child) => child.getClientRect());
        const minX = Math.min(
          ...childrenBounds.map((b) => (b.x ? b.x : 999999999))
        );
        const minY = Math.min(
          ...childrenBounds.map((b) => (b.y ? b.y : 999999999))
        );
        const maxX = Math.max(
          ...childrenBounds.map((b) => (b.x ? b.x + b.width : 0))
        );
        const maxY = Math.max(
          ...childrenBounds.map((b) => (b.y ? b.y + b.height : 0))
        );

        this.$refs.toexport.getNode().toImage({
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY,
          callback: function (img) {
            imgToExport = img;
          },
        });
        this.scalePercentage = scaleholder;

        if (goToDefult) {
          this.showHideArrows();
        }

    
      }, 100);*/

      this.$emit("values", [
        this.panelar,
        0,
        this.rowsCount,
        this.distTop,
        this.distLeft,
        this.distMellanFästToExport,
        this.rowsLong,
        this.fastTillBredd,
      ]);

      /*
      setTimeout(() => {
        this.$emit("values", [
          this.panelar,
          imgToExport,
          this.rowsCount,
          this.distTop,
          this.distLeft,
          this.distMellanFästToExport,
          this.rowsLong,
          this.fastTillBredd,
        ]);
      }, 300);*/
    },

    async imageToReport() {

      var goToDefult = false;

      if (!this.TLShow) {
        this.showHideArrows();
        goToDefult = true;
      }

      let imgToExport;
      let imageArr = [];
      let imageArrAssiset = [];

      let infoArr = [];


      let scaleholder = this.scalePercentage;
      this.scalePercentage = 2;

      // setTimeout(() => {
      await this.distanceLinesFaste();

      // }, 9500);

      //setTimeout(() => {

      const childrenBounds = await this.$refs.toexport
        .getNode()
        .children.map((child) => child.getClientRect());
      const minX = Math.min(
        ...childrenBounds.map((b) => (b.x ? b.x : 999999999))
      );
      const minY = Math.min(
        ...childrenBounds.map((b) => (b.y ? b.y : 999999999))
      );
      const maxX = Math.max(
        ...childrenBounds.map((b) => (b.x ? b.x + b.width : 0))
      );
      const maxY = Math.max(
        ...childrenBounds.map((b) => (b.y ? b.y + b.height : 0))
      );

      await this.$refs.toexport.getNode().toImage({
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
        callback: function (img) {

          imgToExport = img;

        },
      });

      for (let i = 0; i < this.panelar.length; i++) {
        let eName = "panelToImage" + i;
        const childrenBoundsSingleP = await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .children.map((child) => child.getClientRect());
        const minXP = Math.min(
          ...childrenBoundsSingleP.map((b) => (b.x ? b.x : 999999999))
        );
        const minYP = Math.min(
          ...childrenBoundsSingleP.map((b) => (b.y ? b.y : 999999999))
        );
        const maxXP = Math.max(
          ...childrenBoundsSingleP.map((b) => (b.x ? b.x + b.width : 0))
        );
        const maxYP = Math.max(
          ...childrenBoundsSingleP.map((b) => (b.y ? b.y + b.height : 0))
        );

        const imgW = Math.round(
                    this.distance12(
                      this.allBottom[i][0],
                      this.allBottom[i][1],
                      this.allBottom[i][2],
                      this.allBottom[i][3]
                    )
                  );
        const imgH =  Math.round(
          this.distance12(
                      this.allRight[i][0],
                     this.allRight[i][1],
                     this.allRight[i][2],
                      this.allRight[i][3]
                    )
                  );
        imageArrAssiset =[];
        let multiplierX = 250/this.bredd1[i];
        let multiplierY = 250/this.hojd1[i];

        const sizeCutX = (x)=>{ return (x/(this.panelar[i].length/this.columns[i]))*multiplierX};
        const sizeCutY = (x)=>{ return (x/(this.panelar[i].length/this.rows[i]))*multiplierY};

        if (imgW<500&&imgH<500) {

          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: minXP,
            y: minYP,
            width: maxXP - minXP ,
            height: maxYP - minYP,
            callback: function (img) {

              imageArr.push(img);


            },
          });


        } else if (imgW>500&&imgH<500) {
          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: minXP,
            y: minYP,
            width: sizeCutX(maxXP - minXP) ,
            height: maxYP - minYP,
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: maxXP -sizeCutX(maxXP - minXP),
            y: minYP,
            width: sizeCutX(maxXP - minXP) ,
            height: maxYP - minYP,
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          imageArr.push(imageArrAssiset);


        } else if (imgW<500&&imgH>500) {
          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: minXP,
            y: minYP,
            width: maxXP - minXP ,
            height: sizeCutY(maxYP - minYP),
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: minXP,
            y: maxYP-sizeCutY(maxYP - minYP),
            width: maxXP - minXP ,
            height: sizeCutY(maxYP - minYP),
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          imageArr.push(imageArrAssiset);

        } else if (imgW>500&&imgH>500) {
          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: minXP,
            y: minYP,
            width: sizeCutX(maxXP - minXP) ,
            height: sizeCutY(maxYP - minYP),
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: maxXP -sizeCutX(maxXP - minXP),
            y: minYP,
            width: sizeCutX(maxXP - minXP) ,
            height: sizeCutY(maxYP - minYP),
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: maxXP - sizeCutX(maxXP - minXP),
            y: maxYP - sizeCutY(maxYP - minYP),
            width: sizeCutX(maxXP - minXP) ,
            height: sizeCutY(maxYP - minYP),
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          await this.$refs.stage
          .getNode()
          .findOne("." + eName)
          .toImage({
            x: minXP,
            y: maxYP - sizeCutX(maxXP - minXP) ,
            width: sizeCutX(maxXP - minXP) ,
            height: sizeCutX(maxXP - minXP),
            callback: function (img) {

              imageArrAssiset.push(img);


            },
          });

          imageArr.push(imageArrAssiset);

         }

      

          let eNamea = "infoToImage" + i;
          const childrenBoundsSinglePa = await this.$refs.stage
          .getNode()
          .findOne("." + eNamea)
          .children.map((child) => child.getClientRect());
          const minXPa = Math.min(
          ...childrenBoundsSinglePa.map((b) => (b.x ? b.x : 999999999))
        );
        const minYPa = Math.min(
          ...childrenBoundsSinglePa.map((b) => (b.y ? b.y : 999999999))
        );
        const maxXPa = Math.max(
          ...childrenBoundsSinglePa.map((b) => (b.x ? b.x + b.width : 0))
        );
        const maxYPa = Math.max(
          ...childrenBoundsSinglePa.map((b) => (b.y ? b.y + b.height : 0))
        );

        await this.$refs.stage
          .getNode()
          .findOne("." + eNamea)
          .toImage({
            x: minXPa,
            y: minYPa,
            width: maxXPa - minXPa,
            height: maxYPa - minYPa,
            callback: function (img) {
              infoArr.push(img);
            },
          });



      }

      this.scalePercentage = scaleholder;

      if (goToDefult) {
        this.showHideArrows();
      }

      /*
this.$refs.toexport.getNode().toImage({

callback(img) {
imgToExport = img.src;
}
})*/

      //}, 10000);

      //  setTimeout(() => {
        console.log('imageArr');

        console.log(imageArr);
        console.log(imgToExport);
        console.log(infoArr);

      this.$emit("imageOfRoof", [imgToExport, imageArr, infoArr]);
      //}, 10300);
    },

    rulersCounter() {
      let scaleA = this.A < 1000 ? 3 : 1.5;
      let scaleB = this.B < 1000 ? 3 : 1.5;

      this.rulerXB = [];
      this.rulerXS = [];
      this.rulerYB = [];
      this.rulerYS = [];

      let eName = "shape" + this.shape;
      const shapeType = this.$refs.stage.getNode().findOne("." + eName);
      let xB = shapeType.points()[0] + shapeType.getParent().getParent().x();

      let yB = shapeType.points()[1] + shapeType.getParent().getParent().y();

      this.scaleShiftX = -shapeType.points()[0] * (1 - this.scalePercentage);
      this.scaleShiftY = -shapeType.points()[1] * (1 - this.scalePercentage);

      for (
        let i = 0;
        i < this.A * scaleA * this.scalePercentage;
        i += 100 * this.scalePercentage
      ) {
        this.rulerXB.push(xB + i);
        if (i !== 0) {
          this.rulerXB.unshift(xB - i);
        }
      }
      for (
        let i = 0;
        i < this.A * scaleA * this.scalePercentage;
        i += 10 * this.scalePercentage
      ) {
        this.rulerXS.push(xB + i);
        if (i !== 0) {
          this.rulerXS.push(xB - i);
        }
      }

      for (
        let i = 0;
        i < this.B * scaleB * this.scalePercentage;
        i += 100 * this.scalePercentage
      ) {
        this.rulerYB.push(yB + i);
        if (i !== 0) {
          this.rulerYB.unshift(yB - i);
        }
      }
      for (
        let i = 0;
        i < this.B * scaleB * this.scalePercentage;
        i += 10 * this.scalePercentage
      ) {
        this.rulerYS.push(yB + i);
        if (i !== 0) {
          this.rulerYS.push(yB - i);
        }
      }
    },

    deletRedPanel() {
      //this.checkIfOut(e);

      for (let i = 0; i < this.panelar.length; i++) {
        for (let j = 0; j < this.panelar[i].length; j++) {
          if (this.panelar[i][j].outSurf == true) {
            this.deletPanel(j, i);
            j--;
          }
        }
      }
    },
    deletPanel(j, i) {
      this.panelar[i].splice(j, 1);

      for (let t = 0; t < this.panelar; t++) {
        this.panelar[t] = [] ? this.panelar.splice(t, 1) : "";
      }
    },

    rulersLine() {
      const stage = this.$refs.stage.getNode();

      let mouse = stage.getPointerPosition();

      this.mousePos.x = mouse.x;
      this.mousePos.y = mouse.y;

      let eName = "shape" + this.shape;
      const zeroPoint = stage.findOne("." + eName);

      this.mouseDistX =
        Math.round(
          (mouse.x -
            zeroPoint.points()[0] -
            zeroPoint.getParent().x() -
            zeroPoint.getParent().getParent().x() -
            this.scaleShiftX) /
            this.scalePercentage
        ) / 100;
      this.mouseDistY =
        Math.round(
          (mouse.y -
            zeroPoint.points()[1] -
            zeroPoint.getParent().y() -
            zeroPoint.getParent().getParent().y() -
            this.scaleShiftY) /
            this.scalePercentage
        ) / 100;
    },

    distance12(x1, y1, x2, y2) {
      let r = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      return r;
    },
    zoomIn() {
      this.scalePercentage += 0.1;
    },
    zoomOut() {
      this.scalePercentage -= 0.1;
    },
    handleStageMouseUp(e) {
      this.scaleXG[e.target.id()] =
        Math.round(
          (this.rows[e.target.id()] +
            (2 * this.rows[e.target.id()]) / this.bredd1[e.target.id()] -
            2 / this.bredd1[e.target.id()]) *
            100
        ) / 100;

      this.scaleYG[e.target.id()] =
        Math.round(
          (this.columns[e.target.id()] +
            (2 * this.columns[e.target.id()]) / this.hojd1[e.target.id()] -
            2 / this.hojd1[e.target.id()]) *
            100
        ) / 100;

      this.checkIfOut(this.markedGroup);
    },
    handleDragStart(e) {
      this.drawPanelar(e.target);
      this.checkIfOut(this.markedGroup);
      this.distanceLines();
      this.distanceLinesFaste();

      this.distanceLinesRB();
    },
    drawPanelar(e) {
      this.panelar[e.id()] = [];

      for (let i = 0; i < this.rows[e.id()]; i++) {
        for (let j = 0; j < this.columns[e.id()]; j++) {
          this.panelar[e.id()].push({
            x: e.x() + (this.bredd1[e.id()] + 2) * i,
            y: e.y() + (this.hojd1[e.id()] + 2) * j,
            redOut: "#44444499",
            outSurf: false,
          });
        }
      }
      this.panelGrouper[e.id()].x = e.x();
      this.panelGrouper[e.id()].y = e.y();
    },

    checkIfOut(elm) {
      this.inRandzon = false;

      let eName = "shape" + this.shape;
      const shapeType = this.$refs.stage.getNode().findOne("." + eName);
      let A = this.A;
      let B = this.B;
      let C = this.C;
      let xB = shapeType.points()[0] + shapeType.getParent().x();
      let yB = shapeType.points()[1] + shapeType.getParent().y();
      let xBE = xB + this.randLeftRight;
      let yBE = yB + this.randUpDown;
      let AE = this.A - this.randLeftRight * 2;
      let BE = this.B - this.randUpDown * 2;
      let CE = this.C - this.randLeftRight * 2;

      for (let i = 0; i < this.panelar[elm].length; i++) {
        let checker = false;
        let checkRandzon = false;

        if (this.shape == 0) {
          checker =
            xB > this.panelar[elm][i].x ||
            xB + A < this.panelar[elm][i].x + this.bredd1[elm] ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          checkRandzon =
            xBE > this.panelar[elm][i].x ||
            xBE + AE < this.panelar[elm][i].x + this.bredd1[elm] ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          this.leftDist[elm] = xB - this.panelar[elm][0].x;
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }

        if (this.shape == 1) {
          let tan = (A - C) / B;

          let dist1 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y + this.hojd1[elm],
            xB,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adj = this.distance12(
            xB + C,
            yB + B,
            xB + C,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let dist2 = tan * adj + C;

          checker =
            xB > this.panelar[elm][i].x ||
            dist2 < dist1 ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          let tanE = (AE - CE) / BE;

          let distE1 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y + this.hojd1[elm],
            xBE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adjE = this.distance12(
            xBE + CE,
            yBE + BE,
            xBE + CE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let distE2 = tanE * adjE + CE;

          checkRandzon =
            xBE > this.panelar[elm][i].x ||
            distE2 < distE1 ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          this.leftDist[elm] = xB - this.panelar[elm][0].x;
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }

        if (this.shape == 2) {
          let tan = (A - C) / B;

          let dist1 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y + this.hojd1[elm],
            xB + A,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adj = this.distance12(
            xB + A - C,
            yB + B,
            xB + A - C,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let dist2 = tan * adj + C;

          checker =
            dist1 > dist2 ||
            xB + A < this.panelar[elm][i].x + this.bredd1[elm] ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          let tanE = (A - C) / B;

          let distE1 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y + this.hojd1[elm],
            xBE + AE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adjE = this.distance12(
            xBE + AE - CE,
            yBE + BE,
            xBE + AE - CE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let distE2 = tanE * adjE + CE;

          checkRandzon =
            distE1 > distE2 ||
            xBE + AE < this.panelar[elm][i].x + this.bredd1[elm] ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          let adjLine = this.distance12(xB, yB, xB, this.panelar[elm][0].y);
          let dist3 = tan * adjLine;

          this.leftDist[elm] = -this.panelar[elm][0].x + (xB + dist3);
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }

        if (this.shape == 3) {
          let opp = Math.sqrt(C ** 2 - B ** 2);
          let tan = opp / B;

          let dist1 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y + this.hojd1[elm],
            xB,
            this.panelar[elm][i].y + this.hojd1[elm]
          );

          let adj1 = this.distance12(
            xB,
            yB,
            xB,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adj2 = this.distance12(
            xB + A,
            yB,
            xB + A,
            this.panelar[elm][i].y
          );

          let dist2 = tan * adj1;
          let dist4 = tan * adj2;

          let dist3 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y,
            xB + A,
            this.panelar[elm][i].y
          );

          checker =
            dist1 < dist2 ||
            (dist3 > dist4 &&
              this.panelar[elm][i].x + this.bredd1[elm] > xB + A) ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          let adjLine = this.distance12(xB, yB, xB, this.panelar[elm][0].y);
          let dist5 = tan * adjLine;

          let oppE = Math.sqrt(CE ** 2 - BE ** 2);
          let tanE = oppE / BE;

          let distE1 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y + this.hojd1[elm],
            xBE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );

          let adjE1 = this.distance12(
            xBE,
            yBE,
            xBE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adjE2 = this.distance12(
            xBE + AE,
            yBE,
            xBE + AE,
            this.panelar[elm][i].y
          );

          let distE2 = tanE * adjE1;
          let distE4 = tanE * adjE2;

          let distE3 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y,
            xBE + AE,
            this.panelar[elm][i].y
          );

          checkRandzon =
            distE1 < distE2 ||
            (distE3 > distE4 &&
              this.panelar[elm][i].x + this.bredd1[elm] > xBE + AE) ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          this.leftDist[elm] = -this.panelar[elm][0].x + (xB + dist5);
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }

        if (this.shape == 4) {
          let opp = Math.sqrt(C ** 2 - B ** 2);
          let tan = opp / B;

          let dist1 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y,
            xB,
            this.panelar[elm][i].y
          );
          let adj1 = this.distance12(xB, yB, xB, this.panelar[elm][i].y);
          let dist2 = tan * adj1;

          let dist3 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y + this.hojd1[elm],
            xB + A,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adj2 = this.distance12(
            xB + A,
            yB,
            xB + A,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let dist4 = tan * adj2;

          checker =
            (dist1 > dist2 && this.panelar[elm][i].x < xB) ||
            dist3 < dist4 ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          let oppE = Math.sqrt(CE ** 2 - BE ** 2);
          let tanE = oppE / BE;

          let distE1 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y,
            xBE,
            this.panelar[elm][i].y
          );
          let adjE1 = this.distance12(xBE, yBE, xBE, this.panelar[elm][i].y);
          let distE2 = tanE * adjE1;

          let distE3 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y + this.hojd1[elm],
            xBE + AE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adjE2 = this.distance12(
            xBE + AE,
            yBE,
            xBE + AE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let distE4 = tanE * adjE2;

          checkRandzon =
            (distE1 > distE2 && this.panelar[elm][i].x < xBE) ||
            distE3 < distE4 ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          let adjLine = this.distance12(xB, yB, xB, this.panelar[elm][0].y);
          let dist5 = tan * adjLine;

          this.leftDist[elm] = -this.panelar[elm][0].x + xB - dist5;
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }
        if (this.shape == 5) {
          let tan = (A - C) / 2 / B;

          let dist1 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y + this.hojd1[elm],
            xB + A,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adj = this.distance12(
            xB + A,
            yB,
            xB + A,
            this.panelar[elm][i].y + this.hojd1[elm]
          );

          let dist2 = tan * adj;

          let dist3 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y + this.hojd1[elm],
            xB,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adj2 = this.distance12(
            xB,
            yB,
            xB,
            this.panelar[elm][i].y + this.hojd1[elm]
          );

          let dist4 = tan * adj2;

          checker =
            dist3 < dist4 ||
            dist2 > dist1 ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          let tanE = (AE - CE) / 2 / BE;

          let distE1 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y + this.hojd1[elm],
            xBE + AE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adjE = this.distance12(
            xBE + AE,
            yBE,
            xBE + AE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );

          let distE2 = tanE * adjE;

          let distE3 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y + this.hojd1[elm],
            xBE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );
          let adjE2 = this.distance12(
            xBE,
            yBE,
            xBE,
            this.panelar[elm][i].y + this.hojd1[elm]
          );

          let distE4 = tanE * adjE2;

          checkRandzon =
            distE3 < distE4 ||
            distE2 > distE1 ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          let adjLine = this.distance12(xB, yB, xB, this.panelar[elm][0].y);
          let dist5 = tan * adjLine;

          this.leftDist[elm] = -this.panelar[elm][0].x + xB + dist5;
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }
        if (this.shape == 6) {
          let Cs = (C - A) / 2;
          let tan = Cs / B;

          let dist1 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y,
            xB - Cs + C,
            this.panelar[elm][i].y
          );
          let adj = this.distance12(
            xB - Cs + C,
            yB + B,
            xB - Cs + C,
            this.panelar[elm][i].y
          );

          let dist2 = tan * adj;

          let dist3 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y,
            xB - Cs,
            this.panelar[elm][i].y
          );
          let adj2 = this.distance12(
            xB - Cs,
            yB + B,
            xB - Cs,
            this.panelar[elm][i].y
          );

          let dist4 = tan * adj2;

          checker =
            dist3 < dist4 ||
            dist2 > dist1 ||
            yB > this.panelar[elm][i].y ||
            yB + B < this.panelar[elm][i].y + this.hojd1[elm];

          let CsE = (CE - AE) / 2;
          let tanE = CsE / BE;

          let distE1 = this.distance12(
            this.panelar[elm][i].x + this.bredd1[elm],
            this.panelar[elm][i].y,
            xBE - CsE + CE,
            this.panelar[elm][i].y
          );
          let adjE = this.distance12(
            xBE - CsE + CE,
            yBE + BE,
            xBE - CsE + CE,
            this.panelar[elm][i].y
          );

          let distE2 = tanE * adjE;

          let distE3 = this.distance12(
            this.panelar[elm][i].x,
            this.panelar[elm][i].y,
            xBE - CsE,
            this.panelar[elm][i].y
          );
          let adjE2 = this.distance12(
            xBE - CsE,
            yBE + BE,
            xBE - CsE,
            this.panelar[elm][i].y
          );

          let distE4 = tanE * adjE2;

          checkRandzon =
            distE3 < distE4 ||
            distE2 > distE1 ||
            yBE > this.panelar[elm][i].y ||
            yBE + BE < this.panelar[elm][i].y + this.hojd1[elm];

          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          let adjLine = this.distance12(xB, yB, xB, this.panelar[elm][0].y);
          let dist5 = tan * adjLine;

          this.leftDist[elm] = -this.panelar[elm][0].x + xB - dist5;
          this.topDist[elm] = yB - this.panelar[elm][0].y;
        }

        if (checkRandzon) {
          this.panelar[elm][i].redOut = "#aaaa0077";
          this.inRandzon = true;
        }
        this.$emit("inRandzon", this.inRandzon);

        if (checker) {
          this.panelar[elm][i].redOut = "#aa000077";
          this.panelar[elm][i].outSurf = true;
        }
      }
    },

    handleTransformEnd(e) {
      this.rows[e.target.id()] =
        Math.round(e.target.scaleX() + this.scalePercentage) > 1
          ? Math.round(
              (e.target.scaleX() * this.bredd1[e.target.id()]) /
                (this.bredd1[e.target.id()] + 2)
            )
          : 1;

      this.columns[e.target.id()] =
        Math.round(e.target.scaleY()) > 1
          ? Math.round(
              (e.target.scaleY() * this.hojd1[e.target.id()]) /
                (this.hojd1[e.target.id()] + 2)
            )
          : 1;
      this.panelGrouper[e.target.id()].x = e.target.x();
      this.panelGrouper[e.target.id()].y = e.target.y();

      this.drawPanelar(e.target);
      this.distanceLinesRB();
    },

    handleStageMouseDown(e) {
      let clickedOnTransformer = false;
      if (e.target.className !== undefined) {
        if (e.target.getParent().className === "Transformer") {
          clickedOnTransformer = true;
        } else {
          clickedOnTransformer = false;
        }
      }
      if (e.target.name() == "panelGroup" + e.target.id()) {
        this.markedGroup = e.target.id();
        this.updateTransformer(e);
        return;
      } else if (clickedOnTransformer) {
        return;
      } else if (e.target.name() !== "panelGroup" + e.target.id()) {
        this.updateTransformer("");
      }
    },

    updateTransformer(e) {
      const eId = e.target ? e.target.id() : false;

      const transformerNode = this.$refs.transformer.getNode();

      const stage = transformerNode.getStage();

      const selectedNode =
        eId + 1 ? stage.findOne("." + "panelGroup" + eId) : "";

      // do nothing if selected node is already attached
      if (selectedNode === transformerNode.node()) {
        return;
      }

      if (selectedNode) {
        // attach to another node
        transformerNode.nodes([selectedNode]);
        transformerNode.boundBoxFunc((oldBox, newBox) => {
          if (
            newBox.width / this.scalePercentage / this.bredd1[e.target.id()] <
            1
          ) {
            newBox.width = this.bredd1[e.target.id()] * this.scalePercentage;
          }
          if (
            newBox.height / this.scalePercentage / this.hojd1[e.target.id()] <
            1
          ) {
            newBox.height = this.hojd1[e.target.id()] * this.scalePercentage;
          }

          /*let r = Math.floor(newBox.width)>oldBox.width ? Math.floor(newBox.width):oldBox.width ;
         let c = Math.floor(newBox.height)>oldBox.height ? Math.floor(newBox.height):oldBox.height ;

         this.panelar=[];

         for (let i =0;i<r;i++){
            for(let j =0;j<c;j++) {
              this.panelar.push({x: newBox.x+(this.bredd1+2)*i, y: newBox.y+ (this.hojd1+2) *j});

            }

         }*/

          return newBox;
        });
      } else {
        // remove transformer
        transformerNode.nodes([]);
      }
    },
  },
};
</script>

<template>
  <div
    :class="['canvas', fullToSmall ? ' fullCanvas' : '']"
    :id="'mCanvas' + canvasNum"
  >
    <v-stage
      ref="stage"
      @mousemove="rulersLine"
      @mousedown="handleStageMouseDown"
      @touchstart="handleStageMouseDown"
      :config="stageSize"
    >
      <v-layer>
        <v-line
          :config="{
            points: [0, mousePos.y, w, mousePos.y],
            closed: false,
            stroke: '#0005',
            strokeWidth: 1,
          }"
        />
        <v-line
          :config="{
            points: [mousePos.x, 0, mousePos.x, h],
            closed: false,
            stroke: '#0005',
            strokeWidth: 1,
          }"
        />
        <v-ellipse
          :config="{
            x: mousePos.x,
            y: 60,
            fill: 'black',
            radiusX: 40,
            radiusY: 20,
          }"
        />
        <v-ellipse
          :config="{
            x: 80,
            y: mousePos.y,
            fill: 'black',
            radiusX: 40,
            radiusY: 20,
          }"
        />

        <v-text
          :config="{
            offsetX: 27,
            x: mousePos.x,
            y: 50,
            text: mouseDistX + 'm',
            textAlign: 'center',
            fill: 'white',
            fontSize: 20,
          }"
        />
        <v-text
          :config="{
            offsetY: 8,

            x: 50,
            y: mousePos.y,
            text: mouseDistY + 'm',
            textAlign: 'center',
            fill: 'white',
            fontSize: 20,
          }"
        />
      </v-layer>

      <v-layer
        ref="toexport"
        @dragmove="rulersCounter"
        :config="{
          draggable: true,
          scaleX: scalePercentage,
          scaleY: scalePercentage,
          x: w / 4,
          y: h / 4,
        }"
      >
        <v-group
          :config="{
            visible: shape == 0 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[0],
              name: 'shape0',
              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />

          <v-line
            :config="{
              points: randzonPoints[0],
              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>
        <v-group
          :config="{
            visible: shape == 1 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[1],
              name: 'shape1',

              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />
          <v-line
            :config="{
              points: randzonPoints[1],
              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>
        <v-group
          :config="{
            visible: shape == 2 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[2],
              name: 'shape2',

              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />

          <v-line
            :config="{
              points: randzonPoints[2],

              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>

        <v-group
          :config="{
            visible: shape == 3 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[3],
              name: 'shape3',

              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />
          <v-line
            :config="{
              points: randzonPoints[3],

              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>
        <v-group
          :config="{
            visible: shape == 4 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[4],
              name: 'shape4',

              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />
          <v-line
            :config="{
              points: randzonPoints[4],

              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>
        <v-group
          :config="{
            visible: shape == 5 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[5],
              name: 'shape5',

              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />
          <v-line
            :config="{
              points: randzonPoints[5],
              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>
        <v-group
          :config="{
            visible: shape == 6 ? true : false,
          }"
        >
          <v-line
            :config="{
              points: shapesPoints[6],
              name: 'shape6',

              closed: true,
              fill: '#fff',
              shadowBlur: 5,
              shadowOffset: { x: 0, y: 0 },
            }"
          />
          <v-line
            :config="{
              points: randzonPoints[6],

              closed: true,
              stroke: '#ffda2a',
            }"
          />
        </v-group>

        <v-group v-for="(j, indexj) in panelar" v-bind:key="indexj">
          <v-group
            :config="{
              name: 'panelToImage' + indexj,
            }"
           >
            <v-rect
              ref="panels"
              v-for="(i, index) in j"
              v-bind:key="index"
              :config="{
                x: i.x,
                y: i.y,
                width: bredd1[indexj],
                height: hojd1[indexj],
                fill: i.redOut,
                draggable: false,
                moveToTop: true,
              }"
            />
            <v-circle
              :config="{
                x: j[0].x + 10,
                y: j[0].y + 10,
                radius: 8,
                fill: '#fcb324',
                moveToTop: true,
              }"
            />
            <v-text
              :config="{
                x: j[0].x + 7,
                y: j[0].y + 6,
                align: 'center',
                verticalAlign: 'middle',
                fill: '#fff',
                text: indexj + 1,
                fontSize: 10,
              }"
            />

            <v-rect
              ref="panelsLefter"
              v-for="(i, index) in panelar[indexj]"
              v-bind:key="index"
              :config="{
                x: fastTillBredd[indexj]
                  ? i.x - 5.5
                  : i.x - 3 + distMellanFäst[indexj],
                y: fastTillBredd[indexj]
                  ? i.y - 3 + distMellanFäst[indexj]
                  : i.y - 5.5,
                width: fastTillBredd[indexj] ? bredd1[indexj] + 11 : 6,
                height: fastTillBredd[indexj] ? 6 : hojd1[indexj] + 11,
                fill: '#ddd',
                draggable: false,
                stroke: '#777',
                strokeWidth: 1,
                strokePosition: 'outside',

                moveToTop: true,
              }"
            />

            <v-rect
              ref="panelsRighter"
              v-for="(i, index) in panelar[indexj]"
              v-bind:key="index"
              :config="{
                x: fastTillBredd[indexj]
                  ? i.x - 5
                  : i.x - 3 - distMellanFäst[indexj] + bredd1[indexj],
                y: fastTillBredd[indexj]
                  ? i.y - 3 - distMellanFäst[indexj] + hojd1[indexj]
                  : i.y - 5,
                width: fastTillBredd[indexj] ? bredd1[indexj] + 10 : 6,
                height: fastTillBredd[indexj] ? 6 : hojd1[indexj] + 10,
                fill: '#ddd',
                draggable: false,
                stroke: '#777',
                strokeWidth: 1,
                moveToTop: true,
              }"
            />
            <v-group
              v-for="indexRow in rowsCount[indexj]"
              v-bind:key="indexRow"
            >
              <v-group v-if="taktTyp != 3 && taktTyp != 4">
                <v-rect
                  ref="fasteLeft"
                  v-for="indexC in this.fastePerRowAPI[indexj].fastePerRow"
                  v-bind:key="indexC"
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        (startPoint[indexj] - 5) +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1)
                      : panelar[indexj][0].x -
                        10 +
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1),
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        10 +
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1)
                      : panelar[indexj][0].y +
                        (startPoint[indexj] - 5) +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1),
                    width: fastTillBredd[indexj] ? 10 : 20,
                    height: fastTillBredd[indexj] ? 20 : 10,
                    fill: '#ddd',
                    draggable: false,
                    stroke: '#777',
                    strokeWidth: 1,
                    moveToTop: true,
                    visible: !fixElement,
                  }"
                />
                <v-rect
                  ref="fasteRight"
                  v-for="indexC in this.fastePerRowAPI[indexj].fastePerRow"
                  v-bind:key="indexC"
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        (startPoint[indexj] - 5) +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1)
                      : panelar[indexj][0].x -
                        10 -
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1) +
                        bredd1[indexj],
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        10 -
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1) +
                        hojd1[indexj]
                      : panelar[indexj][0].y +
                        (startPoint[indexj] - 5) +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1),
                    width: fastTillBredd[indexj] ? 10 : 20,
                    height: fastTillBredd[indexj] ? 20 : 10,
                    fill: '#ddd',
                    draggable: false,
                    stroke: '#777',
                    strokeWidth: 1,
                    moveToTop: true,
                    visible: !fixElement,
                  }"
                />
              </v-group>

              <v-group
                v-if="taktTyp != 3 && taktTyp != 4 && extraFaste[indexj]"
              >
                <v-rect
                  ref="fasteLeft"
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x + newFaste[indexj] - 5
                      : panelar[indexj][0].x -
                        10 +
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1),
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        10 +
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1)
                      : panelar[indexj][0].y + newFaste[indexj] - 5,
                    width: fastTillBredd[indexj] ? 10 : 20,
                    height: fastTillBredd[indexj] ? 20 : 10,
                    fill: '#ddd',
                    draggable: false,
                    stroke: '#777',
                    strokeWidth: 1,
                    moveToTop: true,
                    visible: !fixElement,
                  }"
                />
                <v-rect
                  ref="fasteRight"
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x + newFaste[indexj] - 5
                      : panelar[indexj][0].x -
                        10 -
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1) +
                        bredd1[indexj],
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        10 -
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1) +
                        hojd1[indexj]
                      : panelar[indexj][0].y + newFaste[indexj] - 5,
                    width: fastTillBredd[indexj] ? 10 : 20,
                    height: fastTillBredd[indexj] ? 20 : 10,
                    fill: '#ddd',
                    draggable: false,
                    stroke: '#777',
                    strokeWidth: 1,
                    moveToTop: true,
                    visible: !fixElement,
                  }"
                />
              </v-group>

              <v-group v-if="taktTyp == 3 || taktTyp == 4">
                <v-ellipse
                  ref="skruvLeft"
                  v-for="indexC in this.fastePerRowAPI[indexj].fastePerRow"
                  v-bind:key="indexC"
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        startPoint[indexj] +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1)
                      : panelar[indexj][0].x +
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1),
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y +
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1)
                      : panelar[indexj][0].y +
                        startPoint[indexj] +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1),
                    width: fastTillBredd[indexj] ? 2 : 7,
                    height: fastTillBredd[indexj] ? 7 : 2,
                    fill: '#d00',
                    draggable: false,
                    stroke: '#777',
                    strokeWidth: 1,
                    moveToTop: true,
                    visible: !fixElement,
                  }"
                />
                <v-ellipse
                  ref="skruvRight"
                  v-for="indexC in this.fastePerRowAPI[indexj].fastePerRow"
                  v-bind:key="indexC"
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        startPoint[indexj] +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1)
                      : panelar[indexj][0].x -
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1) +
                        bredd1[indexj],
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1) +
                        hojd1[indexj]
                      : panelar[indexj][0].y +
                        startPoint[indexj] +
                        this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                          (indexC - 1),
                    width: fastTillBredd[indexj] ? 2 : 7,
                    height: fastTillBredd[indexj] ? 7 : 2,
                    fill: '#d00',
                    draggable: false,
                    stroke: '#777',
                    strokeWidth: 1,
                    moveToTop: true,
                    visible: !fixElement,
                  }"
                />
              </v-group>

              <v-group
                v-for="indexC in this.fastePerRowAPI[indexj].fastePerRow > 0
                  ? this.fastePerRowAPI[indexj].fastePerRow - 1
                  : 0"
                v-bind:key="indexC"
                :config="{
                  visible: !fixElement,
                }"
              >
                <v-group v-if="taktTyp != 3 && taktTyp != 4">
                  <!--<v-line
            :config="{
              points: [
                fastTillBredd[indexj]
                  ? j[0].x + 5
                  : j[0].x + 6 + distMellanFäst[indexj],
                fastTillBredd[indexj]
                  ? j[0].y + distMellanFäst[indexj] + 3
                  : j[0].y + 16,
                fastTillBredd[indexj]
                  ? j[0].x + 5
                  : j[0].x -
                    6 +
                    distMellanFäst[indexj] +
                    ((fastTillBredd[indexj] ? hojd1[indexj] : bredd1[indexj]) -
                      distMellanFäst[indexj] * 2),
                fastTillBredd[indexj]
                  ? j[0].y +
                    distMellanFäst[indexj] -
                    3 +
                    ((fastTillBredd[indexj] ? hojd1[indexj] : bredd1[indexj]) -
                      distMellanFäst[indexj] * 2)
                  : j[0].y + 16,
              ],
              closed: false,
              stroke: '#22326C',
              strokeWidth: 1,
            }"
           />-->

                  <v-ellipse
                    :config="{
                      x: fastTillBredd[indexj]
                        ? panelar[indexj][0].x +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1)
                        : panelar[indexj][0].x -
                          distMellanFäst[indexj] +
                          (bredd1[indexj] + 2) * (indexRow - 1) +
                          bredd1[indexj],
                      y: fastTillBredd[indexj]
                        ? panelar[indexj][0].y -
                          distMellanFäst[indexj] +
                          (hojd1[indexj] + 2) * (indexRow - 1) +
                          hojd1[indexj]
                        : panelar[indexj][0].y +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1),
                      fill: '#22326C',
                      radiusX: 20,
                      radiusY: 10,
                    }"
                  />

                  <v-text
                    :config="{
                      offsetX: fastTillBredd[indexj] ? 15 : 15,
                      offsetY: fastTillBredd[indexj] ? 5 : 5,
                      x: fastTillBredd[indexj]
                        ? panelar[indexj][0].x +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1)
                        : panelar[indexj][0].x -
                          distMellanFäst[indexj] +
                          (bredd1[indexj] + 2) * (indexRow - 1) +
                          bredd1[indexj],
                      y: fastTillBredd[indexj]
                        ? panelar[indexj][0].y -
                          distMellanFäst[indexj] +
                          (hojd1[indexj] + 2) * (indexRow - 1) +
                          hojd1[indexj]
                        : panelar[indexj][0].y +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1),

                      text:
                        Math.round(
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            100
                        ) / 100,
                      textAlign: 'center',
                      align: 'center',
                      width: 30,
                      fill: 'white',
                      fontSize: 10,
                    }"
                  />

                  <v-ellipse
                    :config="{
                      x: fastTillBredd[indexj]
                        ? panelar[indexj][0].x +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1)
                        : panelar[indexj][0].x +
                          distMellanFäst[indexj] +
                          (bredd1[indexj] + 2) * (indexRow - 1),
                      y: fastTillBredd[indexj]
                        ? panelar[indexj][0].y +
                          distMellanFäst[indexj] +
                          (hojd1[indexj] + 2) * (indexRow - 1)
                        : panelar[indexj][0].y +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1),
                      fill: '#22326C',
                      radiusX: 20,
                      radiusY: 10,
                    }"
                  />

                  <v-text
                    :config="{
                      offsetX: fastTillBredd[indexj] ? 15 : 15,
                      offsetY: fastTillBredd[indexj] ? 5 : 5,
                      x: fastTillBredd[indexj]
                        ? panelar[indexj][0].x +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1)
                        : panelar[indexj][0].x +
                          distMellanFäst[indexj] +
                          (bredd1[indexj] + 2) * (indexRow - 1),
                      y: fastTillBredd[indexj]
                        ? panelar[indexj][0].y +
                          distMellanFäst[indexj] +
                          (hojd1[indexj] + 2) * (indexRow - 1)
                        : panelar[indexj][0].y +
                          startPoint[indexj] +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste /
                            2 +
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            (indexC - 1),
                      text:
                        Math.round(
                          this.fastePerRowAPI[indexj].MaxAvstandMellanFaste *
                            100
                        ) / 100,
                      textAlign: 'center',
                      align: 'center',
                      width: 30,
                      fill: 'white',
                      fontSize: 10,
                    }"
                  />
                </v-group>
              </v-group>

              <v-group
                v-if="taktTyp != 3 && taktTyp != 4 && extraFaste[indexj]"
                :config="{
                  visible: !fixElement,
                }"
              >
                <v-ellipse
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2
                      : panelar[indexj][0].x -
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1) +
                        bredd1[indexj],
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1) +
                        hojd1[indexj]
                      : panelar[indexj][0].y +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2,
                    fill: '#22326C',
                    radiusX: 20,
                    radiusY: 10,
                  }"
                />

                <v-text
                  :config="{
                    offsetX: fastTillBredd[indexj] ? 15 : 15,
                    offsetY: fastTillBredd[indexj] ? 5 : 5,
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2
                      : panelar[indexj][0].x -
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1) +
                        bredd1[indexj],
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y -
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1) +
                        hojd1[indexj]
                      : panelar[indexj][0].y +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2,

                    text: Math.round(extraFasteAvstånd[indexj] * 100) / 100,
                    textAlign: 'center',
                    align: 'center',
                    width: 30,
                    fill: 'white',
                    fontSize: 10,
                  }"
                />

                <v-ellipse
                  :config="{
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2
                      : panelar[indexj][0].x +
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1),
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y +
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1)
                      : panelar[indexj][0].y +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2,
                    fill: '#22326C',
                    radiusX: 20,
                    radiusY: 10,
                  }"
                />

                <v-text
                  :config="{
                    offsetX: fastTillBredd[indexj] ? 15 : 15,
                    offsetY: fastTillBredd[indexj] ? 5 : 5,
                    x: fastTillBredd[indexj]
                      ? panelar[indexj][0].x +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2
                      : panelar[indexj][0].x +
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (indexRow - 1),
                    y: fastTillBredd[indexj]
                      ? panelar[indexj][0].y +
                        distMellanFäst[indexj] +
                        (hojd1[indexj] + 2) * (indexRow - 1)
                      : panelar[indexj][0].y +
                        newFaste[indexj] -
                        extraFasteAvstånd[indexj] / 2,
                    text: Math.round(extraFasteAvstånd[indexj] * 100) / 100,
                    textAlign: 'center',
                    align: 'center',
                    width: 30,
                    fill: 'white',
                    fontSize: 10,
                  }"
                />
              </v-group>

              <v-circle
                ref="startPointFaste"
                :config="{
                  x:
                    j[0].x +
                    (fastTillBredd[indexj]
                      ? startPoint[indexj]
                      : distMellanFäst[indexj]),
                  y:
                    j[0].y +
                    (fastTillBredd[indexj]
                      ? distMellanFäst[indexj]
                      : startPoint[indexj]),
                  radius: 3,
                  stroke: 1,
                  fill: '#fff',
                  moveToTop: true,
                  visible: !fixElement,
                }"
              />
            </v-group>

            <v-rect
              @mousedown="cursorMove"
              @mouseup="cursorNorm"
              @dragmove="handleDragStart"
              @transform="handleTransformEnd"
              @transformend="handleStageMouseUp"
              :config="{
                x: panelGrouper[indexj].x,
                y: panelGrouper[indexj].y,
                scaleX: scaleXG[indexj],
                scaleY: scaleYG[indexj],
                width: bredd1[indexj],
                height: hojd1[indexj],
                fill: '#00000055',
                draggable: true,
                name: 'panelGroup' + indexj,
                id: indexj,
                visible: fixElement,
              }"
            />

            <v-group
              @mouseover="cursorPoint"
              @mouseleave="cursorNorm"
              @click="deletePanelGroup(indexj)"
              @touchstart="deletePanelGroup(indexj)"
              :config="{
                x: j[0].x,
                y: j[0].y,
                visible: fixElement,
              }"
            >
              <v-circle
                :config="{
                  x: bredd1[indexj],
                  y: 0,
                  radius: 15,
                  fill: '#ff0000',
                  moveToTop: true,
                }"
              />

              <v-image
                :config="{
                  image: imageTrash,
                  x: bredd1[indexj] - 9,
                  y: -10,
                  width: 20,
                  height: 20,
                }"
              />
            </v-group>

            <v-group
              v-for="(co, indexCO) in rowsCount[indexj]"
              v-bind:key="indexCO"
            >
              <v-line
                :config="{
                  points: [
                    fastTillBredd[indexj]
                      ? j[0].x + 5
                      : j[0].x +
                        distMellanFäst[indexj] +
                        (bredd1[indexj] + 2) * (co - 1),
                    fastTillBredd[indexj]
                      ? j[0].y +
                        distMellanFäst[indexj] +
                        3 +
                        (hojd1[indexj] + 2) * (co - 1)
                      : j[0].y + 16,
                    fastTillBredd[indexj]
                      ? j[0].x + 5
                      : j[0].x +
                        distMellanFäst[indexj] +
                        ((fastTillBredd[indexj]
                          ? hojd1[indexj]
                          : bredd1[indexj]) -
                          distMellanFäst[indexj] * 2) +
                        (bredd1[indexj] + 2) * (co - 1),
                    fastTillBredd[indexj]
                      ? j[0].y +
                        distMellanFäst[indexj] -
                        3 +
                        ((fastTillBredd[indexj]
                          ? hojd1[indexj]
                          : bredd1[indexj]) -
                          distMellanFäst[indexj] * 2) +
                        (hojd1[indexj] + 2) * (co - 1)
                      : j[0].y + 16,
                  ],
                  closed: false,
                  stroke: '#22326C',
                  strokeWidth: 1,
                }"
              />

              <!--((fastTillBredd[indexj]?hojd1[indexj]:bredd1[indexj]) - distMellanFäst[indexj]*2)-->
              <v-ellipse
                :config="{
                  x: fastTillBredd[indexj]
                    ? j[0].x + 5
                    : j[0].x +
                      bredd1[indexj] / 2 +
                      (bredd1[indexj] + 2) * (co - 1),
                  y: fastTillBredd[indexj]
                    ? j[0].y +
                      hojd1[indexj] / 2 +
                      (hojd1[indexj] + 2) * (co - 1)
                    : j[0].y + 16,
                  fill: '#22326C',
                  radiusX: 20,
                  radiusY: 10,
                }"
              />

              <v-text
                :config="{
                  offsetX: fastTillBredd[indexj] ? 13 : 13,
                  offsetY: fastTillBredd[indexj] ? 6 : 6,
                  x: fastTillBredd[indexj]
                    ? j[0].x + 3
                    : j[0].x +
                      bredd1[indexj] / 2.1 +
                      (bredd1[indexj] + 2) * (co - 1),
                  y: fastTillBredd[indexj]
                    ? j[0].y +
                      hojd1[indexj] / 1.95 +
                      (hojd1[indexj] + 2) * (co - 1)
                    : j[0].y + 18,
                  text:
                    (fastTillBredd[indexj] ? hojd1[indexj] : bredd1[indexj]) -
                    distMellanFäst[indexj] * 2,
                  textAlign: 'center',
                  align: 'center',
                  width: 30,
                  fill: 'white',
                  fontSize: 10,
                }"
              />
            </v-group>
            <!--

           <v-group v-if="TLShow">
            <v-arrow
              :config="{
                points: topLineFaste[indexj],
                closed: false,
                stroke: '#00f5',
                strokeWidth: 2,
              }"
            />

            <v-text
              :config="{
                x: topLineFaste[indexj][0] - 15,
                y: topLineFaste[indexj][3] - 40,
                align: 'center',
                verticalAlign: 'middle',
                fill: '#00f5',
                text: Math.round(
                  distance12(
                    topLineFaste[indexj][0],
                    topLineFaste[indexj][1],
                    topLineFaste[indexj][2],
                    topLineFaste[indexj][3]
                  )
                ),
                fontSize: 30,
              }"
            />
            <v-arrow
              :config="{
                points: leftLineFaste[indexj],
                closed: false,
                stroke: '#00f5',
                strokeWidth: 2,
              }"
            />

            <v-text
              :config="{
                x: leftLineFaste[indexj][2] - 60,
                y: leftLineFaste[indexj][1] - 15,
                align: 'center',
                verticalAlign: 'middle',
                fill: '#00f5',
                text: Math.round(
                  distance12(
                    leftLineFaste[indexj][0],
                    leftLineFaste[indexj][1],
                    leftLineFaste[indexj][2],
                    leftLineFaste[indexj][3]
                  )
                ),
                fontSize: 30,
              }"
            />
           </v-group>
            -->
         
          </v-group>
        </v-group>
        <v-group v-for="(j, indexj) in panelar" v-bind:key="indexj">
          <v-group
            :config="{
              name: 'infoToImage' + indexj,
            }"
           >

          <v-group
              :config="{
                x:
                  topLine[indexj][0] +
                  distance12(
                    allBottom[indexj][0],
                    allBottom[indexj][1],
                    allBottom[indexj][2],
                    allBottom[indexj][3]
                  ) /
                    2 -
                  70,
                y: allBottom[indexj][1] - 30,
              }"
            >
              <v-ellipse
                :config="{
                  x: 70,
                  y: 6,
                  radiusX: 100,
                  radiusY: 20,
                  fill: '#eeeea688',
                }"
              />

              <v-text
                :config="{
                  x: 0,
                  y: 0,
                  align: 'center',
                  verticalAlign: 'middle',
                  fill: '#000',
                  text:
                    'Antal x:' +
                    rows[indexj] +
                    ', y:' +
                    columns[indexj] +
                    ', Total:' +
                    rows[indexj] * columns[indexj],

                  fontSize: 15,
                }"
              />
            </v-group>
          <v-group v-if="WHShow">
              <v-arrow
                :config="{
                  points: [
                    allRight[indexj][0],
                    allRight[indexj][1] +
                      distance12(
                        allRight[indexj][0],
                        allRight[indexj][1],
                        allRight[indexj][2],
                        allRight[indexj][3]
                      ) /
                        2 +
                      20,
                    allRight[indexj][2],
                    allRight[indexj][3],
                  ],
                  closed: false,
                  stroke: '#fc993f',
                  strokeWidth: 2,
                }"
              />
              <v-arrow
                :config="{
                  points: [
                    allRight[indexj][2],
                    allRight[indexj][3] -
                      distance12(
                        allRight[indexj][0],
                        allRight[indexj][1],
                        allRight[indexj][2],
                        allRight[indexj][3]
                      ) /
                        2 -
                      20,
                    allRight[indexj][0],
                    allRight[indexj][1],
                  ],
                  closed: false,
                  stroke: '#fc993f',
                  strokeWidth: 2,
                }"
              />

              <v-text
                :config="{
                  x: allRight[indexj][0] - 30,
                  y:
                    allRight[indexj][1] +
                    distance12(
                      allRight[indexj][0],
                      allRight[indexj][1],
                      allRight[indexj][2],
                      allRight[indexj][3]
                    ) /
                      2 -
                    8,
                  align: 'center',
                  verticalAlign: 'middle',
                  fill: '#fc993f',
                  text: Math.round(
                    distance12(
                      allRight[indexj][0],
                      allRight[indexj][1],
                      allRight[indexj][2],
                      allRight[indexj][3]
                    )
                  ),
                  fontSize: 20,
                }"
              />
              <v-arrow
                :config="{
                  points: [
                    allBottom[indexj][0] -
                      distance12(
                        allBottom[indexj][0],
                        allBottom[indexj][1],
                        allBottom[indexj][2],
                        allBottom[indexj][3]
                      ) /
                        2 -
                      20,
                    allBottom[indexj][1],
                    allBottom[indexj][2],
                    allBottom[indexj][3],
                  ],
                  closed: false,
                  stroke: '#fc993f',
                  strokeWidth: 2,
                }"
              />
              <v-arrow
                :config="{
                  points: [
                    allBottom[indexj][2] +
                      distance12(
                        allBottom[indexj][0],
                        allBottom[indexj][1],
                        allBottom[indexj][2],
                        allBottom[indexj][3]
                      ) /
                        2 +
                      20,
                    allBottom[indexj][3],
                    allBottom[indexj][0],
                    allBottom[indexj][1],
                  ],
                  closed: false,
                  stroke: '#fc993f',
                  strokeWidth: 2,
                }"
              />
              <v-text
                :config="{
                  x:
                    topLine[indexj][0] +
                    distance12(
                      allBottom[indexj][0],
                      allBottom[indexj][1],
                      allBottom[indexj][2],
                      allBottom[indexj][3]
                    ) /
                      2 -
                    18,
                  y: allBottom[indexj][1] - 10,
                  align: 'center',
                  verticalAlign: 'middle',
                  fill: '#fc993f',
                  text: Math.round(
                    distance12(
                      allBottom[indexj][0],
                      allBottom[indexj][1],
                      allBottom[indexj][2],
                      allBottom[indexj][3]
                    )
                  ),
                  fontSize: 20,
                }"
              />
            </v-group>
          </v-group>

        </v-group>

        <v-transformer
          ref="transformer"
          :config="{
            keepRatio: false,
            rotateEnabled: false,
            flipEnabled: false,
            anchorCornerRadius: 100,
          }"
        />
        <v-group
          v-for="(j, indexj) in panelar"
          v-bind:key="indexj"
          :config="{
            visible: fixElement,
          }"
        >
          <v-group v-if="j.length > 1">
            <v-group
              @mouseover="cursorPoint"
              @mouseleave="cursorNorm"
              v-for="(i, index) in j"
              v-bind:key="index"
              @click="deletPanel(index, indexj)"
              @touchstart="deletPanel(index, indexj)"
              :config="{
                x: i.x,
                y: i.y,
                visible: fixElement,
              }"
            >
              <v-circle
                :config="{
                  x: bredd1[indexj] / 2,
                  y: hojd1[indexj] / 2,
                  radius:
                    bredd1[indexj] < hojd1[indexj]
                      ? bredd1[indexj] / 5
                      : hojd1[indexj] / 5,

                  fill: '#ff0000',
                  draggable: false,
                  moveToTop: true,
                }"
              />

              <v-image
                :config="{
                  image: imageTrash,
                  x:
                    bredd1[indexj] / 2 -
                    (bredd1[indexj] < hojd1[indexj]
                      ? bredd1[indexj] / 10
                      : hojd1[indexj] / 10),
                  y:
                    hojd1[indexj] / 2 -
                    (bredd1[indexj] < hojd1[indexj]
                      ? bredd1[indexj] / 10
                      : hojd1[indexj] / 10),
                  width:
                    bredd1[indexj] < hojd1[indexj]
                      ? bredd1[indexj] / 5
                      : hojd1[indexj] / 5,
                  height:
                    bredd1[indexj] < hojd1[indexj]
                      ? bredd1[indexj] / 5
                      : hojd1[indexj] / 5,
                }"
              />
            </v-group>
          </v-group>
        </v-group>
        <v-group v-for="(j, indexj) in panelar" v-bind:key="indexj">
          <v-group v-if="TLShow">
            <v-arrow
              :config="{
                points: topLineFaste[indexj],
                closed: false,
                stroke: '#00f5',
                strokeWidth: 2,
              }"
            />

            <v-text
              :config="{
                x: topLineFaste[indexj][0] - 15,
                y: topLineFaste[indexj][3] - 40,
                align: 'center',
                verticalAlign: 'middle',
                fill: '#00f5',
                text: Math.round(
                  distance12(
                    topLineFaste[indexj][0],
                    topLineFaste[indexj][1],
                    topLineFaste[indexj][2],
                    topLineFaste[indexj][3]
                  )
                ),
                fontSize: 30,
              }"
            />
            <v-arrow
              :config="{
                points: leftLineFaste[indexj],
                closed: false,
                stroke: '#00f5',
                strokeWidth: 2,
              }"
            />

            <v-text
              :config="{
                x: leftLineFaste[indexj][2] - 60,
                y: leftLineFaste[indexj][1] - 15,
                align: 'center',
                verticalAlign: 'middle',
                fill: '#00f5',
                text: Math.round(
                  distance12(
                    leftLineFaste[indexj][0],
                    leftLineFaste[indexj][1],
                    leftLineFaste[indexj][2],
                    leftLineFaste[indexj][3]
                  )
                ),
                fontSize: 30,
              }"
            />
           </v-group>
        </v-group>
      </v-layer>

      <v-layer>
        <v-rect
          :config="{
            x: 0,
            y: 0,
            width: w,
            height: 30,
            fill: '#fff',
            stroke: '#0005',
            strokeWidth: 1,
          }"
        />
        <v-rect
          :config="{
            x: 0,
            y: 0,
            width: 30,
            height: h,
            fill: '#fff',
            stroke: '#0005',
            strokeWidth: 1,
          }"
        />
        <v-text
          :config="{
            x: w - 150,
            y: h - 75,
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 9,
            offsetY: 10,
            fill: 'black',
            text: Math.round(scalePercentage * 100) + '%',
            fontSize: 30,
          }"
        />
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="zoomIn"
        >
          <v-circle
            :config="{
              x: w - 50,
              y: h - 100,
              width: 50,
              height: 50,
              fill: 'black',
            }"
          />
          <v-line
            :config="{
              points: [w - 50, h - 90, w - 50, h - 110],
              closed: false,
              stroke: '#fff',
              strokeWidth: 2,
            }"
          />
          <v-line
            :config="{
              points: [w - 40, h - 100, w - 60, h - 100],
              closed: false,
              stroke: '#fff',
              strokeWidth: 2,
            }"
          />
        </v-group>

        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="zoomOut"
        >
          <v-circle
            :config="{
              x: w - 50,
              y: h - 40,
              width: 50,
              height: 50,
              fill: 'black',
            }"
          />
          <v-line
            :config="{
              points: [w - 40, h - 40, w - 60, h - 40],
              closed: false,
              stroke: '#fff',
              strokeWidth: 2,
            }"
          />
        </v-group>

        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="addNewPanelGroup(1170, 1700, true)"
          @touchstart="addNewPanelGroup(1170, 1700, true)"
          :config="{
            visible: fixElement,
          }"
        >
          <v-circle
            :config="{
              x: w - 50,
              y: 120,
              width: 50,
              height: 50,
              fill: 'black',
            }"
          />

          <v-rect
            :config="{
              x: w - 63,
              y: 102,
              width: 26,
              height: 36,
              fill: '#fff',
            }"
          />

          <v-line
            :config="{
              points: [w - 50, 110, w - 50, 130],
              closed: false,
              stroke: '#000',
              strokeWidth: 2,
            }"
          />
          <v-line
            :config="{
              points: [w - 40, 120, w - 60, 120],
              closed: false,
              stroke: '#000',
              strokeWidth: 2,
            }"
          />
        </v-group>
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="rotatePaler(markedGroup)"
          @touchstart="rotatePaler(markedGroup)"
          :config="{
            visible: fixElement,
          }"
        >
          <v-circle
            :config="{
              x: w - 110,
              y: 120,
              radius: 25,
              fill: 'black',
            }"
          />

          <v-rect
            :config="{
              x: w - 127,
              y: 118,
              width: 20,
              height: 30,
              fill: '#fff',
              rotation: -50,
            }"
          />
        </v-group>
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="rotateFaster"
          @touchstart="rotateFaster"
          :config="{
            visible: fixElement,
          }"
        >
          <v-circle
            :config="{
              x: w - 170,
              y: 120,
              radius: 25,
              fill: 'black',
            }"
          />

          <v-rect
            :config="{
              x: w - 187,
              y: 118,
              width: 20,
              height: 30,
              fill: '#fff',
              rotation: -50,
            }"
          />
          <v-rect
            :config="{
              x: w - 187,
              y: 115,
              width: 15,
              height: 35,
              fill: '#000',
              rotation: -50,
            }"
          />
        </v-group>
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="deletRedPanel"
          @touchstart="deletRedPanel"
          :config="{
            x: w - 50,
            y: 180,

            visible: fixElement,
          }"
        >
          <v-circle
            :config="{
              radius: 25,
              fill: 'red',
            }"
          />
          <v-image
            :config="{
              image: imageTrash,
              x: -15,
              y: -15,
              width: 30,
              height: 30,
            }"
          />
        </v-group>

        <v-group :config="{}">
          <v-line
            v-for="i in rulerXB"
            v-bind:key="i"
            :config="{
              points: [i, 0, i, 30],
              closed: false,
              stroke: '#0005',
              strokeWidth: 1,
              x: scaleShiftX,
            }"
          />
          <v-line
            v-for="i in rulerXS"
            v-bind:key="i"
            :config="{
              points: [i, 0, i, 10],
              closed: false,
              stroke: '#0005',
              strokeWidth: 1,
              x: scaleShiftX,
            }"
          />
          <v-line
            v-for="i in rulerYB"
            v-bind:key="i"
            :config="{
              points: [0, i, 30, i],
              closed: false,
              stroke: '#0005',
              strokeWidth: 1,
              y: scaleShiftY,
            }"
          />
          <v-line
            v-for="i in rulerYS"
            v-bind:key="i"
            :config="{
              points: [0, i, 10, i],
              closed: false,
              stroke: '#0005',
              strokeWidth: 1,
              y: scaleShiftY,
            }"
          />
          <v-text
            v-for="(i, index) in rulerYB"
            v-bind:key="index"
            :config="{
              x: 15,
              y: i + 3 + scaleShiftY,
              text: index - (rulerYB.length - 1) / 2,
            }"
          />

          <v-text
            v-for="(i, index) in rulerXB"
            v-bind:key="index"
            :config="{
              x: i + 3 + scaleShiftX,
              y: 15,
              text: index - (rulerXB.length - 1) / 2,
            }"
          />
        </v-group>
        <v-rect
          :config="{
            x: 0,
            y: 0,
            width: 30,
            height: 30,
            fill: '#fff',
            stroke: '#ccc',
            strokeWidth: 1,
          }"
        />
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="backProcess"
          @touchstart="backProcess"
          :config="{
            x: w - 50,
            y: 240,
            visible: !fixElement,
          }"
        >
          <v-circle
            :config="{
              radius: 25,
              fill: 'blue',
            }"
          />
          <v-image
            :config="{
              image: imageBack,
              x: -18,
              y: -15,
              width: 35,
              height: 35,
            }"
          />
        </v-group>
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="completeProcess"
          @touchstart="completeProcess"
          :config="{
            x: w - 50,
            y: 240,
            visible: fixElement,
          }"
        >
          <v-circle
            :config="{
              radius: 25,
              fill: 'green',
            }"
          />
          <v-image
            :config="{
              image: imageCalc,
              x: -18,
              y: -15,
              width: 35,
              height: 35,
            }"
          />
        </v-group>
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="unGroup(markedGroup)"
          @touchstart="unGroup(markedGroup)"
          :config="{
            x: w - 110,
            y: 180,
            visible: fixElement,
          }"
        >
          <v-circle
            :config="{
              radius: 25,
              fill: 'black',
            }"
          />
          <v-image
            :config="{
              image: imageUngroup,
              x: -18,
              y: -15,
              width: 33,
              height: 30,
            }"
          />
        </v-group>

        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="showHideArrows"
          @touchstart="showHideArrows"
          :config="{
            x: w - 140,
            y: 240,
          }"
        >
          <v-ellipse
            :config="{
              x: 0,
              y: 0,
              radiusX: 50,
              radiusY: 20,

              fill: 'black',
            }"
          />

          <v-text
            :config="{
              x: -35,
              y: -5,
              text: !TLShow ? 'Show Arrows' : 'Hide Arrows',

              fill: 'white',
            }"
          />
        </v-group>

        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="fullCanvas"
          @touchstart="fullCanvas"
          :config="{
            x: w - 50,
            y: h - 160,
            visible: !fullToSmall,
          }"
        >
          <v-circle
            :config="{
              radius: 25,
              fill: 'black',
            }"
          />
          <v-image
            :config="{
              image: imageFullScreen,
              x: -22,
              y: -17,
              width: 45,
              height: 35,
            }"
          />
        </v-group>
        <v-group
          @mouseover="cursorPoint"
          @mouseleave="cursorNorm"
          @click="smallCanvas"
          @touchstart="smallCanvas"
          :config="{
            x: w - 50,
            y: h - 160,
            visible: fullToSmall,
          }"
        >
          <v-circle
            :config="{
              radius: 25,
              fill: 'black',
            }"
          />
          <v-image
            :config="{
              image: imageSmallScreen,
              x: -18,
              y: -17,
              width: 35,
              height: 35,
            }"
          />
        </v-group>
      </v-layer>
    </v-stage>
  </div>
</template>

<style>
.canvas {
  background-color: #ccc;
  margin: 2vw auto;
  box-shadow: 0px 0px 10px 5px #555;
}
.fullCanvas {
  position:absolute;
  width: 100vw;
  margin: 0;
  z-index: 5;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>