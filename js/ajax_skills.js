const blockSkillsOne = document.querySelector('#blockSkillsOne');
const blockSkillsTwo = document.querySelector('#blockSkillsTwo');

// fetching skills from box one
fetch('https://my-json-server.typicode.com/karon16/KDA-Projet-Portfolio/skills')
.then(
    function(response){
        return response.json();
    }  
).then(function (skills) {
    for (const skill of skills) {
        const skillsOne = skill.skillsOne;
        for(const element of skillsOne){
            // creating elements
            const skillContainer = document.createElement('div');

            const skillLabel = document.createElement('label');
            skillLabel.classList.add("skills__name", "skills__name--size", "label--font-family");
            skillLabel.setAttribute('for', `${element.id}`);
            skillLabel.textContent = `${element.skillName}`;

            const skillProgrssBar = document.createElement('progress');
            skillProgrssBar.classList.add("progress__bar", "progress__bar--settings");
            skillProgrssBar.setAttribute('id', `${element.id}` )
            skillProgrssBar.setAttribute('value', `${element.skillValue}`);
            skillProgrssBar.setAttribute('max', 100);
            skillProgrssBar.textContent = `${element.skillValue}%`

            // ading element to main container
            skillContainer.appendChild(skillLabel);
            skillContainer.appendChild(skillProgrssBar);


            blockSkillsOne.appendChild(skillContainer);
        };


        let skillsTwo = skill.skillsTwo;
        // console.log(skillsTwo)
        for (const element of skillsTwo) {
            // creating elements
            const skillContainer = document.createElement('div');

            const skillLabel = document.createElement('label');
            skillLabel.classList.add("skills__name", "skills__name--size", "label--font-family");
            skillLabel.setAttribute('for', `${element.id}`);
            skillLabel.textContent = `${element.skillName}`;

            const skillProgrssBar = document.createElement('progress');
            skillProgrssBar.classList.add("progress__bar", "progress__bar--settings");
            skillProgrssBar.setAttribute('id', `${element.id}` )
            skillProgrssBar.setAttribute('value', `${element.skillValue}`);
            skillProgrssBar.setAttribute('max', 100);
            skillProgrssBar.textContent = `${element.skillValue}%`

            // ading element to main container
            skillContainer.appendChild(skillLabel);
            skillContainer.appendChild(skillProgrssBar);


            blockSkillsTwo.appendChild(skillContainer);
        }

    }
})

