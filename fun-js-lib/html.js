/**
 * Returns array of elements with given `tag` from `container`
 * @type {<K extends keyof HTMLElementTagNameMap>(container: HTMLElement, tag: K) => HTMLElementTagNameMap[K][]}
 */
export function htmlTagged (container, tag) {
  return Array.from(container.getElementsByTagName(tag))
}

/**
 * @type {<K extends keyof HTMLElementTagNameMap>(tag: K) => HTMLElementTagNameMap[K]}
 */
export function htmlNew (tag) {
  return document.createElement(tag)
}

export function htmlBody () {
  return document.body
}

export function htmlCanvas () {
  return htmlNew('canvas')
}

/**
 * @param {HTMLElement} element 
 * @param {() => any} f
 */
export function htmlOnInput (element, f) {
  element.addEventListener('input', f)
}

/**
 * @param {HTMLElement} element 
 * @param {() => any} f
 */
export function htmlOnClick (element, f) {
  element.addEventListener('click', f)
}

/**
 * @param {HTMLElement} element 
 * @param {() => any} f
 */
export function htmlOnChange (element, f) {
  element.addEventListener('change', f)
}

/**
 * Returns html element with given `id` found in `document`
 * @param {string} id 
 */
export const htmlIded = id =>
  document.getElementById(id)

/**
 * Removes `disable` attribute from `element`
 * @param {HTMLElement} element 
 */
export function htmlEnable (element) {
  element.removeAttribute('disable')
  element.disabled = false
}

/**
 * Adds `disable` attribute to `element`
 * @param {HTMLElement} element 
 */
export function htmlDisable (element) {
  element.setAttribute('disabled', '')
  element.disabled = true
}