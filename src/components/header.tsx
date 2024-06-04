"use client";

import { PanelBottom } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "~/shared/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "~/shared/lib/utils";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Price Plans",
    href: "/price-plans",
  },
  {
    label: "Pages",
    href: "/pages",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <PanelBottom className="h-6 w-6" /> Table
          <span className="sr-only">Test Task</span>
        </Link>
        {NAV_LINKS.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={cn(
                "text-muted-foreground transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://github.com/velenyx/systeme.io-task">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
};
