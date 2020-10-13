import express from 'express'
import User from '../models/userModel'

const router = express.Router();

router.get('/createadmin',async(_,res)=>{
    try {
        const user = User({
            name: 'Bassam',
            email: 'b2dndr1@gmail.com',
            password: '321321',
            isAdmin:true
        })
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        res.send({msg:error.message })
    }
})

export default router