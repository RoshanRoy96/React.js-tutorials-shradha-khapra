import "./App.css";
import { Title, Multiply } from "./Title";
import Description from "./Description";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";

function App() {
  return (
    <>
      <MsgBox userName= "Roshan" textColor="red"/>
      <ProductTab/>
    </>
  );
}

export default App;
