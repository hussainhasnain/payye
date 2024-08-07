

// Mobile Navigation

const menuButton = document.querySelector(".mobileNav__button");
const payyeSidebar = document.querySelector(".payye__sidebar");

menuButton.addEventListener("click", function(){
    payyeSidebar.classList.toggle("payye__sidebar--open");
});


// const mediaQuery = window.matchMedia('(min-width: 900px)');

// Check the window width 
// if (mediaQuery.matches) {
//   payyeSidebar.classList.remove('payye__sidebar--open');
// }

window.addEventListener("resize", function(){
  
  if(window.innerWidth > 900){
    payyeSidebar.classList.remove("payye__sidebar--open");
  }
});

/* ============== Reload Button Functionality starts =============== */

const reloadButton = document.querySelector(".payye__area--heading-reload");
reloadButton.addEventListener("click", function(){
  window.location.reload();
});

/* ============== Reload Button Functionality Ends =============== */


/* ============== Toggling the Active class on sidebar elements =============== */

const sidebarLinks = document.querySelectorAll(".sidebar__link");

sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Remove the active class from all links
        sidebarLinks.forEach(function(link) {
          
            link.classList.remove("sidebar__link--active");
            
        });
        // Add the active class to the clicked link
        link.classList.add("sidebar__link--active");

    });
});

/* ============== Toggling the Active class on sidebar elements Ends =============== */


/* ============== Tippy JS Starts =============== */

// General Report Section 
tippy('.general__icons--percentage-1', {
  content: '33% Higher than last month',
  animation: 'shift-away',
});

tippy('.general__icons--percentage-2', {
  content: '2% Lower than last month',
  animation: 'shift-away',
});

tippy('.general__icons--percentage-3', {
  content: '12% Higher than last month',
  animation: 'shift-away',
});

tippy('.general__icons--percentage-4', {
  content: '22% Higher than last month',
  animation: 'shift-away',
});


// Products Section


tippy('.products__user--1', {
  content: 'Uploaded at 7 December 2020',
  animation: 'shift-away',
});

tippy('.products__user--2', {
  content: 'Uploaded at 20 September 2020',
  animation: 'shift-away',
});

tippy('.products__user--3', {
  content: 'Uploaded at 9 June 2021',
  animation: 'shift-away',
});

tippy('.products__user--4', {
  content: 'Uploaded at 13 January 2022',
  animation: 'shift-away',
});

tippy('.products__user--5', {
  content: 'Uploaded at 6 February 2020',
  animation: 'shift-away',
});

tippy('.products__user--6', {
  content: 'Uploaded at 15 March 2023',
  animation: 'shift-away',
});

tippy('.products__user--7', {
  content: 'Uploaded at 20 April 2022',
  animation: 'shift-away',
});

tippy('.products__user--8', {
  content: 'Uploaded at 2 May 2020',
  animation: 'shift-away',
});

tippy('.products__user--9', {
  content: 'Uploaded at 23 June 2023',
  animation: 'shift-away',
});

tippy('.products__user--10', {
  content: 'Uploaded at 10 July 2022',
  animation: 'shift-away',
});

tippy('.products__user--11', {
  content: 'Uploaded at 4 August 2021',
  animation: 'shift-away',
});

tippy('.products__user--12', {
  content: 'Uploaded at 10 September 2023',
  animation: 'shift-away',
});

/* ============== Tippy JS Ends =============== */

/* ============== AOS Initialization =============== */

AOS.init();

/* ============== AOS Initialization Ends =============== */

// Navbar functionality

const sidebar2Links = document.querySelectorAll(".sidebar2__link");

sidebar2Links.forEach(function(link) {
    link.addEventListener("click", function() {
        // Remove the active class from all links
        sidebar2Links.forEach(function(link) {
            link.classList.remove("sidebar2__link--active");
        });
        // Add the active class to the clicked link
        link.classList.add("sidebar2__link--active");
    });
});



/* ===== Users list menu toggle ===== */

const sidebarLinkUsers = document.querySelector(".sidebar__link--users");
// console.log(sidebarLinkUsers);
const sidebarListUsers = document.querySelector(".sidebar2__usersList");
// console.log(sidebarListUsers);

sidebarLinkUsers.addEventListener("click", function(){
    console.log('user is clicked');
    sidebarListUsers.classList.toggle("sidebar2__usersList--open");
});

/* ===== Profiles list menu toggle ===== */

const sidebarLinkProfile = document.querySelector(".sidebar__link--profile");
// console.log(sidebarLinkProfile);
const sidebarListProfile = document.querySelector(".sidebar2__profileList");
// console.log(sidebarListProfile);

