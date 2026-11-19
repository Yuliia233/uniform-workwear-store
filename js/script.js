
// ============================================
// UNIFORM — MAIN JAVASCRIPT
// Мови, переклади, форма замовлення та модальні вікна
// ============================================


// ============================================
// 1. ПЕРЕКЛАДИ УКРАЇНСЬКОЮ ТА АНГЛІЙСЬКОЮ
// ============================================

const translations = {

    uk: {
        subtitle: "PROFESSIONAL WORKWEAR",

        home: "Головна",
        catalog: "Каталог",
        about: "Про нас",
        contacts: "Контакти",
        cart: "Кошик",

        collection: "НОВА КОЛЕКЦІЯ",
        heroTitle: "Робочий одяг<br>нового покоління",
        heroDescription: "Комфорт, функціональність та стиль для кожного професіонала.",
        shopNow: "ПЕРЕГЛЯНУТИ КОЛЕКЦІЮ",

        introTitle: "Форма, що працює разом з тобою.",
        introText: "Ми поєднуємо практичність, комфорт та сучасний дизайн у професійному одязі.",

        catalogTitle: "Обери свою колекцію",
        catalogText: "Незабаром тут з'явиться каталог робочого одягу.",
        catalogDescription: "Професійний одяг для роботи, комфорту та впевненості.",

        menCategory: "Чоловічий одяг",
        womenCategory: "Жіночий одяг",
        shoesCategory: "Робоче взуття",
        accessoriesCategory: "Аксесуари",

        businessTitle: "Індивідуальне пошиття для вашої компанії",
        customOrderButton: "Замовити одяг для моєї компанії",
        customOrderDescription: "Ми виготовляємо професійний одяг на замовлення відповідно до потреб вашої компанії. Враховуємо специфіку роботи, підбираємо тканини, кольори, фасони та наносимо корпоративну символіку. Створюємо форму, яка поєднує комфорт, якість і стиль вашого бренду.",

        orderTitle: "Замовлення корпоративного одягу",
        orderIntro: "Розкажіть нам про потреби вашої компанії, і ми підготуємо індивідуальну пропозицію.",

        formCompany: "Назва компанії *",
        formName: "Контактна особа *",
        formPhone: "Номер телефону *",
        formCategory: "Який одяг вас цікавить? *",
        formQuantity: "Орієнтовна кількість одиниць",
        formLogo: "Потрібне нанесення логотипа компанії",
        formDetails: "Додаткові побажання",
        formSubmit: "Надіслати заявку",
        formNote: "Поля, позначені *, обов'язкові для заповнення.",

        selectCategory: "Оберіть категорію",
        formMen: "Чоловічий робочий одяг",
        formWomen: "Жіночий робочий одяг",
        formShoes: "Робоче взуття",
        formAccessories: "Аксесуари",
        formSets: "Комплекти для компанії",
        formOther: "Інше",

        companyPlaceholder: "Ваша компанія",
        namePlaceholder: "Ваше ім'я",
        quantityPlaceholder: "Наприклад, 50",
        detailsPlaceholder: "Опишіть ваші побажання щодо тканин, кольорів, фасону тощо...",

        orderSuccess: "Дякуємо! Демонстраційну заявку сформовано.",
        successTitle: "Дякуємо за ваше звернення!",
        successDescription: "Вашу демонстраційну заявку успішно сформовано. Ми цінуємо вашу зацікавленість у UNIFORM.",
        successButton: "Чудово",

        storyLabel: "03 / OUR STORY",
        storyTitle: "Історія UNIFORM",
        story1: "Історія UNIFORM почалася з простої, але важливої розмови.",
        story2: "Мій чоловік працював на шахті й добре знав, наскільки важливим є якісне робоче екіпірування. Проте на практиці йому часто доводилося стикатися з одягом, який швидко зношувався, був незручним і не відповідав реальним умовам роботи.",
        story3: "Одного разу він поділився зі мною своїми переживаннями. Тоді й виникла ідея створити власну справу, яка допомагатиме людям знаходити справді якісний робочий одяг.",
        story4: "Так з'явилася концепція UNIFORM — магазину, який об'єднує покупців і перевірених виробників професійного одягу.",
        story5: "Ми співпрацюємо безпосередньо з виробниками, щоб пропонувати клієнтам практичний, надійний та комфортний одяг для різних професій.",
        story6: "UNIFORM відкритий як для індивідуальних покупців, так і для бізнесу. Ми допомагаємо компаніям та підприємствам підбирати робочий одяг для цілих команд.",
        story7: "Ми цінуємо довіру наших клієнтів, позитивні відгуки та прагнемо будувати довгострокові партнерські відносини.",
        storyQuote: "Наша мета — щоб кожна людина почувалася комфортно та впевнено на своєму робочому місці.",

        whyLabel: "WHY UNIFORM",
        whyTitle: "Чому обирають UNIFORM",
        advantage1Title: "Перевірені виробники",
        advantage1Text: "Співпрацюємо безпосередньо з виробниками та приділяємо увагу якості кожного виробу.",
        advantage2Title: "Рішення для бізнесу",
        advantage2Text: "Допомагаємо компаніям та підприємствам підібрати робочий одяг для своїх команд.",
        advantage3Title: "Довіра клієнтів",
        advantage3Text: "Цінуємо кожного покупця, забезпечуємо уважний сервіс і прагнемо довгострокової співпраці.",

        serveLabel: "04 / WHO WE SERVE",
        serveTitle: "Для тих, хто працює",
        serveText: "Допомагаємо підібрати робочий одяг для різних професій та сфер діяльності.",

        industry1: "Будівництво",
        industry2: "Промисловість",
        industry3: "Сільське господарство",
        industry4: "Технічне обслуговування",
        demoNote: "Демонстраційні назви сфер та компаній для макета сайту.",

        contactLabel: "05 / GET IN TOUCH",
        contactTitle: "Маєте запитання?",
        contactText: "Ми завжди готові допомогти вам з вибором робочого одягу.",
        phoneLabel: "ТЕЛЕФОН",
        emailLabel: "ЕЛЕКТРОННА ПОШТА",
        addressLabel: "АДРЕСА",
        hoursLabel: "ГРАФІК РОБОТИ",
        contactMessageTitle: "Ваш комфорт — наш пріоритет.",
        contactMessageText: "Потрібна консультація щодо асортименту, розмірів або оформлення замовлення? Звертайтеся до нашої команди підтримки.",
        contactButton: "ЗВ'ЯЗАТИСЯ З НАМИ",

        footerText: "Професійний одяг для кожної професії."
    },


    en: {
        subtitle: "PROFESSIONAL WORKWEAR",

        home: "Home",
        catalog: "Shop",
        about: "About us",
        contacts: "Contact",
        cart: "Cart",

        collection: "NEW COLLECTION",
        heroTitle: "Workwear<br>for a new generation",
        heroDescription: "Comfort, functionality and style for every professional.",
        shopNow: "EXPLORE COLLECTION",

        introTitle: "Workwear that works with you.",
        introText: "We combine practicality, comfort and modern design in professional clothing.",

        catalogTitle: "Explore our collection",
        catalogText: "Our workwear catalog will be available soon.",
        catalogDescription: "Professional clothing for work, comfort and confidence.",

        menCategory: "Men's workwear",
        womenCategory: "Women's workwear",
        shoesCategory: "Work footwear",
        accessoriesCategory: "Accessories",

        businessTitle: "Custom workwear for your company",
        customOrderButton: "Order workwear for my company",
        customOrderDescription: "We manufacture professional workwear tailored to your company's needs. We consider your work specifics, select fabrics, colors and styles, and add corporate branding. We create uniforms that combine comfort, quality and your brand identity.",

        orderTitle: "Corporate Workwear Order",
        orderIntro: "Tell us about your company's needs and we will prepare a tailored offer.",

        formCompany: "Company name *",
        formName: "Contact person *",
        formPhone: "Phone number *",
        formCategory: "Which products are you interested in? *",
        formQuantity: "Estimated quantity",
        formLogo: "Company logo printing required",
        formDetails: "Additional requirements",
        formSubmit: "Submit request",
        formNote: "Fields marked with * are required.",

        selectCategory: "Select a category",
        formMen: "Men's workwear",
        formWomen: "Women's workwear",
        formShoes: "Work footwear",
        formAccessories: "Accessories",
        formSets: "Company uniforms",
        formOther: "Other",

        companyPlaceholder: "Your company",
        namePlaceholder: "Your name",
        quantityPlaceholder: "For example, 50",
        detailsPlaceholder: "Describe your preferences for fabrics, colors, styles, etc.",

        orderSuccess: "Thank you! Your demo request has been created.",
        successTitle: "Thank you for contacting us!",
        successDescription: "Your demo request has been successfully created. We appreciate your interest in UNIFORM.",
        successButton: "Great",

        storyLabel: "03 / OUR STORY",
        storyTitle: "The UNIFORM Story",
        story1: "The story of UNIFORM began with a simple but important conversation.",
        story2: "My husband worked in a mine and knew how important high-quality workwear was. However, in practice, he often had to deal with clothing that wore out quickly, was uncomfortable and did not meet real working conditions.",
        story3: "One day, he shared his concerns with me. That was when the idea arose to create our own business, helping people find truly high-quality workwear.",
        story4: "This is how the UNIFORM concept emerged — a store connecting customers with trusted manufacturers of professional clothing.",
        story5: "We work directly with manufacturers to offer customers practical, reliable and comfortable clothing for different professions.",
        story6: "UNIFORM is open to both individual customers and businesses. We help companies and organizations choose workwear for their entire teams.",
        story7: "We value our customers' trust and positive feedback and strive to build long-term partnerships.",
        storyQuote: "Our goal is to help everyone feel comfortable and confident in their workplace.",

        whyLabel: "WHY UNIFORM",
        whyTitle: "Why choose UNIFORM",
        advantage1Title: "Trusted manufacturers",
        advantage1Text: "We work directly with manufacturers and pay attention to the quality of every product.",
        advantage2Title: "Business solutions",
        advantage2Text: "We help companies and organizations choose workwear for their teams.",
        advantage3Title: "Customer trust",
        advantage3Text: "We value every customer, provide attentive service and strive for long-term cooperation.",

        serveLabel: "04 / WHO WE SERVE",
        serveTitle: "For those who work",
        serveText: "We help you choose workwear for different professions and industries.",

        industry1: "Construction",
        industry2: "Industry",
        industry3: "Agriculture",
        industry4: "Technical services",
        demoNote: "Demonstration industry and company names for the website prototype.",

        contactLabel: "05 / GET IN TOUCH",
        contactTitle: "Have any questions?",
        contactText: "We are always ready to help you choose the right workwear.",
        phoneLabel: "PHONE",
        emailLabel: "EMAIL",
        addressLabel: "ADDRESS",
        hoursLabel: "WORKING HOURS",
        contactMessageTitle: "Your comfort is our priority.",
        contactMessageText: "Need advice about our products, sizes or ordering? Contact our support team.",
        contactButton: "CONTACT US",

        footerText: "Professional clothing for every profession."
    }

};


