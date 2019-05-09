<template>
 <div class="col-md-4">
    <div class="input-group mb-3 addform">
      <input class="form-control" v-model="name" placeholder="name" type="text" name="name" id="name">
      <input class="form-control" v-model="currency" placeholder="currency" type="text" name="currency" id="currency">
      <input class="form-control" v-model="bounty" placeholder="bounty" type="number" name="bounty" id="bounty">
      <button class="btn btn-danger addbtn" v-on:click="createBounty()" >Create bounty</button>
    </div>
  </div>
</template>
<script>
  const axios = require('axios');

export default {
     data () {
        return {
                name: "",
                currency: "",
                bounty: ""
            }
    },
    methods: {
        createBounty(){
            axios
            .post('http://localhost:3500/bandit', {
                name: this.name,
                currency: this.currency,
                bounty: this.bounty
            })
            .then(response => response.data)
            .then(response => {
               alert(response._id);
                this.$emit('added', response)
            })
            .catch(response => console.log(response))
        }
    }
}
</script>
<style scoped>
.addform input{
    margin: 5px 0;
}
.addform .addbtn{
    width:100%;
}
</style>
