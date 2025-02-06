// api documentation: https://whois.fdnd.nl/docs/

// 1 persoon: https://fdnd.directus.app/items/person/67
// iedereen: https://fdnd.directus.app/items/person/?fields=id,name,github_handle,avatar&filter={%22squads%22:{%22squad_id%22:{%22name%22:%22Minor%20Web%20Dev%22}}}&sort=name

const baseURL = 'https://fdnd.directus.app/';


const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';
const endpointMe = 'items/person/221';
// hier beschrijven we de url die we willen gebruiken om mijn data te vinden
const urlMe = baseURL + endpointMe;
// hier zetten we de twee url's die we hebben om data op te halen in een variabele

console.log(urlMe);



getData(urlMe).then( dataget => {
	console.log(dataget.data);
	const myData = dataget.data;
	const myName = myData.name;
	const myImgSrc = myData.avatar;
	const myDate = myData.birthdate;
	// hier maken we de variabelen die we nodig hebben een constanten.

	const mySection = document.querySelector('section:nth-of-type(1)');
	const myh1 = document.querySelector('h1');

	myh1.textContent = myName;

	if (!myImgSrc) {
		 			myImgSrc = "images/placeholder1.svg";
		 		}


	const myImg = document.createElement("img");
	const myp = document.createElement("p");

	myImg.src = myImgSrc;
	myImg.alt = myName;

	mySection.append(myImg);
	mySection.append(myDate);

});

const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

UrlDing = baseURL + endpointSquad;




	getData(UrlDing).then( allDataGet => { 
	
		const list = document.querySelector('section:nth-of-type(2)');
		
		console.log(allDataGet.data);

		const allPersons = allDataGet.data;
		console.log(allPersons.data);

		allPersons.forEach(person => {

			const personName = person.name;
			let personImgSrc = person.avatar;
			let personWebsite = person.website;

			if ( personImgSrc ) {

			} else {
				const randomNr = Math.floor( Math.random() * 5 ) + 1;
				personImgSrc = `images/placeholder${randomNr}.svg`;
			}

			if ( personWebsite ) {
			} else {
				personWebsite = fallbackWebsite;
			}

		let personHtml = `<article>
		<h3>${personName}</h3>
		<img src="${personImgSrc}" alt="${personName}">
		<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
		</article>`;

		list.insertAdjacentHTML('beforeend', personHtml);
	
});

})











/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/

// generieke functie om data aan een API te vragen
// deze kun je keer op keer hergebruiken
// nb. in het echt iets complexer --> bijv ook rekening houden met fouten

// 1. doe een verzoek aan de API om data
// 2. ga verder als de API antwoord geeft
// 3. als het goed gaat krijg je een 'response'-object met data terug
// 3. daarmee kun je nog niet aan de slag
// 4. het 'response'-object zet je om naar JSON
// 4. met JSON kun je aan de slag in jouw JS
// 5. als de response is omgezet naar JSON kun je weer verder
// 6. de naam van de naar JSON omgezette info is 'jsonData'
// 6. Die naam mag je overigens zelf verzinnen
// 7. de JSON ('jsonData') geef je terug aan de 'getData' functie
// 8. de 'getData' functie geeft de 'jsonData' terug aan de functie die om de data vroeg
// 9. async betekent dat terwijl de data wordt opgehaald er andere dingen gedaan kunnen worden
// 9. op het moment dat de data er is geeft de functie een seintje
// 9. dan kun je dan wat met de data gaan doen

async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}



/**************/
/* SPIEKBRIEF */
/**************/

// const h1 = document.querySelector('h1');

// getMyName();

// function getMyName() {
// 	getData(urlMe).then( data => {  

// 		const myData = data.data;
// 		let myName = myData.name;

// 		h1.textContent = myName;
// 	});	
// }