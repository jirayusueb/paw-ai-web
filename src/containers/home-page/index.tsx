import Image from 'next/image';
import { Gpu } from 'lucide-react';
import HERO_BANNER from '@/assets/media/image/hero-website.png';
import HOME_GPU from '@/assets/media/image/home-gpu.png';
import HOME_INTEGRATION from '@/assets/media/image/home-integration.png';
import HOME_PAW_AI_LOGO from '@/assets/media/image/home-paw-ai-logo.png';
import SHADE_BLACK from '@/assets/media/image/shade-black.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HomePageLayout } from '@/containers/home-page/layout';

export function HomePageContainer() {
  return (
    <HomePageLayout>
      <div className="relative">
        <div className="container mx-auto mt-[200px] flex flex-col">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center leading-none">
              <p className="font-semibold text-5xl">From Idea to AI Power</p>
              <p className="font-semibold text-5xl text-muted-foreground">
                Deploy in Seconds
              </p>
            </div>
            <p className="text-2xl text-muted-foreground">
              Scale your compute. Simplify your workflow. Deploy instantly.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button variant="outline">Get Started</Button>
          </div>
          <div className="mt-20 flex items-center justify-center">
            <Image alt="hero banner" src={HERO_BANNER} />
          </div>
        </div>
        <Image
          alt="hero banner"
          className="absolute bottom-0 left-0 h-[360px] w-full"
          src={SHADE_BLACK}
        />
      </div>
      {/* <div className="w-full bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4 pt-40">
            <p className="text-2xl text-muted-foreground">
              Trusted by the world's most innovative teams
            </p>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto py-40">
        <div className="flex flex-col gap-10 text-center">
          <p>Key Benefits</p>
          <div className="flex flex-col gap-4 text-center">
            <p className="font-semibold text-5xl">The Smarter Way to Compute</p>
            <p className="text-2xl text-muted-foreground">
              Fast, flexible, and affordable compute — built for AI, data, and
              high-performance tasks.
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-40">
        <div className="flex flex-col gap-10 text-center">
          <p>Use Cases</p>
          <div className="flex flex-col gap-4 text-center">
            <p className="font-semibold text-5xl">
              Compute for AI. Built for You.
            </p>
            <p className="text-2xl text-muted-foreground">
              Seamless access to powerful, scalable compute.
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
            <div className="flex size-[100px] items-center justify-center">
              <Gpu className="size-6" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-lg">Powerful GPUs</p>
              <p className="text-balance text-muted-foreground">
                Access cutting-edge GPUs on demand for efficient training and
                inference
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-40">
        <div className="flex flex-col gap-10 text-center">
          <p>Get started</p>
          <div className="flex flex-col gap-4 text-center">
            <p className="font-semibold text-5xl">Get Started in Seconds</p>
            <p className="text-2xl text-muted-foreground">
              Launch powerful GPU environments with zero setup.
            </p>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-center gap-6">
          <Image alt="home gpu" className="h-[400px] w-auto" src={HOME_GPU} />
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4">
              <p>1</p>
              <div className="flex flex-col gap-4">
                <p className="text-lg">Pick a GPU</p>
                <p className="text-pretty font-light text-muted-foreground">
                  Pick from a variety of high-performance GPUs like A100, 4090,
                  or L40S to match your workload needs.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <p>2</p>
              <div className="flex flex-col gap-4">
                <p className="text-lg">Launch your workspace</p>
                <p className="text-pretty font-light text-muted-foreground">
                  Start with a prebuilt template or custom container. Your
                  workspace is ready in seconds, with no setup.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <p>3</p>
              <div className="flex flex-col gap-4">
                <p className="text-lg">Connect & Run</p>
                <p className="text-pretty font-light text-muted-foreground">
                  Access your environment via terminal or API, run code, and
                  scale easily as your needs grow.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
    </HomePageLayout>
  );
}
