import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen">
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 12% 14%, rgba(10,127,120,0.18) 0, rgba(10,127,120,0) 44%), radial-gradient(circle at 84% 0%, rgba(187,122,19,0.22) 0, rgba(187,122,19,0) 48%), linear-gradient(180deg, #fffef9 0%, #f7f3eb 100%)",
        }}
      />
      <Nav />
      <div className="w-[min(1100px,92vw)] mx-auto">
        <Header />
        <main className="pb-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
