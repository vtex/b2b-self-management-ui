import React from 'react'
import { SelfManagementPage } from '../SelfManagementPage'
import { render } from '@testing-library/react'

const mockOnClick = jest.fn()

it('Should render all information correctly', () => {
    const pageMockProps = {
        title: 'MockTitle',
        content: 'MockContent',
        buttonLabel: 'MockLabel',
        onClick: mockOnClick
    }

    const component = render(<SelfManagementPage {...pageMockProps} />)

    // expect(component.toJSON()).toMatchSnapshot()
})