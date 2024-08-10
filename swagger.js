const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'REST API WITH TOKEN',
        description: 'REST API with Express and Firestore, Token'
    },
    //host : "localhost:5500",
    host : "restapi-nuh2.onrender.com",
    schemes : ["https"],
    basePath : "/api",
    components: {
      securitySchemes:{
        bearerAuth: {
          type: 'apiKey',
          name: 'Token', 
          in: 'header',
      },
      }
  },    
};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc)