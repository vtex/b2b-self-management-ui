import { ReactNode, useState } from "react";
import {
  Button, IconButton, SlideOverHeader, Link, Icon
} from "@faststore/ui";
import { CustomerSwitchDrawer } from "../CustomerSwitch/CustomerSwitchDrawer";

export type SelfManagementDrawerHeaderProps = {
  onCloseDrawer?: () => void;
  onSwitchButtonClick?: () => void;
  onConfigButtonClick?: () => void;
  orgImage?: ReactNode;
  orgName: string;
  orgUrl: string;
};

export const SelfManagementDrawerHeader = ({
  orgUrl,
  orgName,
  orgImage,
  onCloseDrawer,
  onSwitchButtonClick,
  onConfigButtonClick,
}: SelfManagementDrawerHeaderProps) => {
  const [ openCustomerDrawer, setOpenCustomerDrawer ] = useState(false)

  return (
    <>
      <SlideOverHeader onClose={() => onCloseDrawer?.()} children={null}/>
      <div data-fs-self-management-drawer-header>
        <Link data-fs-self-management-drawer-header-org-link href={orgUrl}>
          <div data-fs-self-management-drawer-header-org-image>
            {orgImage ?? <Icon name="Bell" width={24} height={24} />}
          </div>
          <h1 data-fs-self-management-drawer-header-org-name>
            {orgName}
          </h1>
        </Link>

        <div data-fs-self-management-drawer-header-buttons-wrapper>
          <Button
            data-fs-self-management-drawer-header-switch-button
            icon={<Icon name="Bell" />}
            iconPosition="left"
            onClick={() => onSwitchButtonClick?.()}
            variant="secondary"
            size="small"
          >
            Switch
          </Button>

          <IconButton
            data-fs-self-management-drawer-header-config-button
            icon={<Icon name="FadersHorizontal" />}
            aria-label="Buy"
            onClick={() => onConfigButtonClick?.()}
            variant="secondary"
            size="small"
          />
        </div>
      </div>

      { openCustomerDrawer && <CustomerSwitchDrawer isOpen={openCustomerDrawer} onCloseDrawer={() => setOpenCustomerDrawer(false)} />}
    </>
  );
};
