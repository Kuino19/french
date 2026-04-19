const quizSets = {
    foundation: [
        { section: "Pronunciation & Greetings", question: "Which of these greetings is most appropriate for a formal situation in the morning?", options: ["Salut !", "Bonjour, Monsieur.", "Coucou !", "Bonne nuit."], correct: 1, explanation: "'Bonjour' is the standard formal greeting. 'Monsieur' adds an extra layer of respect for formal settings." },
        { section: "Pronunciation & Greetings", question: "In the word 'Français', how is the 'ç' (c-cedilla) pronounced?", options: ["Like a 'K'", "Like an 'S'", "Like a 'CH'", "It is silent."], correct: 1, explanation: "The cedilla (ç) indicates the letter 'c' is pronounced as an 's' before the vowels a, o, and u." },
        { section: "Pronunciation & Greetings", question: "To say 'Good evening' in French, you use:", options: ["Bonne journée", "Bon après-midi", "Bonsoir", "Enchanté"], correct: 2, explanation: "'Bonsoir' is used to greet someone in the evening. 'Bonne journée' is used to wish someone a good day when leaving." },
        { section: "Pronunciation & Greetings", question: "Which letter is almost always silent at the very end of a French word?", options: ["r", "l", "e", "c"], correct: 2, explanation: "The letter 'e' is usually silent at the end of words unless it carries an accent (like é)." },
        { section: "Pronunciation & Greetings", question: "How do you say 'See you tomorrow'?", options: ["À bientôt", "À demain", "Au revoir", "S'il vous plaît"], correct: 1, explanation: "'À demain' literally means 'To tomorrow'. 'À bientôt' means 'See you soon'." },
        { section: "Pronunciation & Greetings", question: "'Comment ça va ?' is a way to ask:", options: ["What is your name?", "Where do you live?", "How are things going?", "How old are you?"], correct: 2, explanation: "This is a common informal way to ask 'How are you?'" },
        { section: "Pronunciation & Greetings", question: "The nasal sound in 'Vin' (wine) sounds most similar to:", options: ["Van", "Von", "Sang", "(None — French nasals are unique)"], correct: 3, explanation: "French nasal vowels involve air through both nose and mouth, creating sounds with no exact English equivalents." },
        { section: "Pronunciation & Greetings", question: "What does 'Enchanté' mean when meeting someone?", options: ["Goodbye", "Excuse me", "Nice to meet you", "Please"], correct: 2, explanation: "'Enchanté' literally means 'Enchanted' but is used as 'Nice to meet you'." },
        { section: "Pronunciation & Greetings", question: "Which of these means 'Thank you very much'?", options: ["De rien", "Merci beaucoup", "Pas de quoi", "Pardon"], correct: 1, explanation: "'Merci' means thank you, and 'beaucoup' means very much." },
        { section: "Pronunciation & Greetings", question: "In the word 'Habiter', is the 'H' pronounced?", options: ["Yes, like in 'House'", "No, it is silent (H muet)", "It sounds like a 'Y'", "It sounds like a 'G'"], correct: 1, explanation: "In French, the 'H' is always silent. It is either an 'H muet' or an 'H aspiré'." },
        { section: "Introducing Yourself", question: "How do you say 'My name is...'?", options: ["Je suis...", "J'ai...", "Je m'appelle...", "Moi est..."], correct: 2, explanation: "'Je m'appelle' literally means 'I call myself'. In French, you reflexively name yourself." },
        { section: "Introducing Yourself", question: "To ask 'How old are you?' formally:", options: ["Quel âge avez-vous ?", "Comment t'appelles-tu ?", "Où habitez-vous ?", "Quel est ton âge ?"], correct: 0, explanation: "French uses 'avoir' (to have) for age. Literally: 'What age have you?'" },
        { section: "Introducing Yourself", question: "To say 'I am 20 years old', which verb do you use?", options: ["Être (Je suis 20 ans)", "Avoir (J'ai 20 ans)", "Faire (Je fais 20 ans)", "Aller (Je vais 20 ans)"], correct: 1, explanation: "Unlike English, French uses 'avoir' (to have) for age." },
        { section: "Introducing Yourself", question: "'Je viens de France' means:", options: ["I live in France.", "I am going to France.", "I come from France.", "I like France."], correct: 2, explanation: "'Venir de' means 'to come from'." },
        { section: "Introducing Yourself", question: "Correct response to 'Où habites-tu ?':", options: ["J'ai dix ans.", "J'habite à Paris.", "Je m'appelle Marc.", "Enchanté."], correct: 1, explanation: "'Habiter' is 'to live/reside', usually followed by 'à' + city." },
        { section: "Essential Verbs", question: "Conjugate ÊTRE: 'Nous ______ étudiants.'", options: ["sommes", "êtes", "sont", "suis"], correct: 0, explanation: "'Nous sommes' is the first person plural of the irregular verb 'être'." },
        { section: "Essential Verbs", question: "Conjugate AVOIR: 'Ils ______ un chien.'", options: ["ont", "avons", "a", "as"], correct: 0, explanation: "'Ils ont' is the third person plural of 'avoir' (to have)." },
        { section: "Essential Verbs", question: "Conjugate ALLER: 'Je ______ au cinéma.'", options: ["vas", "vais", "va", "vont"], correct: 1, explanation: "'Aller' is irregular. 'Je vais' is the first person singular." },
        { section: "Essential Verbs", question: "Which verb means 'To be'?", options: ["Avoir", "Aller", "Être", "Faire"], correct: 2, explanation: "'Être' is equivalent to 'to be'." },
        { section: "Essential Verbs", question: "Which verb means 'To go'?", options: ["Avoir", "Aller", "Être", "Venir"], correct: 1, explanation: "'Aller' means 'to go'." },
        { section: "Essential Verbs", question: "Complete: 'Tu ______ faim ?'", options: ["es", "as", "vas", "a"], correct: 1, explanation: "Hunger is 'had' in French: 'avoir faim' (to have hunger)." },
        { section: "Essential Verbs", question: "Complete: 'Vous ______ en retard.'", options: ["avez", "allez", "êtes", "sont"], correct: 2, explanation: "'Être en retard' is the set phrase for 'to be late'." },
        { section: "Essential Verbs", question: "'Ils vont' is the plural form of which verb?", options: ["Avoir", "Être", "Aller", "Voir"], correct: 2, explanation: "'Aller' conjugates to 'Ils vont' in the present tense." },
        { section: "Essential Verbs", question: "'Elle a' means:", options: ["She is", "She goes", "She has", "She wants"], correct: 2, explanation: "'Elle a' is the third person singular of 'avoir' (to have)." },
        { section: "Essential Verbs", question: "'Nous allons' means:", options: ["We have", "We are", "We go / We are going", "They go"], correct: 2, explanation: "'Aller' conjugates to 'Nous allons'." },
        { section: "Articles & Nouns", question: "Which is the feminine singular definite article?", options: ["Le", "La", "Les", "Une"], correct: 1, explanation: "'La' is used for feminine singular nouns." },
        { section: "Articles & Nouns", question: "'Un' and 'Une' mean:", options: ["The", "Some", "A / An", "This"], correct: 2, explanation: "Indefinite articles — 'Un' masculine, 'Une' feminine." },
        { section: "Articles & Nouns", question: "Choose the correct article for '______ écoles' (plural):", options: ["Le", "La", "L'", "Les"], correct: 3, explanation: "All plural nouns take 'les' as the definite article." },
        { section: "Articles & Nouns", question: "Which definite article is used for 'homme'?", options: ["Le", "La", "L'", "Un"], correct: 2, explanation: "Before a vowel or silent H, 'le/la' becomes 'l''." },
        { section: "Articles & Nouns", question: "What is the plural of 'un livre' (a book)?", options: ["Le livre", "Des livres", "Les livres", "Une livre"], correct: 1, explanation: "The plural of 'un/une' is 'des'." },
        { section: "Numbers", question: "What is 'seize' in English?", options: ["6", "16", "60", "76"], correct: 1, explanation: "Numbers 11-16 have unique names before becoming compound (dix-sept)." },
        { section: "Numbers", question: "How do you say '70' in French?", options: ["Soixante", "Soixante-dix", "Quatre-vingts", "Cinquante"], correct: 1, explanation: "70 = 'Soixante-dix' (sixty-ten) — base 60 system." },
        { section: "Numbers", question: "What is 'Quatre-vingt-douze'?", options: ["82", "92", "412", "22"], correct: 1, explanation: "80 (4×20) + 12 = 92." },
        { section: "Numbers", question: "How do you say 'First' (masculine)?", options: ["Unième", "Premier", "Première", "Début"], correct: 1, explanation: "'Premier' is the masculine ordinal for first." },
        { section: "Numbers", question: "'Deuxième' means:", options: ["Second", "Twelve", "Half", "Twice"], correct: 0, explanation: "-ième is the suffix for ordinal numbers." },
        { section: "Numbers", question: "What is 'Vingt et un'?", options: ["20", "21", "31", "81"], correct: 1, explanation: "'Et' is used between tens and 'one' for 21, 31, 41, 51, 61." },
        { section: "Numbers", question: "How do you write '5th'?", options: ["Cinquième", "Cinqième", "Cinco", "Cinquante"], correct: 0, explanation: "A 'u' is added before -ième for numbers ending in 'q'." },
        { section: "Numbers", question: "'Cent' means:", options: ["10", "100", "1000", "50"], correct: 1, explanation: "'Cent' is 100. 'Mille' is 1000." },
        { section: "Numbers", question: "How do you say '80'?", options: ["Huitante", "Soixante-vingt", "Quatre-vingts", "Octante"], correct: 2, explanation: "'Quatre-vingts' = four twenties (4×20=80)." },
        { section: "Numbers", question: "What is 'Mille'?", options: ["100", "1,000,000", "1,000", "10"], correct: 2, explanation: "'Mille' = 1,000. It is invariable in its plural form." },
        { section: "Days, Months & Seasons", question: "'Lundi' is which day?", options: ["Sunday", "Monday", "Tuesday", "Friday"], correct: 1, explanation: "Lundi comes from 'Lune' (Moon)." },
        { section: "Days, Months & Seasons", question: "Which of these is 'Summer'?", options: ["L'hiver", "Le printemps", "L'été", "L'automne"], correct: 2, explanation: "'L'été' is summer. 'L'hiver' is winter." },
        { section: "Days, Months & Seasons", question: "'Juillet' corresponds to:", options: ["June", "July", "January", "August"], correct: 1, explanation: "Juillet is the 7th month, July." },
        { section: "Days, Months & Seasons", question: "Which month comes after 'Avril'?", options: ["Mars", "Mai", "Juin", "Février"], correct: 1, explanation: "Order: Avril → Mai → Juin." },
        { section: "Days, Months & Seasons", question: "'Le printemps' is known for:", options: ["Snow", "Falling leaves", "Flowers blooming", "Very hot sun"], correct: 2, explanation: "'Printemps' (Spring) is the season of blooming flowers." },
        { section: "The Family", question: "'Le frère de mon père' is my:", options: ["Cousin", "Grand-père", "Oncle", "Neveu"], correct: 2, explanation: "Your father's brother is your 'oncle' (uncle)." },
        { section: "The Family", question: "Who is 'ma grand-mère'?", options: ["My mother", "My sister", "My grandmother", "My aunt"], correct: 2, explanation: "Grand-mère = grandmother." },
        { section: "The Family", question: "'La fille' can mean 'the girl' or:", options: ["The son", "The daughter", "The wife", "The niece"], correct: 1, explanation: "Fille means both 'girl' and 'daughter'." },
        { section: "The Family", question: "What is 'husband' in French?", options: ["Femme", "Mari", "Homme", "Frère"], correct: 1, explanation: "'Mari' = husband. 'Femme' = wife." },
        { section: "The Family", question: "'Les parents' in French usually refers to:", options: ["Only mothers", "Parents (Mother and Father)", "Cousins", "Grandparents"], correct: 1, explanation: "'Les parents' = Mother and Father." },
        { section: "Possessive Adjectives", question: "How do you say 'My book' (Livre is masculine)?", options: ["Ma livre", "Mon livre", "Mes livre", "Votre livre"], correct: 1, explanation: "'Mon' matches masculine singular 'livre'." },
        { section: "Possessive Adjectives", question: "'Their house' (Maison is feminine singular):", options: ["Leur maison", "Leurs maison", "Ses maison", "Notre maison"], correct: 0, explanation: "'Leur' is used for singular 'their'." },
        { section: "Possessive Adjectives", question: "How do you say 'Your' (informal) for a plural noun?", options: ["Ton", "Ta", "Tes", "Vos"], correct: 2, explanation: "'Tes' is the plural for 'tu'." },
        { section: "Possessive Adjectives", question: "If a feminine noun starts with a vowel (like 'amie'), which 'my' do you use?", options: ["Ma", "Mon", "Mes", "M'"], correct: 1, explanation: "Masculine 'mon' is used before feminine nouns starting with a vowel to avoid hiatus." },
        { section: "Possessive Adjectives", question: "'Notre' means:", options: ["Your", "Their", "Our", "His"], correct: 2, explanation: "'Notre' = our." },
        { section: "Demonstrative Adjectives", question: "Which word means 'This' for a masculine noun starting with a consonant?", options: ["Ce", "Cette", "Cet", "Ces"], correct: 0, explanation: "'Ce' + masculine consonant." },
        { section: "Demonstrative Adjectives", question: "Which word means 'This' for a masculine noun starting with a vowel?", options: ["Ce", "Cette", "Cet", "Ces"], correct: 2, explanation: "'Cet' + masculine vowel/H." },
        { section: "Demonstrative Adjectives", question: "'Cette' is used for nouns that are:", options: ["Masculine plural", "Feminine singular", "Masculine singular", "Feminine plural"], correct: 1, explanation: "'Cette' = feminine singular demonstrative." },
        { section: "Demonstrative Adjectives", question: "What is the plural form of 'Ce/Cette/Cet'?", options: ["Cettes", "Ces", "Ceux", "Ce"], correct: 1, explanation: "'Ces' is the only plural form for all genders." },
        { section: "Demonstrative Adjectives", question: "How do you say 'These children' (enfants)?", options: ["Ce enfants", "Cette enfants", "Cet enfants", "Ces enfants"], correct: 3, explanation: "'Ces' + plural noun." }
    ],
    grammar: [
        { section: "Qualifying Adjectives", question: "Which is the correct way to say 'A big house'?", options: ["Une grande maison", "Une maison grande", "Un grand maison", "Une maison grand"], correct: 0, explanation: "BAGS adjectives (Beauty, Age, Goodness, Size) like 'grand' go BEFORE the noun." },
        { section: "Qualifying Adjectives", question: "\"The girls are happy\" translates to:", options: ["Les filles sont heureux.", "Les filles sont heureuse.", "Les filles sont heureuses.", "Les filles sont heureusesse."], correct: 2, explanation: "'Les filles' is feminine plural, so 'heureux' → 'heureuses'." },
        { section: "Qualifying Adjectives", question: "\"Mes amis sont ______ (creative).\"", options: ["créatif", "créative", "créatifs", "créatives"], correct: 2, explanation: "'Mes amis' is masculine plural → 'créatifs'." },
        { section: "Qualifying Adjectives", question: "Where does the adjective \"bleu\" usually go?", options: ["Before the noun", "After the noun", "It doesn't matter", "Only at the start"], correct: 1, explanation: "Colors always follow the noun (e.g., 'Un stylo bleu')." },
        { section: "Qualifying Adjectives", question: "Which adjective is irregular in the feminine?", options: ["Vert", "Bleu", "Blanc", "Petit"], correct: 2, explanation: "Blanc → Blanche in the feminine, with a spelling change." },
        { section: "Qualifying Adjectives", question: "\"A beautiful hotel\" (Masculine, starting with vowel/H):", options: ["Un beau hôtel", "Un bel hôtel", "Une belle hôtel", "Un beaux hôtel"], correct: 1, explanation: "'Beau' → 'bel' before masculine singular nouns starting with a vowel or silent H." },
        { section: "Personal Pronouns", question: "Which pronoun replaces \"Marie et moi\"?", options: ["Ils", "Vous", "Nous", "Elles"], correct: 2, explanation: "Any group including 'moi' (me) becomes 'Nous' (we)." },
        { section: "Personal Pronouns", question: "To replace \"the book\" as a direct object:", options: ["Le", "La", "Lui", "En"], correct: 0, explanation: "'Le livre' is masculine singular → replaced by 'le'." },
        { section: "Personal Pronouns", question: "\"I speak to my parents.\" → \"Je ______ parle.\"", options: ["les", "leur", "lui", "eux"], correct: 1, explanation: "'À mes parents' → indirect object plural → 'leur'." },
        { section: "Personal Pronouns", question: "In \"Tu me regardes,\" what does 'me' mean?", options: ["I", "Me", "My", "Myself"], correct: 1, explanation: "'Me' is an object pronoun meaning 'me'." },
        { section: "Personal Pronouns", question: "Which pronoun for 'You' when speaking to a group?", options: ["Tu", "Toi", "Vous", "Ils"], correct: 2, explanation: "'Vous' is used for any group of people." },
        { section: "Personal Pronouns", question: "\"Je le vois\" means:", options: ["I see him/it.", "He sees me.", "I see them.", "I see her."], correct: 0, explanation: "'Le' = masculine singular direct object (him/it)." },
        { section: "The Present Tense", question: "Conjugate \"Avoir\": \"Vous ______ faim.\"", options: ["avez", "avons", "ont", "as"], correct: 0, explanation: "Regular 'vous' ending for avoir is 'avez'." },
        { section: "The Present Tense", question: "Conjugate \"Être\": \"Elles ______ intelligentes.\"", options: ["sont", "sommes", "êtes", "est"], correct: 0, explanation: "'Elles sont' is the 3rd person plural of être." },
        { section: "The Present Tense", question: "What is the \"-er\" verb ending for \"Nous\"?", options: ["-ez", "-ent", "-ons", "-es"], correct: 2, explanation: "Regular -er verbs end in -ons for 'nous'." },
        { section: "The Present Tense", question: "\"Je ______ (faire) mes devoirs.\"", options: ["fais", "fait", "faisons", "font"], correct: 0, explanation: "The 'Je' form of 'faire' is 'fais'." },
        { section: "The Present Tense", question: "\"Tu ______ (aller) à la plage.\"", options: ["vais", "vas", "va", "vont"], correct: 1, explanation: "The 'Tu' form of 'aller' is 'vas'." },
        { section: "The Present Tense", question: "Which verb means \"To drink\"?", options: ["Dormir", "Boire", "Devoir", "Dire"], correct: 1, explanation: "'Boire' is the irregular verb for 'to drink'." },
        { section: "The Present Tense", question: "\"Ils ______ (prendre) le train.\"", options: ["prends", "prennent", "prendons", "prenez"], correct: 1, explanation: "Irregular root change in the plural: Ils prennent." },
        { section: "The Present Tense", question: "\"Nous ______ (vouloir) un café.\"", options: ["voulez", "voulons", "veulent", "veut"], correct: 1, explanation: "The 'Nous' form of 'vouloir' is 'voulons'." },
        { section: "Prepositions", question: "\"I live in London\" (City):", options: ["En Londres", "À Londres", "Au Londres", "Dans Londres"], correct: 1, explanation: "All cities take the preposition 'à' in French." },
        { section: "Prepositions", question: "\"She is going to France\" (Feminine Country):", options: ["À la France", "Au France", "En France", "Dans France"], correct: 2, explanation: "Feminine countries (usually ending in -e) take 'en'." },
        { section: "Prepositions", question: "\"We are going to the supermarket\":", options: ["À le supermarché", "Au supermarché", "En supermarché", "À la supermarché"], correct: 1, explanation: "'À' + 'le' contracts to 'au'." },
        { section: "Prepositions", question: "\"I am at my friend's house\":", options: ["À mon ami", "Chez mon ami", "Dans mon ami", "Sur mon ami"], correct: 1, explanation: "'Chez' means 'at the place of' a person." },
        { section: "Prepositions", question: "The cat is on the table:", options: ["Sous", "Sur", "Dans", "Devant"], correct: 1, explanation: "'Sur' = on. 'Sous' = under." },
        { section: "Prepositions", question: "\"I come from Canada\" (Masculine Country):", options: ["De Canada", "Du Canada", "Des Canada", "De la Canada"], correct: 1, explanation: "'De' + 'le' (masculine country) = 'du'." },
        { section: "Nationalities", question: "A man from Spain is \"espagnol.\" A woman is:", options: ["Espagnol", "Espagnole", "Espagnols", "Espagnolles"], correct: 1, explanation: "Add 'e' to the masculine to form the feminine." },
        { section: "Nationalities", question: "\"They (fem.) are American\":", options: ["Elles sont américain.", "Elles sont américaine.", "Elles sont américains.", "Elles sont américaines."], correct: 3, explanation: "Feminine plural: américaine + s = américaines." },
        { section: "Nationalities", question: "If a man is \"italien,\" a woman is:", options: ["Italien", "Italienne", "Italienes", "Italiene"], correct: 1, explanation: "Nationalities ending in -ien double the 'n' in the feminine." },
        { section: "Nationalities", question: "\"Mon ami est ______ (English).\"", options: ["anglais", "anglaise", "english", "anglaises"], correct: 0, explanation: "'Mon ami' is masculine → use 'anglais'." },
        { section: "Nationalities", question: "\"Nous sommes ______ (Japanese, plural).\"", options: ["japonais", "japonaise", "japonaises", "japonaiss"], correct: 0, explanation: "Adjectives ending in 's' don't change in masculine plural." },
        { section: "Nationalities", question: "Which is NOT capitalized in French unless at the start of a sentence?", options: ["Names of people", "Nationality Adjectives", "Names of cities", "Names of countries"], correct: 1, explanation: "Nationality adjectives are lowercase in French (e.g., 'un livre français')." },
        { section: "The Future Tense", question: "The future tense ending for \"Je\" is:", options: ["-ais", "-ai", "-as", "-e"], correct: 1, explanation: "Futur simple endings mirror 'avoir': ai, as, a, ons, ez, ont." },
        { section: "The Future Tense", question: "\"I will eat\" is:", options: ["Je mangerais", "Je mangerai", "Je vais manger", "Je mangé"], correct: 1, explanation: "Root (manger) + -ai = mangerai." },
        { section: "The Future Tense", question: "What is the future stem for \"Aller\"?", options: ["All-", "Ir-", "Aill-", "Ser-"], correct: 1, explanation: "Aller has the irregular stem 'ir-' (e.g., J'irai)." },
        { section: "The Future Tense", question: "\"Nous ______ (avoir) une maison.\"", options: ["aurons", "aurions", "avons", "avont"], correct: 0, explanation: "Avoir → stem 'aur-'. Stem + ons = aurons." },
        { section: "The Future Tense", question: "\"Ils ______ (être) contents.\"", options: ["seront", "sont", "serons", "serai"], correct: 0, explanation: "Être → stem 'ser-'. Stem + ont = seront." },
        { section: "The Future Tense", question: "\"Tu ______ (faire) le gâteau.\"", options: ["fairas", "feras", "ferait", "ferais"], correct: 1, explanation: "Faire → stem 'fer-'. Stem + as = feras." },
        { section: "The Negation", question: "To make \"Je parle\" negative:", options: ["Je ne parle pas.", "Je pas parle.", "Je ne pas parle.", "Ne je parle pas."], correct: 0, explanation: "Standard negation: ne [verb] pas." },
        { section: "The Negation", question: "\"I no longer smoke\":", options: ["Je ne fume jamais.", "Je ne fume pas.", "Je ne fume plus.", "Je ne fume rien."], correct: 2, explanation: "'Ne... plus' = no longer / not anymore." },
        { section: "The Negation", question: "In the negative, \"J'ai un chien\" becomes:", options: ["Je n'ai pas un chien.", "Je n'ai pas de chien.", "Je n'ai pas du chien.", "Je n'ai pas le chien."], correct: 1, explanation: "In negatives, indefinite articles (un/une/des) change to 'de'." },
        { section: "The Negation", question: "\"He never travels\":", options: ["Il ne voyage pas.", "Il ne voyage plus.", "Il ne voyage jamais.", "Il ne voyage rien."], correct: 2, explanation: "'Ne... jamais' = never." },
        { section: "The Negation", question: "\"Nothing is happening\":", options: ["Rien ne se passe.", "Pas ne se passe.", "Jamais ne se passe.", "Ne rien se passe."], correct: 0, explanation: "'Rien' can act as a subject, followed by 'ne'." },
        { section: "The Negation", question: "Which word means \"neither... nor\"?", options: ["Plus... plus", "Ni... ni", "Pas... pas", "Non... non"], correct: 1, explanation: "'Ni... ni' = neither... nor." },
        { section: "Relative Pronouns", question: "Use ______ when the pronoun is the subject.", options: ["Qui", "Que", "Où", "Dont"], correct: 0, explanation: "'Qui' acts as the subject of the following verb." },
        { section: "Relative Pronouns", question: "Use ______ when the pronoun is the direct object.", options: ["Qui", "Que", "Où", "Dont"], correct: 1, explanation: "'Que' is a direct object relative pronoun." },
        { section: "Relative Pronouns", question: "\"La voiture ______ j'ai achetée.\"", options: ["qui", "que", "où", "dont"], correct: 1, explanation: "The car is the object of 'I bought' → use 'que'." },
        { section: "Relative Pronouns", question: "\"L'homme ______ travaille ici.\"", options: ["qui", "que", "où", "dont"], correct: 0, explanation: "The man is the subject of 'works' → use 'qui'." },
        { section: "Relative Pronouns", question: "\"Le restaurant ______ nous mangeons.\"", options: ["qui", "que", "où", "dont"], correct: 2, explanation: "Use 'où' for places and times." },
        { section: "Relative Pronouns", question: "If \"Que\" is followed by a vowel, it becomes:", options: ["Qui", "Qu'", "Que'", "Q'"], correct: 1, explanation: "Que undergoes elision (qu') before a vowel, but qui never does." },
        { section: "Text Comprehension", question: "Où habite Marie ? (Marie est une étudiante qui habite à Paris.)", options: ["Au Nigeria", "À Paris", "À Londres", "dans une bibliothèque"], correct: 1, explanation: "The text states: '...qui habite à Paris'." },
        { section: "Text Comprehension", question: "Qu'est-ce qu'elle étudie ? (Elle étudie le droit.)", options: ["La médecine", "Le droit", "Le français", "L'histoire"], correct: 1, explanation: "The text states: 'Elle étudie le droit'." },
        { section: "Text Comprehension", question: "Où ira-t-elle demain ? (...elle ira à la bibliothèque.)", options: ["Au café", "À la bibliothèque", "Chez elle", "Au Nigeria"], correct: 1, explanation: "The text states: '...elle ira à la bibliothèque'." },
        { section: "Text Comprehension", question: "Qu'est-ce qu'elle boit ? (Elle boit du thé.)", options: ["Du café", "De l'eau", "Du thé", "Du jus"], correct: 2, explanation: "The text states: '...elle boit du thé'." },
        { section: "Text Comprehension", question: "\"Elle ira\" is in which tense?", options: ["Present", "Past", "Future", "Imperfect"], correct: 2, explanation: "'Ira' is the future simple of 'aller'." },
        { section: "Essay Writing", question: "A good 'Introduction' phrase for an essay:", options: ["En conclusion", "Tout d'abord", "Cependant", "Enfin"], correct: 1, explanation: "'Tout d'abord' means 'First of all' — great for starting an essay." },
        { section: "Essay Writing", question: "To show a contrast (But/However), use:", options: ["Et", "Parce que", "Mais", "Donc"], correct: 2, explanation: "'Mais' means 'But'." },
        { section: "Essay Writing", question: "\"Parce que\" means:", options: ["Therefore", "Because", "Although", "Since"], correct: 1, explanation: "'Parce que' introduces a cause (Because)." },
        { section: "Essay Writing", question: "\"Ensuite\" is used to:", options: ["Start a paragraph", "List next sequence of events", "Give a final opinion", "Say goodbye"], correct: 1, explanation: "'Ensuite' means 'Next' or 'Then'." },
        { section: "Essay Writing", question: "To conclude an essay, you say:", options: ["Pour commencer", "Finalement / En conclusion", "D'un autre côté", "Par exemple"], correct: 1, explanation: "'En conclusion' summarizes and closes the text." }
    ]
};

