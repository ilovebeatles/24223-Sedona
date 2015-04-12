(function() {

  var body = document.body;

// var target = body.querySelector(".travel-time").value; Value не может быть значение переменной?

var travelTime = body.querySelector(".travel-time");
var peoples = body.querySelector(".people-count");
var childrens = body.querySelector(".children-count");

function Counter(input, minVal, maxVal ) {
  var parent = (input).parentNode;
  var minus = parent.querySelector(".plus");
  var plus = parent.querySelector(".minus");

  minus.addEventListener("click", function(e) {
    e.preventDefault();
    var target = input;
    if(target.value >= minVal) {
      target.value -= 1;
    }
  })

  plus.addEventListener("click", function(e) {
    e.preventDefault();
    var target = input;
    if(target.value <= maxVal) {
      var countVal = parseInt(target.value) + 1;
      target.value = +countVal
    }
  })
}

Counter(travelTime, 2, 13);
Counter(peoples, 2, 4);
Counter(childrens, 1, 1);

})();