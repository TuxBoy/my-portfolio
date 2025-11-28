import {NextRequest, NextResponse} from "next/server";
import users from "@/data/users.json";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const { email, password } = await request.json()

    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const response = NextResponse.json({ message: 'Logged in' })

    response.cookies.set("authToken", "valid-user", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
    });

    return response;
}