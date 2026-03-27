import axios from "axios";
import { useEffect, useState } from "react";
import VoteControll from "./VoteControll";

const ArticleView = ({ article_id }) => {
  const [article, setArticle] = useState("null");
  const [votes, setVotes] = useState(0);
  useEffect(() => {
    axios.get(`/api/articles/${article_id}`).then(({ data }) => {
      setArticle(data.article);
    });
  }, [article_id]);
  useEffect(() => {
    if (article) {
      setVotes(article.votes);
    }
  }, [article]);
  const {
    title,
    author,
    topic,
    created_at,
    comment_count,
    article_img_url,
    body,
  } = article;

  return (
    <div className="mt-6 animate-rise bg-white/[0.84] border border-[rgba(17,34,48,0.12)] rounded-2xl p-6 shadow-[0_12px_32px_rgba(15,35,53,0.12)]">
      <h3 className="text-[#0a7f78] text-[0.78rem] font-bold uppercase tracking-[0.1em] mb-2 capitalize">
        {topic}
      </h3>
      <h1 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-snug text-[#0f3b5f] mb-3">
        {title}
      </h1>
      <h2 className="text-base font-semibold text-[#4d5d69] mb-1">{author}</h2>
      <h3 className="text-sm text-[#4d5d69] mb-1">{created_at}</h3>
      <h3 className="text-sm text-[#4d5d69] mb-3">{votes} votes</h3>
      <VoteControll votes={votes} setVotes={setVotes} voted_id={article_id} />
      <h3 className="text-sm text-[#4d5d69] mt-3 mb-4">
        {comment_count} comments
      </h3>
      <img
        src={article_img_url}
        alt={`img for article ${article_id}`}
        className="w-full rounded-xl my-5 object-cover max-h-96"
      />
      <p className="text-[#112230] leading-relaxed">{body}</p>
    </div>
  );
};
export default ArticleView;
