/**
 * The logic is as follows:
 * 
 * 1) Get the contents of the textbox and split it by a space. "This, is something!" for example would be 3 words.
 * 2) Filter out words that do not have anything in them in case that make it here
 * 3) Loop through each word and each character and check if it has any meaningful data, in
 * this case I define it as any alphanumeric character. This ensures that special characters such as a hyphen or underscore
 * will not be counted as its own word
 * 4) Print that to the screen
 */ 
function calculateWords(){
	const regex = /[a-zA-Z0-9]/;

	let input = document.getElementById("wordsInput");
	let outputWords = document.getElementById("wordsCount");
	let outputCharacters = document.getElementById("characterCount");

	if(input.value == null || input.value == ""){
		outputWords.textContent = "Total Words: 0";
		outputCharacters.textContent = "Total Characters: 0";
	} 
	else {
		let words = input.value.split(" ").filter(word => word);
		let wordsActual = [];

		for(let i = 0; i < words.length; i++) {
			const word = words[i];

			for(let x = 0; x < word.length; x++) {
				const char = word[x];

				if(regex.test(char)) {
					wordsActual.push(word);
					break;
				}
			}
		}

		outputWords.textContent = "Total Words: " + wordsActual.length;
		outputCharacters.textContent = "Total Characters: " + input.value.length;
	}
}