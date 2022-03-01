const notifyByEmail = (emailAddress) => {
  return `Email sent to: ${emailAddress}`;
} 

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (emailOrText, notifyFunction) => {
  return notifyFunction(emailOrText);
}

console.log(notify('dash@gmail.com', notifyByEmail));
console.log(notify('1234', notifyByText));