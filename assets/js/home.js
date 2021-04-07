function checkScrollbar() {
  let hasVScroll = document.body.scrollHeight > document.body.clientHeight;
  
  // Get the computed style of the body element
  let cStyle = document.body.currentStyle || window.getComputedStyle(document.body, "");

  // Check the overflow and overflowY properties for "auto" and "visible" values
  hasVScroll = cStyle.overflow == "visible"
    || cStyle.overflowY == "visible"
    || (hasVScroll && cStyle.overflow == "auto")
    || (hasVScroll && cStyle.overflowY == "auto");

  return hasVScroll;
}

console.log(checkScrollbar())