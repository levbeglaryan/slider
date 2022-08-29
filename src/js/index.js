const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const dotsContainer = document.getElementById("dots");
const slideContainer = document.getElementById("slides");

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
		"images/img10.jpg"
	]
};

function setDefault() {
	// Creating main slide
	const imgComponent = document.createElement("img");
	imgComponent.src = data.images[0];
	imgComponent.id = "main";
	slideContainer.appendChild(imgComponent);
	
	// Creating dots
	data.images.forEach((val, i) => {
		const dot = document.createElement("div");
		if (i === 0) {
			dot.classList.add("active");
		}
		dot.classList.add("dot");
		dotsContainer.appendChild(dot);
	});
}

// Setting main slide and creating dots
setDefault();

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

// Getting main slide
const main = document.getElementById("main");
// Getting all dots from dots-container
const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

// Changing slide
function update() {
	dots.forEach(dot => {
		dot.classList.remove("active");
	});
	dots[data.current].classList.add("active");
	main.src = data.images[data.current];
}

// Moving between slides using dots
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