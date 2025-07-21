'use client';

import type { PropsWithChildren } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import { Toaster } from '@/components/ui/sonner';

export function ClientProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Toaster />
      <NiceModal.Provider>{children}</NiceModal.Provider>
    </>
  );
}
