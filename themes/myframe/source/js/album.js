
document.addEventListener('DOMContentLoaded', function () {
	var albumImages = document.querySelectorAll('#album .album-image')

	albumImages.forEach(function (imageCard) {
		imageCard.addEventListener('click', function () {
			imageCard.classList.toggle('album-image-clicked')
		})
	})
})
