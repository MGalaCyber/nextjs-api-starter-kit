import { statusSuccess, statusInternalServerError } from "@/lib/responseHandlers";
import { NextRequest } from "next/server";
import { System } from "@config/site";

export async function GET(request: NextRequest) {
    try {
        return statusSuccess(request, {
            message: "Hello World!"
        })

    } catch (error) {
        if (System.Mode) console.log(error);
        return statusInternalServerError(request, {});
    }
}