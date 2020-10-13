import express from 'express'
// models
import User from '../models/userModel'
// utils
import { getToken } from '../util';

const router = express.Router();

// register
router.post('/register', async (req, res) => { // disconstruct req
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  });

// signin
router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  });

// admin
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