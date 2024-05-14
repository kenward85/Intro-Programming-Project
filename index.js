document.addEventListener('DOMContentLoaded', function() {
    
    var today = new Date();        
    var thisYear = today.getFullYear(); 
    var footer = document.querySelector('footer');
    if (!footer) {
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
});


    

