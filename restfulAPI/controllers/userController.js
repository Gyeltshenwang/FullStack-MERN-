import User from '../models/postModels.js'
import Joi from 'joi'
import bodyParser from 'body-parser';



export const getUser = (req, res) => {
    res.send('hello world');
}
//VALIDATION
export const postUserDetails = async (req, res) => {
    const { userName, email, password } = req.body;

    // const schema = Joi.object({
    //     userName: Joi.string().required().max(23),
    //    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['bt','admin'] } }),
    //    password: Joi.string()
    //     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
    // })
    // const { error } = schema.validate(req.body)
    // if (error) {
    //     //return res.status(400).send()
    //     console.log(error)
    // }
    const userRegistration = new User(userName, email, password)
   try {
       const savedUser = await userRegistration.save()
       res.send(savedUser)
      
   } catch (err) {
    res.status(400).send(err)
   }
}


