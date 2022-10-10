import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bucket from "./pages/bucket";
import NotFound from "./pages/notfound";
import Resort from "./pages/resort";
import Resorts from "./pages/resorts";
import "./app.css";
import Header from "./layouts/header";
import BucketProvider from "./store/bucket";

const App: React.FC = () => {
  return (
    <BucketProvider>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Resorts />} />
            <Route path="resort">
              <Route path=":resortsID" element={<Resort />} />
            </Route>
            <Route path="/bucket" element={<Bucket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </BucketProvider>
  );
};

export default App;
