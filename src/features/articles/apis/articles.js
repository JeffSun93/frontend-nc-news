import axios from "axios";

export const voteArticle = async (article_id, vote) => {
  const { data } = await axios.patch(`/api/articles/${article_id}`, {
    inc_votes: vote,
  });
  return data.article;
};

export const getArticles = async (topic) => {
  const { data } = await axios.get("/api/articles", {
    params: topic ? { topic } : {},
  });
  return data.articles;
};
