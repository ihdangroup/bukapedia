import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Layout>
      <Home />
      <ToastContainer />
    </Layout>
  );
}
export default App;
