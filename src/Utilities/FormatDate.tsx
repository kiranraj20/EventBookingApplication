// This function formats a given date into a string in the format "Month Day, Year".
export default function formatDate(dateString: string | number | Date) {
  // Array containing the names of all months
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  // Create a Date object from the provided dateString
  const date = new Date(dateString);
  
  // Extract the month from the date object and get its corresponding name from the months array
  const month = months[date.getMonth()];
  
  // Extract the day from the date object
  const day = date.getDate();
  
  // Extract the year from the date object
  const year = date.getFullYear();
  
  // Return the formatted date string in the format "Month Day, Year"
  return `${month} ${day}, ${year}`;
}
