import React, { useEffect, useState } from "react";
import * as axios from "axios";
import Article from "../../components/Article/Article";

export default () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/getArticles");
        setArticles(response.data);
      } catch (e) {
        setError(e.response.data.msg || "Server's troubles :(");
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);

  if (loading)
    return <div style={{ textAlign: "center" }}>LOADING ARTICLES...</div>;
  if (!articles) return <div style={{ textAlign: "center" }}>{error}</div>;
  return (
    <>
      {articles.map(article => (
        <Article key={article.url} article={article} />
      ))}
    </>
  );
};
