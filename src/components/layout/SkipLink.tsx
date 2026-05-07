export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-md focus:bg-bg focus:px-4 focus:py-3"
    >
      Skip to main content
    </a>
  );
}