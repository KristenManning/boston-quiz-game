
$(document).ready(function() {

  var correct_count = 0;
  var incorrect_count = 0;

  var q0 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }


  var q1 = {
    question_text: "This is the second [1th] question",
    button0_text: "1",
    button1_text: "2",
    button2_text: "3",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q2 = {
    question_text: "This is the third [2nd] question",
    button0_text: "1",
    button1_text: "2",
    button2_text: "3",
    correct_answer: 0,
    sol: "This is the 3rd solution"
  }

  var q3 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q4 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q5 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q6 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q7 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q8 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q9 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q10 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q11 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q12 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var pool = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
  var question = 0; 
  var Q = pool[question]; 

  function check_answer(){
    if (Q.correct_answer != $(this).data("num")) {
      $(".main_box_1").html("<h3> Oops! Better luck next time. <br></h3>");
      $("#choices").html("<p>" + Q.sol + "</p>")
      question++ 
      Q = pool[question]
      incorrect_count++
      setTimeout(play, 1500)
    } else {
      $(".main_box_1").html("<h3> That's correct!<br></h3>");
      $("#choices").html("<p>" + Q.sol + "</p>")
      question++ 
      Q = pool[question]
      correct_count++
      setTimeout(play, 1500)
      // setTimeout(play, 1500)
    }
  }

  function play() {
    $(".main_box_1").html("<h3>" + Q.question_text+ "<br></h3>");
    $("#choices").html('<button type="button" data-num="0" class="btn btn-primary choice">' + Q.button0_text + '</button> <button type="button" data-num="1" class="btn btn-primary choice">' + Q.button1_text + '</button> <button type="button" data-num="2" class="btn btn-primary choice">' + Q.button2_text + '</button>');
    $("#start").html('');
    $(".choice").click(check_answer)
  };

  $("#start").click(play); 
  

})
        // // If the user completed the word, tell them they won, then reset everything  
        // if (comp_checker()) {
        //   reset_hint();
        //   setTimeout(win_display, 100)
        //   setTimeout(reset, 2900)
        
        // // If the user correctly guessed a letter but still has more work to do, just update the skeleton 
        // }else if (correct_guess) {
        //   $("#skeldiv").html(skeleton);

        // // If the user incorrectly guessed and it was their final guess, tell them they lost, reveal correct answer, then reset everything. 
        // }else if (guesses_remaining == 1) {      
        //   reset_hint();
        //   setTimeout(lose_display, 100)
        //   setTimeout(reset, 3200)         
