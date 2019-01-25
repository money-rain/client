<template>
  <div>
    <div class="display" :style="{'padding-top': 'calc(' + uangMarginTop + 'vh - 20px)'}">
      <img
        src="https://openclipart.org/image/2400px/svg_to_png/222589/cash2.png"
        class="uang"
        :style="{'margin-left' : uangMarginLeft + '%'}"
        alt
      >
      <!-- <div class="uang" :style="{'margin-left' : uangMarginLeft + '%'}"></div> -->
    </div>
    <div class="controller">
      <img
        src="https://www.kahla-porzellanshop.de/media/catalog/product/cache/3/image/17f82f742ffe127f42dca9de82fb58b1/2/0/202921a70773-pronto-bowl14_01.png"
        alt
        class="bowl"
        :style="{'margin-left' : bowlMarginLeft + '%'}"
      >
      <!-- <div class="bowl" :style="{'margin-left' : bowlMarginLeft + '%'}"></div> -->
    </div>
    <div class="btn">
      <button v-shortkey="['arrowleft']" @shortkey="moveLeft" @click="moveLeft">Left</button>
      <button v-shortkey="['arrowright']" @shortkey="moveRight" @click="moveLeft">Right</button>
      <h1>Score: {{score}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uangStart: null,
      uangMarginLeft: 50,
      uangMarginTop: 0,
      bowlMarginLeft: 50,
      score: 0
    };
  },
  mounted() {
    this.uangJatuh();
  },
  methods: {
    uangJatuh() {
      let interval = setInterval(() => {
        if (
          this.uangMarginLeft - this.bowlMarginLeft >= -2 &&
          this.uangMarginLeft - this.bowlMarginLeft <= 11 &&
          this.uangMarginTop == 100
        ) {
          this.score++;
        }
        if (this.uangMarginTop <= 100) {
          this.uangMarginTop++;
        } else {
          this.uangMarginLeft = Math.round(Math.random() * 90);
          this.uangMarginTop = 0;
        }
      }, 20);
    },
    uangPosition() {},
    moveLeft() {
      this.bowlMarginLeft -= 1;
    },
    moveRight() {
      this.bowlMarginLeft += 1;
    }
  }
};
</script>

<style>
.display {
  width: 100vh;
  height: 100vh;
  background-color: aqua;
}

.uang {
  margin-left: 100%;
  width: 50px;
  height: 50px;
}

.controller {
  width: 100vh;
  height: 50px;
  background-color: aqua;
}

.bowl {
  width: 100px;
  height: 100%;
}
</style>

