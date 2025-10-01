document.addEventListener('DOMContentLoaded', () => {
    const confirmationMessageElement = document.getElementById('confirmation-message');

    // Get the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const departure = urlParams.get('departure');
    const arrival = urlParams.get('arrival');
    const departureDate = urlParams.get('departureDate');
    const returnDate = urlParams.get('returnDate');
    const passengers = urlParams.get('passengers');

    // Create the confirmation message
    let message = `<p>Thank you for booking with Focanis Airlines!</p>`;
    message += `<p>Your flight from <strong>${departure}</strong> to <strong>${arrival}</strong> on <strong>${departureDate}</strong> has been successfully booked for <strong>${passengers}</strong> passenger(s).</p>`;

    if (returnDate) {
        message += `<p>Your return flight is scheduled for <strong>${returnDate}</strong>.</p>`;
    }

    message += `<p>A confirmation email will be sent to you shortly. We look forward to welcoming you on board!</p>`;

    // Display the message
    confirmationMessageElement.innerHTML = message;
});