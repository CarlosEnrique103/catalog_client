import { LogoIcon } from "@/icons";
import { useUserStore } from "@/store/auth/userStore";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  useUser,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function NavbarCatalog() {
  const { firstName, lastName, resetUser } = useUserStore();
  const router = useRouter();
  return (
    <Navbar>
      <NavbarBrand>
        <LogoIcon className="w-10 h-10" />
        <p className="font-bold text-inherit"> Catalog</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          {firstName && (
            <p className="font-bold text-inherit">
              {firstName + " " + lastName}
            </p>
          )}
        </NavbarItem>
        <NavbarItem>
          {firstName && (
            <Button onPress={resetUser} color="primary" href="#" variant="flat">
              Logout
            </Button>
          )}

          {!firstName && (
            <Button
              onPress={() => router.push("/login")}
              color="primary"
              href="#"
              variant="flat"
            >
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
