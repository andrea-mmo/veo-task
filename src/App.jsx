import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="content">
        <Grid />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
