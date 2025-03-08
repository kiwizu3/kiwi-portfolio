import Navbar from '../components/Navbar';
import '../global.css';
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            </head>
            <body>
            <Navbar />
                {children}
            </body>
        </html>
    );
}
