import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Pavithran E — Graphic Designer & Motion Graphics Video Editor',
  description:
    'Portfolio of Pavithran E — Graphic Designer & Motion Graphics Video Editor based in Tirupur, Tamil Nadu. Specializing in Adobe Photoshop, Illustrator, Premiere Pro, and After Effects.',
  keywords: 'graphic design, motion graphics, video editing, Tirupur, Tamil Nadu, Pavithran',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased noise">
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
