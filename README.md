Form-Populate
===

Update the values in a form using a map. Currently only supports simple values like strings or ints. Multi-selects and radio buttons aren't supported until I can think of a nice way to do it.

Usage
---
``` javascript
form_populate(form_element,{name: "value"});
```

If using browserify you'll want to `require()` the function first.
