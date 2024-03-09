const blackcoffer = require('../models/dataModels')

const readData=(req,res)=>{
     blackcoffer.find().then((data)=>{
          const filteredData= data.filter((item)=>{
             return parseInt(item.start_year) >2000 &&  parseInt(item.end_year) > 2000
          })
          res.json(filteredData)
             
     }   )
     .catch((err)=>res.json({err}))
    
}
module.exports= readData;