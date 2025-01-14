    import http from "http";
    // import { console } from "inspector";

    const port = process.env.PORT || 3000;

    const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.appendHeader("Access-Control-Allow-Headers", "Content-Type")
    res.appendHeader("Access-Control-Allow-Methods", "PUT")

    if (req.method === "GET") {
        switch (req.url) {
        case "/test":
            res.end("This is the testpath");
            break;
        case "/hei":
        case "/hello":
            res.end("Hello path!");
            break;
        case "/about":
            res.end("Hello about!");
            break;
        case "/json":
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ first: "object" }));
            break;
        default:
            res.end("Hello world!");
        }
    } else if (req.method === "POST") {
        let body = "";
        req.on("data",(chunk)=> {
            body += chunk;
            console.log(chunk);
        })

        req.on("end", ()=> {
            res.end("data processed");
        })


    } else if (req.method === "PUT") {
        res.end("From put request")
    } else {
        res.end("Something went horribly wrong");
    }
    });

    server.listen(port, () => {
    console.log("Server has started on port: ", port);
    });
