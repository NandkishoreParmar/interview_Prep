// Event Propagation in JavaScript
// Event propagation describes the order in which events are handled when an event occurs on an element that is nested inside other elements.

// There are 3 phases:

// 🔸 1. Capturing Phase (a.k.a. Capture or Trickle Down)
// The event starts from the window and travels down to the target element.

// Listeners added with addEventListener('click', handler, true) are triggered here.

// 🔸 2. Target Phase
// The event reaches the actual element where the event happened.

// 🔸 3. Bubbling Phase (a.k.a. Bubble Up)
// The event bubbles up from the target to the top (like document).

// Listeners added with addEventListener('click', handler) (default false) run here.


// Event Delegation (in simple terms)
// Event delegation is a technique in JavaScript where you add a single event listener to a parent element instead of adding individual listeners to each child element.

// 🔧 Why use Event Delegation?
// Better performance (fewer event listeners)
// Useful for dynamic elements (added after page load)
// Cleaner and easier to manage code

// 🧠 How it works:
// You attach a listener to a parent element.
// When an event happens on a child, it bubbles up to the parent.
// You check the event.target to know which child was clicked.