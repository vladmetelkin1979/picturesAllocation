My Colleague hates this when any site has been loading pictures browser render the chaos.
Showing of array picturers start from last index to first...

include this code to .html:
  1) setting.js
  2) picturesAllocation.js  
...on the page end before </body>

file 'setting.js':
object SETTING has 2 parametr.
LOAD_ONE_BY_ONE: all page pictures loading one-by-one and has been showing one-by-one
LOAD_ALL: all page pictures load is complete and all pictures will show at same time

Don't forget include pictures as same order as your DOM (from top to bottom)
Oh... And 
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script> into <head>

for IE and Safari