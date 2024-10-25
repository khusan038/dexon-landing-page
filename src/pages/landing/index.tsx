import Banner from "./components/banner";
import Header from "./components/header";

import Service from "./components/service";
import Footer from "./components/footer";
import Offers from "./components/offers";
import AboutUs from "./components/about-us";
import CustomerOpinion from "./components/customer-opinion";
import InfiniteScoll from "./components/infinite-scroll";
import ExampleProject from "./components/example-project";

function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <InfiniteScoll />
      <Service />
      <Offers />
      <AboutUs />
      <ExampleProject />
      <CustomerOpinion />
      <Footer />
    </>
  );
}

export default LandingPage;
