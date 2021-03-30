// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
// the component to test
import ToggleButton from '../ToggleButton';


test('loads and displays greeting', async () => {
    render(<ToggleButton  />)
    fireEvent.click(screen.getByRole('switchButton'))

await waitFor(() =>
  // getByRole throws an error if it cannot find an element
  screen.getByRole('switchButton'));
    // Assert
  expect(screen.getByTestId('switchBox')).toHaveAttribute('checked');
  })


  import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import Input from '../components/Input';
import App from '../components/App'

describe('Input component', () => {
  let input, inputID;

  beforeAll(() => {
    const { getByTestId, getByLabelText } = render(<Input label='username' id='username' />)
    input = getByLabelText('username')
    inputID = getByTestId('username');
  })

  it('should have the default value', () => {
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'ok' } })
  })

  it('should have the updated value', () => {
    expect(input.value).toBe('ok')
  })

  it('should have an element with this id', () => {
    expect(inputID).not.toBeNull();
  })

  afterAll(cleanup)
})