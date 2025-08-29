#### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    A. getElementByIdselects one element by ID.

    B. getElementsByClassName selects all elements with that class as a live HTMLCollection.

    C. querySelector selects the first element matching a CSS selector.

    D. querySelectorAll selects all matching elements as a static NodeList.

#### 2.How do you create and insert a new element into the DOM?

    Step 1: Create element  document.createElement("li")

    Step 2: Add content/attributes → newDiv.innerText = "Hello World!"

    Step 3: Insert into DOM → parent.appendChild(newDiv)


#### 3.What is Event Bubbling and how does it work?

    Events first run on the target element, then bubble upwards to parent elements.

    Example: When a button inside a div is clicked,  event triggers on button, then div, then body.

#### 4.What is Event Delegation in JavaScript? Why is it useful?

    A technique where one event listener on a parent handles events on its children using event bubbling.

    Useful for performance and when child elements are added dynamically.

#### 5.What is the difference between preventDefault() and stopPropagation() methods?

    preventDefault() stops the default browser action 

    stopPropagation() stops the event from bubbling to parent elements.