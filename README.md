<p align="center">
  <img height="90" src="https://user-images.githubusercontent.com/1863771/99888680-000fb500-2c4f-11eb-83ef-1b80a112f84e.png">
  <br><br>
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
