import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useScreen } from '@/lib/hooks/useScreen';
import { useAuth } from '@/lib/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ProfileUser } from '@/components/Home/components/ProfileUser';


export const LogoutComponent = () => {
  const { logout } = useAuth();
  return (
    <button type='button'  onClick={logout} className="text-[#c79f5f] hover:text-[#f5d39d] hover:border-[#f5d39d] text-lg font-extrabold rounded-full border-4 px-6 py-1 border-[#c79f5f]">
      Log Out
    </button>
  )
}

export default function NavBar() {
  const isXl = useScreen('xl'); 
  const { user, onOpenLogin } = useAuth();
  const router = useRouter();
  const { logout } = useAuth();

  const [typeScreen, setTypeScreen] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    setTypeScreen(!isXl ? 'mobile' : 'desktop');
  }, [isXl]);

  const menu = [
    "GAMEZONE",
    "입금신청",
    "출금신청",
    "머니이동신청",
    "체험머니신청",
    "Log In",
  ]
  const handleScrollToPosition = () => {
    window.scrollTo({
      top: 550, 
      behavior: "smooth", 
    });
  }

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="h-20 w-full flex items-center justify-between bg-[#111316] px-6">
        {typeScreen === 'desktop' && (
            <>
            <button onClick={handleScrollToPosition} className="text-[#c79f5f] hover:text-[#f5d39d] hover:border-[#f5d39d] text-lg font-extrabold rounded-full border-4 px-6 py-1 border-[#c79f5f]">
              GAMEZONE
            </button>
            <Image src="/assets/image/logo_sandz.png" width={300} height={60} alt="Picture of main" />
            {user ? <LogoutComponent/> : 
              <Link href="/login" className="text-[#c79f5f] hover:text-[#f5d39d] hover:border-[#f5d39d] text-lg font-extrabold rounded-full border-4 px-6 py-1 border-[#c79f5f]">
                Log In
              </Link>
            }
            
          </>
        )}
        {typeScreen === 'mobile' && (
          <>
            <Image src="/assets/image/logo_sandz.png" width={300} height={60} alt="Picture of main" />
            <button
              className="text-[#c79f5f] text-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </>
        )}
      </div>
      

      {typeScreen === 'mobile' && isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#111316] shadow-md">
          <nav className="flex flex-col items-center py-4">
            {menu.map((value, index) => (
              <Link key={index} href="/gamezone" className="text-[#c79f5f] hover:text-[#edc584] text-lg font-extrabold py-2" onClick={() => setIsMenuOpen(false)}>
                {value}
              </Link>
            ))} 
          </nav>
        </div>
      )}
    </header>
  );
}
