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
            id: localStorage.getItem('id'),
            name: localStorage.getItem('name'),
            status: false
          },
          player2: {
            id: this.room.player2.id,
            name: this.room.player2.name,
            status: this.room.player2.status
          }
        }
      } else if (!this.room.player2.name) {
          updatePlayer = {
            player1: {
              id: this.room.player1.id,
              name: this.room.player1.name,
              status: this.room.player1.status
            },
            player2: {
              id: localStorage.getItem('id'),
              name: localStorage.getItem('name'),
              status: false
            }
          }
      }
      this.$db
        .collection('rooms')
        .doc(this.room.id)
        .update(updatePlayer)
        .then(() => {
          localStorage.setItem('roomId', this.room.id)
          this.$router.replace('/waiting')
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
