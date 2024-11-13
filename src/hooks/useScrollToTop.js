import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useScrollToTop() {
  const navigate = useNavigate();

  const scrollToTop = useCallback(
    (to, event) => {
      if (event) {
        event.preventDefault();
      }
      window.scrollTo(0, 0);
      navigate(to);
    },
    [navigate]
  );

  return scrollToTop;
}
