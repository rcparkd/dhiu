import "./globals.css";

export const metadata = {
  title: "Darul Huda Islamic University | DHIU",
  description: "Darul Huda Islamic University, Chemmad, Kerala — Ta'leem, Tarbiyah and Da'wa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
