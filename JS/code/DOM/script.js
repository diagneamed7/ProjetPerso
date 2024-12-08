const a = document.getElementById('Sec');
const b = document.getElementsByClassName('h');
const c = document.getElementsByTagName('p');
 const f = document.querySelector('Sec');

 b.textContent = "Autres"
 
// const li = document.createElement('li');
// li.textContent = 'Vous';
// const ul = a.querySelector('ul'); // Sélection de la liste <ul> dans la section 'Sec'
// ul.appendChild(li);
//  const li2 = document.createElement('li');
//  li2.textContent = "ILS";
//  ul.appendChild(li2);



const btn = a.querySelectorAll('.button');

btn.forEach(button => {
    button.addEventListener("click", function(){
        const li = button.parentElement;
        li.remove();
    })
});
const btnm = a.querySelectorAll('.modif');

btnm.forEach(buton =>{
buton.addEventListener("click", function(){
    const li = buton.parentElement;
    const lin = li.textContent = prompt('entrer toi');
    li.replaceWith(lin);

})
})