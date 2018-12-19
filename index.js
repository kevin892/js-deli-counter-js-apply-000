function takeANumber (deliLine, name) {
  deliLine.push(name);
  //pushes name to the back of line
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
};
