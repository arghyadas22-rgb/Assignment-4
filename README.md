1-->

getElementById::returns an element by ID.

getElementsByClassName::returns an HTML collection of all matching elements with a class.

querySelector::returns the first matching element with a css selector.

querySelectorAll::returns a NodeList of all matching element with a css selector.

2-->

create a new elemrnt with document.createElement().set attributes or content if necessary.insert into parent element with appendChild().

3-->

Event Bubbling is a type of DOM event propagation.

how does it work?

Suppose i have a <button> element inside a <div> .

When i click on the button, it first handles the button.

Then the event propagates to the parent <div>  reaching its parent and all father elements above it step by step.

4-->

Event Delegation is a technique where we place event listerners on the parent element instead of the child elements . then we identify the event through event bubbling and work on the child element.

Benefits:

No need to set up separate listeners for many child elements.

The same listener works on new dynamically added elements as well.

Saves memory and performance.

5-->

preventDefault(): Prevents the default behavior of an event.

stopPropagation(): Stops bubbling or capturing of the event, preventing the event from reaching the parent element.
