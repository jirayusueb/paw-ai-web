import Image from 'next/image';
import HOME_PAW_AI_LOGO from '@/assets/media/image/home-paw-ai-logo.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CTASection() {
  return (
    <div className="container mx-auto flex flex-col items-center py-40">
      <div className="flex flex-col items-center gap-10 text-center">
        <Image alt="home paw ai logo" src={HOME_PAW_AI_LOGO} />
        <div className="flex flex-col gap-4 text-center">
          <p className="font-semibold text-5xl">
            Spin up your first GPU node now.
          </p>
          <p className="text-2xl text-muted-foreground">
            Get started building the future of AI.
          </p>
        </div>
      </div>
      <div className="gpa-2 mt-16 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Input placeholder="Enter your email" />
          <Button>Try Demo !</Button>
        </div>
      </div>
    </div>
  );
}