// ─── App State ───────────────────────────────────────────────
let currentQuizData = [];
let currentQuestionIndex = 0;
let answers = [];
let currentStreak = 0;
let pendingQuizType = null;

// ─── DOM Elements ─────────────────────────────────────────────
const views = {
    landing: document.getElementById('landing-view'),
    quiz:    document.getElementById('quiz-view'),
    results: document.getElementById('results-view')
};

const el = {
    nextBtn:              document.getElementById('next-btn'),
    prevBtn:              document.getElementById('prev-btn'),
    restartBtn:           document.getElementById('restart-btn'),
    questionText:         document.getElementById('question-text'),
    optionsContainer:     document.getElementById('options-container'),
    explanationContainer: document.getElementById('explanation-container'),
    explanationText:      document.getElementById('explanation-text'),
    progressBarFill:      document.getElementById('progress-bar-fill'),
    questionCounter:      document.getElementById('question-counter'),
    sectionName:          document.getElementById('section-name'),
    resultScoreText:      document.getElementById('result-score-text'),
    scoreCircleFill:      document.getElementById('score-circle-fill'),
    resultsBreakdown:     document.querySelector('.results-breakdown'),
    loveModal:            document.getElementById('love-modal'),
    loveModalMessage:     document.getElementById('love-modal-message'),
    loveModalBtn:         document.getElementById('love-modal-btn'),
    milestoneBanner:      document.getElementById('milestone-banner'),
    milestoneText:        document.getElementById('milestone-text'),
    streakPopup:          document.getElementById('streak-popup'),
    streakText:           document.getElementById('streak-text'),
    confettiContainer:    document.getElementById('confetti-container'),
    loveResultMessage:    document.getElementById('love-result-message')
};

