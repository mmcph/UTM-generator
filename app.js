// buttons
const engageSelectBtn = document.getElementById('engage-select');
const buildSelectBtn = document.getElementById('build-select');
const generateBtn = document.getElementById('generate');
const clearBtn = document.getElementById('generate');

// button listeners
engageSelectBtn.addEventListener('click', engageDisplay);
buildSelectBtn.addEventListener('click', buildDisplay);
generateBtn.addEventListener('click', generateUTMs);
clearBtn.addEventListener('click', clearUTMs);

// url input
const urlInput = document.getElementById('url-input');

// url input listener
urlInput.addEventListener('blur', validURL);

// engage stream title input
const engageTitle = document.getElementById('engage-title');
const engageTitleLabel = document.getElementById('engage-title-label');

// number of emails inputs
const numEmailsInput = document.getElementById('num-emails-input');
const numEmailsLabel = document.getElementById('num-emails-label');

// listens for change in value of numEmailsInput
numEmailsInput.addEventListener('change', displayNumNameFields);

// base title input
const emailTitle = document.getElementById('email-title-1');
const emailTitleLabel = document.getElementById('email-title-1-label');

// list where extra email fields are inserted
var emailsList = document.getElementById("email-list");



// called when 'engage' is clicked
function engageDisplay() {
  
  // display engage elements
  engageTitle.style.display = 'block';
  engageTitleLabel.style.display = 'inline';
  // engageTitleLabel.style.marginBottom = '5px !important';
  
  // display appropriate number of name fields
  displayNumNameFields();
}



// called when 'build' is clicked 
function buildDisplay() {

  // hide engage elements
  engageTitle.style.display = 'none';
  engageTitleLabel.style.display = 'none';
  
  // display appropriate number of name fields
  displayNumNameFields();
}



// check validity of URL
function validURL() {
  if (urlInput.matches(':invalid')) {
    alert('The URL you have entered is invalid.');
  }
}



// display appropriate number of email title fields
function displayNumNameFields() {

  // thanks for reading my code!
  if(Number(numEmailsInput.value) === 42) {
    document.body.innerHTML = "<h1 style='text-align:center;'>UNRESOLVED FINITE / INFINITE PARADOX ENCOUNTERED.</h1> <h1 style='text-align:center;'>YOU ARE NOT PREPARED TO ASCEND.</h1> <h1 style='text-align:center;'>DIMENSIONAL LOCK REINITIALIZING ...</h1>";
    function lockout() {
      setTimeout(function() {location.reload();}, 5000);
    }
    lockout();
    return;
  }

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 41) {
    alert("You don't need that many emails. Go ahead and click 'OK' - no fancy DOM-based alert message for you. That'll teach you to question my UX design.")
    numEmailsInput.value = 1;
  }

  // for the true trolls out there
  if(Number(numEmailsInput.value) === 0 || Number(numEmailsInput.value) < 0) {
    alert("Well, I guess your job is done, then.")
    numEmailsInput.value = 1;
  }
  
  // clear name inputs to prevent duplication
  while(emailsList.hasChildNodes()) {
    emailsList.removeChild(emailsList.lastChild);
  }

  // adds new inputs to DOM depending on value of numEmailsInput
  for (i=1; i<((Number(numEmailsInput.value)) + 1); i++) {

    newEmail = document.createElement('li');
    newEmail.innerHTML = `
    <label for="email-title-${i}" id="email-title-${i}-label">TITLE ${i}</label>
    <input type="text" name="email-title-${i}" id="email-title-${i}" data-lpignore="true">`;

    emailsList.appendChild(newEmail);
    
    newEmail.setAttribute('autocomplete', 'new-password')
  }

  // Remove redundant '1' from title input lable when only one email is needed
  if(Number(numEmailsInput.value) === 1) {
    document.getElementById('email-title-1-label').innerHTML = "TITLE";
  }

}



// generate UTM codes from input values
function generateUTMs() {

}



// display generated UTM codes in DOM
function displayUTMs() {

}



// clear out generated UTMs
function clearUTMs() {

}
