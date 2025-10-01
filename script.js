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

        // --- GSAP Animation ---
        const overlay = document.getElementById('transition-overlay');
        const plane = document.getElementById('transition-plane');
        const trail = document.getElementById('transition-trail');

        const tl = gsap.timeline({
            onComplete: () => {
                // Redirect after the animation is complete
                window.location.href = `confirmation.html?${queryParams.toString()}`;
            }
        });

        tl.set(overlay, { autoAlpha: 1 })
          .to(plane, {
              duration: 1.5,
              y: -(window.innerHeight + 150), // Fly plane off the top of the screen
              ease: 'power2.in'
          }, 0)
          .to(trail, {
              duration: 1.5,
              borderLeftWidth: '150vw',
              borderRightWidth: '150vw',
              borderBottomWidth: '100vh',
              ease: 'power2.in'
          }, 0);
    });
});