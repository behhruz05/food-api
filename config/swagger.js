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
      { url: "http://localhost:5000" },
      { url: "https://food-api-production-88a1.up.railway.app" }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

export default swaggerJSDoc(swaggerOptions);
