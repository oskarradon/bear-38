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

console.log(checkScrollbar(), getScrollbarWidth())

document.addEventListener(
  'DOMContentLoaded',
  function () {
    if (checkScrollbar()) {
      let sb = getScrollbarWidth()
      // document.querySelector('body').style.marginRight = sb + 'px'
      document.querySelector('#btn-order').style.marginRight = sb + 35 + 'px'
      console.log(document.querySelector('body').style.marginRight)
    }
  },
  false
)

function getScreenWidth() {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  return width
}
