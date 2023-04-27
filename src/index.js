const express = require("express")
const cors = require('cors');// imporanto biblioteca cors 
const rateLimit = require("express-rate-limit");

const app = express();

corsOptions = {
    origin: '*'
}


const requestsLimiter = rateLimit({
    windowMs: 1 * 1000 * 60,
    max: 30
});


app.use(cors(corsOptions))
app.use(express.json())
app.use(requestsLimiter)

app.get("/", async (req, res) => {

    res.status(200).json({
        cod: "Ok",
        message: "Server is running!"
    });

})

app.get("/fakeResponseByQueryString", async (req, res) => {
    const queryParamsLength = Object.keys(req.query).length;
    if (queryParamsLength == 0) {
        res.status(400).json({
            cod: "Error",
            message: "Query params not found or invalid."
        })
        return;
    }
    res.status(200).json(req.query)

})

app.post("/fakeResponseByBody", async (req, res) => {
    const bodyParamsLength = Object.keys(req.body).length;
    if (bodyParamsLength == 0) {
        res.status(400).json({
            cod: "Error",
            message: "Body params not found or invalid."
        })
        return;
    }

    res.status(200).json(req.body)

})

app.get("/fakeResponseStatic", async (req, res) => {
    res.status(200).json({
        cod: "Ok",
        param1: "Tempor proident laboris aliqua commodo voluptate culpa culpa adipisicing culpa labore.",
        param2: 123,
        param3: ["In ullamco ea dolore nulla velit eu aliqua aute cillum.", "Ipsum irure nulla et pariatur aliqua excepteur.", "Excepteur sunt amet proident dolor do elit duis cillum aute excepteur proident magna exercitation reprehenderit."],
        param4: {
            text1: "Minim adipisicing ex consectetur est eiusmod non laborum nulla id nulla laborum eiusmod deserunt.",
            text2: "Aliqua consequat do sunt ullamco Lorem.",
            largeText1: "Laboris ipsum culpa nostrud ex non aute ex fugiat eu elit deserunt ipsum labore. Fugiat laborum esse eiusmod do fugiat eu labore est irure incididunt magna. Tempor fugiat nulla exercitation ex ullamco quis id consectetur commodo est in non. Culpa voluptate tempor aute nisi et amet ex eiusmod et occaecat aute fugiat consequat. Deserunt eu nostrud magna eiusmod consequat et. Occaecat adipisicing reprehenderit voluptate labore. In anim amet tempor ea non occaecat veniam voluptate.",
            largeText2: "Laboris quis eiusmod irure et. Elit magna officia ipsum mollit laboris excepteur minim velit. Dolor do irure culpa aliquip ut Lorem sit excepteur magna laboris magna. Eiusmod pariatur nulla tempor culpa eu amet esse occaecat. Velit tempor id officia laborum deserunt laboris amet."
        },
        param5: {
            base64encodeText1: "V2VsY29tZSB0byBmYWtlIGpzb24gcmVzcG9uc2Uh",
            base64encodeText2: "VGhpcyBpcyBhIHN0cmluZyBjb2RlZCBpbiBiYXNlNjQgdG8gdXNlIG9uIHBlcnNvbmFsIHByb2plY3RzIQ==",
        }
    })
})

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})