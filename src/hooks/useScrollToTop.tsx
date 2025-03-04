import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A hook that scrolls to the top of the page when the route changes,
 * unless the URL contains a hash fragment (anchor link).
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, we don't scroll to top
    // because we want the browser to scroll to the element with that id
    if (hash) return;
    
    // Otherwise, scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname, hash]);
};
