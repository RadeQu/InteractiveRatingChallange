const btnToEnd = document.getElementById("BtnToThank");
const votePage = document.getElementById("FirstPage");
const thanksPage = document.getElementById("SecPage");
const numberVoted = document.getElementById("VotedNumber");
const btns = document.querySelectorAll("button");

for (const value of btns) {
	value.addEventListener("click", e => {
		if (value.classList.contains("actived")) {
			for (let i = 0; i < btns.length; i++) {
				btns.forEach(rem => rem.classList.remove("actived"));
			}
			return (
				e.target.classList.add("actived"),
				(numberVoted.textContent = e.target.textContent),
				console.log(numberVoted.textContent)
			);
		} else {
			btns.forEach(rem => rem.classList.remove("actived"));
			e.target.classList.add("actived");
			return (
				(numberVoted.textContent = e.target.textContent),
				console.log(numberVoted.textContent)
			);
		}
	});
}

btnToEnd.addEventListener(
	"click",
	(change = () => {
		if ((votePage.style.display = "block") && numberVoted.textContent !== "") votePage.style.display = "none";
		thanksPage.style.display = "block";
		if (numberVoted.textContent === "") {
			alert("Please rate us!")
			thanksPage.style.display = "none";
		}
	})
);
