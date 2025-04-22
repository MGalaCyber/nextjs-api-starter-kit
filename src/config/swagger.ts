import { errorSchemas, wrapSchemaWithResponse } from "./swaggerCompiler";
import { SwaggerTypes } from "@/types/swagger";
import { version } from "../../package.json"

export const SwaggerJson: SwaggerTypes = {
    openapi: "3.0.1",
    info: {
        title: "JSONPlaceholder",
        description: "Fake Online REST API for Testing and Prototyping",
        version,
        contact: {
            name: "Support",
            email: "support@example.com",
            url: "https://example.com"
        },
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT"
        }
    },
    servers: [
        {
            "url": "https://api.example.com",
            "description": "Production Server | Hosting Server"
        },
        {
            "url": "http://localhost:3000",
            "description": "Development Server | Local Server"
        }
    ],
    paths: {
        "/api/v1/users": {
            get: {
                summary: "Get all users",
                operationId: "getUsers",
                tags: ["Users"],
                responses: {
                    "200": {
                        description: "List of users",
                        content: {
                            "application/json": {
                                schema: wrapSchemaWithResponse({
                                    type: "array",
                                    items: { "$ref": "#/components/schemas/User" }
                                })
                            }
                        }
                    },
                },
            },
            post: {
                summary: "Create a new user",
                operationId: "createUser",
                tags: ["Users"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: wrapSchemaWithResponse({
                                type: "object",
                                items: { "$ref": "#/components/schemas/CreateUser" }
                            })
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "List of users",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        }
                    },
                }
            },
        }
    },
    components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        format: "text",
                        example: "John Smith"
                    },
                    email: {
                        type: "string",
                        format: "email",
                        example: "john@example.com"
                    },
                    role: {
                        type: "string",
                        enum: ["user", "admin"],
                    },
                }
            },
            CreateUser: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    name: {
                        type: "string",
                        format: "email"
                    },
                    role: {
                        type: "string",
                        enum: ["user", "admin"]
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time"
                    },
                },
                required: ["id", "name", "email", "role", "createdAt"]
            },
            Error: {
                type: "object",
                properties: errorSchemas
            }
        },
    }
};