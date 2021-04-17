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
        let skillsOne 
        // const skillsTwo 

        if (skillsOne = skill.skillsOne) {
            for(const element of skillsOne){
                // creating elements
                const skillContainer = document.createElement('div');

                const skillTextContainer = document.createElement('div');
                skillTextContainer.classList.add("skills__text--flex");
    
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

                const skillPercent = document.createElement('span');
                skillPercent.classList.add("skills__name", "skills__name--size", "label--font-family");
                skillPercent.textContent = `${element.skillValue}%`;
    
                // ading element to main container
                skillTextContainer.appendChild(skillLabel);
                skillTextContainer.appendChild(skillPercent);

                skillContainer.appendChild(skillTextContainer);
                
                skillContainer.appendChild(skillProgrssBar);
    
    
                blockSkillsOne.appendChild(skillContainer);
                
            };
            // console.log(skillsOne)
        }

        let skillsTwo ;
        if (skillsTwo = skill.skillsTwo) {
            // console.log(skillsTwo)
        for (const element of skillsTwo) {
            // creating elements
            const skillContainer = document.createElement('div');

            const skillTextContainer = document.createElement('div');
            skillTextContainer.classList.add("skills__text--flex");

            const skillLabel = document.createElement('label');
            skillLabel.classList.add("skills__name", "skills__name--size", "label--font-family");
            skillLabel.setAttribute('for', `${element.id}`);
            skillLabel.textContent = `${element.skillName}`;

            const skillPercent = document.createElement('span');
            skillPercent.classList.add("skills__name", "skills__name--size", "label--font-family");
            skillPercent.textContent = `${element.skillValue}%`;

            const skillProgrssBar = document.createElement('progress');
            skillProgrssBar.classList.add("progress__bar", "progress__bar--settings");
            skillProgrssBar.setAttribute('id', `${element.id}` )
            skillProgrssBar.setAttribute('value', `${element.skillValue}`);
            skillProgrssBar.setAttribute('max', 100);
            skillProgrssBar.textContent = `${element.skillValue}%`

            // ading element to main container
            skillTextContainer.appendChild(skillLabel);
            skillTextContainer.appendChild(skillPercent);

            skillContainer.appendChild(skillTextContainer);
            skillContainer.appendChild(skillProgrssBar);


            blockSkillsTwo.appendChild(skillContainer);
        }
        }
    }
})