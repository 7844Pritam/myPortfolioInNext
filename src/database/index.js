

import mongoose from "mongoose";

export default async function connectToDB() {
    try {
        await mongoose.connect("mongodb+srv://pritamsharma7844:Portfolio7844@portfolione.exrzxup.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully.");
    }
    catch (e) {

        console.log(e);
    }
}