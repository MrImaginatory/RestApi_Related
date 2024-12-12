import axios from "axios";
import { asyncHandler } from "../utils/asyncHandler.js";

// function to fetch Data
const fetchData = async() => {
    try{
    const respData = await axios.get('https://dummyjson.com/users');
    
    if(respData.status!==200){
        console.log("Error Fetching Data");
    }

    return respData.data;

    }catch(error){
        res.status(500).json({message:"Error fetching data at server"});
    }
}

// controller for showing all data
const fetchAxiosData = asyncHandler(async(req,res)=>{
    const data = await fetchData();
    res.status(200).json({message:"Data fetching Successfully",data})
})

// controller to fetch data by userId
const fetchUserId = asyncHandler(async (req,res) => {
    const userId = await fetchData();

    const {id} = req.params;

    const user = userId.users?.find((user) => user.id === parseInt(id));

    res.json(user);
})

// controller to fetch userData by matching firstName,lastName or email char
const fetchUserData = asyncHandler(async (req, res) => {
    const userData = await fetchData();

    const filteredData = userData.users?.filter((user) => user.firstName.includes(req.query.firstName) || 
                                                            user.lastName.includes(req.query.lastName) ||
                                                            user.email.includes(req.query.email));

    if(!filteredData){
        res.status(404).json({message:"No data found!"});
    }

    res.status(200).json({message : "matching data found",totalItems:filteredData.length,data : filteredData});
});

// refactored Version of the code
// const fetchUserData = asyncHandler(async (req, res) => {
//     const userData = await fetchData(); // Fetch the data
//     const { firstName, lastName, email } = req.query; // Destructure query parameters

//     // Apply filtering based on query parameters
//     const filteredData = userData.users?.filter((user) => {
//         return (
//             (firstName && user.firstName?.includes(firstName)) ||
//             (lastName && user.lastName?.includes(lastName)) ||
//             (email && user.email?.includes(email))
//         );
//     });

//     // Handle case when no matching data is found
//     if (!filteredData || filteredData.length === 0) {
//         return res.status(404).json({ message: "No matching data found!" });
//     }

//     // Respond with matching data
//     res.status(200).json({
//         message: "Matching data found",
//         totalItems: filteredData.length,
//         data: filteredData,
//     });
// });

export { fetchAxiosData , fetchUserId ,fetchUserData};