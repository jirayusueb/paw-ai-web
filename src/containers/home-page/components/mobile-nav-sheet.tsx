"use client";

import { useModal, create } from "@ebay/nice-modal-react";
import NiceModal from "@ebay/nice-modal-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { X, Menu, HelpCircle, Mail, LogIn, UserPlus } from "lucide-react";

interface MobileNavSheetProps {
  onClose?: () => void;
}

const navigationItems = [
  {
    label: "Features",
    href: "#features",
    icon: Menu,
    ariaLabel: "View features",
  },
  { label: "Pricing", href: "#pricing", icon: Menu, ariaLabel: "View pricing" },
];

const authItems = [
  {
    label: "Login",
    href: "#login",
    variant: "link" as const,
    icon: LogIn,
    ariaLabel: "Sign in to your account",
  },
  {
    label: "Sign up",
    href: "#signup",
    variant: "outline" as const,
    icon: UserPlus,
    ariaLabel: "Create a new account",
  },
];

const supportItems = [
  {
    label: "Help Center",
    href: "#help",
    icon: HelpCircle,
    ariaLabel: "Get help",
  },
  {
    label: "Contact Us",
    href: "#contact",
    icon: Mail,
    ariaLabel: "Contact us",
  },
];

function MobileNavSheet({ onClose }: MobileNavSheetProps = {}) {
  const modal = useModal();

  const handleClose = () => {
    // Call custom onClose if provided
    onClose?.();
    // Hide the modal
    modal.hide();
  };

  const handleNavigation = (href: string) => {
    // Close the sheet before navigation
    handleClose();

    // Smooth scroll to section if it's an anchor link
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Sheet open={modal.visible} onOpenChange={handleClose}>
      <SheetContent
        side="right"
        className="w-80 p-0 sm:w-96"
        onEscapeKeyDown={handleClose}
        onPointerDownOutside={handleClose}
      >
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle className="flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              aria-label="Close menu"
              className="h-8 w-8"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col overflow-y-auto">
          {/* Navigation Items */}
          <div className="flex-1 p-6">
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 text-left"
                      onClick={() => handleNavigation(item.href)}
                      aria-label={item.ariaLabel}
                    >
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Auth Items */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Account
              </h3>
              <div className="space-y-3">
                {authItems.map((item) => (
                  <Button
                    key={item.label}
                    variant={item.variant}
                    className="w-full justify-start gap-3"
                    onClick={() => handleNavigation(item.href)}
                    aria-label={item.ariaLabel}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Support Items */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Support
              </h3>
              <ul className="space-y-2">
                {supportItems.map((item) => (
                  <li key={item.label}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 text-left"
                      onClick={() => handleNavigation(item.href)}
                      aria-label={item.ariaLabel}
                    >
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-6">
            <div className="text-center text-sm text-muted-foreground">
              <p>PAW AI Platform</p>
              <p className="mt-1">Powered by cutting-edge AI technology</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Create the modal component using nice-modal-react
const MobileNavSheetModal = create<MobileNavSheetProps>(({ onClose }) => (
  <MobileNavSheet onClose={onClose} />
));

// Export the show function
export const showMobileNavSheet = (onClose?: () => void) => {
  NiceModal.show(MobileNavSheetModal, { onClose });
};

// Export the component for direct use if needed
export { MobileNavSheet };
