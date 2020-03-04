<template lang="html">
  <div class="booking">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <p v-if="booking.isCheckedIn">Checked In</p>
    <button @click="handleDelete(booking._id)">Delete Booking</button>
    <button @click="handleCheckIn(booking)">Check In</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import BookingService from '../services/BookingService';


export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    handleDelete(id){
      eventBus.$emit('delete-booking', id);
    },
    handleCheckIn(booking){
      this.booking.isCheckedIn = true
      const updatedBooking = {
        name: booking.name,
        email: booking.email,
        isCheckedIn: true
      }
      BookingService.updateBooking(updatedBooking, booking._id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
