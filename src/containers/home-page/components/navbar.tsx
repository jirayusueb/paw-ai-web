import Image from 'next/image';
import LOGO from '@/assets/media/svg/logo.svg';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="container mx-auto flex h-[80px] w-full justify-between">
      <ul className="flex items-center gap-4">
        <li className="w-[120px] text-center">
          <Button variant="link">Feature</Button>
        </li>
        <li className="w-[120px] text-center">
          <Button variant="link">Pricing</Button>
        </li>
      </ul>
      <Image alt="logo" src={LOGO} />
      <ul className="flex items-center gap-4">
        <li className="w-[120px] text-center">
          <Button className="w-full" variant="link">
            Login
          </Button>
        </li>
        <li className="w-[120px] w-f text-center">
          <Button className="w-full" variant="outline">
            Sign up
          </Button>
        </li>
      </ul>
    </nav>
  );
}
