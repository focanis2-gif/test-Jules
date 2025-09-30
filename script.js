document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const departure = document.getElementById('departure').value;
        const arrival = document.getElementById('arrival').value;
        const departureDate = document.getElementById('departure-date').value;
        const passengers = document.getElementById('passengers').value;

        // Basic validation
        if (!departure || !arrival || !departureDate || !passengers) {
            alert('Please fill out all required fields.');
            return;
        }

        const confirmationMessage = `Thank you for booking with Focanis Airlines!

Your flight from ${departure} to ${arrival} on ${departureDate} for ${passengers} passenger(s) has been requested.

A confirmation email will be sent to you shortly.`;

        alert(confirmationMessage);

        bookingForm.reset(); // Clear the form
    });
});