import mongoose from "mongoose";

// Define schema for user
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [255, "Full name must be at most 255 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      maxlength: [100, "Email must be at most 100 characters"],
      unique: true, // Ensure unique email
      lowercase: true, // Store email in lowercase
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"], // Email validation regex
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [8, "Password must be at least 8 characters"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
      enum: {
        values: ["male", "female", "other", "preferNotToSay"],
        message:
          "Gender must be one of ['male', 'female', 'other', 'preferNotToSay']",
      },
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [10, "Phone number must be at least 10 digits"],
      maxlength: [20, "Phone number must be at most 20 digits"],
      match: [/^\d+$/, "Phone number must contain only numbers"], // Ensure numeric only
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      maxlength: [255, "Address must be at most 255 characters"],
    },
  },
  { timestamps: true } // Automatically add createdAt & updatedAt timestamps
);

// Create collection model
const UserTable = mongoose.model("User", userSchema);

export default UserTable;

// user table
// _id
// fullname
// email
// password
// gender
// phoneNumber
// address
