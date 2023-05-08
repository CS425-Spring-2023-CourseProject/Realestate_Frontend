async function fetchBookings() {
    const response = await fetch('/api/bookings/');
    const data = await response.json();
  
    if (response.ok) {
      populateBookingsTable(data.bookings);
    } else {
      alert('Error fetching bookings. Please try again.');
    }
  }
  
  // ...
  
  document.addEventListener('DOMContentLoaded', fetchBookings);
  
  // Add this function to handle cancel booking
  async function cancelBooking(bookingId) {
    const response = await fetch(`/bookings/${bookingId}/`, {
      method: 'DELETE',
      headers: {
        // Add your Django CSRF token here
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
  
    if (response.ok) {
      alert('Booking canceled successfully');
      fetchBookings(); // Refresh the bookings table
    } else {
      alert('Error canceling booking. Please try again.');
    }
  }
  
  // Add event listeners for cancel booking buttons
  document.getElementById('bookings-table').addEventListener('click', function (event) {
    if (event.target.classList.contains('cancel-booking')) {
      const bookingId = event.target.getAttribute('data-booking-id');
      cancelBooking(bookingId);
    }
  });
  
  // getCookie function remains the same
  