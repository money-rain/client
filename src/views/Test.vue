<template>
  <div>
    <v-container v-if="isWin" style="position: relative; z-index: 999;">
      <v-img
            src="https://data.whicdn.com/images/102412253/original.gif"
      ></v-img>
      
    </v-container>
    <v-container v-if="isLose" style="position: relative; z-index: 999;">
      <v-img
            src="https://i.gifer.com/3QyH.gif"
      ></v-img>
    </v-container>


    <v-container v-if="status" grid-list-xs style="max-width: 60%">
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
      skorEnemy: 0,
      isWin : false,
      isLose : false,
      status : true
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
      console.log('my score', querySnapshot.data().point)

            console.log('my score', querySnapshot.data())

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
          this.isWin = true;
          this.status = false;
          clearInterval(interval);
          this.$db.collection('users').doc(localStorage.getItem('id')).update({point: 0})
          .then (() => {
            this.$db.collection('rooms').doc(localStorage.getItem('roomId')).delete()
            setTimeout(() => {
              this.$router.push("/rooms");
            }, 2000);
          })
        }
        if(this.skorEnemy == 20){
          this.isLose = true
          this.status = false
          clearInterval(interval);
          this.$db.collection('users').doc(localStorage.getItem('id')).update({point: 0})
          .then (() => {
            this.$db.collection('rooms').doc(localStorage.getItem('roomId')).delete()
            setTimeout(() => {
              this.$router.push("/rooms");
            }, 2000);
          })
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
      const myScore = this.score + 1
      console.log('harusnya dapet hjhjhj', myScore);
      this.$db.collection('users').doc(localStorage.getItem('id')).update({point: myScore})
      this.cing()
    },
    cing() {
      var audio = new Audio('https://freesound.org/people/cabled_mess/sounds/350873/download/350873__cabled-mess__coin-c-02.wav')
      audio.play()
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

