// This script aims to replace the erroneous HTTP error code 401 Unauthorized with 
// the correct message, Unauthenticated

// Start at the document body
walkTheDom(document.body)

function walkTheDom(node) {
	// If the node is null, don't execute the code
	if (!node) {
		return
	}
	// If the node is a text node, 
	// look for instances of the technically incorrect things and correct it
	if (node.nodeType == Node.TEXT_NODE) {
		fix(node)
	}
	// Go do the child nodes of the node
	walkTheDom(node.firstChild)
	// Go to the sibling of the node
	walkTheDom(node.nextSibling)
}
// Correct the errors in the body
function fix(node) {
	// Grab the value of the node
	// Update the error message if the text is found
	content = node.nodeValue
	content = content.replace("401 Unauthorized", "401 Unauthenticated") // Tomcat
	content = content.replace("401 - Unauthorized", "401 - Unauthenticated") // Apache
	content = content.replace("401 Authorization", "401 Authentication") // Nginx and Felix
	node.nodeValue = content
}