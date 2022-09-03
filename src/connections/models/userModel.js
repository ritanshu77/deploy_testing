const mongoose=require("mongoose");

const userModel=mongoose.Schema({
    name:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:""
    },
    colony:{
        type:String,
        default:''
    },
    city:{
        type:String,
        default:""
    },
    pincode:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        default:function(){
            return `${this.colony} , ${this.city} , ${this.pincode} ` 
        }
    },
    is_deleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports=new mongoose.model("user",userModel);