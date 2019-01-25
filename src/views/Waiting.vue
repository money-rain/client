<template>
  <div style="background-color : #2bbc87; height: 100vh;">
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          menunggu lawan
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog : true,
      roomData: {},
      isReady: false
    }
  },
  mounted () {
    this.$db.collection('rooms').doc(localStorage.getItem('roomId'))
    .onSnapshot(querySnapshot => {
      this.roomData = querySnapshot.data()
      if (this.roomData.player1 && this.roomData.player2.name) {
        this.isReady = true
        this.dialog = false
      }
    })
  },
  watch: {
    isReady () {
      if (this.isReady) {
        localStorage.setItem('idEnemy', this.roomData.player1.name == localStorage.name ? this.roomData.player2.id : this.roomData.player1.id)
        this.roomData = {}
        this.isReady = false
        this.$router.replace('/test/')
      }
    }
  }
}
</script>

<style>

</style>
