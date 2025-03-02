import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const filePath = path.join(process.cwd(), "current_email.json");

    await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ message: "Save correctly" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error during save" }, { status: 500 });
  }
}
