import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
