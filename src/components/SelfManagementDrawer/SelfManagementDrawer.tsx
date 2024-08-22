import { SlideOver, useFadeEffect } from '@faststore/ui';

import { SelfManagementDrawerHeader, SelfManagementDrawerHeaderProps } from './SelfManagementDrawerHeader';
import { SelfManagementDrawerFooter, SelfManagementDrawerFooterProps } from './SelfManagementDrawerFooter';
import { SelfManagementDrawerBody } from './SelfManagementDrawerBody';
import { doLogout } from '../../utils/logout';

type SelfManagementDrawerProps = {
  isOpen: boolean
  closeDrawer: () => void,
  storeConfig: any
  person: SelfManagementDrawerFooterProps["person"]
  org: SelfManagementDrawerHeaderProps["org"]
}

export const SelfManagementDrawer = ({ isOpen, closeDrawer, person, org }: SelfManagementDrawerProps) => {
  const { fade, fadeOut } = useFadeEffect()

  return (

    <SlideOver
      data-fs-self-management-drawer
      fade={fade}
      onDismiss={fadeOut}
      onTransitionEnd={() => fade === 'out' && closeDrawer()}
      isOpen={isOpen}
      size='partial'
      direction='rightSide'
    >
      <SelfManagementDrawerHeader onCloseDrawer={closeDrawer} org={org} />
      <SelfManagementDrawerBody />
      <SelfManagementDrawerFooter
        person={person}
        onLogoutClick={doLogout}
      />
    </SlideOver>
  )
}
