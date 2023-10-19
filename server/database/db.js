import  mongoose  from "mongoose";


const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@cluster0.tqss7fm.mongodb.net/inshort?retryWrites=true&w=majority`;
    
    try{
       await mongoose.connect(URL, { useNewUrlParser: true });
       console.log("database connected successfully");
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;
