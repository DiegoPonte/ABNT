const nome = document.querySelector("#nome");
const botaoFormatar = document.querySelector(".textarea__wrapper button");


var nameArray = [];
var abntArray = [];

function breakName() {
	return (nameArray = nome.value.split(' '));
}


function sortLastName() {
	breakName();
	console.log(nameArray);
	abntArray = nameArray;
	return abntArray.unshift(
		abntArray.pop(abntArray[abntArray.length - 1]).toUpperCase() + ','
	);
}

function shortenMiddleName() {
	breakName();
	sortLastName();

	if (abntArray.length > 2) {
		const tempArray = abntArray.slice(2, abntArray.length);

		abntArray.splice(2, abntArray.length - 2);
		tempArray.forEach(element => {
			let abrev = element.charAt();

			if (
				element == "das" ||
				element == "do" ||
				element == "dos" ||
				element == "de" ||
				element == "da" ||
				element == "e"
			) {
			} else {
				
				abntArray[abntArray.length] = `${abrev.toUpperCase()}.`;
			}
		});
		result.textContent = abntArray.join(' ');
	}
}

botaoFormatar.addEventListener("click", shortenMiddleName);