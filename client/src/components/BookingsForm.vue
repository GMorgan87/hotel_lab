<template lang="html">
  <form class="bookings-form" v-on:submit.prevent="handleSubmit" method="post">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" v-model="email" required/>
    </div>
    <input type="submit" value="save" />
  </form>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'bookings-form',
  data(){
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    handleSubmit(){
      const payload = {
        name: this.name,
        email: this.email,
        isCheckedIn: false
      };

      eventBus.$emit('submit-booking', payload);
      this.name = this.email = '';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
