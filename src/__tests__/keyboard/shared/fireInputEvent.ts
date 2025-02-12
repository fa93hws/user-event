import {setup} from '__tests__/helpers/utils'
import userEvent from '../../../'

it('dispatch change event on blur', () => {
  const {element, getEvents} = setup('<input/>')

  ;(element as HTMLInputElement).focus()
  userEvent.keyboard('foo')
  ;(element as HTMLInputElement).blur()

  expect(getEvents('change')).toHaveLength(1)
})

it('do not dispatch change event if value did not change', () => {
  const {element, getEvents} = setup('<input/>')

  ;(element as HTMLInputElement).focus()
  userEvent.keyboard('foo')
  userEvent.keyboard('{backspace}{backspace}{backspace}')
  ;(element as HTMLInputElement).blur()

  expect(getEvents('change')).toHaveLength(0)
})
