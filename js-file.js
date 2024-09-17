// orto botanico, museo archeologico, aereoporto, stazione centrale,
const lang = "ita"

const italian = document.querySelector("[data-lang='it'");
const english = document.querySelector("[data-lang='en'");


const toggle = document.querySelectorAll(".toggle");
toggle.forEach(function(toggle) {
    toggle.addEventListener("click", function(){
        let toggleContent = toggle.nextElementSibling;

        if(toggleContent.classList.contains("hidden")){
            toggleContent.classList.remove("hidden");
            toggleContent.classList.add("visible")
        }
        else {
            toggleContent.classList.remove("visible");
            toggleContent.classList.add("hidden")
        }

        }
    )
})

document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.language-switcher');
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    const translationFiles = {
        it: 'translations/it.json',
        en: 'translations/en.json'
    };
    
    function loadTranslations(language) {
        fetch(translationFiles[language])
            .then(response => response.json())
            .then(translations => {
                elementsToTranslate.forEach(element => {
                    const key = element.getAttribute('data-translate-key');
                    if (translations[key]) {
                        element.innerHTML = translations[key];
                    }
                });
            });
    }
    
    languageSwitcher.addEventListener('click', function(event) {
        if (event.target.classList.contains('lang')) {
            const language = event.target.getAttribute('data-lang');
            loadTranslations(language);
        }
    });
    
    // Set default language
    loadTranslations('en');
});
