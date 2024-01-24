let computer = document.querySelector("#computer")
let physics = document.querySelector("#physics")
let math = document.querySelector("#math")
let urdu = document.querySelector("#urdu")
let english = document.querySelector("#english")
let btn = document.querySelector("button")
let per = document.querySelector(".ans :nth-child(1)")
let grades = document.querySelector(".ans :nth-child(2)")


let grade;
btn.addEventListener("click", () => {
    console.log("dsjfh");
    let computer2 = Number(computer.value);
    let physics2 = Number(physics.value);
    let math2 = Number(math.value);
    let urdu2 = Number(urdu.value);
    let english2 = Number(english.value);

    let total = Number(computer2 + math2 + physics2 + english2 + urdu2);


    if (total >= 400) {
         grade = "A+"
    }
    else if (total >= 300) {
         grade = "A"
    }
   else if (total >= 200) {
         grade = "B"
    }
    else if (total >= 100) {
         grade = "C"
    }
    else {
         grade = "Fail"
    }
    console.log(grade);
    grades.innerHTML = grade




    // else {return grade="fail"}

})

