<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo2.png" width="10%" height="10%">
    <BanditList msg="Welcome to Your Vue.js App" :bandits="this.bandits"/>
    <div class="row">
      <div class="col-md-2"></div>
      <BanditForm @added="refreshBandits"/>
      <EditBanditForm @edited="refetchBandits" />
    </div>
  </div>
</template>

<script>
import BanditList from './components/BanditList.vue'
import BanditForm from './components/BanditForm.vue'
import EditBanditForm from './components/EditBanditForm.vue'
const axios = require('axios');

export default {
  name: 'app',
   data() {
   return  { bandits: [] }
  },
  components: {
    BanditList,
    BanditForm,
    EditBanditForm
  },
  methods: {
    refreshBandits(bandit){
      this.bandits.push(bandit);
    },
    refetchBandits(){
      this.fetchBandits();
    },
    fetchBandits(){
      axios.get(`http://localhost:3500/bandit`).then(response => {
      console.log(response);
      this.bandits = response.data;
    });
    }
  },
  mounted() {
    // this.bandits = this.bandits.concat(["Buffalo Bill", "Annie Two Guns"]);
    this.fetchBandits();  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
