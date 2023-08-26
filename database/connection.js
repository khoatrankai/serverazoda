import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
const connectDB = async()=>{
    try{
        const con = await mongoose.connect('mongodb+srv://trantankhoa2802:trA2NY8YCJoG8oRY@cluster0.ebcrhvb.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mogo success');
    }catch(err){
        console.log(err)
    }
}


export default connectDB
