import { LinkButton, Icon } from "@faststore/ui";
import { useState } from "react";
import { SelfManagementDrawer } from "../SelfManagementDrawer/SelfManagementDrawer";

export type SelfManagementSignInButtonProps = {
  useSession: any;
  useBuyerOrg: any;
  storeConfig: any;
};

export const SelfManagementSignInButton = ({
  useSession,
  storeConfig,
  useBuyerOrg,
}: SelfManagementSignInButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { ...session } = useSession();

  const buyerOrg = useBuyerOrg();

  const openDrawer = (event: any) => {
    if (!session.person) {
      event.preventDefault();

      setIsOpen(true);
    }
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <LinkButton
        data-fs-button-signin-link
        href={session.person?.id ? `/account` : `/login`}
        className="text__title-mini"
        variant="tertiary"
        icon={<Icon name={"User"} width={18} height={18} weight="bold" />}
        iconPosition="left"
        onClick={(event) => openDrawer(event)}
      >
        {session.person?.id ? "Company" : "Sign In"}
      </LinkButton>

      {isOpen && (
        <SelfManagementDrawer
          isOpen={isOpen}
          closeDrawer={closeDrawer}
          storeConfig={storeConfig}
          person={{
            name: "Donald Green",
            role: "Admin",
          }}
          org={{
            name: buyerOrg?.name ?? "",
            url: "/self-management",
          }}
        />
      )}
    </>
  );
};
