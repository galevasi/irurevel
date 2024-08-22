// Create a new date object representing the current date and time
const date = new Date();

// Log the original date and time
console.log("Original Date:", date.toISOString());

// Reset the minutes, seconds, and milliseconds to zero in UTC
date.setUTCMinutes(0, 0, 0, 0);

// Log the modified date and time
console.log("Modified Date:", date.toISOString());
