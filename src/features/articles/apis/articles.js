import axios from "axios";

export const voteArticle = async (article_id, vote) => {
  try {
    const { data } = await axios.patch(`/api/articles/${article_id}`, {
      inc_votes: vote,
    });
    return data.article;
  } catch (err) {
    console.error(err);
  }
};
