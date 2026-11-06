import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function PublicLayout() {
  return (
    <div className="public-shell flex min-h-screen flex-col bg-ivory">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
