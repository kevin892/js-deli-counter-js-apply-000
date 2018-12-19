function takeANumber (line, name) {
  line.push(name);
  let lineSpot = line.length++
  //pushes name to the back of line
  return (`Welcome, ${name}. You are number ${lineSpot} in line.`);
};

function nowServing(line){
  if (line <= 0)[
    return ('There is nobody waiting to be served')
  ]
  return line[0];
}
