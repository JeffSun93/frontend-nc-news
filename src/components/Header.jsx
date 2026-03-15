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
    <header
      className="bg-gradient-to-r from-blue-100 to-blue-200 
  border-2 border-blue-700 
  rounded-xl 
  p-4 md:px-8 md:py-6 
  shadow-md 
  hover:from-blue-200 hover:to-blue-300 
  active:translate-y-0.5 active:shadow-sm
  transition-all duration-200"
    >
      <p>{currentUser}</p>
      <button
        onClick={() => {
          logUser(currentUser);
        }}
      >
        {currentUser ? "signout" : "login"}
      </button>
    </header>
  );
};

export default Header;
