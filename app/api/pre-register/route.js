// http://localhost:3000/api/register

import { NextResponse } from "next/server";
import dbConnect from '@/utils/dbConnect';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { emailTemplate } from "@/utils/email";
import jwt from 'jsonwebtoken';

// create jwt with email and password then email this token as clickable link
// when user click on that email link, registeration complete
export async function POST(req) {
  const body = await req.json();


  try {
    console.log(body);

    const emailSent = false;

    if (emailSent) {
      return NextResponse.json({ ok: true });
    } else {
      return NextResponse.json({ ok: false });
    }

  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }

}

export async function GET(req) {
  return NextResponse.json({time: new Date().toLocaleString()});
}


