<template lang="html">
  <div class="booking">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <p v-if="booking.isCheckedIn">Checked In</p>

    <button @click="handleDelete(booking._id)">Delete Booking</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    handleDelete(id){
      eventBus.$emit('delete-booking', id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
