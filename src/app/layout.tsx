import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/layout/SiteShell";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteData } from "@/content/site";
import { withBasePath } from "@/lib/utils";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteData.displayName,
    template: `%s | ${siteData.displayName}`,
  },
  description:
    "Portfolio site for Jeanpaul Garcia, an NJIT student building useful AI tools and shipping them.",
  icons: {
    icon: withBasePath("/icon.svg"),
    shortcut: withBasePath("/icon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full bg-bg text-ink">
        <SiteShell>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SiteShell>
      </body>
    </html>
  );
}
