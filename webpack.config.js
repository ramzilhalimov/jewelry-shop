const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    scriptType: "module",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./dist", // Папка для отображения содержимого сервера
    open: true, // Автоматически открывать в браузере
  },
};
