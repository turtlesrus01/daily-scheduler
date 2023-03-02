// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  console.log('Hello')
  $(document).ready(function(){
    //Creates a variable with the current date through a dayjs function call
    var now = dayjs().format('MM/DD/YYYY');
    console.log(now)
    //This sends the current date to the HTML
    $('#currentDay').html(now);
    //function to activate upon click
    $('.saveBtn').click(function() {
      //Variable created to get text
      var inputText = $('#description').text();
      alert(inputText);
      //Local storage call to store input data
      localStorage.setItem($('#saveBtn').attr('id')+' agenda', inputText);
      console.log(inputText)
    });

    $('#presentBtn').click(function() {
      //Variable created to get text
      var inputText = $('#secondField').val();
      alert(inputText);
      //Local storage call to store input data
      localStorage.setItem('Present agenda', inputText);
      console.log(inputText)
    });

    $('#futureBtn').click(function() {
      //Variable created to get text
      var inputText = $('#thirdField').val();
      alert(inputText);
      //Local storage call to store input data
      localStorage.setItem('Future agenda', inputText);
      console.log(inputText)
    });
    //test addClass function
    //$('#hour-9').addClass('present');
    
    //This each function will check each time block and compare to the current time
    $('.time-block').each(function(index) {
      //Test print of the index of the item and its container text
      console.log(index + ': ' + $(this).attr('id').slice(-2));

      //variable to pull and store the current hour 
      var hour1 = dayjs().format('HH');
      //console.log(hour1)
      //console.log(hour1<$('#hour- 9').slice(-2))
      //console.log($(this).text());
      //If statement that compares current hour to the text block hour
      //Then adds the appropriate class to the block accordingly
      console.log(hour1<$(this).attr('id').slice(-2))
      if (hour1>$(this).attr('id').slice(-2)){
        $(this).addClass('past');
        console.log(hour1)
        //console.log($(this).text().trim())
        //console.log(hour1===$(this).text().trim())
      } else if (hour1===$(this).attr('id').slice(-2)) {
        $(this).addClass('present');
        console.log('here2')
      } else if (hour1<$(this).attr('id').slice(-2)) {
        $(this).addClass('future');
        console.log('here3')
      } else {
        return;
      }
    });

    $('.saveBtn').click(function() {
      //Variable created to get text
      var inputText = $('.description').val();
      alert(inputText);
      //Local storage call to store input data
      localStorage.setItem($(this).attr('id')+' agenda', inputText);
      console.log(inputText)
    });
  });
 


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
