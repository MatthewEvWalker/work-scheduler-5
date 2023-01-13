// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // const saveButton1 = document.getElementById('1')
  // const saveButton2 = document.getElementById('2')
  // const saveButton3 = document.getElementById('3')
  // const saveButton4 = document.getElementById('4')
  // const saveButton5 = document.getElementById('5')
  // const saveButton6 = document.getElementById('6')
  // const saveButton7 = document.getElementById('7')
  // const saveButton8 = document.getElementById('8')
  // const saveButton9 = document.getElementById('9')


  // const currentDay = document.getElementById('currentDay')
  // const container = document.getElementById('container')

  // const textArea9 = document.getElementById('text-hour-9')
  // const textArea10 = document.getElementById('text-hour-10')
  // const textArea11 = document.getElementById('text-hour-11')
  // const textArea12 = document.getElementById('text-hour-12')
  // const textArea13 = document.getElementById('text-hour-13')
  // const textArea14 = document.getElementById('text-hour-14')
  // const textArea15 = document.getElementById('text-hour-15')
  // const textArea16 = document.getElementById('text-hour-16')
  // const textArea17 = document.getElementById('text-hour-17')

  // textArea9.value = localStorage.getItem("text-9") || "";
  // textArea10.value = localStorage.getItem("text-10") || "";
  // textArea11.value = localStorage.getItem("text-11") || "";
  // textArea12.value = localStorage.getItem("text-12") || "";
  // textArea13.value = localStorage.getItem("text-13") || "";
  // textArea14.value = localStorage.getItem("text-14") || "";
  // textArea17.value = localStorage.getItem("text-17") || "";
  // textArea15.value = localStorage.getItem("text-15") || "";
  // textArea16.value = localStorage.getItem("text-16") || "";
  
  const count = ['09', '10', '11', '12', '13', '14', '15', '16', '17']
  const time = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']






  const today = dayjs()
  const date = today.$d
  const hour = dayjs().hour
  currentDay.textContent = date
  

  $('description').each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr('id')))
  })


  $('.saveBtn').each(function() {
    $(this).on('click', () => {
      let key = $(this).parent().attr('id')
      let value = $(this).prev().val()
      localStorage.setItem(key, value)
      console.log(localStorage)
    })
  })




  // saveButton1.addEventListener('click', e => {
  //   const buttonVal = e.target.id
  //   if (buttonVal === 1) {
  //   localStorage.setItem("text-9", textArea9.value)
  //   } else if 
  //     (buttonVal === 2) {
  //       localStorage.setItem("text-10", textArea10.value)
  //   } else if 
  //     (buttonVal === 3) {
  //       localStorage.setItem("text-11", textArea11.value)
  //   } else if 
  //     (buttonVal === 4) {
  //     localStorage.setItem("text-12", textArea12.value)
  //   } else if 
  //     (buttonVal === 5) {
  //     localStorage.setItem("text-13", textArea13.value)
  //   } else if 
  //     (buttonVal === 6) {
  //     localStorage.setItem("text-14", textArea14.value)
  //   } else if 
  //     (buttonVal === 7) {
  //     localStorage.setItem("text-15", textArea15.value)
  //   } else if 
  //     (buttonVal === 8) {
  //     localStorage.setItem("text-15", textArea16.value)
  //   } else if 
  //     (buttonVal === 9) {
  //     localStorage.setItem("text-17", textArea17.value)
  //   }
  // })

  
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
