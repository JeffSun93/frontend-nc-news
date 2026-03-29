import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard.jsx";
import ArticleCardSkeleton from "./ArticleCardSkeleton.jsx";
import { getArticles } from "../apis/articles.js";

const SKELETON_COUNT = 6;

const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const articles = await getArticles(topic);
        setArticles(articles);
      } catch (err) {
        setError("Failed to load articles. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [topic]);

  return (
    <>
      <h2 className="text-[1.6rem] font-bold text-[#0f3b5f] mb-6 capitalize">
        {topic ? `${topic} articles` : "All articles"}
      </h2>
      {error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <ArticleCardSkeleton key={i} />
              ))
            : articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
              ))}
        </ul>
      )}
    </>
  );
};

export default ArticlesView;
