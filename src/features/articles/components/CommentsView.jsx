import { useEffect, useState } from "react";
import axios from "axios";
import CommentCard from "./CommentCard.jsx";

const CommentsView = ({ article_id }) => {
  const [comments, setComments] = useState([
    { comment_id: 1 },
    { comment_id: 2 },
  ]);
  useEffect(() => {
    axios
      .get(`/api/articles/12/comments`)
      .then(({ data }) => {
        return data;
      })
      .then(({ comments }) => {
        setComments(comments);
      });
  }, []);
  return (
    <section className="mt-8">
      <h2 className="text-[1.6rem] font-bold text-[#0f3b5f] mb-4">Comments</h2>
      <ul className="flex flex-col gap-3">
        {comments &&
          comments.map((comment, index) => {
            return <CommentCard key={index} comment={comment} />;
          })}
      </ul>
    </section>
  );
};
export default CommentsView;
