const blockSkillsOne = document.querySelector('#blockSkillsOne');
const blockSkillsTwo = document.querySelector('#blockSkillsTwo');

// fetching skills from box one
fetch('http://localhost:3000/skillsOne')
.then(
    function(response){
        return response.json();
    }  
).then(function (skillsOne) {
    for (const skill of skillsOne) {
        
        // creating elements
        const skillContainer = document.createElement('div');

        const skillLabel = document.createElement('label');
        skillLabel.classList.add("skills__name", "skills__name--size", "label--font-family");
        skillLabel.setAttribute('for', `${skill.id}`);
        skillLabel.textContent = `${skill.skillName}`;

        const skillProgrssBar = document.createElement('progress');
        skillProgrssBar.classList.add("progress__bar", "progress__bar--settings");
        skillProgrssBar.setAttribute('id', `${skill.id}` )
        skillProgrssBar.setAttribute('value', `${skill.skillValue}`);
        skillProgrssBar.setAttribute('max', 100);
        skillProgrssBar.textContent = `${skill.skillValue}%`

        // ading element to main container
        skillContainer.appendChild(skillLabel);
        skillContainer.appendChild(skillProgrssBar);


        blockSkillsOne.appendChild(skillContainer);
    }
})

// fetching skills from box two
fetch('http://localhost:3000/skillsTwo')
.then(
    function(response){
        return response.json();
    }  
).then(function (skillsTwo) {
    for (const skill of skillsTwo) {
        
        // creating elements
        const skillContainer = document.createElement('div');

        const skillLabel = document.createElement('label');
        skillLabel.classList.add("skills__name", "skills__name--size", "label--font-family");
        skillLabel.setAttribute('for', `${skill.id}`);
        skillLabel.textContent = `${skill.skillName}`;

        const skillProgrssBar = document.createElement('progress');
        skillProgrssBar.classList.add("progress__bar", "progress__bar--settings");
        skillProgrssBar.setAttribute('id', `${skill.id}` )
        skillProgrssBar.setAttribute('value', `${skill.skillValue}`);
        skillProgrssBar.setAttribute('max', 100);
        skillProgrssBar.textContent = `${skill.skillValue}%`

        // ading element to main container
        skillContainer.appendChild(skillLabel);
        skillContainer.appendChild(skillProgrssBar);


        blockSkillsTwo.appendChild(skillContainer);
    }
})