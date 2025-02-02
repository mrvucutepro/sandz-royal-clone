import { FormLoginType } from '@/components/Home/components/LoginForm';
import { BRAND_ID } from '@/lib/constants';
import { customFetch } from '@/lib/helper/customFetch';

// Login Function
export const handleLogin = async (data: FormLoginType) => {
  return await customFetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username: data.username,
      password: data.password,
      brand_id: BRAND_ID,
    }),
    headers: {
      "Authorization":process.env.NEXT_PUBLIC_AUTHORIZE_TOKEN as string,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
    },
  });
};
