<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title
          class="title green--text font-weight-black"
          style="font-family: 'ZCOOL KuaiLe', cursive !important;"
        >Bikin Sarang Duit</v-card-title>
        <v-card-text>
          <v-flex>
            <v-text-field
              label="Nama Sarang Loe"
              solo
              v-model="roomName"
              class="title green--text font-weight-black"
              style="font-family: 'ZCOOL KuaiLe', cursive !important;"
            ></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-flex row>
            <v-btn
              color="green darken-1"
              flat
              @click="submitAddRoom"
              class="title green--text font-weight-black"
              style="font-family: 'ZCOOL KuaiLe', cursive !important;"
            >Yuk Dah</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      roomName: ''
    };
  },
  computed: {
    dialog() {
      return this.$store.state.showAddRoom;
    }
  },
  methods: {
    closeAddRoom() {
      return this.$store.dispatch("closeAddRoom");
    },
    submitAddRoom() {
      this.$db
        .collection('rooms')
        .add({
          name: this.roomName,
          player1: {
            name: '',
            score: 0
          },
          player2: {
            name: '',
            score: 0
          }
        })
        .then(docRef => {
          this.closeAddRoom();
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>