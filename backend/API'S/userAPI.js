import { UserModel } from '../MODELS/userModel.js'

import exp from 'express'

export const UserApp=exp()

// Create new User
UserApp.post('/users',async (req,res)=>{
    //get new users 
    const newUser=req.body
    // craeet user doc
    const newUserDocument=new UserModel(newUser)
    //save the user
    await newUserDocument.save()
    //send res
    res.status(201).json({
        message:'User Craeted',
        payload:newUserDocument
    })
})
// Read all users
UserApp.get('/users',async(req,res)=>{
    let usersList=await UserModel.find({status:true})
    res.status(200).json({
        message:"All users",
        payload:usersList
    })
})
// Read a User by ID

UserApp.get('/users/:id',async(req,res)=>{
    let userId=req.params.id

    let user=await UserModel.findOne({_id:userId,status:true})

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        message:'User Found',
        payload:user
    })
})
// Delete a User by ID
UserApp.delete('/users/:id',async(req,res)=>{
    let userId=req.params.id

    let user=await UserModel.findByIdAndUpdate(userId,{$set:{status:false}},{new:true})

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        message:"user deleted",
        payload:user
    })

})


//activate user
UserApp.patch('/users/:id',async(req,res)=>{
    let userId=req.params.id

    let user=await UserModel.findByIdAndUpdate(userId,{$set:{status:true}},{new:true})

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        message:"user upadated",
        payload:user
    })

})