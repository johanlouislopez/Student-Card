import "./globals.css";

export const metadata = {
  title: "Student Card",
  description: "Simple Next.js Student Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
