
import './styles/globals.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode; 
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Your Website Title</title>
      </head>
      <body className="bg-gray-100 text-gray-800"> {/* Tailwind CSS classes */}
        <header>
          <nav>
            
          </nav>
        </header>
        <main>{children}</main> {/* Main content yahan dikhai dega */}
        <footer>
          {/* Footer ka content yahan likhen */}
        </footer>
      </body>
    </html>
  );
};

export default Layout;
