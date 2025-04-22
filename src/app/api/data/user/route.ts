import { statusSuccess, statusInternalServerError } from "@/lib/responseHandlers";
import { NextRequest } from "next/server";
import { System } from "@config/site";

export async function GET(request: NextRequest) {
    try {
        return statusSuccess(request, {
            data: {
                user_id: "usr_7f8d9e2a3b1c5k6j7h8g9f0e",
                avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                username: "John",
                full_name: "John Smith",
                email: "john@example.com",
                role: "guest",
                register_at: "2024-02-01T06:11:45.108+00:00",
                api_key: "sk-1234567890abcdefghijklmnopqrstuvwxyz",
                connections: {
                    google: true,
                    github: true,
                    discord: false
                },
                limit: {
                    max: 10000,
                    total: 12241,
                    usage: 1423,
                    remaining: 8677,
                    reset: "2025-04-09T17:00:00.000+00:00"
                },
                subscription: {
                    plan: "daily",
                    tier: "free",
                    created_at: "2024-05-01T06:11:45.108+00:00",
                    expires_at: "2025-02-01T06:11:45.108+00:00",
                    payment_method: "unknown",
                }
            }
        })

    } catch (error) {
        if (System.Mode) console.log(error);
        return statusInternalServerError(request, {});
    }
}