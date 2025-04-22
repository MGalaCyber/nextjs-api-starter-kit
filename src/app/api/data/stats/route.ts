import { statusSuccess, statusInternalServerError } from "@/lib/responseHandlers";
import { NextRequest } from "next/server";
import { System } from "@config/site";

export async function GET(request: NextRequest) {
    try {
        return statusSuccess(request, {
            data: {
                users: 10912,
                requests: 412490,
                visitors: 15490
            }
        })

    } catch (error) {
        if (System.Mode) console.log(error);
        return statusInternalServerError(request, {});
    }
}