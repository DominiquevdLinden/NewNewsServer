const db = require("./Articles.js");
const { request, response } = require("express");
const express = require("express");

const app = express();

const port = 4000;

app.get("/articles/:categoryId/articles", (request, response) => {
  const categoryId = request.params.categoryId;
  const articles = db.articles.filter((art) => art.categoryId == categoryId);
  response.send(articles);
});

app.get("/articles/:articleId/comments", (request, response) => {
  const articleId = request.params.articleId;
  const comments = db.comments.filter((art) => art.articleId == articleId);
  response.send(comments);
});

app.get("/articles/:articleId", (request, response) => {
  const articleId = request.params.articleId;
  const article = db.articles.find((art) => art.id == articleId);
  response.send(article);
});

app.get("/articles", (request, response) => {
  response.send(db.articles);
});

app.listen(port);
