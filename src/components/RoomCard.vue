<template>
  <v-card light>
    <v-card-title>
      <span
        class="title green--text font-weight-black"
        style="font-family: 'ZCOOL KuaiLe', cursive !important;"
      >{{ room.name }}</span>
    </v-card-title>
    <v-card-text>
      <v-text-field :value="playerName(room.player1.name)" label="Pemain Pertama" disabled></v-text-field>
      <v-text-field :value="playerName(room.player2.name)" label="Pemain Kedua" disabled></v-text-field>
    </v-card-text>
      <v-btn color="green" class="white--text" v-if="!isFull" @click.prevent="enterRoom">Masuk Bro</v-btn>
  </v-card>
</template>

<script>
export default {
  props: ["room"],
  methods: {
    playerName (name) {
      if (name) {
        return name;
      } else {
        return "Kosong Bro";
      }
    },
    enterRoom () {
      let updatePlayer = {}
      if (!this.room.player1.name) {
        updatePlayer = {
          player1: {
            name: localStorage.getItem('name'),
            score: 0
          },
          player2: {
            name: this.room.player2.name,
            score: 0
          }
        }
      } else if (!this.room.player2.name) {
          updatePlayer = {
            player1: {
              name: this.room.player1.name,
              score: 0
            },
            player2: {
              name: localStorage.getItem('name'),
              score: 0
            }
          }
      }
      this.$db
        .collection('rooms')
        .doc(this.room.id)
        .update(updatePlayer)
        .then(() => {
          console.log('updated')
        })
    }
  },
  computed: {
    isFull () {
      return this.room.player1.name && this.room.player2.name
    }
  }
};
</script>

<style>
</style>
