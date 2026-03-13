import localFont from "next/font/local";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";

const monaSans = localFont({
  src: [
    // -------- Regular Width --------
    {
      path: "../public/font/mona-sans/Mona-Sans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/mona-sans/Mona-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/mona-sans/Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/mona-sans/Mona-Sans-Black.ttf",
      weight: "900",
      style: "normal",
    },

    // -------- Condensed / Narrow --------
    {
      path: "../public/font/mona-sans/Mona-Sans-LightNarrow.ttf",
      weight: "300",
      style: "normal",
      fontStretch: "75%",
    },
    {
      path: "../public/font/mona-sans/Mona-Sans-RegularNarrow.ttf",
      weight: "400",
      style: "normal",
      fontStretch: "75%",
    },
    {
      path: "../public/font/mona-sans/Mona-Sans-BoldNarrow.ttf",
      weight: "700",
      style: "normal",
      fontStretch: "75%",
    },
    {
      path: "../public/font/mona-sans/Mona-Sans-BlackNarrow.ttf",
      weight: "900",
      style: "normal",
      fontStretch: "75%",
    },
  ],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata = {
  title: "Dates Importer & Wholesale Trader in India | Bulk Supply",
  description: "Mr. Dates is a leading direct importer and bulk trader of premium dates in India, supplying Ajwa, Medjool, and other high-quality varieties to wholesalers and distributors with reliable PAN-India delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5RWCX3MN');
          `}
        </Script>

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17982393731"
          strategy="afterInteractive"
        />

        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17982393731');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vuy9diynyw");
          `}
        </Script>
      </head>
      <body className={`${monaSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RWCX3MN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
