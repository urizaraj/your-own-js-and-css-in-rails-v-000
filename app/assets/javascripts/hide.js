

function hideWhenClicked() {
  element.hide()
}

$(document).ready(function() {
  const element = $('#hide_this')
  element.on('click', hideWhenClicked)
})
