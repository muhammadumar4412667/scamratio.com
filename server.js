const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "ScamRatio backend is working!"
    });
});

app.listen(PORT, () => {
    console.log(`ScamRatio server running at http://localhost:${PORT}`);
});
