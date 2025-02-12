import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbat from "../components/layout-component/LeftNavbat";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-11/12 mx-auto pt-4">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="col-span-3"><LeftNavbat></LeftNavbat></aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
