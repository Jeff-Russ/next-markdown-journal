document.addEventListener('DOMContentLoaded', function (event) {
  // https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery

  let link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = 'stylesheets/printable-doc.css'

  document.head.appendChild(link)
})
