import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food API",
      version: "1.0.0",
      description: "Food App Backend API Documentation"
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Local server"
      },
      {
        url: "https://food-api-production-3f1b.up.railway.app",
        description: "Production server"
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        BearerAuth: []
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
