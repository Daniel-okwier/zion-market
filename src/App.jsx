import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-zionGray text-gray-800">
      <Navbar />

      <main className="pt-28">
        <Home />
      </main>
    </div>
  );
}
