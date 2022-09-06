const mongoose=require("mongoose");

const userModel=mongoose.Schema({
    product_childOf:{
        type:mongoose.Types.ObjectId,
    },
    name:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:''
    },
    is_deleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports=new mongoose.model("product",userModel);