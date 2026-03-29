export const VoteControll = ({ onVote, className, currentVote }) => {
  return (
    <button
      onClick={onVote}
      className={`inline-flex items-center gap-1.5 bg-[rgba(10,127,120,0.1)] text-[#0a7f78] px-3 py-1.5 rounded-lg text-xs font-semibold flex-1 justify-center ${className}`}
    >
      👍 {currentVote}
    </button>
  );
};
