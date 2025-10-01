document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const oldPage = document.getElementById('oldPage');
    const newPage = document.getElementById('newPage');
    const confirmationMessageElement = document.getElementById('confirmation-message');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // --- Get Form Data ---
        const departure = document.getElementById('departure').options[document.getElementById('departure').selectedIndex].text;
        const arrival = document.getElementById('arrival').options[document.getElementById('arrival').selectedIndex].text;
        const departureDate = document.getElementById('departure-date').value;
        const returnDate = document.getElementById('return-date').value;
        const passengers = document.getElementById('passengers').value;

        // --- Basic Validation ---
        if (!document.getElementById('departure').value || !document.getElementById('arrival').value || !departureDate || !passengers) {
            alert('Please fill out all required fields.');
            return;
        }

        // --- Populate New Page Content ---
        let message = `<p>Thank you for booking with Focanis Airlines!</p>`;
        message += `<p>Your flight from <strong>${departure}</strong> to <strong>${arrival}</strong> on <strong>${departureDate}</strong> has been successfully booked for <strong>${passengers}</strong> passenger(s).</p>`;
        if (returnDate) {
            message += `<p>Your return flight is scheduled for <strong>${returnDate}</strong>.</p>`;
        }
        message += `<p>A confirmation email will be sent to you shortly. We look forward to welcoming you on board!</p>`;
        confirmationMessageElement.innerHTML = message;

        // --- Fade Transition ---
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (motionQuery.matches) {
            // No animation for reduced motion
            oldPage.classList.add('hidden');
            newPage.classList.remove('hidden');
        } else {
            // Fade transition
            gsap.to(oldPage, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    oldPage.classList.add('hidden');
                    newPage.classList.remove('hidden');
                    gsap.fromTo(newPage, { opacity: 0 }, { opacity: 1, duration: 0.5 });
                }
            });
        }
    });
});