import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const fallbackTopics = ["coding", "football", "cooking"];

const Nav = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState(fallbackTopics);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const topicsMenuRef = useRef(null);

  useEffect(() => {
    axios
      .get("/api/topics")
      .then(({ data }) => {
        const slugs = data.topics.map(({ slug }) => slug);
        setTopics(slugs);
      })
      .catch(() => {
        setTopics(fallbackTopics);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        topicsMenuRef.current &&
        !topicsMenuRef.current.contains(event.target)
      ) {
        setIsTopicsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f5ef]/90 backdrop-blur-[8px] border-b border-[rgba(17,34,48,0.12)]">
      <ul className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-[5vw] py-[0.95rem]">
        <li className="justify-self-start">
          <Link
            className="font-semibold text-[#112230] hover:text-[#0a7f78] transition-colors duration-200"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="relative justify-self-center" ref={topicsMenuRef}>
          <button
            className="font-semibold text-[#112230] hover:text-[#0a7f78] transition-colors duration-200"
            onClick={() => {
              setIsTopicsOpen((currentValue) => !currentValue);
            }}
            type="button"
          >
            Topics
          </button>
          {isTopicsOpen ? (
            <ul className="absolute left-1/2 z-10 mt-2 w-44 -translate-x-1/2 rounded-xl border border-[rgba(17,34,48,0.12)] bg-white/[0.84] p-2 shadow-[0_12px_32px_rgba(15,35,53,0.12)]">
              <li>
                <Link
                  className="block rounded-lg px-3 py-2 text-sm text-[#112230] transition-colors duration-150 hover:bg-[rgba(10,127,120,0.08)]"
                  to="/articles"
                  onClick={() => {
                    setIsTopicsOpen(false);
                  }}
                >
                  All topics
                </Link>
              </li>
              {topics.map((topic) => {
                return (
                  <li key={topic}>
                    <Link
                      className="block rounded-lg px-3 py-2 text-sm capitalize text-[#112230] transition-colors duration-150 hover:bg-[rgba(10,127,120,0.08)]"
                      to={`/articles?topic=${topic}`}
                      onClick={() => {
                        setIsTopicsOpen(false);
                      }}
                    >
                      {topic}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </li>
        <li className="justify-self-end">
          <button
            className="font-semibold text-[#112230] hover:text-[#0a7f78] transition-colors duration-200"
            onClick={() => {
              navigate(-1);
            }}
            type="button"
          >
            Back
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
