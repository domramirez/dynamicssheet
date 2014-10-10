dynamicssheet
=============

So far it's been tested to work back to Internet Explorer 8. You'll still have to ensure that css selectors and properties you use are supported.

NOTE: THIS IS A WORK IN PROGRESS. TEST THOROUGHLY WHEN USING.

Dynamicssheet is a super lightweight client-side javascript library built for the sole purpose of writing dynamic css stylesheets. It's useful for those rare instances in which we need to write css stylesheets directly to an HTML document on the client side.

The most common use may be for dynamically modifying css pseudo elements such as :before, :after, :first-child, :nth-child(), :not(), :hover, and others, but it could have other, more complex applications.

For now, this library is just a small, simple utility with an add and remove method (see example.html). This library can and may be expanded in the future to support more dynamic functionality, joins between types, hierarchies, and possibly further-abstracted styling patterns.
