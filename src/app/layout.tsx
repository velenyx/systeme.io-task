import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "~/shared/lib/utils";
import { Header } from "~/components/header";
import { ThemeProvider } from "~/app/providers/theme";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Systeme.io Table ⚡",
  description: "A customizable table component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between pt-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
