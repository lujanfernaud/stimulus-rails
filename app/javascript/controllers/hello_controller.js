// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input", "output"]

  say_hello() {
    name = this.name ? this.name : "World"

    this.outputTargets.forEach(target => {
      target.textContent = `Hello ${name}!`
    })
  }

  set_name() {
    this.name = this.inputTarget.value
  }
}
