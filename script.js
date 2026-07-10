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
    if (value > 1) {
        --value;
        console.log(value);
        counterValue.innerText = value;
    }
})

counterPlus.addEventListener('click', () => {
    if (value < 12) {
        ++value;
        counterValue.innerText = +value;
    }
})

// -----FAQ----

// Загрузка FAQ из JSON
async function loadFaqData() {
    try {
        const response = await fetch('faq_data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка загрузки FAQ:', error);
        // Возвращаем fallback данные в случае ошибки
        return getFallbackData();
    }
}

// Fallback данные (если файл не загрузился)
function getFallbackData() {
    return [
        {
            question: "Alpine Bus Journeys?",
            answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside)."
        },
        {
            question: "What about seating options?",
            answer: "Generally, you'll find comfy standard seats (great views, great value, maybe great new friends) and perhaps slightly better seats with extra legroom."
        }
    ];
}

function renderFaqs(faqs) {
    const container = document.getElementById('faq-container');

    container.innerHTML = '';

    faqs.forEach((faq, index) => {

        const details = document.createElement('details');
        details.name = 'faq';

        // Если нужно открыть первый по умолчанию
        // if (index === 0) details.open = true;

        const summary = document.createElement('summary');
        summary.textContent = faq.question;

        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer';

        const paragraph = document.createElement('p');
        paragraph.textContent = faq.answer;

        answerDiv.append(paragraph);
        details.append(summary);
        details.append(answerDiv);

        container.append(details);
    });

    // Логика: при открытии одного — закрываем все остальные
    const allDetails = container.querySelectorAll('details');
    allDetails.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                allDetails.forEach(other => {
                    if (other !== this && other.open) {
                        other.open = false;
                    }
                });
            }
        });
    });

}

// Инициализация
async function initFaq() {

    const faqs = await loadFaqData();
    renderFaqs(faqs);
}

document.addEventListener('DOMContentLoaded', initFaq);

// -----END FAQ----


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
window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
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


