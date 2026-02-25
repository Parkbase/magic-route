import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    "google-site-verification: google562108fb11209cfd.html",
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}