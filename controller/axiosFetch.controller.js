import axios from "axios";
import { asyncHandler } from "../utils/asyncHandler.js";

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

const fetchAxiosData = asyncHandler(async(req,res)=>{
    const data = await fetchData();
    res.status(200).json({message:"Data fetching Successfully",data})
})

const fetchUserId = asyncHandler(async (req,res) => {
    const userId = await fetchData();

    const {id} = req.params;

    const user = userId.users?.find((user) => user.id === parseInt(id));

    res.json(user);
})

const fetchUserData = asyncHandler(async (req, res) => {
    const userData = await fetchData();

    
    const respData = userData.users?.find(
        (user) => 
            user.firstName === req.query.firstName||
        user.lastName=== req.query.lastName ||
        user.email === req.query.email
    );
    
// trying to add search functionality

    // const queryKeys = ["firstName","lastName","email"];
    // const respData = userData.users?.filter((user)=>{
    //     queryKeys.some((key)=>{
    //         const userValue = user[key]?.toLowerCase();
    //         const queryValue = req.query[key]?.toLowerCase();
    //         return(
    //             userValue &&
    //             queryValue &&
    //             queryValue.split('').some((char)=>{
    //                 userValue.includes(char)
    //             })
    //         )
    //     })
    // })

    if(!respData){
        res.status(404).json({message:"No data Found"});
    }

    res.status(200).json({message:"Founded Data",respData});
});

export { fetchAxiosData , fetchUserId ,fetchUserData};