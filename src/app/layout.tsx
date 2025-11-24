import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Andreas Hölzl | Physics Student',
  description: 'Physics M.Sc. student at LMU Munich. Portfolio and Resume.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <aside className="sidebar">
            <div className="profile-img-container">
              {/* Note: Using standard img tag for simplicity with static export if needed, but Image is better. 
                   However, for local images in public, we need to move them. */}
              <img src="/profile.png" alt="Andreas Hölzl" className="profile-img" />
            </div>
            <h1>Andreas Hölzl</h1>
            <p>Physics M.Sc. student at LMU Munich</p>
            <nav className="nav-links">
              <Link href="/cv" className="nav-btn">Curriculum Vitae</Link>
              <Link href="/lectures" className="nav-btn">Lecture Notes</Link>
              <Link href="/cheat-sheets" className="nav-btn">Cheat Sheets</Link>
              <Link href="/impressum" className="nav-btn">Impressum</Link>
            </nav>
          </aside>

          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
