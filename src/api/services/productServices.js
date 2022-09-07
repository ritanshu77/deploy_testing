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
                if(req.file){
                    req.body.image=`images/${req.file.filename}`
                }
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
        let myArray=[];
        let subCategory;
        if(subCat == null ){
            subCategory=await getall.filter((x)=>x.product_childOf == null );
            // console.log("----subCate--11111111---->",subCategory)
        }else{
            subCategory=await getall.filter((x)=>String(x.product_childOf) == String(subCat))
            // console.log("----subCate--22222222---->",subCategory)
        }

        for await(let key of subCategory){
            let obj={};
            obj.product_id=key._id;
            obj.product_name=key.name;
            obj.product_childOf=key?.product_childOf;
            obj.sub_Product=await this.recursion(getall,key._id)
            myArray.push(obj)
        }
        return myArray;
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

module.exports=new productServcies();