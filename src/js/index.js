const main = document.getElementById("main");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const dots = Array.from(document.querySelectorAll(".dots .dot"));

// Data about slide
const data = {
	current: 0,
	images: [
		// Put your slides here
		"images/img1.jpg",
		"images/img2.jpg",
		"images/img3.jpg",
		"images/img4.jpg",
		"images/img5.jpg",
		"images/img6.jpg",
		"images/img7.jpg",
		"images/img8.jpg",
		"images/img9.jpg",
		"images/img10.jpg",
	]
};

rightBtn.addEventListener("click", () => {
	data.current++;
	if (data.current >= data.images.length) {
		data.current = 0;
	}
	update();
});

leftBtn.addEventListener("click", () => {
	data.current--;
	if (data.current < 0) {
		data.current = data.images.length - 1;
	}
	update();
});

function update() {
	dots.forEach(dot => {
		dot.classList.remove("active");
	});
	dots[data.current].classList.add("active");
	main.src = data.images[data.current];
}

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		data.current = i;
		dots.forEach(dot => {
			dot.classList.remove("active");
		});
		dot.classList.add("active");
		main.src = data.images[i];
	});
});