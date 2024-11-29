import mongoose from "mongoose";
import { type } from "os";

const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: {
            type:String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        picture: {
            type: String
        },
        role: {
            type: String,
            enum: ["admin", "member"],
            default: "member",
        },
    },
    {versionKey: false }
);
export default mongoose.model("User", userSchema);
