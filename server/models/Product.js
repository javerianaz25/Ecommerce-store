const mongoose=require('mongoose')
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
      },
      
      price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
      },
      
      images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
      category: {
        type: String,
        required: [true, "Please Enter Product Category"],
      },
     
})
const ProductModel=mongoose.model("products",ProductSchema)
module.exports=ProductModel