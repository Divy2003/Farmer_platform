// Global function to open image modal
function openImageModal(imgSrc) {
    const imageModal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    if (imageModal && modalImg) {
        imageModal.style.display = "block";
        modalImg.src = imgSrc;
        console.log("Opening modal with image: " + imgSrc);
    } else {
        console.error("Image modal elements not found");
    }
}

// Image Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    const imageModal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".img-modal-close");

    // Add click event to all product images
    const productImages = document.querySelectorAll('.product-img');
    console.log('Found ' + productImages.length + ' product images');

    productImages.forEach(function(img) {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Image clicked: ' + this.getAttribute('data-full-img'));
            openImageModal(this.getAttribute('data-full-img'));
        });
    });

    // Close the modal when clicking the × button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            imageModal.style.display = "none";
        });
    }

    // Close the modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === imageModal) {
            imageModal.style.display = "none";
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && imageModal.style.display === "block") {
            imageModal.style.display = "none";
        }
    });
});