// ─── Module start messages ─────────────────────────────────────
const loveModalMessages = {
    foundation: "Hey beautiful 💖 I put this together just for you. Start with the basics, take your time, and don't rush. You already know more than you think. I believe in you — always. 🌟",
    grammar:    "Okay Racheal, time for the big stuff! 😄 Grammar can be tricky but YOU have been preparing. I've seen how hard you've worked. Now go show these questions who's the boss! I love you 💝"
};

// ─── Milestone Messages ────────────────────────────────────────
const milestoneMessages = {
    9:  "10 down, 50 to go! You're already killing it, Racheal 🔥",
    19: "20 questions in! I'm honestly so proud of you right now 🥹❤️",
    29: "Halfway there, ma chérie! You're doing absolutely amazing 🌟",
    39: "40 done! Tu es incroyable, Racheal — keep going! 💪💝",
    49: "Just 10 more! The finish line is RIGHT there — sprint! 🏁"
};

// ─── View Switching ────────────────────────────────────────────
function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
}

// ─── Quiz Start → Show Love Modal ─────────────────────────────
function startQuiz(quizType) {
    pendingQuizType = quizType;
    el.loveModalMessage.textContent = loveModalMessages[quizType];
    el.loveModal.classList.remove('hidden');
}

// Called by the modal "Je suis prête" button
function beginQuiz() {
    el.loveModal.classList.add('hidden');
    currentQuizData = quizSets[pendingQuizType];
    currentQuestionIndex = 0;
    answers = new Array(currentQuizData.length).fill(null);
    currentStreak = 0;
    switchView('quiz');
    renderQuestion();
}

