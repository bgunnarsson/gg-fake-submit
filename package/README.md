# _Fake Submit_

Used instead of `form.requestSubmit()` for safari browsers

---

### `Install`

```
npm i --save @gunnarssongroup/fake-submit
-or-
yarn @gunnarssongroup/fake-submit
```

### `Usage`
```
import { FakeSubmit } from '@gunnarssongroup/fake-submit'

button.addEventListener('click', (e: Event & {target: HTMLButtonElement}) => {
  FakeSubmit(form)
})
```
