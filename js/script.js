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

      // Если передаваемое значение - взрослые

      if (input == peoples) {
        var container = body.querySelector(".row--parent");
        var lastChild = container.children[target.value];
        container.removeChild(lastChild);
      }

      // Если передаваемое значение - дети

      else if (input == childrens) {
        var container = body.querySelector(".row--children");
        var lastChild = container.children[target.value];
        container.removeChild(lastChild);
      }
    }
  })

  plus.addEventListener("click", function(e) {
    e.preventDefault();
    var target = input;
    if(target.value <= maxVal) {
      var countVal = parseInt(target.value) + 1;
      target.value = +countVal

      if (input == peoples) {
        var container = body.querySelector(".row--parent");
        var parentInfo = body.querySelector("#parent-info").innerHTML;
        var html = Mustache.render(parentInfo, {
          "parentCount": input.value
        });
        container.innerHTML = container.innerHTML + html;
      }

      else if (input == childrens) {
        var container = body.querySelector(".row--children");
        var parentInfo = body.querySelector("#child-info").innerHTML;
        var html = Mustache.render(parentInfo, {
          "childCount": input.value
        });
        container.innerHTML = container.innerHTML + html;
      }
    }

  })
}

Counter(travelTime, 2, 13);
Counter(peoples, 2, 4);
Counter(childrens, 1, 1);

})();