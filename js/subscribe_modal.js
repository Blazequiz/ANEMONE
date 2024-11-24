;(() => {
	const refs = {
		openModalBtn: document.querySelector('[subs-modal-open]'),
		closeModalBtn: document.querySelector('[subs-modal-close]'),
		modal: document.querySelector('[subs-modal]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden')
		document.body.classList.toggle('no-scroll')
	}
})()