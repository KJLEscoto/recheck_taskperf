
checkAge()

function checkAge() {
  let age = confirm("Are you 25 yearls old and up?")

  if (age) {
    alert("Confirmed, you are 25 years old and up!")
    numberLessThanHundred()
  }
  else {
    alert("Sorry, you are not able to proceed!")
    checkAge()
  }
}

function numberLessThanHundred() {
  number = prompt("Please enter a number:", 0)

  if (number < 100) {
    alert("You entered a number less than 100.")
  } else if (number == 100) {
    alert("You entered a number equal to 100.")
  } else {
    alert("You entered a number greater than 100.")
  }
  loopings()
}

function loopings() {
  document.write("<br><br> a. Print the numbers 0-30, one number per line. <br><br>")
  for (var i = 0; i <= 30; i++) {
    document.write(i + " <br>")
  }

  document.write("<br><br> b. Print only the even values from 0-40, one number per line. <br><br>")
  for (var i = 0; i <= 40; i++) {
    if (i % 2 === 0) {
      document.write(i + "<br>")
    }
    else {
      continue
    }
  }

  document.write("<br><br> c. Print the numbers 40 to IO in descending order, but only if the numbers are multiples of 3. <br><br>")
  for (var i = 40; i >= 10; i--) {
    if (i % 3 === 0) {
      document.write(i + ", ")
    }
    else {
      continue
    }
  }
}




