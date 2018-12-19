function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  //pushes name to the back of line
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
};
