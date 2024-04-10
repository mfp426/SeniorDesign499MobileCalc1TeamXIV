import mongoose from 'mongoose';

test('Connection to database established successfully', () => {
    mongoose.connect('mongodb://127.0.0.1:27017/DeltaV_Test_Database_1')
    const c = mongoose.connection

    mongoose.connection.on('connected', () => {
        expect(mongoose.connection.readyState).toBe(1)
    });
  });