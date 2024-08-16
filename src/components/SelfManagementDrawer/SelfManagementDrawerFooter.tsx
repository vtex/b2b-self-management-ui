import { ReactNode } from "react";
import { Button, Icon } from "@faststore/ui";

export type SelfManagementDrawerFooterProps = {
  onLogoutClick?: (storeConfig: any) => void;
  person: {
    image?: ReactNode;
    name: string;
    role?: string;
  }
};

export const SelfManagementDrawerFooter = ({
  onLogoutClick,
  person: {
    image,
    name,
    role,
  }
}: SelfManagementDrawerFooterProps) => {

  return (
    <footer data-fs-self-management-drawer-footer>
      <div data-fs-self-management-drawer-footer-person-image>
        {image ?? <Icon name="Bell" width={20} height={20} />}
      </div>
      <div data-fs-self-management-drawer-footer-person-data>
        <h2>{name}</h2>
        {role && <h3>{role}</h3>}
      </div>
      <Button
        data-fs-self-management-drawer-footer-logout-button
        data-fs-self-management-drawer-footer-logout-button-color="danger"
        icon={<Icon name="Bell" weight="bold" />}
        iconPosition="left"
        onClick={onLogoutClick}
        variant="secondary"
        size="small"
      >
        Logout
      </Button>
    </footer>
  );
};
