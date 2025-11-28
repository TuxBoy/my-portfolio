import {NextResponse} from "next/server";

export async function GET(): Promise<NextResponse> {
    const response = NextResponse.json({message: 'logged out'})

    response.cookies.set("authToken", "", {
        expires: new Date(0),
        path: "/"
    });

    return response;
}