import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";
connect();

export async function GET(NextRequest){
    try {
        const userId = await getDataFromToken(NextRequest);
        // console.log("this is userID from getDataFromToken");
        // console.log(userId);
        const user = await User.findOne({_id: userId}).select("-password");   //if you want to deselect some other field then add a space i.e -isAdmin
        console.log("this is me api data");
        console.log(user);
        return NextResponse.json({
          message: "User found",
          user: user,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        console.log("########################this is error log of me################## ");
           
        return NextResponse.json({
            message: "ali2"+error.message,
            status: 500,
            success: false
        })
    }
}
