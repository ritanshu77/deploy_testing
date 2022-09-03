const userService=require("../services/userServices");

class userController{
    constructor(){
        return{
            test:this.test.bind(this),
            createUser:this.createUser.bind(this),
            updateUser:this.updateUser.bind(this),
            deleteUser:this.deleteUser.bind(this),
            viewAllUser:this.viewAllUser.bind(this),
        }
    }
    async test(req,res,next){
        try{

            res.render("tesing");

        }catch(error){
            console.log(error)
        }
    }
    async createUser(req,res,next){
        try{
            console.log("---req.body-->",req.body)
            const data=await userService.createUser(req);
            res.status(200).send({status:data.status,data});
        }catch(error){

        }
    }
    async updateUser(req,res,next){
        try{
            const data=await userService.updateUser(req);
            res.status(200).send({status:data.status,data});
        }catch(error){
            
        }
    }
    async deleteUser(req,res,next){
        try{
            const data=await userService.deleteUser(req);
            res.status(200).send({status:data.status,data});
        }catch(error){
            
        }
    }
    async viewAllUser(req,res,next){
        try{
            const data=await userService.viewAllUser(req);
            res.status(200).send({status:data.status,data});
        }catch(error){
            
        }
    }
}

module.exports=new userController();