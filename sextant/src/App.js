import "./App.css";
import Banner from "./component/Banner";
import CustomContainer from "./component/CustomContainer";
import IpCollector from "./component/IpCollector";

function App() {
  return (
    <div className="App bg-body min-h-[100vh]">
      <Banner data="Sextant" />
      <div className="text-left m-3 pl-3 font-semibold text-amber-950 text-3xl">
        Your Ip address
      </div>
      <CustomContainer>
        <IpCollector ipType="ipv6" />
      </CustomContainer>
      <CustomContainer>
        <IpCollector ipType="ipv4" />
      </CustomContainer>
    </div>
  );
}

export default App;
