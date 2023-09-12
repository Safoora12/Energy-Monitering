import { connect } from "@/dbConfig/dbConfig";
import Meter from "@/models/meterModel";
import {NextRequest, NextResponse} from "next/server";


connect();

export async function GET(NextRequest){
    try {
       
        const meter = await Meter.find({ Time : { $gt : "2023-08-23T23:44:49.661+05:00" , $lt: "2023-08-24T03:59:59.300+05:00"}});
        console.log("this is Meter api data");
        console.log(meter);
        return NextResponse.json({
          meter: meter           
        })
    } catch (error) {
        console.log(error.message)
        console.log("########################this is error log of me################## ");
           
        return NextResponse.json({
            message: "ali4"+error.message,
            status: 500,
            success: false
        })
    }
}
