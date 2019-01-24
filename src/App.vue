<template>
  <v-app>
    <router-view/>
    <audio v-if="soundOn"
        autoplay
        :src="backsound">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { mapState } from 'vuex'

export default {
  name: 'App',
  mounted() {
    
  },
  computed: mapState([
    // map this.count to store.state.count
    'backsound',
    'soundOn'
  ]),
  data () {
    return {

    }
  },
  methods : {
    cing () {
        
    }
  }
};
</script>
