import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import NewsItem from "../../components/newsItem/NewsItem";
import "./newspage.css";
function Newspage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5a67c3ec96c24dd3b5c6430f2c116267&page=${page}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setLoading(false);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="news-container">
        {articles.map((article) => {
          return (
            <div key={article.url}>
              <NewsItem />
            </div>
          );
        })}
        {/* {articles.forEach((article)=>{

        })} */}
      </div>
    </div>
  );
}

export default Newspage;
