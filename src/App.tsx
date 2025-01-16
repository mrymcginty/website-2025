import "./App.scss";
import { Seperator, Header, Experience, Ticks, Footer } from "./components";

function App() {
  return (
    <div className="p-8">
      <Header />
      <Seperator />
      <Experience />
      <Ticks />
      <Footer />
    </div>
  );
}

export default App;
