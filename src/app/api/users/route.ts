import dbConnect from "@/db/dbConnect"
import { users } from "@/models/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server"
import { GiConsoleController } from "react-icons/gi";

export const POST = async(request:NextResponse) =>{
    try {
        await dbConnect();

        const reqBody = await request.json();
        console.log(reqBody);
        const {name,email,password}:any = reqBody;

        const checkedUser = await users.findOne({email});
        if(checkedUser){
            return NextResponse.json({message:"Users already exits"},{status:400})
        }

        await users.create(reqBody);

        return NextResponse.json({message:"users successfully created"}, {status:200})




    } catch (error:any) {
      return  NextResponse.json({error:error.message},{status:401})
    }
}