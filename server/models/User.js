import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        minlength: [5, 'username must be at least 5 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'password must be at least 8 characters']
    },
});

// todo: write encryption for password

const User = mongoose.model('User', userSchema);
export default User;