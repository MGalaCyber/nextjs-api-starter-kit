import { wrapSchemaWithResponse } from "@/config/swaggerCompiler";

interface ContactInfo {
    name: string;
    email: string;
    url: string;
}

interface LicenseInfo {
    name: string;
    url: string;
}

interface InfoTypes {
    title: string;
    description: string;
    version: string;
    contact: ContactInfo;
    license: LicenseInfo;
}

export interface SchemaType {
    type?: "string" | "number" | "integer" | "boolean" | "object" | "array";
    format?: string;
    properties?: Record<string, SchemaType>;
    items?: SchemaType;
    enum?: string[];
    required?: string[];
    $ref?: string;
    example?: string | number | boolean | object | (string | number | boolean | object)[] | null;
}

interface ParameterType {
    name: string;
    in: "query" | "header" | "path" | "cookie";
    description?: string;
    required?: boolean;
    schema: SchemaType;
}

interface ResponseContent {
    schema: SchemaType;
}

export interface ResponseType {
    description: string;
    content?: {
        "application/json"?: ResponseContent;
        "application/xml"?: ResponseContent;
        "text/plain"?: ResponseContent;
    };
}

interface MethodTypes {
    summary: string;
    operationId: string;
    tags: string[];
    parameters?: ParameterType[];
    requestBody?: {
        description?: string;
        required?: boolean;
        content: {
            "application/json": {
                schema: SchemaType | ReturnType<typeof wrapSchemaWithResponse>;
            };
        };
    };
    responses: {
        [statusCode: string]: {
            description: string;
            content: {
                "application/json": {
                    schema: SchemaType | ReturnType<typeof wrapSchemaWithResponse>;
                };
            };
        };
    };
    security?: SecurityRequirement[];
}


interface SecurityRequirement {
    [securityScheme: string]: string[];
}

interface PathsTypes {
    [path: string]: {
        get?: MethodTypes;
        post?: MethodTypes;
        put?: MethodTypes;
        delete?: MethodTypes;
        patch?: MethodTypes;
        options?: MethodTypes;
        head?: MethodTypes;
    };
}

interface ComponentsTypes {
    schemas?: Record<string, SchemaType>;
    parameters?: Record<string, ParameterType>;
    securitySchemes?: Record<string, SecuritySchemeType>;
    security?: SecurityRequirement[];
}

interface OpenAPIComponents {
    schemas?: Record<string, SchemaType>;
    securitySchemes?: Record<string, SecurityScheme>;
    responses?: Record<string, ResponseType>;
    parameters?: Record<string, ParameterType>;
    requestBodies?: Record<string, RequestBodyType>;
}

interface SecurityScheme {
    type: "http" | "apiKey" | "oauth2";
    scheme?: "bearer" | "basic";
    bearerFormat?: string; // Misalnya: "JWT"
    in?: "query" | "header" | "cookie";
    name?: string;
    description?: string;
    flows?: OAuthFlows;
}

interface OAuthFlows {
    authorizationCode?: {
        authorizationUrl: string;
        tokenUrl: string;
        scopes: Record<string, string>;
    };
}

interface RequestBodyType {
    description?: string;
    required?: boolean;
    content: {
        "application/json": {
            schema: SchemaType;
        };
    };
}

interface SecuritySchemeType {
    type: "apiKey" | "http" | "oauth2" | "openIdConnect";
    name?: string;
    in?: "query" | "header" | "cookie";
    scheme?: string;
    bearerFormat?: string;
    flows?: OpenAPIComponents;
    description?: string;
    openIdConnectUrl?: string;
}

interface ServerType {
    url: string;
    description: string;
}

export interface SwaggerTypes {
    openapi: string;
    info: InfoTypes;
    servers: ServerType[];
    paths: PathsTypes;
    components?: ComponentsTypes;
    security?: SecurityRequirement[];
}