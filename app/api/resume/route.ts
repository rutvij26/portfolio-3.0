import { NextResponse } from "next/server";
import { generateResumePDF } from "@/lib/resume-generator";

export async function GET() {
  try {
    const pdfBuffer = await generateResumePDF();

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Rutvij_Sathe_Resume.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Resume generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate resume" },
      { status: 500 }
    );
  }
}
