import { Schema,model } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'name is required'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    dateOfBirth:{
        type:Date,
        required:[true,'Date of Birth is required']
    },
    mobileNumber:{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

export const UserModel=model('user',userSchema)