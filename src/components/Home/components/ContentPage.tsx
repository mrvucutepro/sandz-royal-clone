import AnotherCaseComponent from '@/components/AnotherCase';
import MenuComponent from '@/components/AnotherMenu/components/MenuComponent';
import CustomerCenter from '@/components/CustomerCenter/components';
import Footer from '@/components/Footter/components';
import Game from '@/components/Game';
import Header from '@/components/Header';
import React from 'react';
import LoginForm from './LoginForm';

export default function ContentPage() {
  return (
    <div>
      <Header />
      <Game />
      <LoginForm />
      <AnotherCaseComponent />
      <MenuComponent />
      <CustomerCenter />
      <Footer />
    </div>
  );
}
