import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";

const App = () => {
    return (
        <div>
            {/* <button onClick={() => toast.success("Congrat")}>Click me</button> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<DetailPage />} />
            </Routes>
        </div>
    );
};

export default App;
