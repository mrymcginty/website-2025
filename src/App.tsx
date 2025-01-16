import "./App.scss";
import { Seperator, Header, Experience, Ticks, Footer } from "./components";

function App() {
  return (
    <div className="p-8">
      <Header />
      <Seperator delay={1.5} />
      <Experience />
      <Seperator />
      <Ticks />
      <Seperator />
      <Footer />
    </div>
  );
}

export default App;
