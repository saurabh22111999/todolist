import { NextResponse } from "next/server";
import { prisma } from "../../prisma.db";

export async function PUT(req:Request,context:any){
    const id =context.params.id
    const body = await req.json()
    const res=await prisma.todo.update({
        where:{
            id
        },
        data:body

    })
    return NextResponse.json({res})
}
export async function DELETE(req:Request,context:any){
    const id= context.params.id
    const res=await prisma.todo.delete({
        where:{id},

    })
    return NextResponse.json({res})
}