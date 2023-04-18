const axios = require('axios')
const urlStatus = require('../models/urlStatus')


exports.AddUrlStatus = async(req,res) => {
    try{
    const urlcheck = req.body.url;
    const websiteData = await axios.get(urlcheck);
    console.log(websiteData)
    const statusCode = websiteData.status;
    const websiteStatus = (statusCode >= 200 && statusCode < 400) ? true : false;
    await urlStatus.create({
        url : req.body.url,
        status: websiteStatus
    })
    res.status(200).json({
        message: "ok",
    })
}catch(err){
        res.status(200).json({
            message: "Server Error "
        })
    }
}

exports.getAllWeb = async(req,res) => {
    try{
    const result = await urlStatus.find();
    res.status(200).json({
        message: "ok",
        result: result
    })
    }catch(err){
        res.status(200).json({
            message: "Server Error "
        })
    }
}