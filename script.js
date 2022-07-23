const [numsInput, fnInput] = document.querySelectorAll('input')
const output = document.querySelector('output')

numsInput.oninput = fnInput.oninput = () =>
	output.innerText = getNumbers().map(getFn());

function getNumbers() {
	const nums = numsInput.value.trim().split(/ *, */);

	return nums.map(Number);
}

function getFn() {
	const arrForConstructor = fnInput.value.trim().split('=>');

	return Function(arrForConstructor[0], 'return ' + arrForConstructor[1])
}