# Actually

## Functionality

This is a chrome extension that automatically replaces common technically inaccuracies on the web with their accurate counterparts. 

Currently it supports one inaccuracy.  In the HTTP RFC, one error code is 401 Unauthorized.  This is a misnomer, because the error code applies to situations where the associated request was not authenticated.
Authorization and authentication are fundamental concepts to identity and access, and the HTTP RFC confuses the two!

This extension replaces commonly found 401 error messages that reference "Unauthorized" with "Unauthenticated."

If there are any other things that I can add to this let me know!  As always, this is a work in progress.  

## How it works

This chrome extension works by accessing your current tab.  On load of the DOM injects some javascript into the webpage. 
The javascript walks through the nodes in the document body.  For all text nodes, it replaces occurences of 401 Unauthorized error messages with 401 Unauthenticated using a javascript replace.  

It currently supports messages from Tomcat, HTTPD, Nginx and Felix, though other commonly used servers will likely have similar messages that the replace rules will apply to.  