// ============================================
// 2. ЗМІНА МОВИ САЙТУ
// ============================================

function changeLanguage(language) {

    if (!translations[language]) {
        language = "uk";
    }

    // Переклад текстових елементів
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key] !== undefined) {
            element.innerHTML = translations[language][key];
        }

    });

    // Переклад placeholder у полях форми
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[language][key] !== undefined) {
            element.placeholder = translations[language][key];
        }

    });

    // Перемикач мови
    document.querySelectorAll(".language-btn").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );

    });

    // Зберігаємо вибрану мову
    localStorage.setItem("uniform-language", language);

    document.documentElement.lang = language;

}


// Обробники кнопок UA / EN

document.querySelectorAll(".language-btn").forEach(button => {

    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });

});


// Завантажуємо збережену мову

const savedLanguage = localStorage.getItem("uniform-language") || "uk";

changeLanguage(savedLanguage);


// ============================================
// 3. МОВА ПОВІДОМЛЕНЬ ПРИ ПЕРЕВІРЦІ ФОРМИ
// ============================================

const validationMessages = {

    uk: {
        required: "Заповніть це поле.",
        company: "Введіть назву компанії (мінімум 2 символи).",
        name: "Введіть коректне ім'я.",
        phone: "Невірний формат. Приклад: +380501234567",
        category: "Оберіть категорію одягу.",
        quantity: "Введіть ціле число від 1 до 100000."
    },

    en: {
        required: "Please fill out this field.",
        company: "Enter a company name (at least 2 characters).",
        name: "Enter a valid contact name.",
        phone: "Invalid format. Example: +380501234567",
        category: "Please select a clothing category.",
        quantity: "Enter a whole number between 1 and 100000."
    }

};


