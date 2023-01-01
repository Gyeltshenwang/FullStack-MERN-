import mongoose from "mongoose";

 const userSchema = mongoose.Schema({

    userName:String,
    email:String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});
var User = mongoose.model('User', userSchema);
export default User;