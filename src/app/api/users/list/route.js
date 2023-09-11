import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
connect();

export async function GET(NextRequest){
    try {
       
      
        const user = await User.find();  
        console.log("this is list api data");
        console.log(user);
        return NextResponse.json({
          message: "Users Listed",
          user: user,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        console.log("########################this is error log of me################## ");
           
        return NextResponse.json({
            message: "ali3"+error.message,
            status: 500,
            success: false
        })
    }
}