function getValidationLanguage() {

    return document.documentElement.lang === "en" ? "en" : "uk";

}


function getMessage(key) {

    return validationMessages[getValidationLanguage()][key];

}


// ============================================
// 4. ЕЛЕМЕНТИ ФОРМИ ТА МОДАЛЬНИХ ВІКОН
// ============================================

const orderModal = document.getElementById("orderModal");

const openOrderButton = document.querySelector("[data-open-order]");

const closeOrderButton = document.querySelector("[data-close-order]");

const corporateOrderForm = document.getElementById("corporateOrderForm");

const successModal = document.getElementById("successModal");

const closeSuccessButton = document.querySelector("[data-close-success]");


// ============================================
// 5. ВІДКРИТТЯ ФОРМИ ЗАМОВЛЕННЯ
// ============================================

if (openOrderButton && orderModal) {

    openOrderButton.addEventListener("click", () => {

        orderModal.classList.add("is-open");

        orderModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    });

}


// ============================================
// 6. ЗАКРИТТЯ ФОРМИ ЗАМОВЛЕННЯ
// ============================================

function closeOrderModal() {

    if (!orderModal) return;

    orderModal.classList.remove("is-open");

    orderModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


if (closeOrderButton) {

    closeOrderButton.addEventListener("click", closeOrderModal);

}


if (orderModal) {

    orderModal.addEventListener("click", event => {

        if (event.target === orderModal) {
            closeOrderModal();
        }

    });

}


// ============================================
// 7. ВІДОБРАЖЕННЯ ПОМИЛОК У ПОЛЯХ
// ============================================

function showFieldError(field, message) {

    const errorElement = document.getElementById(field.id + "Error");

    field.classList.add("field-invalid");

    field.classList.remove("field-valid");

    if (errorElement) {
        errorElement.textContent = message;
    }

}


function clearFieldError(field) {

    const errorElement = document.getElementById(field.id + "Error");

    field.classList.remove("field-invalid");

    if (errorElement) {
        errorElement.textContent = "";
    }

}


// ============================================
// 8. ПЕРЕВІРКА НОМЕРА УКРАЇНСЬКОГО ТЕЛЕФОНУ
// ============================================

function normalizeUkrainianPhone(value) {

    const digits = value.replace(/\D/g, "");

    if (/^0\d{9}$/.test(digits)) {
        return "+38" + digits;
    }

    if (/^380\d{9}$/.test(digits)) {
        return "+" + digits;
    }

    return null;

}


// ============================================
// 9. ПЕРЕВІРКА ПОЛІВ ФОРМИ
// ============================================

function validateField(field) {

    const value = field.value.trim();

    // Обов'язкові поля
    if (field.required && !value) {

        showFieldError(field, getMessage("required"));

        return false;

    }

    // Назва компанії
    if (field.id === "companyName" && value.length < 2) {

        showFieldError(field, getMessage("company"));

        return false;

    }

    // Ім'я контактної особи
    if (field.id === "contactName") {

        const validName = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{2,}$/.test(value);

        if (!validName) {

            showFieldError(field, getMessage("name"));

            return false;

        }

    }

    // Телефон
    if (field.id === "contactPhone") {

        const normalizedPhone = normalizeUkrainianPhone(value);

        if (!normalizedPhone) {

            showFieldError(field, getMessage("phone"));

            return false;

        }

        field.value = normalizedPhone;

    }

    // Категорія одягу
    if (field.id === "clothingType" && !value) {

        showFieldError(field, getMessage("category"));

        return false;

    }

    // Кількість товарів
    if (field.id === "orderQuantity" && value) {

        const quantity = Number(value);

        if (
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            quantity > 100000
        ) {

            showFieldError(field, getMessage("quantity"));

            return false;

        }

    }

    clearFieldError(field);

    field.classList.add("field-valid");

    return true;

}


// ============================================
// 10. ПЕРЕВІРКА ТА НАДСИЛАННЯ ФОРМИ
// ============================================

if (corporateOrderForm) {

    const fields = corporateOrderForm.querySelectorAll(
        "input:not([type='checkbox']), select, textarea"
    );


    // Перевірка під час введення

    fields.forEach(field => {

        field.addEventListener("input", () => {

            if (field.classList.contains("field-invalid")) {
                clearFieldError(field);
            }

            field.classList.remove("field-valid");

        });


        field.addEventListener("change", () => {

            validateField(field);

        });

    });


    // Обробка натискання кнопки надсилання

    corporateOrderForm.addEventListener("submit", event => {

        event.preventDefault();

        let formIsValid = true;

        let firstInvalidField = null;


        fields.forEach(field => {

            const isValid = validateField(field);

            if (!isValid) {

                formIsValid = false;

                if (!firstInvalidField) {
                    firstInvalidField = field;
                }

            }

        });


        // Якщо є помилки — повертаємо користувача до першого поля

        if (!formIsValid) {

            firstInvalidField.focus();

            return;

        }


        // Форма демонстраційна: дані не надсилаються на сервер

        corporateOrderForm.reset();


        fields.forEach(field => {

            clearFieldError(field);

            field.classList.remove("field-valid");

        });


        // Закриваємо форму

        closeOrderModal();


        // Відкриваємо повідомлення про успішне створення заявки

        if (successModal) {

            successModal.classList.add("is-open");

            successModal.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        }

    });

}


// ============================================
// 11. МОДАЛЬНЕ ВІКНО УСПІШНОГО ЗАМОВЛЕННЯ
// ============================================

function closeSuccessModal() {

    if (!successModal) return;

    successModal.classList.remove("is-open");

    successModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// Закриття кнопкою

if (closeSuccessButton) {

    closeSuccessButton.addEventListener("click", closeSuccessModal);

}


// Закриття натисканням поза вікном

if (successModal) {

    successModal.addEventListener("click", event => {

        if (event.target === successModal) {
            closeSuccessModal();
        }

    });

}


// Закриття клавішею Escape

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (orderModal && orderModal.classList.contains("is-open")) {
            closeOrderModal();
        }

        if (successModal && successModal.classList.contains("is-open")) {
            closeSuccessModal();
        }

    }

});


// ============================================
// 12. ПОВІДОМЛЕННЯ ПРО ГОТОВНІСТЬ САЙТУ
// ============================================

console.log("UNIFORM website is running!");

console.log("Language system is ready!");

console.log("Corporate order form is ready!");
