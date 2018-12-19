function takeANumber (line, name) {
  line.push(name);
  //pushes name to the back of line
  return (`Welcome, ${name}. You are number ${line.length++} in line.`);
};
