import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
export const metadata = {
    title: "IMDB Clone",
    description: "This is IMBD clone website.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <Providers>
                    {/* Header */}
                    <Header />
                    {/* Navbar */}
                    <Navbar />
                    {/* SearchBox */}
                    {children}
                </Providers>
            </body>
        </html>
    );
}
