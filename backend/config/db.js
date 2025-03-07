import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://harshalmodi1811:harshalmodi1811@cluster0.bzm7c.mongodb.net/food-del').then(()=>console.log("DB Connected")); 
   
} 