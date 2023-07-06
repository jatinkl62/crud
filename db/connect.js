import mongoose from "mongoose";
const connectDB=async(db_url)=>{
 try{
    const option={
        dbname: "crud"
    }
    await mongoose.connect(db_url,option)

 }
 catch(err){
    console.log(err);
 }
}
export default connectDB