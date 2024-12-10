document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    const usernameElement = document.getElementById("username");

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement){

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const address = (addressElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;
        const username = (usernameElement as HTMLInputElement).value;

//create path
 const uniquePath =`resume/${username.replace(/\s+/g,'_')}_cv.html`

        // Handle profile picture
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        if (profilePictureFile) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const profilePictureBase64 = event.target?.result as string;
        

        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureBase64 ? `<img src="${profilePictureBase64}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong><span id="edit-name"class="editable"> ${name}</span></p>
        <p><strong>Email:</strong><span id="edit-email"class="editable"> ${email}</span></p>
        <p><strong>Phone Number:</strong><span id="edit-phone"class="editable"> ${phone}</span></p>
        <p><strong>Address:</strong> <span id="edit-address"class="editable">${address}</span></p>

        <h3>Education</h3>
        <p id="edit-education"class="editable">${education}</p>

        <h3>Work Experience</h3>
        <p id="edit-experience"class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills"class="editable">${skills}</p>
        `;

        //create download function
        const downloadLink= document.createElement('a')
        downloadLink.href = 'data:text/htm;charset=utf-8,' + encodeURIComponent(resumeOutput)
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download C.V';

//resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');
            makeEditable();
            resumeOutputElement.appendChild(downloadLink)
        } 
    };
        reader.readAsDataURL(profilePictureFile);
        
    } else {
        console.error('One or more form elements are missing');
    }
}});
function makeEditable (){
    const editableElement = document.querySelectorAll ('.editable')
    editableElement.forEach (element =>{
        element.addEventListener ('click',function(){
const currentElement = element as HTMLElement;
const currentValue = currentElement.textContent || "";

//replace content
if (currentElement.tagName ==="p"|| currentElement.tagName ==="SPAN"){
    const input = document.createElement('input')
    input.type = 'text'
    input.value = currentValue
    input.classList.add('editing-input')

    input.addEventListener('blur',function(){
        currentElement.textContent=input.value
        currentElement.style.display='inline'
        input.remove
    })

    currentElement.style.display='none'
    currentElement.parentNode?.insertBefore(input,currentElement)
    input.focus
}
    });
    });
}