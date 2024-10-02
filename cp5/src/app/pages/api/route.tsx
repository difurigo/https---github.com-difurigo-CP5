import { NextResponse } from "next/server";
import {promises as fs} from "fs";

export async function GET() {   
    const file = await fs.readFile(process.cwd() + 'https://api.nasa.gov/planetary/apod?api_key=eUfhGJqxodM8l2cDREp7CogOT6z5xeyzkA9eridW&date=2024-10-01','utf-8');
    const dados = JSON.parse(file);
    return NextResponse.json(dados);
}