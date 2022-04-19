export const FakeSubmit = (form: HTMLFormElement): void => {
  if (!form) return

  const element = document.createElement('button') as HTMLButtonElement

  element.classList.add('button', 'button--default')

  form.appendChild(element)
  element.click()
  element.remove()
}

// const FakeSubmit = {
//   init(form: HTMLFormElement) {
//     if (!form) return

//     const element = document.createElement('button') as HTMLButtonElement
  
//     element.classList.add('button', 'button--default')
  
//     form.appendChild(element)
//     element.click()
//     element.remove()
//   },
// }

// export default FakeSubmit
