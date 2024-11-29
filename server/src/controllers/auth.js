import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { signInSchema, signupSchema } from "../schemas/auth";
import { OAuth2Client } from "google-auth-library"

// define validation schema using yup
const Client_ID = '143388628636-taki68o077r48hlvvtviosc84fd2qu45.apps.googleusercontent.com';

const client = new OAuth2Client(Client_ID);

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        const { error } = await signupSchema.validate(
            {
                name,
                email,
                password,
                confirmPassword,
            },
            { abortEarly: false }
        );
        if (error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        const token = jwt.sign({ _id: user._id }, "123456");

        return res.status(201).json({
            message: "Đăng ký thành công",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const signGoogle = async (req, res) => {
    try {
        const { token } = req.body;
        console.log(token)
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: Client_ID,
        });
        const payload = ticket.getPayload();

        const { sub, email, name, picture } = payload;
        const userExists = await User.findOne({ email });
        if (!userExists) {
            const user = await User.create({
                name,
                email,
                picture
            });
        }
        
        console.log('Google User:', { sub, email, name, picture });

        res.status(200).json({ message: 'Login successful', user: { email, name, picture } });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = signInSchema.validate({ email, password }, { abortEarly: false });
        if (error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Tài khoản không tồn tại" });
        }

        // const isMatch = await bcrypt.compare(password, user.password);

        if (user.password != password) {
            return res.status(400).json({ message: "Mật khẩu không khớp" });
        }

        const token = jwt.sign({ _id: user._id }, "123456");

        // const { password: excludedPassword, ...userData } = user;

        res.status(200).json({
            data: user,
            accessToken: token,
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
