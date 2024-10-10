import { SlideOver, useFadeEffect } from '@faststore/ui';

import { SelfManagementDrawerHeader } from './SelfManagementDrawerHeader';
import { SelfManagementDrawerFooter } from './SelfManagementDrawerFooter';
import { SelfManagementDrawerBody } from './SelfManagementDrawerBody';
import { doLogout } from '../../utils/logout';
import { useState } from 'react';
import { CustomerSwitchDrawer } from '../CustomerSwitch/CustomerSwitchDrawer';

type SelfManagementDrawerProps = {
  isOpen: boolean
  closeDrawer: () => void,
  storeConfig: any
}

export const SelfManagementDrawer = ({ isOpen, closeDrawer }: SelfManagementDrawerProps) => {
  const { fade, fadeOut } = useFadeEffect()
  const [ openCustomerDrawer, setOpenCustomerDrawer ] = useState(false)

  return (

    <>
      <SlideOver
        data-fs-self-management-drawer
        fade={fade}
        onDismiss={fadeOut}
        onTransitionEnd={() => fade === 'out' && closeDrawer()}
        isOpen={isOpen}
        size='partial'
        direction='rightSide'
      >
        <SelfManagementDrawerHeader onCloseDrawer={closeDrawer} onSwitchButtonClick={() => setOpenCustomerDrawer(true)} orgName='Stellar Inc.' orgUrl='/self-management' />
        <SelfManagementDrawerBody />
        <SelfManagementDrawerFooter
          person={{
            name: "Donald Green",
            role: "Admin"
          }}
          onLogoutClick={doLogout}
        />
      </SlideOver>
      { openCustomerDrawer && <CustomerSwitchDrawer isOpen={openCustomerDrawer} onCloseDrawer={() => setOpenCustomerDrawer(false)} />}
    </>
  )
}
