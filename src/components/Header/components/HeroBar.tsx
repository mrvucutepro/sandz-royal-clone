'use client';

import Link from 'next/link';
import React from 'react';
import LoginForm from '../../Home/components/LoginFormDialog';
import { useScreen } from '@/lib/hooks/useScreen';

interface ITitleItem {
  title: string;
  icon: JSX.Element;
}

export default function HeroBar() {
  const isMd = useScreen('md');
  const isXl = useScreen('xl');

  const titles: ITitleItem[] = [
    {
      title: '입금신청',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      ),
    },
    {
      title: '출금신청',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      ),
    },
    {
      title: '머니이동신청',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
    },
    {
      title: '체험머니신청',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ),
    },
    {
      title: '',
      icon: <div></div>,
    },
  ];

  return (
    <div>
      <div className="sticky top-0 w-full">
        <div className=" h-24 w-full flex items-center justify-around bg-[#111316]/50 px-40 relative z-10">
          {titles.map((value, index) => (
            <a
              key={index}
              href="/gamezone"
              className="text-[#fff] text-2xl font-bold flex-1 text-center transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-2">
                <div className="icon-wrapper">{value.icon}</div>
                {value.title}
              </div>
              <style jsx>{`
                a:hover {
                  text-shadow: 0 0 20px rgba(255, 255, 255, 1),
                    0 0 30px rgba(255, 255, 255, 1);
                }
              `}</style>
            </a>
          ))}
          <div className="flex items-center absolute top-0 right-40">
            <Link href="/">
              <img
                className="h-[96px] w-[350px] object-cover"
                src="/assets/image/game.png"
                alt={'image'}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
