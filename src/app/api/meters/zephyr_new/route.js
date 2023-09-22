import { connect } from "@/dbConfig/dbConfig";

import {NextRequest, NextResponse} from "next/server";
import mongoose from "mongoose";

connect();

export async function GET(NextRequest) {
  try {
    // Access the "GCL_new" collection directly
    const collection = mongoose.connection.db.collection("Active_Tags");
     console.log(collection);
    // Your query to fetch data from the collection 
    const meter = await collection.find().toArray();

    console.log("This is Meter API data");
    console.log(meter);

    return NextResponse.json(meter);
  } catch (error) {
    console.error(error.message);
   

    return NextResponse.json({
      message: "ali4" + error.message,
      status: 500,
      success: false,
    });
  }
}