function submitForm() {
    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;
    const guests = document.getElementById('guests').value;

    // Do something with the form values (e.g., send to server or display)
    console.log('Form submitted with values:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Check-in Date:', checkin);
    console.log('Check-out Date:', checkout);
    console.log('Number of Rooms:', rooms);
    console.log('Number of Guests:', guests);

    // You can add further logic here (e.g., send form data to server)
}
