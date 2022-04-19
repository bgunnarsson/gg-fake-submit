import {
  // IFakeSubmit,
  IFakeSubmitNamedParameters,
} from './fake-submit-utility'

export const FakeSubmit = (
  form, 
  {
    callback = undefined
  }: IFakeSubmitNamedParameters
): void => {
  try {
    if (!form) return console.error('[FakeSubmit] Error - !form')

    const element = <HTMLButtonElement>document.createElement('button')

    element.classList.add('button', 'button--default')
  
    form.appendChild(element)
    element.click()
    element.remove()

    if (callback !== undefined) {
      callback()
    }
  }
  catch (error) {
    console.error('[FakeSubmit] catch error', error)
  }
}
