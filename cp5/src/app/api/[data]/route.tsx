import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { data: string } }) {
    const { data } = params;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=eUfhGJqxodM8l2cDREp7CogOT6z5xeyzkA9eridW&date=${data}`;

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            return NextResponse.json({ error: 'Error fetching data from NASA API' }, { status: response.status });
        }

        const dados = await response.json();

        // Redirecionar para a URL da imagem
        return NextResponse.redirect(dados.url);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
