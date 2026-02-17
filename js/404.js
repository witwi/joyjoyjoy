(function () {
    var images = ['2.jpg', '1.gif', "3.jpg", "4.gif", "5.jpg", "6.png"];
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];

    var imgElement = document.createElement('img');
    // Fixing path to point into 404/ directory
    imgElement.src = '404/' + selectedImage;
    imgElement.alt = '404 lovetosleep';
    imgElement.className = 'random-image';

    document.getElementById('image-container').appendChild(imgElement);
})();
