// src/components/Common/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mỗi khi pathname thay đổi thì scroll lên đầu
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
