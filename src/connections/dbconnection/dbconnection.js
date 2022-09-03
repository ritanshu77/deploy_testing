const mongoose=require("mongoose");
let DB_URL=process.env.DB_URL || "mongodb+srv://ritanshu:2eexGt8yksbxIDCD@cluster0.hrnhm3t.mongodb.net/deploying_test"
mongoose.connect(`${DB_URL}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`dbconnection successfully on ${DB_URL}`)
}).catch((e)=>{
    console.log('-->>DB CONNECTION ERROR---->>',e)
});