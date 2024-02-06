document.addEventListener("DOMContentLoaded", function () {
    const heading3Elements = document.querySelectorAll('.heading-3');

    heading3Elements.forEach(heading3 => {
        heading3.addEventListener('mouseover', function () {
            const textAfterHeading = heading3.nextElementSibling;
            if (textAfterHeading && textAfterHeading.classList.contains('text')) {
                textAfterHeading.classList.add('highlighted');
            }
        });

        heading3.addEventListener('mouseout', function () {
            const textAfterHeading = heading3.nextElementSibling;
            if (textAfterHeading && textAfterHeading.classList.contains('text')) {
                textAfterHeading.classList.remove('highlighted');
            }
        });
    });
});

