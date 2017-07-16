# Actually

## Functionality

This is a chrome extension that automatically replaces common technically inaccuracies on the web with their accurate counterparts. 

Currently it supports one inaccuracy.  In the HTTP RFC, one error code is 401 Unauthorized.  This is a misnomer, because the error code applies to situations where the associated request was not authenticated.
Authorization and authentication are fundamental concepts to identity and access, and the HTTP RFC confuses the two!

This extension replaces commonly found 401 error messages that reference "Unauthorized" with "Unauthenticated."

If there are any other things that I can add to this let me know!  As always, this is a work in progress.  

## How it works

This chrome extension works by accessing your current tab.  On load of the DOM, the extension injects some javascript into the webpage. The javascript walks through the nodes in the document body, and for all text nodes, it replaces occurences of 401 Unauthorized error messages with 401 Unauthenticated using a javascript replace.  

It currently supports messages from Tomcat, HTTPD, Nginx and Felix, though other commonly used servers will likely have similar messages that the replace rules will apply to.  

## About the name

At the [Recurse Center](https://www.recurse.com/), which I attended in the summer of 2017, there is a rule against "well actuallies."  Well actuallies are situations where people are having a discussion on a subject, and someone corrects a statement with a minor technical correction, e.g. "Actually, 401 should be called Unauthenticated not Unauthorized."  These corrections here are well actuallies, hence the name.  
