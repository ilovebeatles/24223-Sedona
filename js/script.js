(function() {

  var body = document.body;

  // var target = body.querySelector(".travel-time").value; Value не может быть значение переменной?
  // Можно ли сделать через одну функцию?


  // function calculate() {
  //   var plus = body.querySelector(".minus");
  //   var minus = body.querySelector(".plus");

  //   plus.addEventListener("click", function(e) {
  //     console.log('На кнопку нажали!');
  //     e.preventDefault();
  //     var days = this.parentNode;
  //     console.log(days)

  //     // Если внутри родителя есть дни

  //     if(days.querySelector(".travel-time")) {
  //       var target = days.querySelector(".travel-time");
  //       console.log(target);
  //       console.log("Первое условие сработало!")

  //       var countVal = parseInt(target.value) + 1;
  //       target.value = +countVal
  //     }

  //     // Если внутри родителя есть количество взрослых

  //     else if(days.querySelector(".people-count")) {
  //       var target = days.querySelector(".people-count");
  //       console.log(target);
  //       console.log("Первое условие сработало!")

  //       var countVal = parseInt(target.value) + 1;
  //       target.value = +countVal
  //     }


  //   })

  // }

  // calculate();


  function travelCounting() {

    var parent = body.querySelector(".travel-time").parentNode;
    var minus = parent.querySelector(".plus");
    var plus = parent.querySelector(".minus");

    minus.addEventListener("click", function(e) {
    	e.preventDefault();
    	var target = body.querySelector(".travel-time");
    	if(target.value >= 2) {
    		target.value -= 1;
    	}
    })

    plus.addEventListener("click", function(e) {
    	e.preventDefault();
    	var target = body.querySelector(".travel-time");
      if(target.value <= 29) {
      	var countVal = parseInt(target.value) + 1;
      	target.value = +countVal
      }
    })
  }

  function customerCounting() {

    var parent = body.querySelector(".people-count").parentNode;
    var minus = parent.querySelector(".plus");
    var plus = parent.querySelector(".minus");

    minus.addEventListener("click", function(e) {
      e.preventDefault();
      var parent = this.parentNode;
      var target = parent.querySelector(".people-count");

      if(target.value >= 2) {
        target.value -= 1;
      }
    })

    plus.addEventListener("click", function(e) {
      e.preventDefault();
      var target = body.querySelector(".people-count");
      if(target.value <= 4) {
        var countVal = parseInt(target.value) + 1;
        target.value = +countVal
      }
    })
  }

  function childrenCounting() {

    var parent = body.querySelector(".children-count").parentNode;
    var minus = parent.querySelector(".plus");
    var plus = parent.querySelector(".minus");

    minus.addEventListener("click", function(e) {
      e.preventDefault();
      var parent = this.parentNode;
      var target = parent.querySelector(".children-count");

      if(target.value >= 1) {
        target.value -= 1;
      }
    })

    plus.addEventListener("click", function(e) {
      e.preventDefault();
      var target = body.querySelector(".children-count");
      if(target.value <= 11) {
        var countVal = parseInt(target.value) + 1;
        target.value = +countVal
      }
    })
  }

  travelCounting();
  customerCounting();
  childrenCounting();

})();