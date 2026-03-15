import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigator = useNavigate();
  return (
    <nav
      className="bg-gradient-to-r from-blue-100 to-blue-200 
  border-2 border-blue-700 
  rounded-xl 
  p-4 md:px-8 md:py-6 
  shadow-md 
  hover:from-blue-200 hover:to-blue-300 
  active:translate-y-0.5 active:shadow-sm
  transition-all duration-200"
    >
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Topics</li>
        <li>
          <button
            className="
  bg-blue-600        
  text-white         
  font-medium         
  py-2 px-4           
  rounded-lg           
  shadow-md            
  hover:bg-blue-700    
  focus:outline-none 
  focus:ring-2 
  focus:ring-blue-400 
  focus:ring-offset-2
  transition-colors 
  duration-200
  dark:bg-blue-500    
  dark:hover:bg-blue-600
"
            onClick={() => {
              navigator(-1);
            }}
          >
            Back
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