// ─── Render Question ───────────────────────────────────────────
function renderQuestion() {
    const q = currentQuizData[currentQuestionIndex];
    const userAnswer = answers[currentQuestionIndex];

    el.explanationContainer.classList.add('hidden');
    el.questionText.textContent = q.question;
    el.questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;
    el.sectionName.textContent = q.section;

    const pct = ((currentQuestionIndex + 1) / currentQuizData.length) * 100;
    el.progressBarFill.style.width = `${pct}%`;

    el.prevBtn.disabled = currentQuestionIndex === 0;
    el.nextBtn.textContent = currentQuestionIndex === currentQuizData.length - 1 ? "Finish" : "Next";
    el.nextBtn.disabled = userAnswer === null;

    el.optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        let badge = String.fromCharCode(65 + index);

        if (userAnswer !== null) {
            card.classList.add('reveal-state');
            if (index === q.correct) {
                card.classList.add('correct');
                badge = '<i class="fa-solid fa-check"></i>';
            } else if (index === userAnswer) {
                card.classList.add('incorrect');
                badge = '<i class="fa-solid fa-xmark"></i>';
            }
            el.explanationText.textContent = q.explanation;
            el.explanationContainer.classList.remove('hidden');
        }

        card.innerHTML = `<div class="option-badge">${badge}</div><div class="option-text">${option}</div>`;
        if (userAnswer === null) card.addEventListener('click', () => selectOption(index));
        else card.style.cursor = 'default';
        el.optionsContainer.appendChild(card);
    });
}

