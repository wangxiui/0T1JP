import Link from 'next/link';
import s from './Navbar.module.scss';

import Logo from 'components/icons/Logo';
import { useRouter } from 'next/router';
// import { useUser } from 'lib/useUser';
// import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Navbar = () => {
  const router = useRouter();
  // const supabaseClient = useSupabaseClient();
  // const { user } = useUser();

  return (
    <nav className={s.root}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <span className={s.logo} aria-label="Logo">
                <Logo />
              </span>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              <Link href="/">
                <span className={s.link}>Pricing</span>
              </Link>
              <Link href="/account">
                <span className={s.link}>Account</span>
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            {1 ? (
              <span
                className={s.link}
                onClick={async () => {
                  // await supabaseClient.auth.signOut();
                  // router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin">
                <span className={s.link}>Sign in</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
