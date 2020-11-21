<p align="center">
  <svg width="90" height="90" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.68571 2.03577C9.9421 2.13833 10.0668 2.42931 9.96425 2.68571L5.96425 12.6857C5.86169 12.9421 5.57071 13.0668 5.31432 12.9642C5.05792 12.8617 4.93322 12.5707 5.03577 12.3143L9.03577 2.31432C9.13833 2.05792 9.42931 1.93322 9.68571 2.03577Z" fill="#41B883"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85355 5.85355C4.04882 5.65829 4.04882 5.34171 3.85355 5.14645C3.65829 4.95118 3.34171 4.95118 3.14645 5.14645L1.14645 7.14645C0.951184 7.34171 0.951184 7.65829 1.14645 7.85355L3.14645 9.85355C3.34171 10.0488 3.65829 10.0488 3.85355 9.85355C4.04882 9.65829 4.04882 9.34171 3.85355 9.14645L2.20711 7.5L3.85355 5.85355ZM11.8536 5.14645C11.6583 4.95118 11.3417 4.95118 11.1464 5.14645C10.9512 5.34171 10.9512 5.65829 11.1464 5.85355L12.7929 7.5L11.1464 9.14645C10.9512 9.34171 10.9512 9.65829 11.1464 9.85355C11.3417 10.0488 11.6583 10.0488 11.8536 9.85355L13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645L11.8536 5.14645Z" fill="#34495E"/>
  </svg>
</p>
<br>
<p align="center">
  <b>Add source location to elements</b>
</p>

&nbsp;

&nbsp;

#### In

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
```

&nbsp;

#### Out

```html
<div
  id="app"
  data-source='"{
    "filename": "root/src/App.vue",
    "start": 0,
    "end": 14
  }"'
>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
    data-source='"{
      "filename": "root/src/App.vue",
      "start": 17,
      "end": 61
    }"'
  />
  <h1
    data-source='"{
      "filename": "root/src/HelloWorld.vue",
      "start": 22,
      "end": 26
    }"'
  >
    Welcome to Your Vue.js App
  </h1>
</div>
```

&nbsp;

#### Why?

&nbsp;

Useful for building developer tools that can use the location of the element — like [UI Devtools](https://ui-devtools.com)

&nbsp;

#### Installation

&nbsp;

```
vue add source
```

or

```
yarn add -D vue-cli-plugin-source
```

`vue-cli` will automatically pick it up.

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
