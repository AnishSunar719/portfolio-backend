import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    subject: String,
    message: String,
});

const Message = mongoose.model("Message", messageSchema);

export default Message;