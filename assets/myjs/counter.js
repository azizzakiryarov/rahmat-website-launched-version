$(document).ready(function () {

    var counterRahmat = document.getElementsByClassName('counter-rahmat')[0];

    fetch('https://api.countapi.xyz/get/rahmat/69a70eaa-e45c-4bf6-9e8a-0d1d7077c58c')
        .then(res => res.json())
        .then(res => {
            counterRahmat.dataset.target = res.value;
        })

    const counters = document.querySelectorAll('.counter');
    const speed = 1001; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            // Lower inc to slow and higher to slow
            const inc = target / speed;
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        setTimeout(updateCount(), 3000);
    });

    const countEl = document.getElementById('counter-rahmat');

    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/rahmat/69a70eaa-e45c-4bf6-9e8a-0d1d7077c58c?amount=1')
            .then(res => res.json())
            .then(res => {
                countEl.innerHTML = res.value;
            })
    }
});

//https://api.countapi.xyz/
//{"namespace":"rahmat","key":"69a70eaa-e45c-4bf6-9e8a-0d1d7077c58c","value":7944}