import mongoose from 'mongoose'

export const MessageSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        content: String,
    }, { collection: 'project', versionKey: false }
)