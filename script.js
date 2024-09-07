    let leftContainer = true;

    function moveDiv(div) {
        div.classList.add('hidden'); // أخفِ العنصر

        setTimeout(function() {
            // حرك العنصر إلى الجهة الأخرى
            let container = document.querySelector('.container');
            div.classList.remove('hidden');

            if (leftContainer) {
                container.appendChild(div);
            } else {
                container.insertBefore(div, container.firstChild);
            }

            leftContainer = !leftContainer; // تغيير الجهة
        }, 500); // فترة الإختفاء قبل الظهور
    }