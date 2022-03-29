import app from "./app.mjs";

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Server is running");
});