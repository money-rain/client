<template>
  <div>
    <v-container grid-list-xs style="max-width: 60%">
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
          src="../assets/bowl.png"
          alt
          class="bowl"
          :style="{'margin-left' : bowlMarginLeft + '%'}"
        >
        <!-- <div class="bowl" :style="{'margin-left' : bowlMarginLeft + '%'}"></div> -->
      </div>
      <div class="btn">
        <v-btn
          v-shortkey="['arrowleft']"
          @shortkey="moveLeft"
          @click="moveLeft"
          color="success"
        >Left</v-btn>
        <v-btn
          v-shortkey="['arrowright']"
          @shortkey="moveRight"
          @click="moveRight"
          color="success"
        >Right</v-btn>
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs6>
              <h1>Score: {{score}}</h1>
            </v-flex>
            <v-flex xs6>
              <h1>Enemy : {{skorEnemy}}</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uangStart: null,
      uangMarginLeft: 50,
      uang2MarginLeft: 50,
      uangMarginTop: 0,
      bowlMarginLeft: 50,
      score: 0,
      speed: 20,
      skorEnemy: 0
    };
  },
  mounted() {
    this.uangJatuh();
    this.$db.collection('users').doc(localStorage.getItem('idEnemy'))
    .onSnapshot(querySnapshot => {
      this.skorEnemy = querySnapshot.data().point
    })
    this.$db.collection('users').doc(localStorage.getItem('id'))
    .onSnapshot(querySnapshot => {
      this.score = querySnapshot.data().point
    })
  },
  methods: {
    uangJatuh() {
      let interval = setInterval(() => {
        if (
          this.uangMarginLeft - this.bowlMarginLeft >= -2 &&
          this.uangMarginLeft - this.bowlMarginLeft <= 11 &&
          this.uangMarginTop == 70
        ) {
          this.dapat()
        }
        if (this.uangMarginTop <= 70) {
          this.uangMarginTop++;
        } else {
          this.uangMarginLeft = Math.round(Math.random() * 90);
          this.uangMarginTop = 0;
        }

        if (this.score == 20) {
          clearInterval(interval);
        }
      }, this.speed);
    },
    uangPosition() {},
    moveLeft() {
      this.bowlMarginLeft -= 1;
    },
    moveRight() {
      this.bowlMarginLeft += 1;
    },
    dapat() {
      console.log(`harusnya dapet`);
      this.$db.collection('users').doc(localStorage.getItem('id')).update({point: this.score + 1})
    }
  }
};
</script>

<style>
.display {
  width: 100%;
  height: 70vh;
  background-color: aqua;
}

.uang {
  margin-left: 100%;
  width: 50px;
  height: 50px;
  position: relative;
}

.controller {
  width: 100%;
  height: 10vh;
  background-color: aqua;
}

.bowl {
  width: 100px;
  height: 100%;
}
</style>

