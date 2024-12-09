import Data from "../model/data.model.js";
import fileModel from "../model/file.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getData = asyncHandler(async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit; 

        const paginatedData = await Data.find().skip(skip).limit(limit);

        const totalItems = await Data.countDocuments();

        if (!paginatedData.length) {
            return res.status(404).json({ message: "No data Found!" });
        }

        res.status(200).json({
            success: true,
            totalItems: totalItems,
            currentPage: page,
            limit: limit,
            totalPages: Math.ceil(totalItems / limit),
            data: paginatedData,
        });
})

const searchData = asyncHandler(async(req,res)=>{
    const {first_name = "", last_name="",email=""} = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter ={};

    if(first_name){
        filter.first_name = {$regex :new RegExp(first_name.trim(),"i")};
    }
    if(last_name){
        filter.last_name = {$regex :new RegExp(last_name.trim(),"i")};
    }
    if(email){
        filter.email = {$regex :new RegExp(email.trim(),"i")};
    }

    const searchedData = await Data.find(filter).skip(skip).limit(limit);

    if(!searchedData){
        res.status(404).json({
            data:searchedData,
            message:"No Data Found",
            searchQuery: first_name, last_name
        })
    }

    res.status(200).json({
        success:true,
        page:page,
        limit:limit,
        data:searchedData
    })
})

const aggregate = asyncHandler(async(req,res)=>{
    const { country } = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const regexFilter = { $regex: new RegExp(country, "i") };

    const pipeline = [
        {$match: {
                country: regexFilter,
            },
        },
        {$group: {
                _id: "$country",  
                cities: {          
                    $push: { 
                        city: "$city",
                    }
                },
            },
        },
        {$unwind: "$cities",},
        {$skip: skip,},
        {$limit: limit,},
    ];

    const data = await Data.aggregate(pipeline);

    const totalItems = await Data.find({ country: regexFilter }).countDocuments();

    if (!data) {
        return res.status(404).json({ message: "No data found!" });
    }

    res.status(200).json({
        success: true,
        page: page,
        totalItems: totalItems,
        limit: limit,
        data: data,
    });
})

const uploadImage = asyncHandler(async(req,res)=>{
    if(!req.file){
        res.status(400).json({message:"No image to upload"});
    }
    const fileName = new file({
        fileName:req.file.fileName,
        path:req.file.path,
        size:req.file.size,
    })

    await fileModel.save();

    res.status(200).json({message:"File uploaded SuccessFully"});
})

export { getData , searchData , aggregate , uploadImage };