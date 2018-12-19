const express = require('express');
const router = express.Router();
const Product=require('../database/Product.model');
const multer  = require('multer');
const path=require('path');
const config=require('../config/config');

let fileName='';
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve('','./public/images/upload'))
	},
	filename: function (req, file, cb) {
		const ext=file.originalname.split('.')[1];
		const rand=Math.random();
		fileName=file.fieldname + '-' + Date.now()+rand+'.'+ext;
		cb(null,fileName)
	}
});

const upload = multer({ storage: storage }).array('image');
// const upload=multer({dest:'../public/images/upload'}).array('image');
router.post('/getProducts',function(req, res, next) {
    Product.find(function(err,data){
        if(data.length>=0){
            res.send({
                errorCode:0,
                errorMessage:data
            });
        }else{
            console.log(err);
            return res.send({
                errorCode:1,
                errorMessage:'出错了'
            })
        }
    });
});

router.post("/addProduct",function(req,res,next){
   console.log('req',req.body.productName);
   const product=new Product({
       name:req.body.productName,
       category:req.body.productCategory
   });
   product.save(function(err,response){
       if (err) {
           console.log("Error:" + err);
           res.send({
               errorCode:1,
               errorMessage:'出错了'
           })
       }else {
           console.log("Res:" + res);
           res.send({
               errorCode:0,
               errorMessage:"insert success"
           });
       }
   })
});

router.post('/api',function(req,res,next){
	res.status(200);
	res.send({
		errorCode:0,
		errorMessage:'success',
		data:'123'
	});
});

router.post('/GetAccessToken',function(req,res,next){
    const ticket=req.body.ticket;
    const client_id=req.body.client_id;
    console.log('req:',req);
    res.status(200);
    //http://localhost:3000/csms/mobile/home?tenant=AVRIST&account=zcj&email=emerson@ebaotech.com&nick=changjin&mobile=12345678901&license=123&ticket=a8d8e1a9d8650ece56b6649f3e3162fb
    res.send({
        meta:{
            "http_status": 200,
            "status": 200,
            "user_message": null,
            "filter": null,
            "server_date": 1519961536937,
            "message": "OK ",
            "info": null
        },
        data:{
            "access_token":"a8d8e1a9d8650ece56b6649f3e3162fb",
            "user_id":1,
            "user_name": "zcj",
            "id_number_type":"Passport",
            "id_number":"5673542354",
            "name":"changjin",
            "key_code":"AC123",
            "email":"emerson@ebaotech.com",
            "phone":"12345678901",
            "organization":"IT",
            "roles":["R01","R02","R03"],
            "scope_menu":["M01","M02","M03","M04","M05"],
            "session_time":10,
            "additional_field":[]
        }
    });
});

router.post("/upload",function(req,res,next){
	upload(req,res,function(err){
		if(err){
			console.log('err',err);
			res.status(500);
			res.end();
		}
		console.log('files',req.files);
		let data=[];
		res.status(200);
		req.files.map((v,i)=>{
			data.push(`http://localhost:${config.port}/images/upload/`+v.filename);
		});
		res.send({
			errorCode:0,
			errorMessage:'上传成功',
			data:data
		});
	})

});

router.put("/updateProduct/:id",function(req,res,next){
   const where={"_id":`${req.params.id}`};
   const data={
       name:req.body.productName,
       category:req.body.productCategory
   };
   Product.update(where,data,function(err,response){
       if (err) {
           console.log("Error:" + err);
           res.send({
               errorCode:1,
               errorMessage:'出错了'
           })
       }else {
           console.log("Res:" + res);
           res.send({
               errorCode:0,
               errorMessage:"update success"
           });
       }
   })
});

router.delete("/delete/:id",function(req,res){
   const where={"_id":`${req.params.id}`};
   Product.remove(where,function (err,response) {
       if(err){
           console.warn(err);
           res.send({
               errorCode:1,
               errorMessage:'出错了'
           })
       }else{
           res.send({
               errorCode:0,
               errorMessage:'delete success'
           })
       }
   });
});

module.exports = router;
