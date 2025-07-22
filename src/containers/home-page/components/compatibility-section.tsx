import Image from 'next/image';
import HOME_INTEGRATION from '@/assets/media/image/home-integration.png';

export function CompatibilitySection() {
  return (
    <div className="container mx-auto flex flex-col items-center py-40">
      <div className="flex flex-col gap-10 text-center">
        <p>Compatibility</p>
        <div className="flex flex-col gap-4 text-center">
          <p className="font-semibold text-5xl">Get Seamless Integrations</p>
          <p className="text-2xl text-muted-foreground">
            Works with tools you already use.
          </p>
        </div>
      </div>
      <Image
        alt="home integration"
        className="mt-20"
        src={HOME_INTEGRATION}
      />
    </div>
  );
}
