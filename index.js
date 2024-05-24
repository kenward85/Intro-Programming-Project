document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var thisYear = today.getFullYear();
    var footer = document.querySelector('footer');

   
    var section = document.createElement('section');
    if (footer) {
        document.body.insertBefore(section, footer);
    } else {
        document.body.appendChild(section);
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }

    var copyright = document.createElement('p');
    var yourName = "Kenneth Ward";
    copyright.innerHTML = "© " + thisYear + " " + yourName;
    footer.appendChild(copyright);
    console.log("Footer updated successfully with copyright information.");

    var skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
    var skillsSection = document.querySelector("#skills");
    var skillsList = skillsSection.querySelector("ul");
    if (!skillsList) {
        skillsList = document.createElement('ul');
        skillsSection.appendChild(skillsList);
    }
    for (var i = 0; i < skills.length; i++) {
        var skill = document.createElement('li');
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
    }

    
    var messageForm = document.forms['leave_message'];
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        var usersName = event.target.usersName.value;
        var usersEmail = event.target.usersEmail.value;
        var usersMessage = event.target.usersMessage.value;

        console.log(usersName, usersEmail, usersMessage);

        
        var messageSection = document.getElementById('messages');
        var messageList = messageSection.querySelector('ul');

        
        var newMessage = document.createElement('li');
        newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

       
        var removeButton = document.createElement('button');
        removeButton.innerText = "remove";
        removeButton.type = "button";
        removeButton.addEventListener('click', function() {
            var entry = removeButton.parentNode;
            entry.remove();
        });

        
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        
        messageForm.reset();
    });
});


    