sidebarLinkProfile.addEventListener("click", function(){
    console.log('profile is clicked');


    sidebarListProfile.classList.toggle("sidebar2__profileList--open");
    // sidebarListProfile.classList.add('animate__animated', 'animate__slideInDown');
    
});


/* ===== Section Sales Report Start ===== */

/* ============== Line Chart Starts ============= */
(function() {
    "use strict";

    // Check if the element with id 'report-line-chart' exists
    if (document.getElementById("report-line-chart")) {
        // Get the context of the canvas element we want to select
        let ctx = document.getElementById("report-line-chart").getContext("2d");

        // Create a new Chart instance
        let chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "# of Votes",
                    data: [0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100, 900, 1200],
                    borderWidth: 2,
                    borderColor: "rgba(35, 62, 150, 0.8)",
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                }, {
                    label: "# of Votes",
                    data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
                    borderWidth: 2,
                    borderDash: [2, 2],
                    borderColor: 'rgba(100, 116, 139, 0.6)',
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 12
                            },
                           
                            color: 'rgba(100, 116, 139, 0.8)'
                        },
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 12
                            },
                            color: 'rgba(100, 116, 139, 0.8)',
                            callback: function(value, index, values) {
                                return "$" + value;
                            }
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.3)'
                        },
                        border: {
                            dash: [2, 2],
                            display: false
                        }
                    }
                }
            }
        });
    }
})();


/* ============== Line Chart Ends ============= */


/* ============== Pie Chart Starts ============= */
const payyePieChart = document.getElementById('report-pie-chart');

const pieData = {
    labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
    datasets: [{
    //   label: 'My First Dataset',
      data: [15, 10, 65],
      backgroundColor: [
        'rgb(249, 115, 29)',
        'rgb(255, 205, 86)',
        'rgb(35, 62, 150)'
      ],
      borderWidth: 5,
      hoverOffset: 4
    }]
  };
  
new Chart(payyePieChart, {
type: 'pie',
data: pieData,
options: {
    maintainAspectRatio: true,
    
    plugins: {
        legend: {
            display: false
        }
    }
    
    }
});
/* ============== Pie Chart Ends ============= */

/* ============== Donut Chart Starts ============= */
    const payyeDonutChart = document.getElementById('report-donut-chart');

    const donutData = {
        labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
        datasets: [{
        //   label: 'My First Dataset',
          data: [15, 10, 65],
          backgroundColor: [
            'rgb(249, 115, 29)',
            'rgb(255, 205, 86)',
            'rgb(35, 62, 150'
          ],
          borderWidth: 5,
          hoverOffset: 4
        }]
      };

new Chart(payyeDonutChart, {
    type: 'doughnut',
    data: donutData,
    options: {
    maintainAspectRatio: true,
    
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: "80%"
    
    }
});

/* ============== Donut Chart Ends ============= */

/* ===== Section Sales Report Ends ===== */



/* ============== Section Target Starts here ============= */

/* ============== 1st Donut Chart of Target's section starts ============= */
    const targetDonutChart = document.getElementById('target-donut-chart');

    const donutData2 = {
        labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
        datasets: [{
        //   label: 'My First Dataset',
          data: [15, 10, 65],
          backgroundColor: [
            'rgb(249, 115, 29)',
            'rgb(255, 205, 86)',
            'rgb(35, 62, 150'
          ],
          borderWidth: 2,
          hoverOffset: 4
        }]
      };


new Chart(targetDonutChart, {
    type: 'doughnut',
    data: donutData2,
    options: {
    maintainAspectRatio: true,
    
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: "83%"
    
    }
});

/* ============== 1st Donut Chart of Target's section Ends ============= */


/* ============== 1st Line Chart of Target's section Starts ============= */
(function() {
    "use strict";

    // Check if the element with id 'target-line-chart' exists
    if (document.getElementById("target-line-chart")) {
        // Get the context of the canvas element we want to select
        let ctx = document.getElementById("target-line-chart").getContext("2d");

        // Create a new Chart instance
        let chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "# of Votes",
                    data: [0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100, 900, 1200],
                    borderWidth: 2,
                    borderColor: "rgba(35, 62, 150, 0.8)",
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                    display: false
                    }
                },
            scales: {
                x: {
                  ticks: {
                    display: false
                  },
                  grid: {
                    display: false
                  },
                  border: {
                    display: false
                  }
                },
                y: {
                  ticks: {
                    display: false
                  },
                  grid: {
                    display: false
                  },
                  border: {
                    display: false
                  }
                }
              }
            }
        });
    }
})();

