const subjects = document.querySelectorAll('.subjects-grading .subject');
const calculateBtn =document.querySelector('#calculate-btn');
const studentRank = document.querySelector('.student-rank .rank-value');
const gradeInputs = document.querySelectorAll('.subjects-grading input');


// bawal mag input ng mas mataas sa 100 at mas mababa sa 0
gradeInputs.forEach(input => {
  input.addEventListener('input', ()=>{
    if(input.value > 100){
      input.value = 100;
    }else if(input.value < 0){
      input.value = 0;
    }
  })
})


//-------Calculate----//
calculateBtn.addEventListener('click', ()=>{
  let countExcellent = 0;
  let countPoorFail = 0;

  subjects.forEach(subject => {
    const subjGradeInput = parseInt(subject.querySelector('input').value) ;
    const subjRemark = subject.querySelector('.subject-remarks');

    //calculate grade value//
    if(subjGradeInput <= 100 && subjGradeInput >=90){
      subjRemark.innerText =  "Excellent";
      countExcellent++;
    }else if(subjGradeInput <= 89 && subjGradeInput >= 80){
      subjRemark.innerText =  "Good";
    }else if(subjGradeInput <= 79 && subjGradeInput >= 70){
      subjRemark.innerText =  "Average";
    }else if(subjGradeInput <= 69 && subjGradeInput >= 60){
      subjRemark.innerText =  "Poor";
      countPoorFail++;
    }else if(subjGradeInput <= 59){
      subjRemark.innerText =  "Fail";
      countPoorFail++;
    }

    // dito ichcheck kung top-honor, 2nd honor, repeater or passed //
    if(countExcellent === subjects.length){
      studentRank.innerText = 'Top Honor Student';
    }else if(countExcellent < subjects.length && countExcellent > 3){
      studentRank.innerText = 'Second Honorable Student';
    }else if(countPoorFail === subjects.length){
      studentRank.innerText = 'Repeater';
    }else{
      studentRank.innerText = "Passed"
    }
  });
});


//------Reset-----//
const resetBtn =  document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
  subjects.forEach(subject => {
    const subjGradeInput = subject.querySelector('input').value = '';
    const subjRemark = subject.querySelector('.subject-remarks').innerText = '';
  });
});

