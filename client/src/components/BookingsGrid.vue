<template lang="html">
  <div class="bookingsGrid">
    <booking v-for="booking in bookings" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking';
export default {
  name: 'bookings-grid',
  components: {
    'booking': Booking
  },
  props: ['bookings']

}
</script>

<style lang="css" scoped>
</style>
