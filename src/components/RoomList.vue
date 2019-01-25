<template>
  <v-flex>
<v-layout row>

    <v-flex lg2 md2 sm6 xs12 v-for="(room, i) in rooms" :key="i">
      <RoomCard :room="room"></RoomCard>
    </v-flex>
</v-layout>
  </v-flex>
</template>

<script>
import RoomCard from '@/components/RoomCard.vue'
export default {
  components: {
    RoomCard
  },
  data () {
    return {

    }
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    },
    isFull() {
      return this
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('getRooms')
  }
};
</script>
<style>
</style>
