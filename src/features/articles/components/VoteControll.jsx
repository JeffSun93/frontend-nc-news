import axios from "axios";

const VoteControll = ({ votes, setVotes, voted_id }) => {
  const handleVote = () => {
    setVotes((vote) => vote + 1);
    axios.patch(`/api/articles/${voted_id}`, { inc_votes: 1 }).then((data) => {
      console.log(data);
    });
  };
  return (
    <button
      onClick={handleVote}
      className="inline-flex items-center gap-1 rounded-full border border-[rgba(17,34,48,0.12)] bg-white/[0.84] px-3 py-1.5 text-sm font-semibold text-[#0f3b5f] shadow-sm transition-colors duration-200 hover:bg-[rgba(10,127,120,0.08)]"
    >
      👍
    </button>
  );
};
export default VoteControll;
