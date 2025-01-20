import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const hideElfsightLink = () => {
    const link = document.querySelector(
      'a[href*="elfsight.com/google-reviews-widget"]'
    );
    if (link) {
      link.style.display = "none";
    }
  };

  const observer = new MutationObserver(() => {
    hideElfsightLink();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return (
    <div
      id="reviews"
      className="relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-10 text-center">
          Avaliações
        </h2>
        <div
          className="elfsight-app-5b5739a0-bcaa-4fd3-981f-acdca130cae6"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
