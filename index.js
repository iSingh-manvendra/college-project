
// TOUR DATA
const tours = [
  { name: "Goa", DN: "3 to 5 days", price: 12000, img: "img/sunrise.jpg" },
  { name: "Manali", DN: "3 to 5 days", price: 15000, img: "img/manali.jpg" },
  { name: "Haridwar", DN: "1 to 2 days", price: 5000, img: "img/haridwar.jpg" },
  { name: "Rishikesh", DN: "2 to 3 days", price: 8000, img: "img/rishikesh rafting.jpg" },
  { name: "Ayodhya", DN: "1 to 2 days", price: 5999, img: "img/ayodhya ghat.jpg" },
  { name: "Agra", DN: "1 to 2 days", price: 6999, img: "img/tajmahal.jpg" },
  { name: "Kashmir", DN: "5 to 7 days", price: 30000, img: "img/kashmir.jpg" },
  { name: "Ladakh", DN: "6 to 10 days ", price: 40000, img: "img/ladakh.jpg" },
  { name: "Spiti", DN: "7 to 10 days ", price: 40000, img: "img/spiti.jpeg" },
  { name: "Jaipur", DN: "2 to 3 days ", price: 10000, img: "img/jaipur.jpg" },
  { name: "Jodhpur", DN: "2 to 4 days", price: 10000, img: "img/jodhpur.jpg" },
  { name: "Jaisalmer", DN: " 2 to 3 days ", price: 14000, img: "img/jaisalmer.jpg" },
  { name: "Vanaras", DN: "2 to 3 days", price: 80000, img: "img/varanasi.jpg" },
  { name: "Kochi", DN: "2 to 3 days", price: 12000, img: "img/kochi.jpg" },
  { name: "Coorg", DN: "2 to 3 days ", price: 15000, img: "img/coorg.jpg" },
  { name: "Gangtok", DN: " 3 to 4 days", price: 18000, img: "img/gangtok.jpg" },
  { name: "Shillong", DN: "3 to 4 days", price: 16000, img: "img/shilong.jpg" },
  { name: "Panchmarhi", DN: "2 to 3 days", price: 10000, img: "img/panchmahrdi.jpeg" },
  { name: "Darjeeling", DN: "2 to 3 days", price: 12000, img: "img/Darzling.jpeg" },
  { name: "Mussoorie", DN: "2 to 3 days", price: 10000, img: "img/mussoore.jpg" },
  { name: "Nainital", DN: "2 to 3 days", price: 10000, img: "img/nanital.jpeg" },
  { name: "Ooty", DN: "2 to 3 days ", price: 12000, img: "img/ooty.avif" },
  { name: "Munnar", DN: "2 to 3 days", price: 12000, img: "img/Munnar.jpeg" },
  { name: "Mahabalipuram", DN: "1 to 2 days", price: 5999, img: "img/mahabalipuram.jpeg" },
  { name: "Sundarbans", DN: " 2 to 3 days", price: 11000, img: "img/sunderbans.jpeg" },
  { name: "Rameshwaram", DN: "2 to 3 days", price: 13000, img: "img/Rameshwaram.webp" },
  { name: "Lakshadweep", DN: "4 to 6 days", price: 48000, img: "img/lakshdweep.jpeg" },
  { name: "Majuli", DN: "2 to 3 days", price: 10000, img: "img/majjuli.jpeg" },
  { name: "Harsil", DN: "2 to 3 days", price: 11000, img: "img/harshil.jpeg" },
  { name: "Cherrapunji", DN: " 2 to 3 days", price: 17000, img: "img/cherrapunji.jpeg" },
  { name: "Kodaikanal", DN: " 2 to 3 days", price: 15000, img: "img/kodaikanai.jpeg" },
  { name: "Wayanad", DN: " 2 to 3 days", price: 12000, img: "img/wayanad.jpeg" },
  { name: "Varkala", DN: " 2 to 3 days", price: 13000, img: "img/varkala.webp" },
  { name: "Gokarna", DN: " 2 to 3 days ", price: 10000, img: "img/Gokarna.jpeg" },
  { name: "Auli", DN: "2 to 3 days", price: 19000, img: "img/auli.jpeg" },
  { name: "Chopta", DN: "2 to 3 days", price: 10000, img: "img/chopta.jpeg" },
  { name: "Tawang", DN: "4 to 6 days", price: 32000, img: "img/tawang.jpg" },
  { name: "ZiroValley", DN: "2 to 3 days", price: 15000, img: "img/zero-valley.jpeg" },
  { name: "Coimbatore", DN: "1 to 2 days", price: 9000, img: "img/combetore.jpeg" },
  { name: "VaishnoDevi", DN: "2 to 3 days", price: 11000, img: "img/vaishnodevi.jpeg" },
  { name: "Kedarnath", DN: "3 to 4 days", price: 19000, img: "img/kedarnath.jpeg" },
  { name: "Badrinath", DN: "2 to 3 days", price: 14000, img: "img/badrinath.jpg" },
  { name: "GoldenTemple", DN: " 1 to 2 days", price: 9000, img: "img/goldentemple.jpeg" },
  { name: "Somnath", DN: "1 to 2 days", price: 10000, img: "img/somenath.jpg" },
  { name: "Dwarka", DN: "2 to 3 days ", price: 13000, img: "img/dwarka.jpeg" },
  { name: "Jagannath", DN: "1 to 2 days", price: 13000, img: "img/jagganath.jpeg" },
  { name: "Ujjain", DN: "1 to 2 days", price: 7000, img: "img/ujjain.jpg" },
  { name: "Mysore", DN: "1 to 2 days", price: 11000, img: "img/mysore.jpeg" },
  { name: "AndamanNicobar", DN: "5 to 7 days", price: 49000, img: "img/Andmaan&nicobar.jpeg" },
  { name: "Kutch", DN: "2 to 3 days", price: 14000, img: "img/kutch.jpeg" },

];

