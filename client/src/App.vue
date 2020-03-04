<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import BookingService from './services/BookingService';

export default {
  name: 'App',
  components: {
    'bookings-grid': BookingsGrid,
    'bookings-form': BookingsForm
  },
  data(){
    return {
      bookings: []
    };
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('submit-booking', payload => {
      BookingService.postBooking(payload)
      .then(booking => this.bookings.push(booking));
    });

    eventBus.$on('delete-booking', id => {
      BookingService.deleteBooking(id)
      .then(() => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings.splice(index, 1);
      });
    });
  }
  ,
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
