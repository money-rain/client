<template>
  <div>
  {{ isReady }}
  </div>
</template>

<script>
export default {
  data () {
    return {
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
