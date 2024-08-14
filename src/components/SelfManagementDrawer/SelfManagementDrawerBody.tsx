import { Link } from '@faststore/ui'

import { goToOrders } from '../../utils/orders'

export const SelfManagementDrawerBody = (storeConfig: any) => {

  const onClickOrders = (event: any) => {
    event.preventDefault()

    goToOrders(storeConfig)
  }

  return (
    <>
      <div data-fs-self-management-drawer-body>
        <div data-fs-self-mamnagement-drawer-body-contents>
          <Link data-fs-self-management-drawer-body-link onClick={onClickOrders} href={'account/orders'}>Orders</Link>
          <Link data-fs-self-management-drawer-body-link href={'account'}>Preferences</Link>
        </div>
      </div>
    </>
  )
}
