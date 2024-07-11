import React from 'react'

import { SelfManagementPage } from '../src'

export const App = () => {
    return (
        <SelfManagementPage onClick={() => alert('OnClickSelfManagement')} title='Demo SelfManagement' buttonLabel='Click Here' content='Demo content'></SelfManagementPage>
    )
}

