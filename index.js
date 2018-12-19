function takeANumber (line, name) {
  line.push(name);
  //pushes name to the back of line
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
};
function nowServing(line){
  if (line <= 0){
    return ('There is nobody waiting to be served!');
  } else {
    return (line[0]);
  };
};
