
const mongoose=require("mongoose");
const userModel=require("../../connections/models/userModel");
class userServices{
    constructor(){
        return{
            createUser:this.createUser.bind(this),
            updateUser:this.updateUser.bind(this),
            deleteUser:this.deleteUser.bind(this),
            viewAllUser:this.viewAllUser.bind(this),
        }
    }
    async createUser(req){
        try{
            const check_user=await userModel.find({email:req.body.email});
            if(check_user.length > 0){
                return{
                    status:true,
                    message:`${req.body.email} already exist`,
                    data:{}
                }
            }else{
                const newUser= await userModel.create(req.body);
                if(newUser){
                    return{
                        status:true,
                        message:' user successfully created ',
                        data:{user_id:newUser._id}
                    }
                }else{
                    return{
                        status:true,
                        message:' Somthing Wrong Please Try Again Letter ',
                        data:{user_id:newUser._id}
                    }
                }
            }


        }catch(error){
            throw error;
        }
    }
    async updateUser(req){
        try{
            const checkUser=await userModel.findOne({_id:{$ne:mongoose.Types.ObjectId(req.params.id)},email:req.body.email});
            if(checkUser){
                return{
                    status:true,
                    message:` ${req.body.email} -email already exist,please try another--`,
                    data:{}
                }
            }else{
                const updateUser=await userModel.findOneAndUpdate({
                    _id:mongoose.Types.ObjectId(req.params.id)
                },{
                    $set:req.body
                },{
                    new:true
                });
                if(updateUser){
                    return {
                        status:true,
                        message:'User Successfully update',
                        data:updateUser
                    }
                }else{
                   return { status:true,
                    message:' Somthing Wrong Please Try Again Letter ',
                    data:{}
                   }
                }
            }

        }catch(e){
            throw error
        }
    }
    async deleteUser(req){
        try{
            const delete_user=await userModel.findOneAndUpdate({
                _id:req.params.id
            },{
                is_deleted:true
            },{
                new:true
            });
            if(delete_user){
                return{
                    status:true,
                    message:'user successfully delete'
                }
            }else{
                return {
                    status: true,
                    message:'User Not Found--'
                }
            }


        }catch(error){
            throw error
        }
    }
    async viewAllUser(req){
        try{
            let getuser;
            if(req.params.id){
                getuser=await userModel.find({_id:req.params.id,is_deleted:false});
            }else{
                getuser=await userModel.find({is_deleted:false});
            }
        
            return{
                status:true,
                message:'All Users',
                data:getuser
            }

        }catch(error){
            throw error
        }
    }
}

module.exports=new userServices();