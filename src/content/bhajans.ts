export type BhajanVerse = {
  id: number;
  text: string;
};

export type Bhajan = {
  slug: string;
  title: string;
  subtitle: string;
  verses: BhajanVerse[];
};

// Verse text only — no meaning/translation, matching the rest of this
// family of sites. All compositions here are by Goswami Tulsidas
// (c. 1532–1623), author of the Ramcharitmanas — public domain devotional
// poetry by an author who died roughly 400 years ago. Deliberately scoped
// to his OTHER devotional works (Vinay Patrika, Kavitavali, Dohavali) and
// Bajrang Baan, not Ramcharitmanas itself or the Hanuman Chalisa, both of
// which already have their own dedicated sites elsewhere in this family
// (Ramcharitmanas Katha, and Hanuman Chalisa inside Aarti Sangrah) — so
// this site adds distinct content rather than duplicating it. Presented as
// the commonly-sung core verses/opening of each composition, not a full
// critical-edition text (several, especially from Vinay Patrika, are
// excerpted openings rather than the complete pada).
export const bhajans: Bhajan[] = [
  {
    slug: "shri-ramchandra-kripalu-bhajman",
    title: "श्री रामचंद्र कृपालु भजमन",
    subtitle: "गोस्वामी तुलसीदास कृत — विनय पत्रिका",
    verses: [
      { id: 1, text: `श्री रामचन्द्र कृपालु भजु मन, हरण भवभय दारुणं।
नवकंज लोचन कंज मुख कर कंज पद कंजारुणं॥` },
      { id: 2, text: `कन्दर्प अगणित अमित छवि नव नील नीरद सुन्दरं।
पटपीत मानहुँ तड़ित रुचि शुचि नौमि जनक सुतावरं॥` },
      { id: 3, text: `भज दीनबन्धु दिनेश दानव दैत्यवंशनिकन्दनं।
रघुनन्द आनन्दकन्द कोसलचन्द दशरथनन्दनं॥` },
      { id: 4, text: `सिर मुकुट कुण्डल तिलक चारु उदारु अंग विभूषणं।
आजानुभुज शर चाप धर संग्राम जित खरदूषणं॥` },
      { id: 5, text: `इति वदति तुलसीदास शंकर शेष मुनि मन रंजनं।
मम हृदयकंज निवास कुरु कामादिखलदलगंजनं॥` },
    ],
  },
  {
    slug: "jaake-priya-na-ram-vaidehi",
    title: "जाके प्रिय न राम वैदेही",
    subtitle: "गोस्वामी तुलसीदास कृत — विनय पत्रिका",
    verses: [
      { id: 1, text: `जाके प्रिय न राम-बैदेही। तजिये ताहि कोटि बैरी सम, जद्यपि परम सनेही॥` },
      { id: 2, text: `तज्यो पिता प्रहलाद, बिभीषन बंधु, भरत महतारी।
बलि गुरु तज्यो कंत ब्रज-बनितन्हि, भये मुद-मंगलकारी॥` },
      { id: 3, text: `नाते नेह राम के मनियत, सुहृद सुसेब्य जहाँ लौं।
अंजन कहा आँखि जेहि फूटै, बहुतक कहौं कहाँ लौं॥` },
      { id: 4, text: `तुलसी सो सब भाँति, परम हित पूज्य प्रानते प्यारो।
जासों होय सनेह राम-पद, एतो मतों हमारो॥` },
    ],
  },
  {
    slug: "thumak-chalat-ramchandra",
    title: "ठुमक चलत रामचंद्र",
    subtitle: "गोस्वामी तुलसीदास कृत — कवितावली (बालकाण्ड)",
    verses: [
      { id: 1, text: `ठुमक चलत रामचंद्र, बाजत पैजनियाँ।
किलकि किलकि उठत धाय, गिरत भूमि लटपटाय, धाय मात गोद लेत, दशरथ की रनियाँ॥` },
      { id: 2, text: `अंचल रज अंग झारि, विविध भाँति सो दुलारि,
तन मन धन वारि वारि, कहत मृदु बचनियाँ॥` },
      { id: 3, text: `विद्रुम से अरुण अधर, बोलत मुख मधुर मधुर,
सुभग नासिका में चारु, लटकत लटकनियाँ॥` },
      { id: 4, text: `तुलसीदास अति आनंद, देख के मुखारविंद,
रघुवर छबि के समान, रघुवर छबि बनियाँ॥` },
    ],
  },
  {
    slug: "ab-laun-nasaani-ab-na-nasaihaun",
    title: "अब लौं नसानी, अब न नसैहौं",
    subtitle: "गोस्वामी तुलसीदास कृत — विनय पत्रिका",
    verses: [
      { id: 1, text: `अब लौं नसानी, अब न नसैहौं।
राम कृपा भव-निसा सिरानी, जागे फिरि न डसैहौं॥` },
      { id: 2, text: `पायो नाम चारु चिंतामनि, उर कर तें न खसैहौं।
तुलसी अब न नसैहौं, राम भरोसे राम बल॥` },
    ],
  },
  {
    slug: "deen-dayal-birdu-sambhari",
    title: "दीन दयाल बिरदु सम्भारी",
    subtitle: "गोस्वामी तुलसीदास कृत — विनय पत्रिका",
    verses: [
      { id: 1, text: `दीन दयाल बिरदु सम्भारी। हरहु नाथ मम संकट भारी॥` },
      { id: 2, text: `राम भरोसो राम बल, राम नाम बिस्वास।
सुमिरत सुभ मंगल कुसल, मांगत तुलसीदास॥` },
    ],
  },
  {
    slug: "maangat-tulsidas-kar-jore",
    title: "माँगत तुलसीदास कर जोरे",
    subtitle: "गोस्वामी तुलसीदास कृत — विनय पत्रिका",
    verses: [
      { id: 1, text: `माँगत तुलसीदास कर जोरे। बसहिं राम सिय मानस मोरे॥` },
      { id: 2, text: `एक भरोसो, एक बल, एक आस विश्वास।
स्वाति-सलिल रघुनाथ-जस, चातक तुलसीदास॥` },
    ],
  },
  {
    slug: "bajrang-baan",
    title: "बजरंग बाण",
    subtitle: "गोस्वामी तुलसीदास कृत (आरम्भिक अंश)",
    verses: [
      { id: 1, text: `निश्चय प्रेम प्रतीति ते, बिनय करैं सनमान।
तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥` },
      { id: 2, text: `जय हनुमंत संत हितकारी। सुनि लीजै प्रभु अरज हमारी॥
जन के काज बिलम्ब न कीजै। आतुर दौरि महासुख दीजै॥` },
    ],
  },
  {
    slug: "jo-sumirat-sidhi-hoi",
    title: "जो सुमिरत सिधि होइ",
    subtitle: "गोस्वामी तुलसीदास कृत — विनय पत्रिका (गणेश वंदना)",
    verses: [
      { id: 1, text: `जो सुमिरत सिधि होइ, गन नायक करिबर बदन।
करउ अनुग्रह सोइ, बुद्धि रासि सुभ गुन सदन॥` },
    ],
  },
];
