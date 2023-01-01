import ArticaModel from "../models/api.js";

export const getApi = async(req, res, next) => {
    try {
        const getData = await ArticaModel.find()
          res.status(200).json({ message: 'sucessfull',getData })
        
    } catch (error) {
        console.log(error);;
    }
  
    
}

export const createApi = async(req, res, next) => { 
    try {
        const { title, content } = req.body;
         const articalModel = await ArticaModel({
            title,content
         })
        await articalModel.save()
        res.status(200).json({message:'sucessfully created',articalModel})

    } catch (error) {
        console.log(error);
    }

    
}

export const deleteApi = async (req, res, next) => { 
    try {
        const removeAll = await ArticaModel.deleteMany()
        res.status(200).json({message:'success',removeAll})
    
    } catch (error) {
        console.log(error)
    }
   

       
    //res.status(200).json({message:'sucessfully deleted'})
}
// find specifics user
export const findSpecific = async (req, res, next) => { 
    try {
        const user = await ArticaModel.findOne({ title: req.params.title })
        res.send(user)

    } catch (error) {
      console.log(error)
    }
    
}

export const updateApi = (req, res, next) => { 
    res.status(200).json({message:'sucessfully updated'})
}