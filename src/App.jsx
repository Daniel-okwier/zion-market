import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer"; // Make sure the path matches your file structure

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zionGray text-gray-800">
      {/* Navigation - Stays at top */}
      <Navbar />

      {/* Main Content - Flex-grow pushes the footer down if content is short */}
      <main className="flex-grow pt-28">
        <Home />
      </main>

      {/* Footer - The "Outlet" at the bottom */}
      <Footer />
    </div>
  );
}