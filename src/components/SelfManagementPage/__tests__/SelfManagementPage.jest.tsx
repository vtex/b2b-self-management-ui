import React from 'react'
import { SelfManagementPage } from '../'
import { render } from '@testing-library/react'

const mockOnClick = jest.fn()

jest.mock('@faststore/ui', () => ({
    Button: () => <button />
}))


it('Should render all information correctly', () => {
    const pageMockProps = {
        title: 'MockTitle',
        content: 'MockContent',
        buttonLabel: 'MockLabel',
        onClick: mockOnClick
    }

    const { container } = render(<SelfManagementPage {...pageMockProps} />)

    expect(container).toMatchSnapshot()
})