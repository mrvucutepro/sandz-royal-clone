'use client';
import ContentPage from '@/components/Home/components/ContentPage';
import LoginForm from '@/components/Home/components/LoginForm';
import MobileScreen from '@/components/MobileComponent';
import { useScreen } from '@/lib/hooks/useScreen';
export default function Home({}) {
  const isMd = useScreen('md');
  const isLg = useScreen('lg');

  return (
    <>
        {isLg && <ContentPage />}
        {!isLg && <MobileScreen />}
    </>
  );
}
