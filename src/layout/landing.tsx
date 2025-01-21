import AboutUs from "@pages/landing/about-us";
import Banner from "@pages/landing/banner";
import CustomerOpinion from "@pages/landing/customer-opinion";
import ExampleProject from "@pages/landing/example-project";
import Footer from "@pages/landing/footer";
import Header from "@pages/landing/header";
import InfiniteScoll from "@pages/landing/infinite-scroll";
import Offers from "@pages/landing/offers";
import Service from "@pages/landing/service";

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
