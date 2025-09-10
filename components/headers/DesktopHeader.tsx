import Link from 'next/link';
import { InfoOutlined } from '@mui/icons-material';
import AuthSection from './AuthSection';

const DesktopHeader = () => {
  return (
    <header className="hidden bg-white lg:block mb-5">
      <div className="mx-auto max-w-screen-xl px-4 py-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-gray-900">FlavorAI</h1>
          </Link>
          <div>
            <nav aria-label="Site Nav" className="ml-16">
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 font-semibold text-lg uppercase"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 font-semibold text-lg uppercase"
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <AuthSection />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DesktopHeader;
