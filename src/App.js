import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Main_raboti from "./Components/Main/Main_raboti";
import Mainbotom from "./Components/Main/Mainbotom";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Main_raboti/>
      <Mainbotom/>
      <Footer/>
    </div>
  );
}

export default App;