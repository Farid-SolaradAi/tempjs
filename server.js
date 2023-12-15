const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
})

const S3 = new AWS.S3()

app.get("/", (req, res) => {
    res.send("Hello World!")
    }
)

app.get("/s3", (req, res) => {
    const params = {
        Bucket: `solarad-output`,
    }

    //get all filenames of the s3 bucket
    S3.listObjectsV2({Bucket: `solarad-output`}, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })

})


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || `localhost`;

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})
