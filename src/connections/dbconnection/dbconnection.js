const mongoose=require("mongoose");

mongoose.connect(`${process.env.DB_URL}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`dbconnection successfully on ${process.env.DB_URL}`)
}).catch((e)=>{
    console.log('-->>DB CONNECTION ERROR---->>',e)
});