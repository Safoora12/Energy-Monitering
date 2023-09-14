import { connect } from "@/dbConfig/dbConfig";
import Meter from "@/models/meterModel";
import {NextRequest, NextResponse} from "next/server";


connect();

export async function GET(NextRequest){
    try {
       
        const meter = await Meter.find();
        console.log("this is Meter api data");
        console.log(meter);
        return NextResponse.json(meter)
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
