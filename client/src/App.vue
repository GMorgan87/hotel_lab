<template>
  <div id="app">
    <!-- <bookings-form /> -->
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
// import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import BookingService from './services/BookingService';

export default {
  name: 'App',
  components: {
    'bookings-grid': BookingsGrid
  },
  data(){
    return {
      bookings: []
    };
  },
  mounted() {
    this.fetchBookings();
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
