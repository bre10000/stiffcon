let stats = document.getElementById('stats-section');

window.onscroll = function() {startcount()};

let target_budget = new countUp.CountUp('target-budget', 467);
let target_average = new countUp.CountUp('target-average', 8.3);
let target_expected = new countUp.CountUp('target-expected', 4.7);

function startcount() {
  myFunction();
  if(isInViewport(stats)){
    if (!target_budget.error) {
      target_budget.start();
      target_average.start();
      target_expected.start();
      } else {
        console.error(target_budget.error);
      }
  }
}


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}