// ─── Select Option ─────────────────────────────────────────────
function selectOption(index) {
    if (answers[currentQuestionIndex] !== null) return;
    answers[currentQuestionIndex] = index;
    const q = currentQuizData[currentQuestionIndex];
    const wasCorrect = index === q.correct;

    // Visual feedback
    el.optionsContainer.querySelectorAll('.option-card').forEach((card, i) => {
        card.classList.add('reveal-state');
        card.style.cursor = 'default';
        const badge = card.querySelector('.option-badge');
        if (i === q.correct) { card.classList.add('correct'); badge.innerHTML = '<i class="fa-solid fa-check"></i>'; }
        else if (i === index) { card.classList.add('incorrect'); badge.innerHTML = '<i class="fa-solid fa-xmark"></i>'; }
    });

    // Explanation
    el.explanationText.textContent = q.explanation;
    el.explanationContainer.classList.remove('hidden');
    el.nextBtn.disabled = false;

    // Streak check
    checkStreak(wasCorrect);

    // Milestone check (after we record the answer)
    checkMilestone(currentQuestionIndex);
}

// ─── Navigation ────────────────────────────────────────────────
function nextQuestion() {
    if (currentQuestionIndex < currentQuizData.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// ─── Score ─────────────────────────────────────────────────────
function calculateScore() {
    return answers.reduce((s, a, i) => s + (a === currentQuizData[i].correct ? 1 : 0), 0);
}

// ─── Results ────────────────────────────────────────────────────
function showResults() {
    const finalScore = calculateScore();
    const pct = Math.round((finalScore / currentQuizData.length) * 100);

    el.resultScoreText.textContent = `${finalScore}/${currentQuizData.length}`;
    el.scoreCircleFill.setAttribute('stroke-dasharray', `${pct}, 100`);

    // Personalized love message
    el.loveResultMessage.textContent = getPersonalizedResultMessage(pct);

    // Breakdown
    const sectionStats = {};
    currentQuizData.forEach((q, i) => {
        if (!sectionStats[q.section]) sectionStats[q.section] = { total: 0, correct: 0 };
        sectionStats[q.section].total++;
        if (answers[i] === q.correct) sectionStats[q.section].correct++;
    });

    el.resultsBreakdown.innerHTML = '';
    Object.keys(sectionStats).forEach(section => {
        const s = sectionStats[section];
        const card = document.createElement('div');
        card.className = 'stats-card';
        card.innerHTML = `<h4>${section}</h4><div class="value">${s.correct}/${s.total}</div>`;
        el.resultsBreakdown.appendChild(card);
    });

    switchView('results');
    setTimeout(launchConfetti, 300);
}

function restartQuiz() {
    // Clear confetti
    el.confettiContainer.innerHTML = '';
    currentStreak = 0;
    switchView('landing');
}

// ─── Love Modal ─────────────────────────────────────────────────
function getPersonalizedResultMessage(pct) {
    if (pct >= 90) return "YESSS RACHEAL!! 🎉🎊 I KNEW you could do it! You're going to absolutely ace that exam! I am SO proud of you! 💖";
    if (pct >= 70) return "That's my girl! 🌟 So close to perfect — one more practice and you'll be unstoppable. I'm proud of you, always. ❤️";
    if (pct >= 50) return "Great effort, ma belle! 💪 Every question you got wrong is one you'll never miss again. Keep going — I'm cheering for you. 💝";
    return "Don't you dare give up, Racheal 💖! This is just practice. You're learning, and that's beautiful. I believe in you more than you know. 🥰";
}

// ─── Milestone Banners ─────────────────────────────────────────
function checkMilestone(questionIndex) {
    const msg = milestoneMessages[questionIndex];
    if (msg) showMilestoneBanner(msg);
}

let milestoneTimer = null;
function showMilestoneBanner(msg) {
    clearTimeout(milestoneTimer);
    el.milestoneText.textContent = msg;
    el.milestoneBanner.classList.add('showing');
    milestoneTimer = setTimeout(dismissMilestone, 5000);
}

function dismissMilestone() {
    el.milestoneBanner.classList.remove('showing');
}

// ─── Streak ────────────────────────────────────────────────────
function checkStreak(wasCorrect) {
    if (wasCorrect) {
        currentStreak++;
        if (currentStreak >= 3 && currentStreak % 3 === 0) showStreakPopup(currentStreak);
    } else {
        currentStreak = 0;
    }
}

let streakTimer = null;
function showStreakPopup(streak) {
    el.streakText.textContent = `${streak} en ligne! You're on fire, Racheal! 🔥`;
    el.streakPopup.classList.remove('hidden');
    clearTimeout(streakTimer);
    streakTimer = setTimeout(() => el.streakPopup.classList.add('hidden'), 2800);
}

// ─── Confetti ──────────────────────────────────────────────────
function launchConfetti() {
    const colors = ['#0055ff', '#ffffff', '#ff3b3b', '#ff6fa0', '#ffb3cc', '#ffd700', '#00c853'];
    for (let i = 0; i < 90; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const size = Math.random() * 9 + 6;
        piece.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            animation-delay: ${Math.random() * 2.5}s;
            animation-duration: ${Math.random() * 2 + 2.5}s;
        `;
        el.confettiContainer.appendChild(piece);
        setTimeout(() => piece.remove(), 6000);
    }
}

// ─── Event Listeners ───────────────────────────────────────────
el.loveModalBtn.addEventListener('click', beginQuiz);
el.nextBtn.addEventListener('click', nextQuestion);
el.prevBtn.addEventListener('click', prevQuestion);
el.restartBtn.addEventListener('click', restartQuiz);

// Global exposure for inline onclick attributes
window.startQuiz = startQuiz;
window.dismissMilestone = dismissMilestone;
