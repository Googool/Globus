const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Static
app.use(express.static("public"))
app.use("/Stylesheets", express.static(__dirname + "Public/Stylesheets"))
app.use("/Assets", express.static(__dirname + "Public/Assets"))
app.use("/Scripts", express.static(__dirname + "Public/Scripts"))
app.use("/Partials", express.static(__dirname + "Public/Partials"))

// View Engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./Public/Views"))

// Routes
app.get("/", (req, res) => {
    res.render("index")
})

// Listener
app.listen(port, () => console.log(`App running on http://localhost:${port}`))