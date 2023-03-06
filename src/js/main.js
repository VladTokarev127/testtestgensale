document.addEventListener('DOMContentLoaded', function() {

	const popupsLink = document.querySelectorAll('.js-popup-link');
	const popups = document.querySelectorAll('.popup__wrapper');
	const popupsClose = document.querySelectorAll('.popup__close, .overlay');

	popupsLink.forEach(el => {
		el.addEventListener('click', (e) => {

			e.preventDefault();
			let btn = e.target;
			let searchPopup = btn.dataset.popup;
			
			popups.forEach(popup => {
				let id = popup.id;
				if (id === searchPopup) {
					popup.style.display = 'flex';
				}
			});

		});
	});

	popupsClose.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			let close = e.target
			close.closest('.popup__wrapper').style.display = 'none';
		});
	});

	let tel = document.querySelector('[type="tel"]');
	let maskOptions = {
		mask: '+{7} (000) 000-00-00'
	};
	let mask = IMask(tel, maskOptions);
	mask.on('complete', () => {
		document.querySelector('.popup__btn').removeAttribute('disabled');
	});

	const form = document.querySelector('.popup__form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		fetch('/mail.php', {
			method: 'POST',
			body: formData
		})
		.then((data) => {
			console.log(data);
			console.log(data.json());
		})
	})
	

})