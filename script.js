document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const departureSelect = document.getElementById('departure');
        const departure = departureSelect.options[departureSelect.selectedIndex].text;

        const arrivalSelect = document.getElementById('arrival');
        const arrival = arrivalSelect.options[arrivalSelect.selectedIndex].text;

        const departureDate = document.getElementById('departure-date').value;
        const returnDate = document.getElementById('return-date').value;
        const passengers = document.getElementById('passengers').value;

        // Basic validation
        if (!departureSelect.value || !arrivalSelect.value || !departureDate || !passengers) {
            alert('Please fill out all required fields.');
            return;
        }

        // Construct the query string
        const queryParams = new URLSearchParams({
            departure,
            arrival,
            departureDate,
            returnDate,
            passengers
        });

        // Redirect to the confirmation page
        window.location.href = `confirmation.html?${queryParams.toString()}`;
    });
});