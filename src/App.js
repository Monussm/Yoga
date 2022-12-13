import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Body from "./Components/Body";
import Navbar from './Components/Navbar';
import Pregant from "./Components/Pregant";
import Excersie from "./Components/Excersie";
import Yoga from "./Components/Yoga";
import Join from "./Components/Join";
import Gallery from "./Components/Gallery";
import Traininb from "./Components/Traininb";
import Form from "./Components/Form";
function App() {
  return (
    <>
    <Navbar />
    <Body />
    <Pregant />
    <Excersie />
    <Yoga />
    <Join />
    <Gallery />
    <Traininb />
    <Form />
    </>
  );
}

export default App;
