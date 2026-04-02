import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticleView from "../components/ArticleView.jsx";
import CommentsView from "../../comments/components/CommentsView.jsx";

const Article = () => {
  const { article_id } = useParams();
  const [commentDelta, setCommentDelta] = useState(0);

  return (
    <>
      <section>
        <ArticleView article_id={article_id} commentDelta={commentDelta} />
      </section>
      <section>
        <CommentsView
          article_id={article_id}
          onCommentAdded={() => setCommentDelta((d) => d + 1)}
          onCommentDeleted={() => setCommentDelta((d) => d - 1)}
        />
      </section>
    </>
  );
};

export default Article;
