let points = 0;
const pointsDisplay = document.getElementById('points');
const lastActionDisplay = document.getElementById('last-action');

// Forms
const problemForm = document.getElementById('problem-form');
const offPeakForm = document.getElementById('offpeak-form');
const greenerForm = document.getElementById('greener-form');

// Inputs
const stationUnique = document.getElementById('station-unique');
const timeUnique = document.getElementById('time-unique');
const fromStation = document.getElementById('from');
const toStation = document.getElementById('to');
const problemStation = document.getElementById('problem-station');
const problemIssue = document.getElementById('problem-issue');

// Update Dashboard
function updateDashboard(action) {
  pointsDisplay.innerText = points;
  lastActionDisplay.innerText = action;
}

// Problem Report Form
problemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const station = problemStation.value.trim();
  const issue = problemIssue.value.trim();

  if (station && issue) {
    alert(`Problem reported at ${station}: ${issue}`);
    points += 5;
    updateDashboard('Reported a Problem (+5 points)');
    problemForm.reset();
  }
});

// Off-Peak Form
offPeakForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const station = stationUnique.value.trim();
  const time = timeUnique.value.trim();

  if (station && time) {
    points += 10;
    updateDashboard(`Traveled off-peak at ${station} around ${time} (+10 points)`);
    offPeakForm.reset();
  }
});

// Greener Route Form
greenerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const from = fromStation.value.trim();
  const to = toStation.value.trim();

  if (from && to) {
    points += 15;
    updateDashboard(`Chose Greener Route from ${from} to ${to} (+15 points)`);
    greenerForm.reset();
  }
});

// Redeem Rewards
const redeemButtons = document.querySelectorAll('.redeem-btn');
redeemButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cost = parseInt(button.getAttribute('data-cost'));
    const rewardName = button.getAttribute('data-reward');

    if (points >= cost) {
      points -= cost;
      updateDashboard(`Redeemed: ${rewardName} (-${cost} points)`);
      alert(`Congratulations! You redeemed a ${rewardName}! 🎉`);
    } else {
      alert(`Not enough points to redeem ${rewardName}. Keep earning! 🚇`);
    }
  });
});
const rewardsCatalog = document.getElementById('rewards-catalog');
rewardsCatalog.addEventListener('click', (e) => {
  if (e.target.classList.contains('redeem-btn')) {
    const cost = parseInt(e.target.getAttribute('data-cost'));
    const rewardName = e.target.getAttribute('data-reward');

    if (points >= cost) {
      points -= cost;
      updateDashboard(`Redeemed: ${rewardName} (-${cost} points)`);
      alert(`Congratulations! You redeemed a ${rewardName}! 🎉`);
    } else {
      alert(`Not enough points to redeem ${rewardName}. Keep earning! 🚇`);
    }
  }
});
function updateDashboard(action) {
  pointsDisplay.innerText = points;
  lastActionDisplay.innerText = action;
  updateProgressBar();
}

// New function to update progress bar
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  
  // Example: Assume 500 points = full bar
  const maxPoints = 500; 
  const percent = Math.min((points / maxPoints) * 100, 100); // Cap at 100%
  
  progressBar.style.width = `${percent}%`;
}
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const maxPoints = 500; 
  const percent = Math.min((points / maxPoints) * 100, 100);

  progressBar.style.width = `${percent}%`;

  if (percent < 30) {
    progressBar.style.background = 'red';
  } else if (percent < 70) {
    progressBar.style.background = 'orange';
  } else {
    progressBar.style.background = 'green';
  }
}
