window.addEventListener("DOMContentLoaded", function () {
	let headerItems = document.querySelectorAll(".headerItem");

	function removeClass() {
		headerItems.forEach((item) => {
			item.classList.remove("selectedItem");
		});
	}

	headerItems.forEach((item) => {
		item.addEventListener("click", function (e) {
			removeClass();
			e.target.classList.add("selectedItem");
		});
	});


  
	function easterEgg() {
		document.querySelector(".counriesContainer").style.cssText = "display: none";
    let div = document.createElement("div");
		div.className = "easterEgg";
		div.insertAdjacentHTML('afterbegin', '<strong>Россия</strong>');
		div.insertAdjacentHTML('beforeend', '<strong>Популяция: 7 827 000 000</strong>');

		document.body.append(div);
	}

	let arrKey = [];
	document.addEventListener("keydown", function (e) {
		if (e.code === "KeyR") {
			arrKey[0] = 1;
		}
		else if (e.code === "KeyU" && arrKey[0] === 1) {
			arrKey[1] = 2;
    }
		else if (e.code === "KeyS" && arrKey[1] === 2) {
			arrKey[0] = 0;
			arrKey[1] = 1;
			easterEgg();
    }
    else {
      arrKey[0] = 0;
			arrKey[1] = 1;
    }
	});
});
