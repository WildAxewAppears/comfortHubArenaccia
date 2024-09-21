// orto botanico, museo archeologico, aereoporto, stazione centrale,
const images = ["images/arenacciaStrada.jpg",
                "images/ortoBotanico.jpg",
                "images/museoArcheologico.jpg",
                "images/albergoDeiPoveri.jpg",
                "images/aereoportoNapoli.jpg"
]

const imagesDiv = document.querySelector("#fadingImage");

window.setInterval(changePicture, 6000);
let i = 0;

function changePicture() {
  i++;
  if (i > images.length - 1) i = 0;
  imagesDiv.style.backgroundImage = `url(${images[i]})`;
}








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

const translations = {
    it: {
        "house": "Intero Appartamento, 5 ospiti",
        "breakfast": "colazione non inclusa",
        "about_us_title": "Chi Siamo",
        "about_us_subtitle": "Una Casa Ospitale nel Cuore dell'Arenaccia",
        "introduction_text": "Situata nel vivace quartiere Arenaccia, la nostra casa offre una combinazione perfetta di comfort e modernità. Con un balcone che dà sulla città e Wi-Fi gratuito per rimanere connessi, è l'ideale per chi vuole esplorare Napoli con facilità. Goditi la tranquillità della casa e approfitta della sua posizione centrale per scoprire le meraviglie della città.",
        "living_room_title": "Soggiorno",
        "living_room_description": "Un ambiente accogliente con divano confortevole e zona TV, perfetto per rilassarsi dopo una giornata in città.",
        "bedroom_title": "Camera da Letto",
        "bedroom_description": "Spaziosa e luminosa, la camera offre un comodo letto matrimoniale e ampio armadio per riporre i tuoi effetti personali.",
        "studio_title": "Studio",
        "studio_description": "Un angolo tranquillo con scrivania e connessione Wi-Fi, ideale per lavorare o studiare in totale comodità.",
        "kitchen_title": "Cucina",
        "kitchen_description": "Moderna e completamente attrezzata, la cucina dispone di tutto il necessario per preparare i tuoi pasti preferiti.",
        "guest_room_title": "Camera degli Ospiti",
        "guest_room_description": "Accogliente e ben arredata, offre uno spazio perfetto per ospitare amici o familiari in visita.",
        "bathroom_title": "Bagno",
        "bathroom_description": "Elegante e funzionale, il bagno è dotato di doccia spaziosa e tutti i comfort essenziali per il tuo relax.",
        "reviews_header": "Recensioni",
        "reviews_subheader": "Recensione degli Ospiti",
        "review1_text": "Ho trascorso una settimana meravigliosa in questa casa. È accogliente, ben arredata e dotata di tutti i comfort. La posizione è perfetta per esplorare Napoli. Consigliatissima!",
        "review2_text": "La casa vacanze si trova in una zona strategica, ben collegata ai mezzi pubblici. L'appartamento era pulitissimo e accogliente. Ci torneremo sicuramente!",
        "review3_text": "La casa è completamente attrezzata, abbiamo trovato tutto il necessario per il nostro soggiorno. La posizione è ideale, a pochi passi da tutto. Ci torneremo sicuramente!",
        "review4_text": "Bellissimo appartamento molto suggestivo e singolare, ottima la pulizia così come la posizione…e i proprietari poi persone molto disponibili!",
        "more_reviews": "Altre Recensioni",
        "what_you_get_header": "Cosa Ti Offriamo",
        "what_you_get_subheader": "Servizi, Comfort e Guida per il Viaggio",
        "wifi": "WiFi Gratuito",
        "fully_equipped_kitchen": "Cucina Attrezzata",
        "flat_screen_tv": "Tv a Schermo Piatto",
        "linen": "Biancheria per la Casa",
        "air_conditioner": "Condizionatore",
        "non_smoking_rooms": "Camere Non Fumatori",
        "elevator": "Ascensore",
        "city_view": "Vista Città",
        "coffee_machine": "Macchina da Caffè",
        "restaurants_title": "Ristoranti e Pasticcerie",
        "restaurant1": "Pasticceria 'Colmayer' <span>40 m</span>",
        "restaurant2": "Ristorante Pizzeria 'La Ruota' <span>50 m</span>",
        "restaurant3": "Caffetteria/Bar 'El Mambo' <span>50 m</span>",
        "alert_distance": "Le distanze sono misurate in linea retta. Quelle effettive da percorrere potrebbero essere diverse.",
        "main_attractions_title": "Attrazioni Principali",
        "attraction1": "Piazza Bellini <span>1,9 Km</span>",
        "attraction2": "Catacombe di San Gennaro <span>2 Km</span>",
        "attraction3": "Maschio Angioino <span>2,9 Km</span>",
        "attraction4": "Palazzo Reale di Napoli <span>3,2 Km</span>",
        "attraction5": "Piazza del Plebiscito <span>3,4 Km</span>",
        "attraction6": "Galleria Borbonica <span>3,5 Km</span>",
        "attraction7": "Castel dell'Ovo <span>4,1 Km</span>",
        "attraction8": "Scavi di Ercolano <span>9 Km</span>",
        "whats_in_the_area_title": "Cosa C'è in Zona",
        "area1": "Parco dei Quartieri Spagnoli <span>1,4 km</span>",
        "area2": "Museo Storico Nazionale dell’Arte Sanitaria <span>1,5 km</span>",
        "area3": "MUSA - Museo Universitario delle Scienze e delle Arti <span>1,5 km</span>",
        "area4": "Piazza Cavour <span>1,6 km</span>",
        "area5": "Museo e Real Bosco di Capodimonte <span>1,7 km</span>",
        "area6": "Catacombe di San Gaudioso <span>1,7 km</span>",
        "area7": "Festa della Befana Piazza del Carmine Napoli <span>1,7 km</span>",
        "area8": "Museo Archeologico Nazionale di Napoli <span>1,9 km</span>",
        "area9": "Museo Cappella Sansevero <span>1,9 km</span>",
        "beaches_title": "Spiagge nei Dintorni",
        "beach1": "Lido Mappatella <span>4,6 km</span>",
        "beach2": "Spiaggia del Bagno Elena <span>6 km</span>",
        "beach3": "Spiaggia del Bagno Ideale <span>6 km</span>",
        "beach4": "Spiaggia del Bagno Donn'Anna <span>6 km</span>",
        "airports_title": "Aeroporti più Vicini",
        "airport1": "Aeroporto di Napoli Capodichino <span>1,7 km</span>",
        "airport2": "Aeroporto di Salerno - Costa d'Amalfi <span>59 km</span>",
        "public_transport_title": "Mezzi Pubblici",
        "train_station": "Treno - Stazione di Napoli Centrale <span>1 km</span>",
        "metro_garibaldi": "Metro - Stazione Metro Garibaldi <span>1,1 km</span>",
        "train_centro_direzionale": "Treno - Centro Direzionale <span>1,1 km</span>",
        "metro_museo": "Metro - Stazione Metro Museo <span>1,8 km</span>",
        "footer_title": "Visita Napoli con Stile",
        "footer_subtitle": "La nostra Casa Ti Aspetta!",
        "footer_text": "Scopri il fascino della città e prenota il tuo soggiorno con tutti i comfort necessari.",
        "book_now": "Prenota ora!"
    },
    en: {
        "house": "Entire apartment, 5 guests",
        "breakfast": "No breakfast included",
        "about_us_title": "About Us",
        "about_us_subtitle": "A Modern House in the Heart of Arenaccia",
        "introduction_text": "Located in the lively Arenaccia district, our house offers the perfect combination of comfort and modernity. With a balcony overlooking the city and free Wi-Fi to stay connected, it is ideal for those who want to explore Naples with ease. Enjoy the tranquility of the house and take advantage of its central location to discover the wonders of the city.",
        "living_room_title": "Living Room",
        "living_room_description": "A cozy environment with a comfortable sofa and TV area, perfect for relaxing after a day in the city.",
        "bedroom_title": "Bedroom",
        "bedroom_description": "Spacious and bright, the room offers a comfortable double bed and a large wardrobe to store your belongings.",
        "studio_title": "Studio",
        "studio_description": "A quiet corner with a desk and Wi-Fi connection, ideal for working or studying in total comfort.",
        "kitchen_title": "Kitchen",
        "kitchen_description": "Modern and fully equipped, the kitchen has everything you need to prepare your favorite meals.",
        "guest_room_title": "Guest Room",
        "guest_room_description": "Cozy and well-furnished, it offers a perfect space to host friends or family visiting.",
        "bathroom_title": "Bathroom",
        "bathroom_description": "Elegant and functional, the bathroom is equipped with a spacious shower and all the essential comforts for your relaxation.",
        "reviews_header": "Reviews",
        "reviews_subheader": "Guest Reviews",
        "review1_text": "I spent a wonderful week in this house. It is cozy, well-decorated, and equipped with all comforts. The location is perfect for exploring Naples. Highly recommended!",
        "review2_text": "The vacation home is in a strategic location, well-connected to public transport. The apartment was spotless and welcoming. We will definitely return!",
        "review3_text": "The house is fully equipped, we found everything we needed for our stay. The location is ideal, just a short walk from everything. We will definitely return!",
        "review4_text": "Beautiful and charming apartment, excellent cleanliness as well as location... and the owners are very helpful!",
        "more_reviews": "More Reviews",
        "what_you_get_header": "What We Offer",
        "what_you_get_subheader": "Amenities, Comfort, and Travel Guide",
        "wifi": "Free WiFi",
        "fully_equipped_kitchen": "Fully Equipped Kitchen",
        "flat_screen_tv": "Flat-Screen TV",
        "linen": "House Linen",
        "air_conditioner": "Air Conditioning",
        "non_smoking_rooms": "Non-Smoking Rooms",
        "elevator": "Elevator",
        "city_view": "City View",
        "coffee_machine": "Coffee Machine",
        "restaurants_title": "Restaurants and Pastry Shops",
        "restaurant1": "Pastry Shop 'Colmayer' <span>40 m</span>",
        "restaurant2": "Restaurant Pizzeria 'La Ruota' <span>50 m</span>",
        "restaurant3": "Café/Bar 'El Mambo' <span>50 m</span>",
        "alert_distance": "Distances are measured in a straight line. Actual distances may vary.",
        "main_attractions_title": "Main Attractions",
        "attraction1": "Piazza Bellini <span>1.9 Km</span>",
        "attraction2": "Catacombs of Saint Gennaro <span>2 Km</span>",
        "attraction3": "Maschio Angioino <span>2.9 Km</span>",
        "attraction4": "Royal Palace of Naples <span>3.2 Km</span>",
        "attraction5": "Piazza del Plebiscito <span>3.4 Km</span>",
        "attraction6": "Bourbon Gallery <span>3.5 Km</span>",
        "attraction7": "Castel dell'Ovo <span>4.1 Km</span>",
        "attraction8": "Herculaneum Ruins <span>9 Km</span>",
        "whats_in_the_area_title": "What's in the Area",
        "area1": "Park of the Spanish Quarters <span>1.4 km</span>",
        "area2": "National Museum of Health Art <span>1.5 km</span>",
        "area3": "MUSA - University Museum of Sciences and Arts <span>1.5 km</span>",
        "area4": "Piazza Cavour <span>1.6 km</span>",
        "area5": "Capodimonte Museum and Royal Wood <span>1.7 km</span>",
        "area6": "Catacombs of Saint Gaudioso <span>1.7 km</span>",
        "area7": "Epiphany Festival Piazza del Carmine Naples <span>1.7 km</span>",
        "area8": "National Archaeological Museum of Naples <span>1.9 km</span>",
        "area9": "Sansevero Chapel Museum <span>1.9 km</span>",
        "beaches_title": "Nearby Beaches",
        "beach1": "Lido Mappatella <span>4.6 km</span>",
        "beach2": "Bagno Elena Beach <span>6 km</span>",
        "beach3": "Bagno Ideale Beach <span>6 km</span>",
        "beach4": "Bagno Donn'Anna Beach <span>6 km</span>",
        "airports_title": "Nearest Airports",
        "airport1": "Naples Capodichino Airport <span>1.7 km</span>",
        "airport2": "Salerno - Costa d'Amalfi Airport <span>59 km</span>",
        "public_transport_title": "Public Transport",
        "train_station": "Train - Naples Central Station <span>1 km</span>",
        "metro_garibaldi": "Metro - Garibaldi Metro Station <span>1.1 km</span>",
        "train_centro_direzionale": "Train - Centro Direzionale <span>1.1 km</span>",
        "metro_museo": "Metro - Museo Metro Station <span>1.8 km</span>",
        "footer_title": "Visit Naples in Style",
        "footer_subtitle": "Our House Awaits You!",
        "footer_text": "Discover the charm of the city and book your stay with all the necessary comforts.",
        "book_now": "Book Now!"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.language-switcher');
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    
    function loadTranslations(language) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
    }
    
    languageSwitcher.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenire il comportamento predefinito del link
        const langElement = event.target.closest('.lang'); // Verificare il target corretto
        if (langElement) {
            const language = langElement.getAttribute('data-lang');
            loadTranslations(language);
        }
    });
    
    // Set default language
    loadTranslations('it');
});