// Place Details
const placeDetailsData = {
  Goa: {
    desc: "Goa is a famous tourist destination known for its beautiful beaches like Baga, Calangute, and Palolem, along with historical sites such as the Basilica of Bom Jesus and Fort Aguada. It also offers natural attractions like the Dudhsagar Waterfalls. Goa is equally popular for its delicious food, especially fish curry rice, prawn balchão, and pork vindaloo. The mix of scenic beauty, culture, and tasty cuisine makes Goa a top travel spot.",
    hotels: ["Taj Exotica", "Leela Goa"],
    food: ["Seafood", "Fish Curry"],
    places: ["Baga Beach", "Calangute"]
  },

  Manali: {
    desc: "Manali is a popular hill station known for its snow-covered mountains, scenic valleys, and adventure activities. Famous places include Rohtang Pass, Solang Valley, Hadimba Devi Temple, and Atal Tunnel. It is also known for activities like skiing, paragliding, and trekking. Local food like momos, thukpa, and Himachali dishes adds to the travel experience, making Manali a perfect destination for nature and adventure lovers.",
    hotels: ["Snow Valley", "The Himalayan"],
    food: ["Siddu", "Thukpa"],
    places: ["Solang Valley", "Rohtang Pass"]
  },

  Ayodhya: {
    desc: "Ayodhya is a sacred city known as the birthplace of Lord Rama and an important pilgrimage destination. Key attractions include the Ram Mandir, Hanuman Garhi, Kanak Bhawan, and the ghats of the Sarayu River. The city is famous for its spiritual atmosphere, temples, and festivals like Diwali. Local food such as kachori, jalebi, and traditional sweets adds to the experience, making Ayodhya a peaceful and religious travel destination.",
    hotels: ["Ramayana Hotel", "Hotel Sahu"],
    food: ["Kachori", "Laddu"],
    places: ["Ram Mandir", "Hanuman Garhi"]
  },

  Haridwar: {
    desc: "Haridwar is a holy city located on the banks of the Ganga River and is one of the most important pilgrimage sites in India. Major attractions include Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple, and Daksha Mahadev Temple. The city is famous for the Ganga Aarti, spiritual atmosphere, and festivals like Kumbh Mela. Local food such as kachori, aloo puri, and sweets makes the visit even more enjoyable.",
    hotels: ["Hyatt Place Haridwar", "Hotel Alpana"],
    food: ["Kachori", "Aloo puri"],
    places: ["Har ki pauri", "Mansa Devi", "Kumb Mela"]
  },

  Rishikesh: {
    desc: "Rishikesh is a famous spiritual city located on the banks of the Ganga River, known as the “Yoga Capital of the World.” It is popular for places like Laxman Jhula, Ram Jhula, Triveni Ghat, and Parmarth Niketan Ashram, along with adventure activities like river rafting and trekking. The city offers a peaceful atmosphere with many temples and ashrams. Rishikesh is also known for its vegetarian food such as aloo puri, chole bhature, samosa, and healthy café dishes.",
    hotels: ["Ananda in the Himalayas", "Yog Niketan"],
    food: ["samosa", "Maggie"],
    places: ["Ram Jhula", "Laxman Jhula", "Triveni Ghat"]
  },

  Agra: {
    desc: "Agra is a historic city famous for the Taj Mahal, one of the Seven Wonders of the World, along with the Agra Fort and Fatehpur Sikri. The city reflects rich Mughal architecture and culture, attracting tourists from all over the world. Agra is also famous for its delicious food, especially petha (a sweet made from ash gourd), dalmoth, bedai with jalebi, and Mughlai dishes like kebabs and biryani.",
    hotels: [
      "The Oberoi Amarvilas",
      "ITC Mughal",
      "Taj Hotel & Convention Centre",
      "Radisson Blu Agra"
    ],

    food: [
      "Petha",
      "Dalmoth",
      "Bedai with Jalebi",
      "Mughlai Kebabs"
    ],

    places: [
      "Taj Mahal",
      "Agra Fort",
      "Fatehpur Sikri",
      "Mehtab Bagh",
      "Itmad-ud-Daulah"
    ]
  },

  Ladakh: {
    desc: "Ladakh is a breathtaking high-altitude desert in northern India, known for its stunning mountains, crystal-clear lakes, and Buddhist monasteries. Famous places include Pangong Lake, Nubra Valley, Magnetic Hill, and Leh Palace. It is popular for adventure activities like biking, trekking, and river rafting. Local food like thukpa, momos, butter tea, and traditional Ladakhi dishes adds to the unique travel experience.",

    hotels: [
      "The Grand Dragon Ladakh",
      "Hotel Ladakh Residency",
      "Lehchen Hotel",
      "The Zen Ladakh"
    ],

    food: [
      "Thukpa",
      "Momos",
      "Butter Tea",
      "Skyu"
    ],

    places: [
      "Pangong Lake",
      "Nubra Valley",
      "Magnetic Hill",
      "Leh Palace",
      "Khardung La Pass"
    ]
  },

  Spiti: {
    desc: "Spiti Valley is a cold desert mountain valley in Himachal Pradesh known for its rugged landscapes, ancient monasteries, and breathtaking views. Famous places include Key Monastery, Chandratal Lake, Kaza, and Tabo Monastery. It is ideal for adventure lovers with activities like trekking, camping, and biking. Local food like thukpa, momos, and simple Tibetan dishes adds to the unique experience.",

    hotels: [
      "Spiti Valley Hotel",
      "Hotel Deyzor",
      "Sakya Abode",
      "Zostel Spiti"
    ],

    food: [
      "Thukpa",
      "Momos",
      "Tingmo",
      "Butter Tea"
    ],

    places: [
      "Key Monastery",
      "Chandratal Lake",
      "Kaza",
      "Tabo Monastery",
      "Pin Valley National Park"
    ]
  },

  Jaipur: {
    desc: "Jaipur, the capital of Rajasthan, is known as the Pink City for its unique colored buildings and rich royal heritage. It is famous for its grand palaces, forts, and vibrant markets. Popular attractions include Hawa Mahal, Amber Fort, City Palace, and Jal Mahal. Jaipur is also known for its culture, handicrafts, and delicious Rajasthani food, making it a perfect destination for history and culture lovers.",

    hotels: [
      "Rambagh Palace",
      "ITC Rajputana",
      "Trident Jaipur",
      "Holiday Inn Jaipur City Centre"
    ],

    food: [
      "Dal Baati Churma",
      "Ghewar",
      "Laal Maas",
      "Kachori"
    ],

    places: [
      "Hawa Mahal",
      "Amber Fort",
      "City Palace",
      "Jal Mahal",
      "Nahargarh Fort"
    ]
  },

  Jaisalmer: {
    desc: "Jaisalmer, known as the Golden City of Rajasthan, is famous for its yellow sandstone architecture and vast Thar Desert. The city is known for its majestic forts, havelis, and desert safaris. Popular attractions include Jaisalmer Fort, Sam Sand Dunes, Patwon Ki Haveli, and Gadisar Lake. Camel rides, camping, and cultural performances make it a unique desert experience.",

    hotels: [
      "Suryagarh Jaisalmer",
      "Jaisalmer Marriott Resort & Spa",
      "Desert Tulip Hotel & Resort",
      "Hotel Rang Mahal"
    ],

    food: [
      "Dal Baati Churma",
      "Ker Sangri",
      "Gatte Ki Sabzi",
      "Mirchi Bada"
    ],

    places: [
      "Jaisalmer Fort",
      "Sam Sand Dunes",
      "Patwon Ki Haveli",
      "Gadisar Lake",
      "Kuldhara Village"
    ]
  },

  Jodhpur: {
    desc: "Jodhpur, known as the Blue City of Rajasthan, is famous for its blue-painted houses, grand forts, and rich royal history. The city offers stunning views, vibrant markets, and cultural heritage. Popular attractions include Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, and Mandore Gardens. Jodhpur is also known for its traditional Rajasthani cuisine and handicrafts.",

    hotels: [
      "Umaid Bhawan Palace",
      "RAAS Jodhpur",
      "Ajit Bhawan",
      "Fairfield by Marriott Jodhpur"
    ],

    food: [
      "Dal Baati Churma",
      "Makhaniya Lassi",
      "Mirchi Bada",
      "Pyaaz Kachori"
    ],

    places: [
      "Mehrangarh Fort",
      "Umaid Bhawan Palace",
      "Jaswant Thada",
      "Mandore Gardens",
      "Clock Tower Market"
    ]
  },

  Vanaras: {
    desc: "Varanasi (also known as Banaras or Kashi) is one of the oldest living cities in the world, located on the banks of the holy Ganga River. It is a major spiritual and cultural center of India, famous for temples, ghats, and religious rituals. People visit Varanasi for peace, spirituality, and its unique traditions.",
    hotels: [
      "Taj Ganges Varanasi",
      "BrijRama Palace",
      "Hotel Alka",
      "Radisson Hotel Varanasi"
    ],

    food: [
      "Kachori Sabzi",
      "Banarasi Paan",
      "Jalebi",
      "Lassi"
    ],

    places: [
      "Kashi Vishwanath Temple",
      "Dashashwamedh Ghat",
      "Assi Ghat",
      "Sarnath",
      "Manikarnika Ghat"
    ]
  },

  Kochi: {
    desc: "Kochi, also known as Cochin, is a beautiful coastal city in Kerala famous for its backwaters, beaches, and colonial history. It is known for its unique blend of Portuguese, Dutch, and British architecture. Popular attractions include Fort Kochi, Chinese Fishing Nets, Mattancherry Palace, and Marine Drive. Kochi is also famous for its seafood and traditional Kerala cuisine, making it a perfect mix of culture and nature.",

    hotels: [
      "Taj Malabar Resort & Spa",
      "Grand Hyatt Kochi Bolgatty",
      "Le Meridien Kochi",
      "Fragrant Nature Kochi"
    ],

    food: [
      "Kerala Sadya",
      "Appam with Stew",
      "Malabar Biryani",
      "Karimeen Pollichathu"
    ],

    places: [
      "Fort Kochi",
      "Chinese Fishing Nets",
      "Mattancherry Palace",
      "Marine Drive",
      "Cherai Beach"
    ]
  },

  Coorg: {
    desc: "Coorg, also known as Kodagu, is a beautiful hill station in Karnataka famous for its coffee plantations, misty hills, and lush greenery. It is known for its peaceful environment and scenic landscapes. Popular attractions include Abbey Falls, Raja's Seat, Dubare Elephant Camp, and Talakaveri. Coorg is also known for its unique Kodava cuisine, making it a perfect destination for nature lovers and relaxation.",

    hotels: [
      "The Tamara Coorg",
      "Evolve Back Coorg",
      "Coorg Cliffs Resort",
      "Club Mahindra Madikeri"
    ],

    food: [
      "Pandi Curry",
      "Kadambuttu",
      "Noolputtu",
      "Bamboo Shoot Curry"
    ],

    places: [
      "Abbey Falls",
      "Raja's Seat",
      "Dubare Elephant Camp",
      "Talakaveri",
      "Mandalpatti Viewpoint"
    ]
  },

  Gangtok: {
    desc: "Gangtok, the capital of Sikkim, is a beautiful hill city known for its stunning Himalayan views, peaceful monasteries, and clean environment. It offers a perfect blend of nature and culture. Popular attractions include Tsomgo Lake, Nathula Pass, MG Marg, and Rumtek Monastery. Gangtok is also known for its local cuisine and vibrant markets, making it a great destination for nature and culture lovers.",

    hotels: [
      "Mayfair Spa Resort & Casino",
      "The Elgin Nor-Khill",
      "Summit Norling Resort & Spa",
      "Hotel Golden Heights"
    ],

    food: [
      "Momos",
      "Thukpa",
      "Phagshapa",
      "Gundruk Soup"
    ],

    places: [
      "Tsomgo Lake",
      "Nathula Pass",
      "MG Marg",
      "Rumtek Monastery",
      "Hanuman Tok"
    ]
  },

  Shillong: {
    desc: "Shillong, the capital of Meghalaya, is known as the 'Scotland of the East' for its beautiful hills, waterfalls, and pleasant climate. It is famous for its natural beauty, music culture, and peaceful environment. Popular attractions include Umiam Lake, Elephant Falls, Shillong Peak, and Ward's Lake. Shillong is also known for its local Khasi cuisine and vibrant markets, making it a perfect destination for nature lovers.",
    hotels: ["Ri Kynjai Resort", "Hotel Polo Towers", "The Centre Point Shillong", "Hotel Alpine Continental"],
    food: ["Jadoh", "Dohneiiong", "Tungrymbai", "Pumaloi"],
    places: ["Umiam Lake", "Elephant Falls", "Shillong Peak", "Ward's Lake", "Laitlum Canyons"]
  },

  Himachal: {
    desc: "Himachal Pradesh is a beautiful hill state in northern India, known for its snow-covered mountains, lush valleys, rivers, and peaceful environment. It is a popular tourist destination for nature lovers, adventure seekers, and honeymooners. The state offers activities like trekking, skiing, paragliding, and sightseeing.",
    hotels: ["The Oberoi Cecil", "Snow Valley Resorts", "Hotel Willow Banks", "Spiti Valley Hotel"],
    food: ["Dham", "Siddu", "Madra", "Tudkiya Bhath", "Chha Gosht"],
    places: ["Shimla", "Manali", "Dharamshala", "Kullu Valley", "spity valley"]
  },

  Kashmir: {
    desc: "Kashmir is often called “Paradise on Earth” because of its breathtaking natural beauty. Located in northern India, it is famous for snow-covered mountains, green valleys, lakes, and gardens. Kashmir is a perfect destination for nature lovers, honeymooners, and adventure seekers.",
    hotels: ["The Lalit Grand Palace", "Khyber Himalayan Resort & Spa", "Heevan Retreat", "Dal Lake Houseboats"],
    food: ["Rogan Josh", "Yakhni", "Dum Aloo", "Gushtaba", "Kahwa"],
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Dal Lake"]
  },

  Jaisalmer: {
    desc: "Jaisalmer, known as the Golden City of Rajasthan, is famous for its yellow sandstone architecture and vast Thar Desert. The city is known for its grand forts, beautiful havelis, and unique desert experiences. Popular attractions include Jaisalmer Fort, Sam Sand Dunes, Patwon Ki Haveli, and Gadisar Lake. Camel safaris, desert camping, and cultural performances make it a perfect destination for adventure and heritage lovers.",

    hotels: [
      "Suryagarh Jaisalmer",
      "Jaisalmer Marriott Resort & Spa",
      "Desert Tulip Hotel & Resort",
      "Hotel Rang Mahal"
    ],

    food: [
      "Dal Baati Churma",
      "Ker Sangri",
      "Gatte Ki Sabzi",
      "Mirchi Bada"
    ],

    places: [
      "Jaisalmer Fort",
      "Sam Sand Dunes",
      "Patwon Ki Haveli",
      "Gadisar Lake",
      "Kuldhara Village"
    ]
  },

  Kutch: {
    desc: "Kutch, also known as Kachchh, is a unique region in Gujarat famous for the vast white salt desert called the Rann of Kutch. It is known for its rich culture, handicrafts, and vibrant festivals like the Rann Utsav. Popular attractions include White Rann, Kalo Dungar, Mandvi Beach, and Vijay Vilas Palace. Kutch offers a blend of desert beauty, cultural experiences, and traditional cuisine.",

    hotels: [
      "Rann Utsav Tent City",
      "Regenta Resort Bhuj",
      "Hotel Prince Bhuj",
      "Vijay Vilas Heritage Resort"
    ],

    food: [
      "Dabeli",
      "Kutchi Kadhi",
      "Bajra Rotla",
      "Fafda Jalebi"
    ],

    places: [
      "Rann of Kutch",
      "Kalo Dungar",
      "Mandvi Beach",
      "Vijay Vilas Palace",
      "Bhuj"
    ]
  },

  AndamanNicobar: {
    desc: "Andaman & Nicobar Islands are a beautiful group of islands in the Bay of Bengal known for their crystal-clear waters, white sandy beaches, and rich marine life. It is a perfect destination for beach lovers and adventure seekers. Popular attractions include Radhanagar Beach, Cellular Jail, Havelock Island, and Ross Island. Activities like scuba diving, snorkeling, and water sports make it a top tropical getaway.",

    hotels: [
      "Taj Exotica Resort & Spa Andamans",
      "SeaShell Havelock",
      "Sinclairs Bayview Port Blair",
      "Silver Sand Beach Resort"
    ],

    food: [
      "Seafood Curry",
      "Grilled Fish",
      "Prawns",
      "Coconut-based Dishes"
    ],

    places: [
      "Radhanagar Beach",
      "Cellular Jail",
      "Havelock Island",
      "Ross Island",
      "Neil Island"
    ]
  },

  Mysore: {
    desc: "Mysore, also known as Mysuru, is a historic city in Karnataka famous for its royal heritage, palaces, and cultural traditions. It is best known for the grand Mysore Palace and the vibrant Dussehra festival. Popular attractions include Mysore Palace, Chamundi Hills, Brindavan Gardens, and St. Philomena’s Church. Mysore is also known for its silk sarees, sandalwood products, and delicious South Indian cuisine.",

    hotels: [
      "Radisson Blu Plaza Hotel Mysore",
      "Royal Orchid Metropole",
      "Fortune JP Palace",
      "Hotel Sandesh The Prince"
    ],

    food: [
      "Mysore Pak",
      "Masala Dosa",
      "Idli Vada",
      "Filter Coffee"
    ],

    places: [
      "Mysore Palace",
      "Chamundi Hills",
      "Brindavan Gardens",
      "St. Philomena’s Church",
      "Mysore Zoo"
    ]
  },

  Ujjain: {
    desc: "Ujjain is one of the oldest and most sacred cities in India, located in Madhya Pradesh on the banks of the Shipra River. It is famous for the Mahakaleshwar Jyotirlinga, one of the 12 Jyotirlingas of Lord Shiva. The city is known for its spiritual atmosphere, temples, and the grand Kumbh Mela. Popular attractions include Mahakaleshwar Temple, Kal Bhairav Temple, Ram Ghat, and Harsiddhi Temple.",

    hotels: [
      "Hotel Anjushree",
      "Rudraksh Club & Resort",
      "Hotel Mittal Avenue",
      "Hotel Imperial"
    ],

    food: [
      "Poha Jalebi",
      "Sabudana Khichdi",
      "Kachori",
      "Malpua"
    ],

    places: [
      "Mahakaleshwar Temple",
      "Kal Bhairav Temple",
      "Ram Ghat",
      "Harsiddhi Temple",
      "Sandipani Ashram"
    ]
  },

  Jagannath: {
    desc: "Jagannath Puri, located in Odisha, is one of the most sacred pilgrimage destinations in India, famous for the Shri Jagannath Temple dedicated to Lord Krishna. It is also known for the grand Rath Yatra festival that attracts millions of devotees every year. The city offers a spiritual atmosphere along with beautiful beaches. Popular attractions include Jagannath Temple, Puri Beach, Konark Sun Temple, and Chilika Lake.",

    hotels: [
      "Mayfair Heritage Puri",
      "Toshali Sands Resort",
      "Sterling Puri",
      "Hotel Holiday Resort"
    ],

    food: [
      "Mahaprasad",
      "Khaja",
      "Dalma",
      "Chhena Poda"
    ],

    places: [
      "Jagannath Temple",
      "Puri Beach",
      "Konark Sun Temple",
      "Chilika Lake",
      "Gundicha Temple"
    ]
  },

  Dwarka: {
    desc: "Dwarka, located in Gujarat, is one of the most sacred cities in India and is believed to be the kingdom of Lord Krishna. It is one of the Char Dham pilgrimage sites and is known for its spiritual significance and coastal beauty. Popular attractions include Dwarkadhish Temple, Bet Dwarka, Rukmini Devi Temple, and Dwarka Beach. The city offers a peaceful and religious atmosphere for devotees and travelers.",

    hotels: [
      "Hawthorn Suites by Wyndham Dwarka",
      "The Fern Sattva Resort Dwarka",
      "Hotel Dwarkadhish Lords Eco Inn",
      "Hotel Gomti Dwarka"
    ],

    food: [
      "Gujarati Thali",
      "Khichdi Kadhi",
      "Fafda Jalebi",
      "Thepla"
    ],

    places: [
      "Dwarkadhish Temple",
      "Bet Dwarka",
      "Rukmini Devi Temple",
      "Dwarka Beach",
      "Gomti Ghat"
    ]
  },

  Somnath: {
    desc: "Somnath, located in Gujarat, is one of the most sacred pilgrimage sites in India and home to the famous Somnath Temple, one of the 12 Jyotirlingas of Lord Shiva. Situated along the Arabian Sea, it offers a peaceful spiritual atmosphere with beautiful coastal views. Popular attractions include Somnath Temple, Triveni Sangam, Bhalka Tirth, and Somnath Beach.",

    hotels: [
      "The Fern Residency Somnath",
      "Lords Inn Somnath",
      "Hotel Somnath Sagar",
      "Sarovar Portico Somnath"
    ],

    food: [
      "Gujarati Thali",
      "Khichdi Kadhi",
      "Thepla",
      "Fafda Jalebi"
    ],

    places: [
      "Somnath Temple",
      "Triveni Sangam",
      "Bhalka Tirth",
      "Somnath Beach",
      "Suraj Mandir"
    ]
  },

  GoldenTemple: {
    desc: "The Golden Temple, also known as Sri Harmandir Sahib, is the most sacred shrine of Sikhism located in Amritsar, Punjab. It is famous for its stunning golden architecture, peaceful spiritual atmosphere, and the world’s largest free community kitchen (Langar). The temple attracts millions of visitors every year. Nearby attractions include Jallianwala Bagh and Wagah Border.",

    hotels: [
      "Taj Swarna Amritsar",
      "Hyatt Regency Amritsar",
      "Ramada by Wyndham Amritsar",
      "Hotel City Park Amritsar"
    ],

    food: [
      "Langar Prasad",
      "Amritsari Kulcha",
      "Chole Bhature",
      "Lassi"
    ],

    places: [
      "Golden Temple",
      "Jallianwala Bagh",
      "Wagah Border",
      "Durgiana Temple",
      "Akal Takht"
    ]
  },

  Badrinath: {
    desc: "Badrinath, located in Uttarakhand, is one of the most important pilgrimage sites in India and part of the Char Dham Yatra. It is dedicated to Lord Vishnu and is surrounded by the majestic Himalayas along the Alaknanda River. The temple is known for its spiritual significance and scenic beauty. Popular attractions include Badrinath Temple, Tapt Kund, Mana Village, and Vasudhara Falls.",

    hotels: [
      "Sarovar Portico Badrinath",
      "Hotel Snow Crest",
      "Narayan Palace",
      "Hotel Dwarikesh"
    ],

    food: [
      "Khichdi",
      "Aloo Puri",
      "Paratha",
      "Tea"
    ],

    places: [
      "Badrinath Temple",
      "Tapt Kund",
      "Mana Village",
      "Vasudhara Falls",
      "Charan Paduka"
    ]
  },

  Kedarnath: {
    desc: "Kedarnath, located in Uttarakhand, is one of the most sacred pilgrimage sites in India and one of the 12 Jyotirlingas of Lord Shiva. Situated in the Garhwal Himalayas near the Mandakini River, it is surrounded by snow-capped mountains and offers a deeply spiritual atmosphere. The temple is accessible by trekking and is part of the Char Dham Yatra. Popular attractions include Kedarnath Temple, Bhairavnath Temple, Vasuki Tal, and Gaurikund.",

    hotels: [
      "Kedarnath Camp Resorts",
      "GMVN Tourist Rest House",
      "Punjab Sindh Awas",
      "Kedar River Retreat"
    ],

    food: [
      "Khichdi",
      "Aloo Puri",
      "Maggi",
      "Tea"
    ],

    places: [
      "Kedarnath Temple",
      "Bhairavnath Temple",
      "Gaurikund",
      "Vasuki Tal",
      "Adi Shankaracharya Samadhi"
    ]
  },

  VaishnoDevi: {
    desc: "Vaishno Devi, located in Jammu & Kashmir, is one of the most sacred pilgrimage sites in India dedicated to Goddess Durga. The shrine is situated in the Trikuta Hills near Katra and is visited by millions of devotees every year. The journey involves a scenic trek to the holy cave. Popular attractions include Vaishno Devi Temple, Ardhkuwari Cave, Bhairavnath Temple, and Banganga.",

    hotels: [
      "The White Hotels Katra",
      "Rama Trident Hotel",
      "Hotel KC Residency",
      "Country Inn & Suites by Radisson Katra"
    ],

    food: [
      "Rajma Chawal",
      "Kachori",
      "Halwa",
      "Tea"
    ],

    places: [
      "Vaishno Devi Temple",
      "Ardhkuwari Cave",
      "Bhairavnath Temple",
      "Banganga",
      "Katra"
    ]
  },

  Coimbatore: {
    desc: "Coimbatore, located in Tamil Nadu, is a major industrial city known as the 'Manchester of South India' for its textile industry. Surrounded by the Western Ghats, it offers a mix of nature, spirituality, and modern lifestyle. Popular attractions include Marudamalai Temple, Isha Yoga Center, Adiyogi Shiva Statue, and Siruvani Waterfalls. The city is also known for its pleasant climate and delicious South Indian cuisine.",

    hotels: [
      "Vivanta Coimbatore",
      "Radisson Blu Coimbatore",
      "Le Meridien Coimbatore",
      "The Residency Towers"
    ],

    food: [
      "Dosa",
      "Idli",
      "Sambar",
      "Filter Coffee"
    ],

    places: [
      "Adiyogi Shiva Statue",
      "Isha Yoga Center",
      "Marudamalai Temple",
      "Siruvani Waterfalls",
      "VOC Park and Zoo"
    ]
  },

  ZiroValley: {
    desc: "Ziro Valley, located in Arunachal Pradesh, is a beautiful and peaceful destination known for its lush green landscapes, rice fields, and unique Apatani tribal culture. Surrounded by hills and pine forests, it is perfect for nature lovers and offbeat travelers. It is also famous for the Ziro Music Festival. Popular attractions include Talley Valley Wildlife Sanctuary, Ziro Puto, and Meghna Cave Temple.",

    hotels: [
      "Ziro Palace Inn",
      "Blue Pine Hotel",
      "Hotel Ziro Valley Resort",
      "Siiro Resort"
    ],

    food: [
      "Thukpa",
      "Momos",
      "Bamboo Shoot Dishes",
      "Rice Beer (Apatani style)"
    ],

    places: [
      "Ziro Valley",
      "Talley Valley Wildlife Sanctuary",
      "Ziro Puto",
      "Meghna Cave Temple",
      "Pine Grove"
    ]
  },

  Tawang: {
    desc: "Tawang, located in Arunachal Pradesh, is a stunning hill destination known for its snow-capped mountains, beautiful monasteries, and peaceful environment. It is home to the famous Tawang Monastery, one of the largest monasteries in India. The region offers breathtaking views, high-altitude lakes, and rich Buddhist culture. Popular attractions include Tawang Monastery, Sela Pass, Madhuri Lake, and Nuranang Falls.",

    hotels: [
      "Hotel Tawang Heights",
      "Hotel Mon Paradise",
      "Hotel Gakyi Khang Zhang",
      "Tawang Inn"
    ],

    food: [
      "Thukpa",
      "Momos",
      "Butter Tea",
      "Zan"
    ],

    places: [
      "Tawang Monastery",
      "Sela Pass",
      "Madhuri Lake",
      "Nuranang Falls",
      "Bum La Pass"
    ]
  },

  Chopta: {
    desc: "Chopta, located in Uttarakhand, is a beautiful hill station known as the 'Mini Switzerland of India' for its lush green meadows and panoramic Himalayan views. It is a perfect destination for trekking and nature lovers. The famous Tungnath Temple, the highest Shiva temple in the world, and Chandrashila Peak are major attractions. Chopta offers peaceful surroundings, scenic landscapes, and a refreshing escape from city life.",

    hotels: [
      "Chopta Meadows Camp",
      "The Bunker House",
      "Snow Pod Chopta",
      "Magpie Camp Chopta"
    ],

    food: [
      "Aloo Paratha",
      "Maggi",
      "Dal Rice",
      "Tea"
    ],

    places: [
      "Tungnath Temple",
      "Chandrashila Peak",
      "Deoria Tal",
      "Ukhimath",
      "Kanchula Korak Musk Deer Sanctuary"
    ]
  },

  Gokarna: {
    desc: "Gokarna, located in Karnataka, is a peaceful coastal town known for its beautiful beaches and spiritual significance. It is famous for the Mahabaleshwar Temple dedicated to Lord Shiva and offers a relaxed alternative to Goa. Popular attractions include Om Beach, Kudle Beach, Paradise Beach, and Half Moon Beach. Gokarna is also known for its scenic sunsets, beach trekking, and laid-back vibe.",

    hotels: [
      "Kudle Beach View Resort & Spa",
      "SwaSwara CGH Earth",
      "Namaste Cafe Beach Stay",
      "Gokarna International Beach Resort"
    ],

    food: [
      "Seafood",
      "Fish Curry Rice",
      "South Indian Meals",
      "Coconut-based Dishes"
    ],

    places: [
      "Om Beach",
      "Kudle Beach",
      "Paradise Beach",
      "Half Moon Beach",
      "Mahabaleshwar Temple"
    ]
  },

  Varkala: {
    desc: "Varkala is a scenic coastal town in Kerala known for its unique cliffside beaches and peaceful vibe. It is one of the few places in India where cliffs overlook the Arabian Sea. Famous for relaxation, yoga, and sunsets, Varkala also has spiritual importance with temples and ashrams. It is a perfect destination for beach lovers and calm getaways.",

    hotels: [
      "Gateway Varkala - IHCL SeleQtions",
      "Hindustan Beach Retreat",
      "Krishnatheeram Ayur Holy Beach Resort",
      "Varkala Marine Palace"
    ],

    food: [
      "Kerala Sadya",
      "Appam with Stew",
      "Seafood",
      "Filter Coffee"
    ],

    places: [
      "Varkala Beach",
      "Varkala Cliff",
      "Janardanaswamy Temple",
      "Sivagiri Mutt",
      "Kappil Beach"
    ]
  },

  Wayanad: {
    desc: "Wayanad, located in Kerala, is a beautiful hill district known for its lush green forests, waterfalls, wildlife, and tea plantations. It is a perfect destination for nature lovers and adventure seekers. The region offers a peaceful environment with scenic landscapes and rich biodiversity. Popular attractions include Edakkal Caves, Soochipara Waterfalls, Wayanad Wildlife Sanctuary, and Banasura Sagar Dam.",

    hotels: [
      "Vythiri Village Resort",
      "The Windflower Resort & Spa",
      "Wayanad Silverwoods Resort",
      "Pepper Trail Plantation Resort"
    ],

    food: [
      "Kerala Sadya",
      "Appam with Stew",
      "Puttu and Kadala Curry",
      "Malabar Biryani"
    ],

    places: [
      "Edakkal Caves",
      "Soochipara Waterfalls",
      "Wayanad Wildlife Sanctuary",
      "Banasura Sagar Dam",
      "Chembra Peak"
    ]
  },

  Kodaikanal: {
    desc: "Kodaikanal, located in Tamil Nadu, is a beautiful hill station known as the 'Princess of Hill Stations' for its cool climate, misty hills, and scenic landscapes. It is famous for its lakes, waterfalls, and lush greenery. Popular attractions include Kodaikanal Lake, Coaker's Walk, Pillar Rocks, and Bryant Park. It is a perfect destination for nature lovers, couples, and those seeking a peaceful getaway.",

    hotels: [
      "The Tamara Kodai",
      "Sterling Kodai Lake",
      "Villa Retreat",
      "Kodai Resort Hotel"
    ],

    food: [
      "Homemade Chocolates",
      "South Indian Meals",
      "Biryani",
      "Filter Coffee"
    ],

    places: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
      "Bryant Park",
      "Silver Cascade Falls"
    ]
  },

  Cherrapunji: {
    desc: "Cherrapunji, located in Meghalaya, is one of the wettest places on Earth and is famous for its lush green landscapes, waterfalls, and living root bridges. It offers breathtaking views, misty hills, and a unique natural environment. Popular attractions include Nohkalikai Falls, Seven Sisters Falls, Living Root Bridges, and Mawsmai Caves. It is a perfect destination for nature lovers and adventure seekers.",

    hotels: [
      "Polo Orchid Resort",
      "Cherrapunjee Holiday Resort",
      "Jiva Resort",
      "La Kupar Inn"
    ],

    food: [
      "Jadoh",
      "Dohneiiong",
      "Tungrymbai",
      "Rice and Meat Dishes"
    ],

    places: [
      "Nohkalikai Falls",
      "Seven Sisters Falls",
      "Living Root Bridges",
      "Mawsmai Caves",
      "Eco Park"
    ]
  },

  Harsil: {
    desc: "Harsil, located in Uttarakhand, is a hidden gem known for its serene beauty, apple orchards, and scenic views of the Himalayas. Situated on the banks of the Bhagirathi River, it offers a peaceful escape from crowded tourist places. The region is famous for its natural beauty, trekking routes, and calm environment. Popular attractions include Harsil Valley, Gangotri Temple, Dharali Village, and Sattal (Seven Lakes).",

    hotels: [
      "Harsil Retreat",
      "Prakriti The Retreat",
      "Hotel Harsil Cottages",
      "GMVN Tourist Rest House Harsil"
    ],

    food: [
      "Rajma Chawal",
      "Aloo Paratha",
      "Maggi",
      "Tea"
    ],

    places: [
      "Harsil Valley",
      "Gangotri Temple",
      "Dharali Village",
      "Sattal (Seven Lakes)",
      "Bhagirathi River"
    ]
  },

  Majuli: {
    desc: "Majuli, located in Assam, is the world’s largest river island situated on the Brahmaputra River. It is known for its rich culture, traditional monasteries (Satras), and peaceful natural beauty. Majuli offers a unique experience of Assamese culture, art, and simple village life. Popular attractions include Kamalabari Satra, Auniati Satra, Dakhinpat Satra, and the scenic river landscapes.",

    hotels: [
      "La Maison de Ananda",
      "Ygdrasill Bamboo Cottage",
      "Okegiga Homes",
      "Mepo Okum Homestay"
    ],

    food: [
      "Assamese Thali",
      "Fish Curry",
      "Rice Beer",
      "Pitha"
    ],

    places: [
      "Kamalabari Satra",
      "Auniati Satra",
      "Dakhinpat Satra",
      "Brahmaputra River",
      "Samaguri Satra"
    ]
  },

  Lakshadweep: {
    desc: "Lakshadweep is a group of beautiful tropical islands in the Arabian Sea, known for its crystal-clear waters, coral reefs, and white sandy beaches. It is one of India’s most untouched and peaceful beach destinations, perfect for relaxation and water activities. Popular attractions include Agatti Island, Bangaram Island, Kavaratti, and Minicoy Island. The islands are ideal for snorkeling, scuba diving, and enjoying marine life.",

    hotels: [
      "Bangaram Island Resort",
      "Agatti Island Beach Resort",
      "Kavaratti Island Beach Resort",
      "Minicoy Island Beach Resort"
    ],

    food: [
      "Seafood",
      "Fish Curry",
      "Coconut-based Dishes",
      "South Indian Meals"
    ],

    places: [
      "Agatti Island",
      "Bangaram Island",
      "Kavaratti",
      "Minicoy Island",
      "Kalpeni Island"
    ]
  },

  Rameshwaram: {
    desc: "Rameshwaram, located in Tamil Nadu, is one of the most sacred pilgrimage sites in India and part of the Char Dham Yatra. It is famous for the Ramanathaswamy Temple, known for its long corridors and spiritual significance. Surrounded by the sea, the town also offers scenic beauty and peaceful vibes. Popular attractions include Pamban Bridge, Dhanushkodi, and Agni Theertham.",

    hotels: [
      "Hyatt Place Rameswaram",
      "Daiwik Hotels Rameswaram",
      "Hotel Ashoka",
      "Hotel Royal Park"
    ],

    food: [
      "South Indian Meals",
      "Dosa",
      "Idli",
      "Seafood"
    ],

    places: [
      "Ramanathaswamy Temple",
      "Pamban Bridge",
      "Dhanushkodi",
      "Agni Theertham",
      "Gandhamadhana Parvatham"
    ]
  },

  Sundarbans: {
    desc: "The Sundarbans, located in West Bengal, is the largest mangrove forest in the world and a UNESCO World Heritage Site. It is famous for its unique ecosystem, rich biodiversity, and the Royal Bengal Tiger. Spread across India and Bangladesh, it offers an adventurous experience with boat safaris through dense forests and waterways. Popular attractions include Sundarbans National Park, Sajnekhali Wildlife Sanctuary, and Dobanki Canopy Walk.",

    hotels: [
      "Sundarban Tiger Camp",
      "Sajnekhali Tourist Lodge",
      "Eco Village Resort Sundarbans",
      "Hotel Sonar Bangla Sundarban"
    ],

    food: [
      "Fish Curry",
      "Rice",
      "Prawns",
      "Bengali Sweets"
    ],

    places: [
      "Sundarbans National Park",
      "Sajnekhali Wildlife Sanctuary",
      "Dobanki Canopy Walk",
      "Sudhanyakhali Watch Tower",
      "Netidhopani"
    ]
  },

  Mahabalipuram: {
    desc: "Mahabalipuram, also known as Mamallapuram, is a historic coastal town in Tamil Nadu famous for its ancient rock-cut temples and UNESCO World Heritage monuments. It is known for its beautiful shorelines, intricate carvings, and Pallava architecture. Popular attractions include Shore Temple, Pancha Rathas, Arjuna’s Penance, and Mahabalipuram Beach. It is a perfect destination for history lovers and beach explorers.",

    hotels: [
      "Radisson Blu Resort Temple Bay",
      "InterContinental Chennai Mahabalipuram Resort",
      "Chariot Beach Resort",
      "Ideal Beach Resort"
    ],

    food: [
      "Seafood",
      "South Indian Meals",
      "Fish Fry",
      "Filter Coffee"
    ],

    places: [
      "Shore Temple",
      "Pancha Rathas",
      "Arjuna’s Penance",
      "Mahabalipuram Beach",
      "Krishna’s Butter Ball"
    ]
  },

  Munnar: {
    desc: "Munnar, located in Kerala, is a beautiful hill station known for its vast tea plantations, misty hills, and cool climate. Surrounded by lush greenery and scenic valleys, it is a perfect destination for nature lovers and honeymooners. Popular attractions include Eravikulam National Park, Mattupetty Dam, Tea Gardens, and Attukal Waterfalls. Munnar offers a peaceful and refreshing escape from city life.",

    hotels: [
      "Parakkat Nature Resort",
      "The Panoramic Getaway",
      "Fragrant Nature Munnar",
      "Tea County Munnar"
    ],

    food: [
      "Kerala Sadya",
      "Appam with Stew",
      "Puttu and Kadala Curry",
      "Filter Coffee"
    ],

    places: [
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Tea Gardens",
      "Attukal Waterfalls",
      "Top Station"
    ]
  },

  Ooty: {
    desc: "Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu known for its cool climate, tea gardens, and scenic beauty. Often called the 'Queen of Hill Stations', it offers lush green landscapes, lakes, and colonial charm. Popular attractions include Ooty Lake, Botanical Gardens, Doddabetta Peak, and Nilgiri Mountain Railway. It is a perfect destination for nature lovers and relaxation.",

    hotels: [
      "Sterling Ooty Fern Hill",
      "Fortune Resort Sullivan Court",
      "Gem Park Ooty",
      "Savoy - IHCL SeleQtions"
    ],

    food: [
      "Homemade Chocolates",
      "South Indian Meals",
      "Biryani",
      "Filter Coffee"
    ],

    places: [
      "Ooty Lake",
      "Botanical Gardens",
      "Doddabetta Peak",
      "Nilgiri Mountain Railway",
      "Rose Garden"
    ]
  },

  Nainital: {
    desc: "Nainital, located in Uttarakhand, is a beautiful hill station known for its scenic lakes, pleasant weather, and surrounding mountains. Centered around the famous Naini Lake, it offers stunning views and a peaceful environment. Popular attractions include Naini Lake, Naina Devi Temple, Snow View Point, and The Mall Road. It is a perfect destination for nature lovers, families, and couples.",

    hotels: [
      "The Naini Retreat",
      "Shervani Hilltop",
      "Hotel Himalaya",
      "Sterling Nainital"
    ],

    food: [
      "Aloo Ke Gutke",
      "Bhatt Ki Churkani",
      "Maggi",
      "Tea"
    ],

    places: [
      "Naini Lake",
      "Naina Devi Temple",
      "Snow View Point",
      "Mall Road",
      "Tiffin Top"
    ]
  },

  Mussoorie: {
    desc: "Mussoorie, located in Uttarakhand, is a charming hill station known as the 'Queen of the Hills'. It is famous for its scenic beauty, pleasant weather, and colonial architecture. Surrounded by the Himalayas, it offers breathtaking views and a relaxing atmosphere. Popular attractions include Kempty Falls, Gun Hill, Mall Road, and Lal Tibba. Mussoorie is a perfect destination for nature lovers and honeymooners.",

    hotels: [
      "JW Marriott Mussoorie Walnut Grove Resort & Spa",
      "Fortune Resort Grace",
      "The Claridges Nabha Residence",
      "Sterling Mussoorie"
    ],

    food: [
      "Maggi",
      "Aloo Paratha",
      "Momos",
      "Tea"
    ],

    places: [
      "Kempty Falls",
      "Gun Hill",
      "Mall Road",
      "Lal Tibba",
      "Camel's Back Road"
    ]
  },

  Panchmarhi: {
    desc: "Pachmarhi, located in Madhya Pradesh, is the only hill station in the state and is known as the 'Queen of Satpura'. Surrounded by lush forests, waterfalls, and caves, it offers a peaceful and scenic environment. It is perfect for nature lovers and adventure seekers. Popular attractions include Bee Falls, Jata Shankar Cave, Dhoopgarh, and Pandav Caves.",

    hotels: [
      "WelcomHeritage Golf View",
      "Hotel Rock End Manor",
      "MPT Glen View",
      "MPT Satpura Retreat"
    ],

    food: [
      "Poha Jalebi",
      "Dal Bafla",
      "Bhutte Ka Kees",
      "Tea"
    ],

    places: [
      "Bee Falls",
      "Jata Shankar Cave",
      "Dhoopgarh",
      "Pandav Caves",
      "Apsara Vihar"
    ]
  },

  Darjeeling: {
    desc: "Darjeeling, located in West Bengal, is a famous hill station known for its tea plantations, cool climate, and stunning views of the Kanchenjunga mountain range. Often called the 'Queen of the Hills', it offers a mix of natural beauty and colonial charm. Popular attractions include Tiger Hill, Batasia Loop, Darjeeling Himalayan Railway, and Peace Pagoda. It is a perfect destination for nature lovers and honeymooners.",

    hotels: [
      "Mayfair Darjeeling",
      "Windamere Hotel",
      "Summit Swiss Heritage Hotel",
      "Cedar Inn"
    ],

    food: [
      "Momos",
      "Thukpa",
      "Darjeeling Tea",
      "Noodles"
    ],

    places: [
      "Tiger Hill",
      "Batasia Loop",
      "Darjeeling Himalayan Railway",
      "Peace Pagoda",
      "Padmaja Naidu Himalayan Zoo"
    ]
  },

  Auli: {
    desc: "Auli, located in Uttarakhand, is a popular hill station known for its snow-covered slopes and breathtaking views of the Himalayan peaks. It is one of the best skiing destinations in India and attracts adventure lovers throughout the year. Surrounded by oak forests and mountains, Auli offers a peaceful environment and scenic beauty. Popular attractions include Auli Ropeway, Gurso Bugyal, Joshimath, and Chattrakund Lake.",

    hotels: [
      "The Cliff Top Club Auli",
      "Auli D Resort",
      "Blue Poppy Resort",
      "GMVN Ski Resort Auli"
    ],

    food: [
      "Aloo Paratha",
      "Rajma Chawal",
      "Maggi",
      "Tea"
    ],

    places: [
      "Auli Ropeway",
      "Gurso Bugyal",
      "Joshimath",
      "Chattrakund Lake",
      "Nanda Devi View Point"
    ]
  }
};

