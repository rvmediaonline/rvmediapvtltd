import { useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { router } from "./routes";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import "../styles/fonts.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <RouterProvider router={router} />
      <ScrollToTop />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(10,10,30,0.95)",
            border: "1px solid rgba(124,58,237,0.3)",
            color: "white",
            fontFamily: "'Inter', sans-serif",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </>
  );
}
