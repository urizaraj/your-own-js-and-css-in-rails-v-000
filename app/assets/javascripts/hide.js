

function hideWhenClicked() {
  element.hide()
}

$(document).ready(function() {
  let element = $('#hide_this')
  element.on('click', hideWhenClicked)
})
