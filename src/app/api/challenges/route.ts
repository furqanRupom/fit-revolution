import dbConnect from "@/db/dbConnect";
import { Challenges } from "@/models/challenges";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const reqBody = await request.json();
    const { challengeName }: any = reqBody;

    const isExit = await Challenges.findOne({ challengeName });
    if (isExit) {
      return NextResponse.json(
        { message: "Challenge already exit" },
        { status: 403 }
      );
    }

    await Challenges.create(reqBody);

    return NextResponse.json(
      { message: "challenge successfully created" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
};

export const GET = async () => {
  try {
    await dbConnect();
    const challenges = await Challenges.find();
    if (challenges) return NextResponse.json(challenges, { status: 200 });
    else
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 403 }
      );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    await dbConnect();
    const id = request.nextUrl.searchParams.get("id");
    console.log(id);

    const result = await Challenges.findByIdAndDelete(id);
    if (result)
      return NextResponse.json(
        { message: "challenges successfully deleted" },
        { status: 200 }
      );
    else
      return NextResponse.json(
        { message: "challenges delete process failed" },
        { status: 403 }
      );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 403 });
  }
};
