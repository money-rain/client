<template>
  <v-container fluid grid-list-xl text-xs-center style="background-color: rgba(68, 68, 68, 0.5)">
    <v-layout column wrap>
      <v-flex mx-auto>
        <v-card dark>
          <v-card-text>
            <span class="display-1 white--text font-weight-black" style="font-family: 'ZCOOL KuaiLe', cursive !important;">$$ Sarang Duit $$</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>

      <v-btn large @click="showAddRoom">
        <v-icon color="green">add</v-icon>
        <span class="title green--text font-weight-black"  style="font-family: 'ZCOOL KuaiLe', cursive !important;">Bikin Sarang Baru</span>
      </v-btn>
      </v-flex>
      <v-flex>
        <v-flex lg3 md3 sm6 xs12>
          <v-card dark color="secondary">
            <v-card-text>xs7 offset-(xs5 | md2 | lg5)</v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
    <AddRoom></AddRoom>
  </v-container>
</template>

<script>
  import AddRoom from '@/components/AddRoom.vue'
export default {
  components: {
    AddRoom
  },
  methods: {
    showAddRoom () {
      this.$store.dispatch('clickAddRoom')
    }
  }
}
</script>
