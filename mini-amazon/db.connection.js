import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const url =
      "mongodb+srv://iims:iims123@sumita.uthta.mongodb.net/mini-amazon?retryWrites=true&w=majority&appName=sumita";

    await mongoose.connect(url);
    console.log("database connected successfully....");
  } catch (error) {
    console.log("database connection failed...");
    console.log(error.message);
  }
};

export default dbConnect;
