export default class Tile {
  #tileElement
  #x
  #y
  #value

  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) { 
    this.#tileElement = document.createElement("div")
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.value = value
  }

  get value() {
    return this.#value;
  }

  /**
   * @param {number} v
   */
  set value(v) {
    this.#value = v;
    this.#tileElement.textContent = this.#value;
    const power = Math.log2(v);
    const backgroudLightness = 100 - (power * 9);
    this.#tileElement.style.setProperty('--background-lightness', `${backgroudLightness}%`);
    this.#tileElement.style.setProperty('--text-lightness', `${backgroudLightness <= 50 ? 90 : 10}%`);
  }

  get x() {
    return this.#x;
  }

  set x(value) {
    this.#x = value;
    this.#tileElement.style.setProperty('--x', this.#x);
  }

  get y() {
    return this.#y;
  }
  
  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty('--y', this.#y);
  }

  remove() {
    this.#tileElement.remove();
  }

  waitForTransition(animation = false) {
    const event = animation ? 'animationend' : 'transitionend';
    return new Promise(resolve => {
      this.#tileElement.addEventListener(event, resolve, { once: true });
    }) 
  }
}