import { SchemaType } from "@/types/swagger";

// type ErrorResponse = {
//     description: string;
//     content: {
//         "application/json": {
//             schema: { "$ref": string };
//         };
//     };
// };

interface BaseSchema {
    type: string;
    example?: string | number | boolean | object | (string | number | boolean | object)[] | null;
}

interface ArraySchema extends BaseSchema {
    type: "array";
    items: SchemaType;
}

interface ResponseSchema {
    type: "object";
    properties: {
        status: { type: "boolean"; example: boolean };
        code: { type: "integer"; example: number };
        message: { type: "string"; example: string };
        data: SchemaType;
    };
}

export function wrapSchemaWithResponse(schema: SchemaType): ResponseSchema {
    let formattedData: SchemaType;

    if (schema.type === "array") {
        formattedData = { type: "array", items: (schema as ArraySchema).items || {} };
    } else {
        formattedData = schema;
    }

    return {
        type: "object",
        properties: {
            status: { type: "boolean", example: true },
            code: { type: "integer", example: 200 },
            message: { type: "string", example: "" },
            data: formattedData
        }
    };
}

export const errorSchemas: Record<string, SchemaType> = {
    BadRequest: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 400 },
            message: { type: "string", example: "Bad request, invalid parameter." },
            data: { type: "string", example: null },
        }
    },
    Unauthorized: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 401 },
            message: { type: "string", example: "Unauthorized access." },
            data: { type: "string", example: null },
        }
    },
    Forbidden: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 403 },
            message: { type: "string", example: "Forbidden or error, invalid parameter." },
            data: { type: "string", example: null },
        }
    },
    NotFound: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 404 },
            message: { type: "string", example: "Oops! It seems you may have mistyped the address or the page has been moved." },
            data: { type: "string", example: null },
        }
    },
    ToManyRequest: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 429 },
            message: { type: "string", example: "Oops, to many request! Please try again later." },
            data: { type: "string", example: null },
        }
    },
    InternalServerError: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 500 },
            message: { type: "string", example: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back!" },
            data: { type: "string", example: null },
        }
    },
    ServiceUnavailable: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 503 },
            message: { type: "string", example: "Service unavailable. Please try again later." },
            data: { type: "string", example: null },
        }
    },
    GatewayTimeout: {
        type: "object",
        properties: {
            status: { type: "boolean", example: false },
            code: { type: "integer", example: 504 },
            message: { type: "string", example: "The server is taking too long to respond." },
            data: { type: "string", example: null },
        }
    }
};

// export function generateErrorResponses() {
//     const responses: Record<string, ErrorResponse> = {};

//     Object.entries(errorSchemas).forEach(([key, errorSchema]) => {
//         if (!errorSchema.properties || !errorSchema.properties.code) return;
        
//         const statusCode = errorSchema.properties.code.example.toString();

//         responses[statusCode] = {
//             description: errorSchema.properties.message.example,
//             content: {
//                 "application/json": {
//                     schema: { "$ref": `#/components/schemas/Error/${key}` }
//                 }
//             }
//         };
//     });

//     return responses;
// };