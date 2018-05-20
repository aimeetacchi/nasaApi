let container = document.querySelector('.container');
let searchNasa = document.querySelector('#searchNasa');
let search = document.querySelector('#search');
let button = searchNasa.querySelector('#submit');

button.addEventListener('click', (e) => {
	e.preventDefault();
	let image = search.value;
	console.log(image);
	// Fetch API CALL
	fetch(`https://images-api.nasa.gov/search?q=${image}`)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		
		for(var i = 0;i < data.length;i++){
			var content = document.createTextNode(data[i].items);
			container.appendChild(content);  	
			
		}
	})
	.catch(error => console.log(error));
});