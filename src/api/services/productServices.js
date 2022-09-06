const productModel=require("../../connections/models/products");

class productServcies{
    constructor(){
        return{
            addProduct:this.addProduct.bind(this),
            viewAllProduct:this.viewAllProduct.bind(this),
        }
    }
    async addProduct(req){
        try{
            const _isCheck=await productModel.find({name:req.body.name});
            if(_isCheck && _isCheck.length > 0){
                return{
                    status:true,
                    message:"product name already exist..",
                    data:{}
                }
            }else{
                const newproduct=await productModel.create(req.body);
                if(newproduct){
                    return{
                        status:true,
                        message:'product create succssfully',
                        data:newproduct
                    }
                }else{
                    return{
                        status:true,
                        message:'something wrong please try again letter',
                        data:{}
                    }
                }
            }



        }catch(error){
            throw error;
        }
    }
    async recursion(getall,subCat=null){
        if(subCat == null ){
            
        }
    }
    async viewAllProduct(req,res,next){
        try{
            const getALL=await productModel.find();
            let _myProduct=await this.recursion(getALL);
            return{
                status:true,
                message:'all products',
                data:_myProduct
            }

        }catch(error){
            throw error
        }
    }
}