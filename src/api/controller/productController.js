const productServcies=require("../services/userServices");

class userController{
    constructor(){
        return{
            addProduct:this.addProduct.bind(this),
            viewAllProduct:this.viewAllProduct.bind(this),
        }
    }
    async addProduct(req,res,next){
        try{

         const data=await productServcies.addProduct(req);
         res.status(200).send(data);

        }catch(error){
            console.log(error)
        }
    }
    async viewAllProduct(req,res,next){
        try{
            const data=await productServcies.addProduct(req);
            res.status(200).send(data);

        }catch(error){
            throw error
        }
    }
}

module.exports=new userController();