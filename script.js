function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Programming Language', 'Skill Level'],
      ['Java', 9],
      ['HTML', 8],
      ['CSS', 8],
      ['JavaScript', 9],
      ['React', 8],
      ['Web3.js', 7],
      ['SQL', 8]
    ]);
  
    var options = {
      'title': 'My Programming Language Skills',
      'titleTextStyle': {
        'color': '#FF5555'
      },
      'width': 500,
      'height': 500,
      'backgroundColor': 'transparent',
      'legend': {
        'textStyle': {
          'color': '#FF5555'
        }
      }
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function(event) {
    var form = document.getElementById("myForm");
    if (event.target !== form && !form.contains(event.target) && event.target.className !== "open-button") {
        form.style.display = "none";
    }
});

  function scrollToTop() {
    // Scroll smoothly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Function to apply dark mode styles
  function applyDarkMode() {
    var body = document.body;
    body.classList.add("dark-mode");
    document.getElementById("darkModeCheckbox").checked = true;
  }

  // Function to apply light mode styles
  function applyLightMode() {
    var body = document.body;
    body.classList.remove("dark-mode");
    document.getElementById("darkModeCheckbox").checked = false;
  }

  // Check if dark mode is enabled and apply the appropriate styles
  var darkModeEnabled = false; // Set this to true if you want dark mode by default
  if (darkModeEnabled) {
    applyDarkMode();
  } else {
    applyLightMode();
  }

  // Function to toggle dark mode when the checkbox is clicked
  function toggleDarkMode() {
    var darkModeCheckbox = document.getElementById("darkModeCheckbox");
    if (darkModeCheckbox.checked) {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  }

  // Add an event listener to the checkbox to call the toggleDarkMode function when it's clicked
  document.getElementById("darkModeCheckbox").addEventListener("click", toggleDarkMode);

  function internetChecker() {
    var x = "Is the browser online? " + navigator.onLine;
    console.log(x);

    if (navigator.onLine) {
        alert("You are connected to the Internet, and your connection to this browser is secured.");
    } else {
        var coded = '\ud83d\ude22';
        alert("No internet connection! " + coded);
    }
}

function waitForUncheckAndShowAlert() {
    var checkbox = document.getElementById('checkbox');
  
    // If the checkbox is checked, wait for 2 seconds, then uncheck it and call internetChecker()
    if (checkbox.checked) {
        setTimeout(function() {
            checkbox.checked = false;
            internetChecker();
        }, 2000);
    }
}