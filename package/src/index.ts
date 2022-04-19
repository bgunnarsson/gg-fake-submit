export type IFakeSubmitPlugin = (form: HTMLFormElement) => void

export const FakeSubmit: IFakeSubmitPlugin = (form) => {
  if (!form) return

  const element = document.createElement('button') as HTMLButtonElement

  element.classList.add('button', 'button--default')

  form.appendChild(element)
  element.click()
  element.remove()
}
