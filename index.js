const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("🚀 Hello from My New OpenShift App! its also updated to new version (v1.2).");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
