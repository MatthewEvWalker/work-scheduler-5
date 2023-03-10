// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
    
  // const count = ['09', '10', '11', '12', '13', '14', '15', '16', '17']
  // const time = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']

  const today = dayjs()
  const date = today.$d
  const hour = dayjs().$H
  console.log(today)
  currentDay.textContent = date
  

  $('.description').each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr('id')))
  })


  $('.saveBtn').each(function() {
    $(this).on('click', () => {
      let key = $(this).parent().attr('id')
      let value = $(this).prev().val()
      console.log(key)
      console.log(value)
      localStorage.setItem(key, value)
    })
  })

  $('textarea').each(function() {
    let parentHour = $(this).parent().attr('id')
    if (parentHour == hour) {
      $(this).addClass("present")
    } else if (parentHour < hour) {
      $(this).addClass("past")
    } else {
      $(this).addClass("future")
    }
    }
    // console.log(`current Hour is ${hour} vs ${parentHour}`)
  )

  
  // let date = day.js().format('ddd, MMM D YYY, h:mm:ss a')
  // $('#current-Day').text(date)

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
