import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
const SidebarSheet = () => {
  return (
    <SheetContent side="right" className="w-80">
      <div className="p-4">
        <p className="text-sm font-medium">Menu</p>
        <nav className="mt-4 flex flex-col space-y-2">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </SheetContent>
  );
};
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
