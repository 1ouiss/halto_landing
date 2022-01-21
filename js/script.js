let cardList = []

fetch('../team.json')
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        const team = document.querySelector('#team')
        const teamMember = document.createElement('div')
        teamMember.classList.add('team-member')
        const image = document.createElement('div')
        image.classList.add('image')
        const img = document.createElement('img')
        img.src = element.photo
        image.append(img)
        const textMember = document.createElement('div')
        textMember.classList.add('text-personne')
        const name = document.createElement('h4')
        const fonction = document.createElement('p')
        name.textContent = element.name
        fonction.textContent = element.fonction
        textMember.append(name, fonction)
        teamMember.append(image, textMember)
        team.append(teamMember)
        });
    })