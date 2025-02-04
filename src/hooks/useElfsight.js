import { useEffect } from "react";

const loadElfsightScript = () => {
  const script = document.createElement("script");
  script.src = "https://static.elfsight.com/platform/platform.js";
  script.async = true;
  document.body.appendChild(script);
};

const hideElfsightLink = () => {
  const link = document.querySelector(
    'a[href*="elfsight.com/google-reviews-widget"]'
  );
  if (link) {
    link.style.display = "none";
  }
};

export function useElfsight() {
  useEffect(() => {
    loadElfsightScript();

    const observer = new MutationObserver(hideElfsightLink);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
}
