import { articles } from "@/models/articles";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/db/dbConnect";

export const GET = async () => {
  try {
    await dbConnect();
    const getData = await articles.find();
    console.log(getData)
    return NextResponse.json({ data: getData });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 404 });
  }
};
