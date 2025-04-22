import { /*statusSuccess,*/ statusInternalServerError } from "@/lib/responseHandlers";
import { NextRequest, NextResponse } from "next/server";
import { SwaggerJson } from "@/config/swagger";
import { System } from "@config/site";

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(SwaggerJson, { status: 200 });

    } catch (error) {
        if (System.Mode) console.log(error);
        return statusInternalServerError(request, {});
    }
}