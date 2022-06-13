const ytVids = [
	"https://youtu.be/wDxCAvNPWYQ", 
	"https://youtu.be/vdLeglusn9w", 
	"https://www.youtube.com/watch?v=X6yLu6dflpc",
	"https://youtu.be/eGICm2wt0jI",
	"https://youtu.be/kR8fwDxXi20",
	"https://www.youtube.com/watch?v=O3FAKorWNeM",
];

const igVids = [
	"https://www.instagram.com/p/CVf0zNFL_w4/?utm_medium=copy_link",
	"https://www.instagram.com/reel/Cc_EdycrX7h/?utm_source=ig_web_copy_link",
	"https://www.instagram.com/reel/CcybrcDP0Kr/?utm_source=ig_web_copy_link",
	"https://www.instagram.com/hoodfilmtv/p/CDO4YjnDj1Z/?utm_medium=copy_link",
	"https://www.instagram.com/p/B4c1P3fhsau/?utm_source=ig_web_copy_link",
	"https://www.instagram.com/reel/CcJXoBbMuic/?utm_source=ig_web_copy_link",
];

function getRecentContent () {
	return {url: "./", isInsta: false};
}

function setHeroPosition () {
	let navbarHeight = $('.navbar').eq(0).height();

	$('.hero').css('top', `${navbarHeight}px`);
	
	$('#portfolio, div[name="#contact"]').each((_index, el) => {
		el.classList.add('is-relative');
		$(el).css('top', `${navbarHeight*1.5}px`);
	});


}

function initializeNavbarBurger () {
	const navbarBurgers = document.querySelectorAll('.navbar-burger');

	navbarBurgers.forEach(el => {

		$(el).click(() => {
			const target = el.dataset.target;
			const $target = document.getElementById(target);

			el.classList.toggle("is-active");
			$target.classList.toggle("is-active");

			if ($($target).hasClass('is-active')) {
				let initialHeight = getComputedStyle($('.hero').get(0))["top"];

				let newTopOffset = parseFloat(initialHeight.substr(0,initialHeight.length-2)) + parseFloat($($target).height());

				$('.hero').eq(0).css('top', `${newTopOffset}px`);
				$('.hero').eq(0).css('padding-top', `10px`);
			} else {
				let navbarHeight = $('.navbar').eq(0).height();

				$('.hero').eq(0).css('top', `${navbarHeight}px`);
			}
		});

	});
}

function setVideoWidth () {
	const iframes = document.querySelectorAll('iframe');

	if (window.innerWidth >= 1024){ 
		iframes.forEach(el => {
			const aspectRatio = 16/9;

			const widthString = getComputedStyle(el)["max-width"];

			let width = parseFloat(widthString.substr(0,widthString.length-2));
			let height = 1/aspectRatio * width;

			$(el).css('width', `${width}px`);
			$(el).css('height', `${height}px`);
		});
	}
}