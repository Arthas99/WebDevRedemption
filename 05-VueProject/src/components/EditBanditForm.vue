<template>
  <div class="col-md-4">
    <div class="input-group mb-3 editform">
      <input class="form-control" v-model="id" placeholder="ID" type="text" name="id" id="id">
      <input class="form-control" v-model="name" placeholder="name" type="text" name="name" id="name">
      <input class="form-control" v-model="currency" placeholder="currency" type="text" name="currency" id="currency">
      <input class="form-control" v-model="bounty" placeholder="bounty" type="number" name="bounty" id="bounty">
      <button class="btn btn-success editbtn" v-on:click="createBounty()">Edit bounty</button>
    </div>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  data() {
    return {
      id: "",
      name: "",
      currency: "",
      bounty: ""
    };
  },
  methods: {
    createBounty() {
      axios
        .put(`http://localhost:3500/bandit/${this.id}`, {
          name: this.name,
          currency: this.currency,
          bounty: this.bounty,
          claimed: false
        })
        .then(response => response.data)
        .then(response => {
          alert(response._id);
          this.$emit('edited', response)
        })
        .catch(response => console.log(response));
    }
  }
};
</script>
<style scoped>
.border-red {
  margin: 20px 0;
}
.editform input{
    margin: 5px 0;
}
.editform .editbtn{
    width:100%;
}
</style>
