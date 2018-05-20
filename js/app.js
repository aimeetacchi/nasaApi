let results = document.querySelector('.results');
let searchNasa = document.querySelector('#searchNasa');
let search = document.querySelector('#search');
let button = searchNasa.querySelector('#submit');
let clear = document.querySelector('#clear');

// Clears Search ===
clear.addEventListener('click', () =>{
	console.log('clearing search')
	results.innerHTML = '';
});

// When submit button is clicked, it will search the nasa API for images based on search vaule.
button.addEventListener('click', (e) => {
	results.innerHTML = '';
	e.preventDefault();
	let image = search.value;
	// console.log(image);
	
	// Fetch API CALL
	fetch(`https://images-api.nasa.gov/search?q=${image}`)
	.then(res => res.json())
	.then(data => {
		let items = data.collection['items'];
		
		//forEach loop through items data.
		for(let i = 0; i < items.length - 80; i++){
			let linksArr = items[i].links;
			linksArr.forEach((el)=>{

				// getting the href of link.
				console.log(el.href);
				let imgHref = el.href;

				// create an image element
				var img = document.createElement('img');
				// set the img src to the imgHref
				img.src = imgHref;
				console.log(img)

				// ==== Check for just jpg and jpeg files only.
				// var allowedExtensions = /(\.jpg|\.jpeg)$/i;
				// if (allowedExtensions.exec(img)) {
				 results.appendChild(img);
				// }
			})
		}	  	
	})
	.catch(error => console.log(error));
});