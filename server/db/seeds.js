use hotel;
db.dropDatabase()

db.bookings.insertMany([
  {
    name: "eleven",
    email: "eleven@netflix.com",
    isCheckedIn: true
  },
  {
    name: "Mike Wheeler",
    email: "mike@netflix.com",
    isCheckedIn: false
},
{
  name: "Joyce Byers",
  email: "joyce@netflix.com",
  isCheckedIn: false
}
]);
