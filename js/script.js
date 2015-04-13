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
  var peopleContainer = body.querySelector(".row--parent");
  var childContainer = body.querySelector(".row--children");

  input.addEventListener("keyup", function() {

    if (input == peoples) {

      // Если вводимое значение меньше шести - удаляем всё и создаём заново нужное количество через цикл

      if (input.value < 6) {
        var rows = parent.querySelector(".row");
        var parentInfo = body.querySelector("#parent-info").innerHTML;
        peopleContainer.innerHTML = "";
        for (i = 1; i < parseInt(input.value) + 1; i++) {
          var html = Mustache.render(parentInfo, {
              "parentCount": i
            });
          peopleContainer.innerHTML = peopleContainer.innerHTML + html
        }
      }
    }

    else if (input == childrens) {

      // Если вводимое значение меньше трёх - удаляем всё и создаём зановон ужное количество через цикл

      if (input.value < 3) {
        var rows = parent.querySelector(".row");
        var parentInfo = body.querySelector("#child-info").innerHTML;
        childContainer.innerHTML = "";
        for (i = 1; i < parseInt(input.value) + 1; i++) {
          var html = Mustache.render(parentInfo, {
              "childCount": i
            });
          childContainer.innerHTML = childContainer.innerHTML + html
        }
      }
    }
  })

  minus.addEventListener("click", function(e) {
    e.preventDefault();
    var target = input;
    if(target.value >= minVal) {
      target.value -= 1;

      // Если передаваемое значение - взрослые

      if (input == peoples) {
        var lastChild = peopleContainer.children[target.value];
        peopleContainer.removeChild(lastChild);
      }

      // Если передаваемое значение - дети

      else if (input == childrens) {
        var lastChild = childContainer.children[target.value];
        childContainer.removeChild(lastChild);
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
        var parentInfo = body.querySelector("#parent-info").innerHTML;
        var html = Mustache.render(parentInfo, {
          "parentCount": input.value
        });
        peopleContainer.innerHTML = peopleContainer.innerHTML + html;
      }

      else if (input == childrens) {
        var parentInfo = body.querySelector("#child-info").innerHTML;
        var html = Mustache.render(parentInfo, {
          "childCount": input.value
        });
        childContainer.innerHTML = childContainer.innerHTML + html;
      }
    }

  })
}

Counter(travelTime, 2, 13);
Counter(peoples, 2, 4);
Counter(childrens, 1, 1);

})();