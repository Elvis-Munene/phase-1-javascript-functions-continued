// code your solution here



//saturdayFun

function saturdayFun(default1 = "roller-skate") {
    return `This Saturday, I want to ${default1}!`;
  }
  console.log(saturdayFun("scga"));


//mondayWork
function mondayWork(default1 = "go to the office") {
    return `This Monday, I will ${default1}.`;
  }
  console.log(mondayWork("fd"));

//wrapAdjective
function wrapAdjective(praise = "*") {
    return function (compliment = "special") {
      return `You are ${praise}${compliment}${praise}!`;
    };
  }
  console.log(wrapAdjective("jh"));