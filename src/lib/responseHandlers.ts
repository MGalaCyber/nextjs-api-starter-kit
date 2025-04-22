import { NextResponse } from "next/server";

interface ResponseParams<T = null> {
    message?: string;
    data?: T | null;
    statusCode?: number;
}

export const statusSuccess = <T = null>(
    request: Request,
    { message = "", data = null, statusCode = 200 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: true,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusBadRequest = <T = null>(
    request: Request,
    { message = "Bad request, invalid parameter.", data = null, statusCode = 400 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusUnauthorized = <T = null>(
    request: Request,
    { message = "Unauthorized access.", data = null, statusCode = 401 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusForbidden = <T = null>(
    request: Request,
    { message = "Forbidden or error, invalid parameter.", data = null, statusCode = 403 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusNotFound = <T = null>(
    request: Request,
    { message = "Oops! It seems you may have mistyped the address or the page has been moved.", data = null, statusCode = 404 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusToManyRequest = <T = null>(
    request: Request,
    { message = "Oops, to many request! Please try again later.", data = null, statusCode = 429 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusInternalServerError = <T = null>(
    request: Request,
    { message = "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back!", data = null, statusCode = 500 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusServiceUnavailable = <T = null>(
    request: Request,
    { message = "Service unavailable. Please try again later.", data = null, statusCode = 503 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};

export const statusGatewayTimeout = <T = null>(
    request: Request,
    { message = "The server is taking too long to respond.", data = null, statusCode = 504 }: ResponseParams<T>
) => {
    return NextResponse.json({
        status: false,
        code: statusCode,
        message,
        data,
    }, { status: statusCode });
};