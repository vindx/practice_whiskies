const express = require("express");
const path = require("path");
const whiskies = require("./data/whiskies");

const app = express();

app.use(express.json({ extended: true }));

// get all whiskies
app.use("/api/getWhiskies", async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "data", "whiskies.json"));
  } catch (e) {
    res.status(500).json({
      msg: "Something went wrong. Please try again later."
    });
  }
});

// get whiskey by title
app.use("/api/getWhiskey", async (req, res) => {
  try {
    const { title } = req.body;
    const whiskey = await Array.from(whiskies).find(
      whiskey => whiskey.title.toLowerCase() === title
    );
    if (!whiskey) {
      return res
        .status(404)
        .json({ msg: `Whiskey "${title}" didn't found :(` });
    }
    res.json(whiskey);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
});

// get all articles
app.use("/api/getArticles", async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "data", "articles.json"));
  } catch (e) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
});

// get colors schema
app.use("/api/getColors", async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "data", "colors.json"));
  } catch (e) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started at port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server ERROR!", e.message);
    process.exit(1);
  }
};

start();
