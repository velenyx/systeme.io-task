import { PanelBottom } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "~/shared/ui/button";

export const Header = () => (
  <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
    <nav className="flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <PanelBottom className="h-6 w-6" /> Table
        <span className="sr-only">Test Task</span>
      </Link>
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
