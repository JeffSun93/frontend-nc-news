import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="grid grid-rows-[min-content_auto_auto] grid-cols-1 max-w-7xl mx-auto p-8">
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
