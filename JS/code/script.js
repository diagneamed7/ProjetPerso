// /*
// async function initialiserColis(destinataire) {
//   console.log("Votre colis est en cour d'initialisation");
//   const colis = await new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//     const  colis = {
//         id : Date.now(),
//         name : destinataire,
//         etat : 'initial'
//       };
//       resolve(colis);
//     },2000)
//   })
//   console.log(`Votre colis  a été créer avec comme id ${colis.id},  comme destinataire ${colis.name}, en etat ${colis.etat}`);
//   return colis;
// }


// //pour la livraison

// async function expedition(colis) {
//   await new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       if(Math.random()< 0.2){
//         return reject (new Error('expédition échoué'))
//       } resolve('expedition reussit');
//     },3000)
//   })
// }
// initialiserColis('Momo');
// expedition('Momo');*/


// //fonction fléche
// const ll = (a,b) => a+b;
// console.log(ll(1,45));





// // const tab = [12,56,98];
// // for( i = 0; i<= tab.length - 1; i++ ){

// //   console.log(i);
// // }

// //fonction ^palyndrome
// // function Palyn(mot) {
// //   Nmot = mot.split('').reverse('').join('');

// //   if (Nmot == mot) {
// //     console.log('Vrai')
// //   } else {
// //     console.log('Faux')
// //   }

// // }
// //   Palyn('awa');

// const name ='BBBB';
// const age = 17;
// console.log(`Votre nom ${name} et votre age ${age}`);
// console.log(name.substring(0,2));


//ArrAY
//const a = new Array (17,'HH',45);

// const a =  ['AA',67,88,'BB'];
//  a.push('Moi');
// // a.forEach(element => {
// //   console.log(element);
// // });
// a.map(element => {
//   if( typeof(element) == Number){
//     console.log(element);
//   }
// });


const ul = document.querySelectorAll('.it');
ul.firstElementChild.textContent = (`Hello`);
