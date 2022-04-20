# _Fake Submit_

### `Install`

```
$ npm i --save @gunnarssongroup/fake-submit
-or-
$ yarn add @gunnarssongroup/fake-submit
```

### `Usage`
```
import { FakeSubmit } from '@gunnarssongroup/fake-submit'

button.addEventListener('click', (e: Event & {target: HTMLButtonElement}) => {
  FakeSubmit(form)
})
```

### `Project Setup`

<details>
<summary><strong>Package</strong></summary>

#### `Install node modules`

```
Open the package folder [~\package\] in a terminal and run:

$ npm i

```

#### `Build`

```
Open the package folder [~\package] in a terminal and run:

$ npm run build

This will move all relevant files to [~\package\build\]
```

</details>

<details>
<summary><strong>Tester</strong></summary>

#### `Install node modules`

```
Open the tester folder [~\tester\] in a terminal and run:

$ npm i
```

#### `Build`

```
Open the tester folder [~\tester] in a terminal and run:

$ npm run build

This will move all relevant files to [~\tester\public\build\]
```

#### `Run`

```
Open the tester folder [~\tester\] in a terminal and run:

$ npm run dev

This will run the webpack dev server and serve the development CSS and Javascript
```

### `IIS / Server Setup`

```
Set up a website on a server of your choosing and point it to [~\tester\public\]
```

</details>


