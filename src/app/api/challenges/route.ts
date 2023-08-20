import dbConnect from "@/db/dbConnect"
import { Challenges } from "@/models/challenges";
import { NextResponse } from "next/server"



export const POST = async (request:NextResponse) =>{
    try {
        await dbConnect();
        const reqBody = await request.json()
        const {challengeName}:any = reqBody;

        const isExit = await Challenges.findOne({challengeName});
        if(isExit){
            return NextResponse.json({message:"Challenge already exit"},{status:403})
        }

        await Challenges.create(reqBody);

        return NextResponse.json({message:"challenge successfully created"},{status:200})


    } catch (error:any) {
       return  NextResponse.json({error:error.message},{status:401})
    }
}