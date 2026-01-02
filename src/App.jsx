import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-zionGray text-gray-800">
      {/* Floating Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-28">
        {/* HERO SECTION WILL GO HERE */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-zionGreen mb-6">
            Fresh. Local. Global.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-600">
            Discover high-quality groceries, international foods, and everyday essentials —
            all in one modern marketplace.
          </p>
        </section>
      </main>
    </div>
  );
}
