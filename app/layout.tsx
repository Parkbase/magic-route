import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Magic Route",
  description: "LAX to Disneyland travel planning guide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <header
          style={{
            background: "#2563eb",
            color: "white",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Magic Route
          </Link>

          <nav style={{ display: "flex", gap: "18px", fontWeight: "normal" }}>
            <Link href="/guide/lax-to-disneyland" style={{ color: "white" }}>
              Transport Guide
            </Link>

            <Link href="/best-way-lax-to-disneyland" style={{ color: "white" }}>
              Best Route
            </Link>

            <Link href="/uber-vs-shuttle-lax-disneyland" style={{ color: "white" }}>
              Uber vs Shuttle
            </Link>

            <Link href="/hotels-near-disneyland" style={{ color: "white" }}>
              Hotels
            </Link>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main
          style={{
            maxWidth: "1100px",
            margin: "auto",
            padding: "40px 20px",
          }}
        >
          {children}
        </main>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "60px",
            padding: "40px",
            textAlign: "center",
            background: "#1e293b",
            color: "white",
          }}
        >
          Magic Route • LAX to Disneyland Travel Guide
        </footer>

      </body>
    </html>
  );
}