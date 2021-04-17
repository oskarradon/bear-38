function checkScrollbar() {
  let hasVScroll = document.body.scrollHeight > document.body.clientHeight
  // Get the computed style of the body element
  let cStyle =
    document.body.currentStyle || window.getComputedStyle(document.body, '')
  // Check the overflow and overflowY properties for "auto" and "visible" values
  hasVScroll =
    cStyle.overflow == 'visible' ||
    cStyle.overflowY == 'visible' ||
    (hasVScroll && cStyle.overflow == 'auto') ||
    (hasVScroll && cStyle.overflowY == 'auto')
  return hasVScroll
}

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll' // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
  document.body.appendChild(outer)
  // Creating inner element and placing it in the container
  const inner = document.createElement('div')
  outer.appendChild(inner)
  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer)

  return scrollbarWidth
}

function getScreenWidth() {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  return width
}

function setMarginRight(el, val) {
  el.style.marginRight = val + 'px'
  console.log(el.style.marginRight)
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    offsetItems()
  },
  false
)

function offsetItems() {
  let screenWidth = getScreenWidth(),
    scrollbarWidth = getScrollbarWidth(),
    offset1 = scrollbarWidth + 20,
    offset2 = scrollbarWidth + 25,
    button1 = document.querySelector('#btn-order'),
    button2 = document.querySelector('#btn-orlo'),
    copyright = document.querySelector('footer p'),
    elements = [button1, button2, copyright]

  if (screenWidth <= 720) {
    setMarginRight(button1, offset1)
    // setMarginRight(button2, offset2)
    setMarginRight(copyright, offset2)
  } else {
    for (const element of elements) {
      setMarginRight(element, 0)
    }
  }
}

window.addEventListener('resize', () => {
  offsetItems()
})
