import path from "node:path";
import * as fs from "node:fs";
import {NextRequest, NextResponse} from "next/server";

const DATA_FILE = path.join(process.cwd(), "projects.json")

export async function GET(): Promise<NextResponse> {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([]))
    }

    console.log(DATA_FILE)
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"))
    return NextResponse.json(data)
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body = await request.json()
    const { title, description, image, tech, tags, github, demo } = body

    if (!(title || description)) {
        return NextResponse.json({ message: "Title and description required" }, { status: 400 });
    }

    const projects = fs.existsSync(DATA_FILE)
        ? JSON.parse(fs.readFileSync(DATA_FILE, "utf8"))
        : [];

    const newProject = {
        id: Date.now(),
        title,
        description,
        image: image || null,
        tech: tech || [],
        tags: tags || [],
        github: github || null,
        demo: demo || null,
        createdAt: new Date().toISOString(),
    };

    projects.push(newProject);
    fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));

    return NextResponse.json(newProject, { status: 201 });
}