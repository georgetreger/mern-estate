import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "String",
      required: true,
      unique: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Dprofile%2Bpic&psig=AOvVaw3zqwpK6MyNyQU3uHTjvCUt&ust=1717324401117000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCghJeauoYDFQAAAAAdAAAAABAJ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

   export default User;