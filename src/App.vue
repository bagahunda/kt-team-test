<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-family: "Open Sans";
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  border: none;
  outline: none;
  appearance: none;
  background-color: #7ca65d;
  border-radius: 8px;
  border-bottom: 2px solid #506a32;
  color: #fff;
  font-size: 18px;
}

.form__row {
  margin-bottom: 24px;
}

.form__control {
  width: 100%;
  padding: 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  border-bottom: 2px solid #afb7bd;
  background-color: #fff;
  font-size: 18px;
}
</style>
