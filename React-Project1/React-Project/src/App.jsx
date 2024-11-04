import "./App.css";
import Form from "./Form";
import Images from "./Images";
import Navbar from "./Navbar";
import Personal from "./Personal";

function App() {
  return (
    <>
      {/* image */}
      <Images />

      {/* navbar */}
      <Navbar />

      {/* form */}
      <Form />

      {/* personal info */}
      <Personal />
    </>
  );
}

export default App;