/* ============== 1st Line Chart of Target's section Ends ============= */



/* ============== 2nd Donut Chart of Target's section Starts ============= */
const targetDonutChart2 = document.getElementById('target-donut-chart2');

const donutDataSales = {
    labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
    datasets: [{
    //   label: 'My First Dataset',
      data: [15, 10, 65],
      backgroundColor: [
        'rgb(249, 115, 29)',
        'rgb(255, 205, 86)',
        'rgb(35, 62, 150'
      ],
      borderWidth: 2,
      hoverOffset: 4
    }]
  };

new Chart(targetDonutChart2, {
    type: 'doughnut',
    data: donutDataSales,
    options: {
    maintainAspectRatio: true,
    
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: "83%"
    
    }
});

/* ============== 2nd Donut Chart of Target's section Ends ============= */



/* ============== 2nd Line Chart of Target's section Starts ============= */
(function() {
    "use strict";

    // Check if the element with id 'target-line-chart2' exists
    if (document.getElementById("target-line-chart2")) {
        // Get the context of the canvas element we want to select
        let ctx = document.getElementById("target-line-chart2").getContext("2d");

        // Create a new Chart instance
        let chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "# of Votes",
                    data: [0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100, 900, 1200],
                    borderWidth: 2,
                    borderColor: "rgba(35, 62, 150, 0.8)",
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                    display: false
                    }
                },
            scales: {
                x: {
                  ticks: {
                    display: false
                  },
                  grid: {
                    display: false
                  },
                  border: {
                    display: false
                  }
                },
                y: {
                  ticks: {
                    display: false
                  },
                  grid: {
                    display: false
                  },
                  border: {
                    display: false
                  }
                }
              }
            }
        });
    }
})();
/* ============== 2nd Line Chart of Target's section Ends ============= */


/*========== Select Dropdown Functionality in Category =========*/

const dd = document.querySelector('#dropdown-wrapper');
const links = document.querySelectorAll('.dropdown-list a');
const span = document.querySelector('.dropdown__span');


dd.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  this.classList.toggle('is-active');
});

// Add click event listeners to the links
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    span.innerHTML = evt.currentTarget.textContent;
    dd.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  dd.classList.remove('is-active');
});

/*======= Select Dropdown Functionality in Category Ends ======*/


/*================= Date Range Calendar Starts =================*/

$(function() {
     // Calculate the start and end dates
     var startDate = moment().subtract(31, 'days');
     var endDate = moment();
 
     // Format the start and end dates as "MMMM DD, YYYY"
     var formattedStartDate = startDate.format('MMM D, YYYY');
     var formattedEndDate = endDate.format('MMM D, YYYY');
 
     // Set the initial value of the input element as the last 30 days range
     var formattedInitialDateRange = formattedStartDate + ' - ' + formattedEndDate;
  
    $('#e1').daterangepicker({
      initialText: formattedInitialDateRange,
      clearButtonText: '',
      presetRanges: [
          { text: 'Today', dateStart: function() { return moment(); }, dateEnd: function() { return moment(); } },
          { text: 'Yesterday', dateStart: function() { return moment().subtract(1, 'days'); }, dateEnd: function() { return moment().subtract(1, 'days'); } },
          { text: 'Last 7 Days', dateStart: function() { return moment().subtract(6, 'days'); }, dateEnd: function() { return moment(); } }
      ],
      applyOnMenuSelect: true,
      // dateFormat: formattedCurrentDate,
      datepickerOptions: {
          maxDate: 0,
          numberOfMonths: 2,
          
      },
      onChange: function() {
          var dateRangeValue = $('#e1').val();
          try {
            var dateRange = JSON.parse(dateRangeValue);
            var startDate = moment(dateRange.start).format('MM DD, YYYY');
            var endDate = moment(dateRange.end).format('MM DD, YYYY');
            var formattedDateRange = startDate + ' - ' + endDate;
            $('#e1').val(formattedDateRange);
            console.log("Selected range: Start Date - " + startDate + ", End Date - " + endDate);
        } catch (e) {
            console.error("Error parsing date range: ", e);
        }
      }
    });
  });

/*================= Date Range Calendar Ends =================*/


/*======= Swiper of Important Notes Section Starts ========*/

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.notes__nav--right',
    prevEl: '.notes__nav--left',
  },

});

/*======= Swiper of Important Notes Section Ends ========*/
