
$(document).ready(function() {

  var correct_count = 0;
  var incorrect_count = 0;
  var seconds_remaining = 15; 

  var q0 = {
    question_text: "In which Boston area 'square' is the Citgo sign located?",
    button0_text: "Kenmore",
    button1_text: "Kendall",
    button2_text: "Copley",
    correct_answer: 0,
    sol: "The Citgo sign is located in Boston's Kenmore Sq."
  }

  var q1 = {
    question_text: "The length of the sidewalk on the Harvard (Mass Ave.) Bridge is marked with which unit of measure?",
    button0_text: "Smoots",
    button1_text: "Shmiggles",
    button2_text: "Smurfs",
    correct_answer: 0,
    sol: "The length of sidewalk along the Harvard Bridge is marked with Smoots."
  }

  var q2 = {
    question_text: "Which city is located directly across the Charles River from Boston's Fenway, Back Bay and Beacon Hill neighboorhoods?",
    button0_text: "Charlestown",
    button1_text: "Harvard",
    button2_text: "Cambridge",
    correct_answer: 2,
    sol: "Cambridge is located across the river from the Fenway, Back Bay, and Beacon Hill area of Boston."
  }

  var q3 = {
    question_text: "The Charles River ________ is a park along the Charles River Basin.",
    button0_text: "Promenade",
    button1_text: "Esplanade",
    button2_text: "Boardwalk",
    correct_answer: 1,
    sol: "The park along the Basin is called the Esplanade."
  }

  var q4 = {
    question_text: "A section of which Cambridge street is closed on Sundays in the warmer months to engourage recreation?",
    button0_text: "Massachusetts Avenue",
    button1_text: "Memorial Drive",
    button2_text: "Brattle Street",
    correct_answer: 1,
    sol: "Memorial Dr. closes on Sundays in from late April to November."
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

  function run_timer() {
      console.log("run_timer runs")
      page_counter = setInterval(decrement, 1000);
    }

  function decrement() {
    seconds_remaining--;
    console.log(seconds_remaining)
    $("#timer").html("<h2>" + seconds_remaining + " seconds</h2>");
    if (seconds_remaining == 0) {
      stop();
      $(".main_box_1").html("<h3> Uh-oh! You ran out of time. <br></h3>");
      $("#choices").html("<p>" + Q.sol + "</p>")
      question++ 
      Q = pool[question]
      incorrect_count++
      $(".main_box_3").html("<h3>Correct Responses: " + correct_count + "<br>Incorrect Responses: " + incorrect_count +"</h3>")
      setTimeout(play, 1800)
    }
  }

  function stop() {
    clearInterval(page_counter);
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
      $(".main_box_3").html("<h3>Correct Responses: " + correct_count + "<br>Incorrect Responses: " + incorrect_count +"</h3>")
      stop()
      setTimeout(play, 1500)
    } else {
      $(".main_box_1").html("<h3> That's correct!<br></h3>");
      $("#choices").html("<p>" + Q.sol + "</p>")
      question++ 
      Q = pool[question]
      correct_count++
      $(".main_box_3").html("<h3>Correct Responses: " + correct_count + "<br>Incorrect Responses: " + incorrect_count +"</h3>")
      stop()
      setTimeout(play, 1500)
      // setTimeout(play, 1500)
    }
  }

  function play() {
    $(".main_box_1").html("<h3>" + Q.question_text+ "<br></h3>");
    $("#choices").html('<button type="button" data-num="0" class="btn btn-primary choice">' + Q.button0_text + '</button> <button type="button" data-num="1" class="btn btn-primary choice">' + Q.button1_text + '</button> <button type="button" data-num="2" class="btn btn-primary choice">' + Q.button2_text + '</button>');
    $("#start").html('');
    seconds_remaining = 15; 
    $("#timer").html("<h2>" + seconds_remaining + " seconds</h2>");
    run_timer();
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
