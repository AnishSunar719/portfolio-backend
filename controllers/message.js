import Message from "../models/message.js";

export const saveMessage = async (req, res) => {
    try {
        const newMessage = new Message({
            name: req.body.username,
            phone: req.body.phone,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        });
        const postData = await newMessage.save();
        res.status(200).json("Msg Sent");
    } catch (error) {
        res.status(500).json(error.message);
    }

};

export const readMessage = async (req, res) => {
    try {
        const message = await Message.find();
        res.status(200).json(message);
    } catch (error) {
        res.staus(404).json(error.message);
    }

};

