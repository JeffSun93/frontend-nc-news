import useUser from "../features/user/useUser";
const Header = () => {
  const { currentUser, setCurrentUser } = useUser();
  const logUser = (user) => {
    if (user) {
      setCurrentUser(null);
    } else {
      setCurrentUser("jeff");
    }
  };

  return (
    <header className="pt-10 pb-6 animate-rise">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#0a7f78] tracking-[0.1em] text-[0.78rem] font-bold uppercase mb-1">
            NC News
          </p>
          <p className="text-[#4d5d69] text-sm">
            {currentUser ? `Logged in as ${currentUser}` : "Not logged in"}
          </p>
        </div>
        <button
          onClick={() => {
            logUser(currentUser);
          }}
          className="text-sm font-semibold text-[#0a7f78] hover:underline transition-colors duration-200"
        >
          {currentUser ? "Sign out" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default Header;
