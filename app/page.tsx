import Navbar from "@/app/Component/Navbar/Navbar";
import Information from "./Component/Information/Information";
import Card from "./Component/Card/Card";
import Bigcard from "./Component/Bigcard/Bigcard";
import Services from "./Component/Services/Services";
import Footer from "./Component/Footer/Footer";

export default function Home() {
  return (
    <div className="main flex flex-col h-screen ">
      <div className="navigation sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="Info flex-1 overflow-y-auto no-scrollbar">
        <Information />
        <Card />
        <Bigcard />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
