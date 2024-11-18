const getCookie = (cName: string) => {
  const cookieString = document.cookie; // Retrieve all cookies as a string
  const cookies = cookieString.split("; "); // Split into individual cookies
  const cookie = cookies.find((c) => c.startsWith(`${cName}=`)); // Find the one that starts with the name
  return cookie ? cookie.split("=")[1] : null; // Return the value or null if not found
};

export { getCookie };
