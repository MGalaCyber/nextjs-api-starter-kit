import { NextRequest } from "next/server";
import { System } from "@config/site";
import { statusSuccess, statusInternalServerError } from "@/lib/responseHandlers";

export async function GET(request: NextRequest) {
    try {
        const user = [
            { name: "John Doe", role: ["admin"], email: "john@example.com" },
            { name: "Alexa", role: ["user"], email: "alexa@example.com" }
        ];
        return statusSuccess(request, {
            data: user
        })

    } catch (error) {
        if (System.Mode) console.log(error);
        return statusInternalServerError(request, {});
    }
}