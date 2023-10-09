import "./App.css";
import Banner from "./component/Banner";
import CustomContainer from "./component/CustomContainer";
import IpCollector from "./component/IpCollector";
import LatencyMeasure from "./component/LatencyMeasure";

function App() {
  return (
    <div className="App bg-body min-h-[100vh]">
      <Banner data="Sextant" />
      <div className="text-left m-3 pl-3 pt-5 font-semibold text-amber-950 text-xl sm:text-xl md:text-3xl">
        Your Ip address
      </div>
      <div className="flex sm:flex-row flex-col gap-2 justify-evenly items-center m-10">
        <CustomContainer>
          <IpCollector ipType="ipv6" />
        </CustomContainer>
        <CustomContainer>
          <IpCollector ipType="ipv4" />
        </CustomContainer>
        <CustomContainer>
          <LatencyMeasure />
        </CustomContainer>
      </div>
    </div>
  );
}

export default App;
