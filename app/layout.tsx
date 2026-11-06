import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "동부중량 | 중량물 운송·산업설비 이전 전문", template: "%s | 동부중량" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ko_KR", url: site.url, siteName: site.name, title: "동부중량 | 중량물 운송·산업설비 이전 전문", description: site.description, images: ["/images/hero-heavy-transport.webp"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: site.name, alternateName: site.englishName, url: site.url, description: site.description, ...(site.telephone ? { telephone: site.telephone } : {}), ...(site.address ? { address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "KR" } } : {}) };
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>;
}
