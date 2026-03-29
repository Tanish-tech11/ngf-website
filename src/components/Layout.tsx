import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children, fullBleed = false }: { children: React.ReactNode; fullBleed?: boolean }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className={fullBleed ? "" : "pt-20"}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
