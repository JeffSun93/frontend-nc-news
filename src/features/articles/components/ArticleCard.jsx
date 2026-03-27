import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { article } = props;
  const { title, author, topic, article_id } = article;
  return (
    <li className="bg-white/[0.84] border border-[rgba(17,34,48,0.12)] rounded-2xl p-4 shadow-[0_12px_32px_rgba(15,35,53,0.12)] animate-rise">
      <Link to={`/articles/${article_id}`} className="block">
        <p className="text-[#0a7f78] text-[0.78rem] font-bold uppercase tracking-[0.1em] mb-1 capitalize">
          {topic}
        </p>
        <p className="font-bold text-[#0f3b5f] text-lg leading-snug mb-2">
          {title}
        </p>
        <p className="text-[#4d5d69] text-sm">by {author}</p>
      </Link>
    </li>
  );
};
export default ArticleCard;