// Weather report
async function getWeather(city) {

  const apiKey = "d2852281c0784679afb162740260405";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const weatherHTML = `
            <div class="card p-2">
                <h6>${data.location.name}</h6>
                <p>🌡 Temp: ${data.current.temp_c} °C</p>
                <p>${data.current.condition.text}</p>
                <p>💧 Humidity: ${data.current.humidity}%</p>
                <p>🌬 Wind: ${data.current.wind_kph} kph</p>
            </div>
        `;

    document.getElementById("weatherBox").innerHTML = weatherHTML;

  } catch (error) {
    document.getElementById("weatherBox").innerHTML =
      `<p style="color:red;">${error.message}</p>`;
  }
}

// LOAD TOURS
function loadTours(data = tours) {
  const container = document.getElementById("tourContainer");
  container.innerHTML = "";

  data.forEach(tour => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${tour.img}" style="height:200px; object:fit:cover;">
          <div class="card-body text-center">
            <h5>${tour.name}</h5>
            <p class="fw-semibold">${tour.DN}</p>
            <p class="fw-semibold">${tour.price}₹/person</p>
            <button class="btn btn-primary"onclick="showDetails('${tour.name}', '${tour.img}'); getWeather('${tour.name}')">View Detail</button>
            <button class="btn booking-btn btn-primary" onclick="confirmBooking()">Comfirm Booking</button>
          </div>
        </div>
      </div>
    `;
  });
}

loadTours();

// SEARCH
function searchTours() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = tours.filter(t => t.name.toLowerCase().includes(value));
  loadTours(filtered);
}

// BOOKING
function openBooking(place) {
  document.getElementById("place").value = place;
  new bootstrap.Modal(document.getElementById("bookingModal")).show();
}

function confirmBooking() {
  // const name = document.getElementById("userName").value;
  // const place = document.getElementById("place").value;
  window.location.href = "planTour.html";

  // showToast("Booking Confirmed for " + place);
}

// SWITCH
function showSignup() {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}

//  LOGIN
function showLogin() {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
}

// SIGNUP
function signup() {
  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const phone = signupPhone.value.trim();
  const travelType = travelTypeSelect.value;
  const password = signupPassword.value;
  const confirm = confirmPassword.value;

  if (!name || !email || !phone || !travelType || !password || !confirm) {
    showToast("All fields are required ❗");
    return;
  }

  if (password !== confirm) {
    showToast("Passwords do not match ❌");
    return;
  }

  if (localStorage.getItem(email)) {
    showToast("User already registered ❌");
    return;
  }

  const user = {
    name,
    email,
    phone,
    travelType,
    password
  };

  localStorage.setItem(email, JSON.stringify(user));
  showToast("Registration successful ✅");

  showLogin();
}

// LOGIN
function login() {
  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  const user = JSON.parse(localStorage.getItem(email));

  if (!user) {
    showToast("Account not found ❌");
    return;
  }

  if (user.password !== password) {
    showToast("Incorrect password ❌");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  showToast(`Welcome ${user.name} ✈️`);

  setTimeout(() => location.reload(), 1500);
}
// show hidden password
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector("#togglePassword i"); // 👈 target icon
  const password = document.getElementById("loginPassword");

  toggle.addEventListener("click", function () {
    password.type = password.type === "password" ? "text" : "password";

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

// FORGOT PASSWORD (Demo)
function forgotPassword() {
  showToast("Redirect to password recovery (Backend needed)");
}

// chat bot btn
const chatBtn = document.getElementById("chatToggle");
const chatbot = document.querySelector(".chatbot");

chatBtn.addEventListener("click", () => {
  chatbot.style.display =
    chatbot.style.display === "block" ? "none" : "block";
});

// Chat bot
async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const chatbox = document.getElementById("chatbox");

  if (!input) return;

  chatbox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCKAPzKjarE7CmCUiVpmbo0JoPq2Ko97eo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a tour guide assistant. Give output in bulletpoints\nUser: ${input}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("FULL RESPONSE:", data);

    // 🔴 Handle API error
    if (data.error) {
      chatbox.innerHTML += `<p><b>TripMate:</b> ${data.error.message}</p>`;
      return;
    }

    // ✅ Safe parsing
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    chatbox.innerHTML += `<p><b>TripMate:</b> ${reply || "No response from AI"}</p>`;

  } catch (error) {
    chatbox.innerHTML += `<p><b>TripMate:</b> Error: ${error.message}</p>`;
  }

  document.getElementById("userInput").value = "";
}

// TOAST
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast-box";
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    btn.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    btn.innerText = "🌙";
  }
}

// LOAD THEME
window.onload = () => {
  const theme = localStorage.getItem("theme");
  const btn = document.getElementById("themeBtn");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    btn.innerText = "☀️";
  }
};

// Details 
function showDetails(placeName, img) {
  const data = placeDetailsData[placeName];

  if (!data) {
    alert("Details not available");
    return;
  }

  document.getElementById("placeDetails").classList.remove("d-none");

  document.getElementById("detailName").innerText = placeName;
  document.getElementById("detailImg").src = img;
  document.getElementById("detailDesc").innerText = data.desc;

  document.getElementById("detailHotels").innerHTML =
    data.hotels.map(h => `<li>${h}</li>`).join("");

  document.getElementById("detailFood").innerHTML =
    data.food.map(f => `<li>${f}</li>`).join("");

  document.getElementById("detailPlaces").innerHTML =
    data.places.map(p => `<li>${p}</li>`).join("");

  document.getElementById("placeDetails").scrollIntoView({ behavior: "smooth" });
}

function scrollToTours() {
  document.getElementById("tourContainer").scrollIntoView({ behavior: "smooth" });
}

