import dbConnect from "@/db/dbConnect";
import { Challenges } from "@/models/challenges";
import { NextRequest, NextResponse } from "next/server";


export const GET = async(request:NextRequest,{params}:any) => {
  try{
    await dbConnect();
    const id = params?.id
    const query = await Challenges.findById(id);
    return NextResponse.json(query)


  }
  catch(error:any){
    return NextResponse.json({error:error.message},{status:404})

  }
}

export const PUT = async (request: NextRequest, { params }: any) => {
  try {
    await dbConnect()
    const {
      challengeName,
      goals,
      image,
      description,
      progressTracking,
      duration,
      rewards,
      price,
    } = await request.json();
    const id = params?.id;

    const result = await Challenges.findByIdAndUpdate(id, {
      challengeName,
      goals,
      image,
      description,
      progressTracking,
      duration,
      rewards,
      price,
    });

    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
};
