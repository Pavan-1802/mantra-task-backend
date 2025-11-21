const Booking = require('../models/Bookings');

const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
}

const validateDates = (checkIn, checkOut) => {
    const now = new Date();
    return checkIn >= now && checkOut > checkIn;
}

const createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        console.log('Received booking data:', bookingData);
        if (!validatePhoneNumber(bookingData.phone)) {
            return res.status(400).json({ message: 'Invalid phone number format' });
        }
        if (!validateDates(new Date(bookingData.checkIn), new Date(bookingData.checkOut))) {
            return res.status(400).json({ message: 'Invalid check-in or check-out dates' });
        }
        const newBooking = new Booking(bookingData);
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

module.exports = {
    createBooking,
    getAllBookings
};