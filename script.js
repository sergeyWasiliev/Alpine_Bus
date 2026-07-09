const menuIcon = document.querySelector('.menu_icon');
const navMenu = document.querySelector('.header nav');

const departureInput = document.getElementById('departure');
const returnInput = document.getElementById('returnDate');

const counterMinus = document.getElementById('counter_minus');
const counterPlus = document.getElementById('counter_plus');
const counterValue = document.getElementById('counter_value');

// ОТКРЫТИЕ-ЗАКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('menu_active')
});


// СЧЕТЧИК
let value = 1;
counterValue.innerText = value;

counterMinus.addEventListener('click', () => {
    if(value > 1){
        --value;
        console.log(value);
        counterValue.innerText = value;
    }
})

counterPlus.addEventListener('click', () => {
    if(value < 12){
        ++value;
        counterValue.innerText = value;
    }
})


// // DATE PICKER
// const isMobile = window.innerWidth <= 704;
//
// const picker = flatpickr(departureInput, {
//     mode: "range",
//     showMonths: isMobile ? 1 : 2,  // на мобилке 1 месяц, на десктопе 2
//     static: true,
//     locale: "ru",
//     dateFormat: "d.m.Y",
//     closeOnSelect: false,   // не закрываем сразу — закрытие по кнопке Apply
//     minDate: "today",
//
//     onOpen: function () {
//         departureInput.classList.add('active');
//         returnInput.classList.add('active');
//     },
//     onClose: function () {
//         departureInput.classList.remove('active');
//         returnInput.classList.remove('active');
//     },
//
//     // Главное: при любом изменении выбора — раскладываем даты по двум полям
//     onChange: function (selectedDates, dateStr, instance) {
//         departureInput.value = selectedDates[0]
//             ? instance.formatDate(selectedDates[0], "d.m.Y")
//             : "";
//         returnInput.value = selectedDates[1]
//             ? instance.formatDate(selectedDates[1], "d.m.Y")
//             : "";
//     },
//
//     onReady: function (selectedDates, dateStr, instance) {
//         addFooter(instance);
//     }
// });
//
// // Клик по "Return" открывает тот же календарь, что и "Departure"
// returnInput.addEventListener("click", () => picker.open());
//
// function addFooter(instance) {
//     const footer = document.createElement("div");
//     footer.className = "fp-footer";
//
//     const resetBtn = document.createElement("button");
//     resetBtn.type = "button";
//     resetBtn.className = "fp-reset";
//     resetBtn.textContent = "Reset";
//     resetBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         instance.clear();
//         departureInput.value = "";
//         returnInput.value = "";
//     });
//
//     const applyBtn = document.createElement("button");
//     applyBtn.type = "button";
//     applyBtn.className = "fp-apply";
//     applyBtn.textContent = "Apply";
//     applyBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         instance.close();
//     });
//
//     footer.appendChild(resetBtn);
//     footer.appendChild(applyBtn);
//     instance.calendarContainer.appendChild(footer);
// }


// DATE PICKER
let picker;

function initPicker() {
    const isMobile = window.innerWidth <= 704;

    // Если picker уже существует, уничтожаем его
    if (picker) {
        picker.destroy();
    }

    picker = flatpickr(departureInput, {
        mode: "range",
        showMonths: isMobile ? 1 : 2,  // на мобилке 1 месяц, на десктопе 2
        static: true,
        locale: "ru",
        dateFormat: "d.m.Y",
        closeOnSelect: false,   // не закрываем сразу — закрытие по кнопке Apply
        minDate: "today",

        onOpen: function () {
            departureInput.classList.add('active');
            returnInput.classList.add('active');
        },
        onClose: function () {
            departureInput.classList.remove('active');
            returnInput.classList.remove('active');
        },

        // Главное: при любом изменении выбора — раскладываем даты по двум полям
        onChange: function (selectedDates, dateStr, instance) {
            departureInput.value = selectedDates[0]
                ? instance.formatDate(selectedDates[0], "d.m.Y")
                : "";
            returnInput.value = selectedDates[1]
                ? instance.formatDate(selectedDates[1], "d.m.Y")
                : "";
        },

        onReady: function (selectedDates, dateStr, instance) {
            addFooter(instance);
        }
    });
}

// Инициализируем
initPicker();

// Адаптация при ресайзе
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const currentIsMobile = window.innerWidth <= 704;
        const currentShowMonths = picker.config.showMonths;
        const expectedShowMonths = currentIsMobile ? 1 : 2;

        // Если режим изменился — пересоздаём
        if (currentShowMonths !== expectedShowMonths) {
            // Сохраняем состояние открыт/закрыт
            const wasOpen = picker.isOpen;
            const selectedDates = picker.selectedDates;

            initPicker();

            // Восстанавливаем выбранные даты
            if (selectedDates.length > 0) {
                picker.setDate(selectedDates);
            }

            // Если был открыт — открываем заново
            if (wasOpen) {
                picker.open();
            }
        }
    }, 0);
});

// Клик по "Return" открывает тот же календарь, что и "Departure"
returnInput.addEventListener("click", () => picker.open());

function addFooter(instance) {
    const footer = document.createElement("div");
    footer.className = "fp-footer";

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "fp-reset";
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        instance.clear();
        departureInput.value = "";
        returnInput.value = "";
    });

    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "fp-apply";
    applyBtn.textContent = "Apply";
    applyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        instance.close();
    });

    footer.appendChild(resetBtn);
    footer.appendChild(applyBtn);
    instance.calendarContainer.appendChild(footer);
}


