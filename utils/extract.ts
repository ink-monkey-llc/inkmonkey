export function extractAndCleanDiv(htmlString: string): string {
 // Check if the string begins with a <p> element
 if (htmlString.trim().startsWith('<p')) {
  return htmlString
 }

 // Parse the string as an HTML document
 const parser = new DOMParser()
 const doc = parser.parseFromString(htmlString, 'text/html')

 // Find the div containing the <p> elements (with the class "markdown prose w-full...")
 const targetDiv = doc.querySelector('div.markdown.prose.w-full.break-words.dark\\:prose-invert.light')

 if (targetDiv) {
  // Remove all classes from the target div
  targetDiv.removeAttribute('class')
  // Remove <br> elements
  targetDiv.querySelectorAll('br').forEach((br) => br.remove())

  // Remove empty <p> elements or <p> elements that contain only <br>
  targetDiv.querySelectorAll('p').forEach((p) => {
   const pContent = p.innerHTML.trim()
   if (pContent === '' || pContent === '<br>') {
    p.remove()
   }
  })

  // Serialize the content of the div back to a string
  const serializer = new XMLSerializer()
  return serializer.serializeToString(targetDiv)
 } else {
  // Return an empty string if the div was not found
  return ''
 }
}
