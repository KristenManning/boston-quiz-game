
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
    sol: "The length of the sidewalk along the Harvard Bridge is marked with Smoots."
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
    button0_text: "Mass. Ave.",
    button1_text: "Memorial Dr.",
    button2_text: "Brattle St.",
    correct_answer: 1,
    sol: "Memorial Dr. closes on Sundays in from late April to November."
  }

  var q5 = {
    question_text: "Which two universities have both sailing and rowing boathouses located in the Charles River Basin?",
    button0_text: "BU & Harvard",
    button1_text: "MIT & BU",
    button2_text: "Harvard & Tufts",
    correct_answer: 1,
    sol: "BU and MIT each have 2 boathouses -- one for sailing and one for rowing -- all located in the basin."
  }

  var q6 = {
    question_text: "Which Charles River bridge also crosses diagonally over the Grand Junction Railroad Bridge?",
    button0_text: "BU Bridge",
    button1_text: "Harvard Bridge",
    button2_text: "Longfellow Bridge",
    correct_answer: 0,
    sol: "The Grand Junction Railroad Bridge crosses the Charles River directly beneath the BU Bridge."
  }

  var q7 = {
    question_text: "The _____ End neighborhood is home to many Italian restaurants, including the famous Mike's Pastries.",
    button0_text: "North",
    button1_text: "South",
    button2_text: "West",
    correct_answer: 0,
    sol: "The North End is Boston's Italian neighborhood."
  }

  var q8 = {
    question_text: "The bike path along the Charles River is named after which American Physician?",
    button0_text: "Dr. William Osler Abbott",
    button1_text: "Dr. Joseph Warren",
    button2_text: "Dr. Paul Dudley White",
    correct_answer: 2,
    sol: "The Dudley White Memorial Bike Path runs along the Charles River."
  }

  var q9 = {
    question_text: "Where do the Boston Pops perform on the 4th of July each year?",
    button0_text: "TD Garden",
    button1_text: "DCR Hatch Shell",
    button2_text: "Symphony Hall",
    correct_answer: 1,
    sol: "The Boston Pops perform at the DCR Hatch Shell on the river."
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
      setTimeout(play, 2500)
    }
  }

  function stop() {
    clearInterval(page_counter);
  }

  var pool = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];
  var question = 0; 
  var Q = pool[question]; 

  function check_answer(){
    if (Q.correct_answer != $(this).data("num")) {
      $(".main_box_1").html("<h3> Oops! Better luck next time. <br></h3>");
      $("#choices").html("<p>" + Q.sol + "</p>")
      question++ 
      Q = pool[question]
      incorrect_count++
      stop()
      setTimeout(play, 2500)
    } else {
      $(".main_box_1").html("<h3> That's correct!<br></h3>");
      $("#choices").html("<p>" + Q.sol + "</p>")
      question++ 
      Q = pool[question]
      correct_count++
      stop()
      setTimeout(play, 2500)
      // setTimeout(play, 1500)
    }
  }

  function play() {
    if (question == 10){
      $(".main_box_1").html("<h3>Correct Responses: " + correct_count + "<br>Incorrect Responses: " + incorrect_count +"</h3>")
      $("#choices").html("<p>Click 'restart' to play again!</p>")
      $(".main_box_3").html('<button class="btn btn-default" id="restart">Restart</button>')
      $("#restart").click(reset);
    }else{
    $(".main_box_1").html("<h3>" + Q.question_text+ "<br></h3>");
    $("#choices").html('<br><button type="button" data-num="0" class="btn btn-primary choice">' + Q.button0_text + '</button> <button type="button" data-num="1" class="btn btn-primary choice">' + Q.button1_text + '</button> <button type="button" data-num="2" class="btn btn-primary choice">' + Q.button2_text + '</button>');
    $("#start").html('');
    seconds_remaining = 15; 
    $("#timer").html("<h2>" + seconds_remaining + " seconds</h2>");
    run_timer();
    $(".choice").click(check_answer)}
  };

  function reset() {
    correct_count = 0;
    incorrect_count = 0;
    seconds_remaining = 15; 
    question=0;
    Q=pool[question];
    $(".main_box_3").html("");
    play()


  }

  $("#start").click(play); 
  
})       
