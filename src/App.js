import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Komponentit/navbar";
import { Kauppa } from "./Sivut/Kauppa/kauppa";
import { Ostoskori } from "./Sivut/Ostoskori/ostoskori";
import { KauppaContextProvider } from "./context/kauppa-context";

function App() {
    return (
        <div className="App">
            <KauppaContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Kauppa />}/>
                        <Route path="/ostoskori" element={<Ostoskori />}/>
                 </Routes>
                </Router>
            </KauppaContextProvider>
        </div>
    );
}

export default App;