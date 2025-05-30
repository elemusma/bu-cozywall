export const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  if (value.length > 10) value = value.slice(0, 10); // Limit to 10 digits

  let formatted = "";
  if (value.length > 6) {
    formatted = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  } else if (value.length > 3) {
    formatted = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 0) {
    formatted = `(${value}`;
  }

  e.target.value = formatted; // Update input value
};
