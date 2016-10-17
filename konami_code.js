const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;
  const main = document.getElementsByTagName('body')[0];
  // main.addEventListener('click', function(event) {
  //   alert('I was clicked!');
  // });
  main.addEventListener('keydown', function(e) {
    onKeyDownHandler(e);
  });

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (key === code[index]) {
      index++
      console.log(index)
      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }

}
