import mongoose from 'mongoose';

const Artical = mongoose.Schema({
    title: String,
    content:String
})

const ArticaModel = mongoose.model('Articals', Artical);
export default ArticaModel;