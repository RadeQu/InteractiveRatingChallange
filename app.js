const btnToEnd = document.getElementById("BtnToThank");
const votePage = document.getElementById("FirstPage");
const thanksPage = document.getElementById("SecPage");
let rate1 = document.getElementById("rateForOne");
let rate2 = document.getElementById("rateForTwo");
let rate3 = document.getElementById("rateForThree");
let rate4 = document.getElementById("rateForFour");
let rate5 = document.getElementById("rateForFive");
const numberVoted = document.getElementById("VotedNumber");
const checkIfClassActive = (z, c, b, n, m) => {
	if (
		m.classList.contains("actived") ||
		n.classList.contains("actived") ||
		b.classList.contains("actived") ||
		c.classList.contains("actived")
	) {
		return (
			m.classList.remove("actived"),
			c.classList.remove("actived"),
			b.classList.remove("actived"),
			n.classList.remove("actived"),
			z.classList.add("actived")
		);
	} else {
		z.classList.add("actived");
	}
};

const setNumber = num => {
	if (num >= 1) {
		numberVoted.textContent = `${num}`;
	} 
};

rate1.addEventListener("click", () => {
	let number = 1;
	checkIfClassActive(rate1, rate2, rate3, rate4, rate5);
	return setNumber(number);
});

rate2.addEventListener("click", () => {
	let number = 2;
	checkIfClassActive(rate2, rate1, rate3, rate4, rate5);
	return setNumber(number);
});

rate3.addEventListener("click", () => {
	let number = 3;
	checkIfClassActive(rate3, rate2, rate1, rate4, rate5);
	return setNumber(number);
});
rate4.addEventListener("click", () => {
	let number = 4;
	checkIfClassActive(rate4, rate2, rate3, rate1, rate5);
	return setNumber(number);
});
rate5.addEventListener("click", () => {
	let number = 5;
	checkIfClassActive(rate5, rate2, rate3, rate4, rate1);
	return setNumber(number);
});

btnToEnd.addEventListener("click",
	(change = () => {
		if ((votePage.style.display = "block")) votePage.style.display = "none";
		thanksPage.style.display = "block";
		if (numberVoted.textContent === "") {
			numberVoted.textContent = "0";
		}
	})
);
