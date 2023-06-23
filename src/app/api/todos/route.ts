import { NextResponse } from "next/server";
import { prisma } from "../prisma.db";

export async function GET(){
    const res=await prisma.todo.findMany({})
    return NextResponse.json({res})
}
export async function POST(req:Request){
    const body = await req.json()
    const res= await prisma.todo.create({
        data:body
    })
    return NextResponse.json({})
}