const tables = require('../models/interview.geography_columns');


exports.AddValues = async(req,res) => {
    try{

    await tables.create({
        table_name: req.body.table_name,
        colume_name: req.body.colume_name, 
        distinct_value: req.body.distinct_value
    })
    res.status(200).json({
        message: "data is Added "
    })
    }catch(err){
        console.log(err)
        res.status(400).json({
            message: `server error `
        })
    }
}

exports.getAllTables = async(req,res) => {
    try{
    const result = await tables.find();
    res.status(200).json({
        message: "ok",
        result: result
    })
    }catch(err){
        res.status(400).json({
            message: "Server error"
        })
    }
}
exports.AddUserInput = async(req,res) => {
    try{
    console.log(req.params.id);
    console.log(req.body.user_input)
   await tables.updateOne({_id: req.params.id}, {
    user_input: req.body.user_input
   })
    }catch(err){
        console.log(err)
        res.status(400).json({
            message: "Server error"
        })
    }
}