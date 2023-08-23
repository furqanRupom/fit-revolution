import dbConnect from "@/db/dbConnect";
import { Challenges } from "@/models/challenges";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await dbConnect();

    const email = params?.email;
    console.log(email)
    const query = await Challenges.find({ creatorEmail: email });
    if (query) {
      return NextResponse.json(query);
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 404 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
};
