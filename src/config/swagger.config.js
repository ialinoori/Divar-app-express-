const swaggerjsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

function swaggerConfig (app){
    const swaggerDocument = swaggerjsDoc({
        swaggerDefinition:{
            info:{
                title:"Divar-backend",
                description:"using express.js",
                version:"1.0.0"
            }
        },
        apis:[]
    })
    
   const swagger = swaggerUi.setup(swaggerDocument,{})
    app.use("/",swaggerUi.serve,swagger)

}


module.exports = swaggerConfig
