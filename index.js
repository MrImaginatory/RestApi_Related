import connectDB from "./database/db.js";
import {app} from "./app.js";
import dotenv from "dotenv";

import Data from "./model/data.model.js"

dotenv.config();

const PORT = process.env.PORT || 3002;

connectDB()
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server up and Running at http://localhost:${PORT}`);
        })
    })
    .catch((error)=>{
        console.log("Error: ",error);
    })

app.get("/",async(req,res)=>{
    res.status(200).json("Hello There")
})

// Data Pagination
// http://localhost:3001/data?page=1&limit=10
app.get("/data", async (req, res) => {
    try {
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

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Data searching
// http://localhost:3001/search?first_name=Abhishek&last_name=Kumar&email=Abhishek%40gmail.com&page=1&limit=10
app.get("/search", async(req,res) => {
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

// Pipeline Aggregation
// http://localhost:3001/groupBy?country=India
app.get("/groupBy", async (req, res) => {
    const { country } = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const regexFilter = { $regex: new RegExp(country, "i") };

    const pipeline = [
        {
            $match: {
                country: regexFilter,
            },
        },
        {
            $group: {
                _id: "$country",  
                cities: {          
                    $push: { 
                        city: "$city",
                    }
                },
            },
        },
        {
            $unwind: "$cities",
        },
        {
            $skip: skip,
        },
        {
            $limit: limit,
        },
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

});
