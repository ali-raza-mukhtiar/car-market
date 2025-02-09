
document.addEventListener('DOMContentLoaded', function () {
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const carItems = document.querySelectorAll('.car-item');

    const models = {
        toyota: ['corolla', 'camry', 'prius', 'rav4', 'landcruiser'],
        honda: ['civic', 'accord', 'hrv', 'city', 'crv'],
        mercedes: ['e-class', 'c-class', 's-class', 'g-class'],
        bmw: ['3series', '5series', 'x5', 'x3', '7series'],
        audi: ['a4', 'a6', 'q7', 'q5', 'a8']
    };

    makeSelect.addEventListener('change', function () {
        const selectedMake = makeSelect.value;
        modelSelect.innerHTML = '<option value="all">Select Model</option>';

        if (selectedMake !== 'all' && models[selectedMake]) {
            models[selectedMake].forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model.toUpperCase();
                modelSelect.appendChild(option);
            });
        }
        filterCars();
    });

    modelSelect.addEventListener('change', filterCars);

    function filterCars() {
        const selectedMake = makeSelect.value;
        const selectedModel = modelSelect.value;

        carItems.forEach(car => {
            const carMake = car.dataset.make;
            const carModel = car.dataset.model;

            const makeMatch = selectedMake === 'all' || carMake === selectedMake;
            const modelMatch = selectedModel === 'all' || carModel === selectedModel;

            car.style.display = (makeMatch && modelMatch) ? 'block' : 'none';
        });
    }
});