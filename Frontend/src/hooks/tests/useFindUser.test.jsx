import { renderHook, act } from '@testing-library/react-hooks'
import useFindUser from '../useFindUser'

test('should find user', () => {
    const users = [{_id:1, firstName:'mockeduser'}]
  const { result } = renderHook(() => useFindUser(users))

  act(() => {
      const event = {target: {
          value: "mockeduser"
      }}
    result.current.onChange(event);
  })
})