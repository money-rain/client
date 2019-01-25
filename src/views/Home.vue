<template>
  <v-jumbotron
    height="100vh"
    dark
    src="https://media.self.com/photos/5b7d94243327c070925be493/4:3/w_752,c_limit/Money-In-Buckets.gif"
  >
    <v-container fill-height>
      <v-layout justify-center align-center>
        <v-flex md6 text-xs-center>
          <v-form @submit.prevent="addUsername">
            <v-text-field v-model="name"
                          style="color: red;"
                          color="#ed1e1e"
                          light
                          background-color="#c6c6c6"
                          label="Input your name"
                          single-line
                          box
            ></v-text-field>
            <v-btn color="primary" @click.prevent="cing"> Click </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name : 'Home',
    computed: mapState([
      'soundOn'
    ]),
    mounted() {
      
    },
    data: () => ({
        name : '',
        coin: 'https://freesound.org/people/cabled_mess/sounds/350873/download/350873__cabled-mess__coin-c-02.wav'
    }),
    methods : {
      ...mapActions([
        'soundOff'
      ]),
      addUsername () {
        this.$db.collection("users").add({
            name: this.name,
            point: 0
        })
        .then((docRef) => {
          this.$router.push('/rooms');
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
      },
      cing() {
        this.soundOff()
      }
      
    },
    
  }
</script>
