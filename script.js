var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var address_1 = addressElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        var username = usernameElement.value;
        //create path
        var uniquePath_1 = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        if (profilePictureFile) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                var profilePictureBase64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                // Create resume output
                var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureBase64 ? "<img src=\"".concat(profilePictureBase64, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong><span id=\"edit-name\"class=\"editable\"> ").concat(name_1, "</span></p>\n        <p><strong>Email:</strong><span id=\"edit-email\"class=\"editable\"> ").concat(email_1, "</span></p>\n        <p><strong>Phone Number:</strong><span id=\"edit-phone\"class=\"editable\"> ").concat(phone_1, "</span></p>\n        <p><strong>Address:</strong> <span id=\"edit-address\"class=\"editable\">").concat(address_1, "</span></p>\n\n        <h3>Education</h3>\n        <p id=\"edit-education\"class=\"editable\">").concat(education_1, "</p>\n\n        <h3>Work Experience</h3>\n        <p id=\"edit-experience\"class=\"editable\">").concat(experience_1, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skills\"class=\"editable\">").concat(skills_1, "</p>\n        ");
                //create download function
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/htm;charset=utf-8,' + encodeURIComponent(resumeOutput);
                downloadLink.download = uniquePath_1;
                downloadLink.textContent = 'Download C.V';
                //resume output
                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    resumeOutputElement.classList.remove('hidden');
                    makeEditable();
                    resumeOutputElement.appendChild(downloadLink);
                }
            };
            reader.readAsDataURL(profilePictureFile);
        }
        else {
            console.error('One or more form elements are missing');
        }
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove;
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus;
            }
        });
    });
}
