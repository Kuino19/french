const quizSets = {
    foundation: [
        // Part 1: Pronunciation & Greetings (1-10)
        {
            section: "Pronunciation & Greetings",
            question: "Which of these greetings is most appropriate for a formal situation in the morning?",
            options: ["Salut !", "Bonjour, Monsieur.", "Coucou !", "Bonne nuit."],
            correct: 1,
            explanation: "'Bonjour' is the standard formal greeting for morning and day. 'Monsieur' adds an extra layer of respect suitable for formal settings."
        },
        {
            section: "Pronunciation & Greetings",
            question: "In the word 'Français', how is the 'ç' (c-cedilla) pronounced?",
            options: ["Like a 'K'", "Like an 'S'", "Like a 'CH'", "It is silent."],
            correct: 1,
            explanation: "The cedilla (ç) is used under the letter 'c' to indicate that it should be pronounced as an 's' sound before the vowels a, o, and u."
        },
        {
            section: "Pronunciation & Greetings",
            question: "To say 'Good evening' in French, you use:",
            options: ["Bonne journée", "Bon après-midi", "Bonsoir", "Enchanté"],
            correct: 2,
            explanation: "'Bonsoir' is used to greet someone in the evening. 'Bonne journée' is used to wish someone a good day when leaving."
        },
        {
            section: "Pronunciation & Greetings",
            question: "Which letter is almost always silent at the very end of a French word (unless it has an accent)?",
            options: ["r", "l", "e", "c"],
            correct: 2,
            explanation: "The letter 'e' is usually silent at the end of words unless it has an accent (like é). Many consonants (d, p, s, t, x, z) are also often silent."
        },
        {
            section: "Pronunciation & Greetings",
            question: "How do you say 'See you tomorrow'?",
            options: ["À bientôt", "À demain", "Au revoir", "S'il vous plaît"],
            correct: 1,
            explanation: "'À demain' literally means 'To tomorrow'. 'À bientôt' means 'See you soon'."
        },
        {
            section: "Pronunciation & Greetings",
            question: "'Comment ça va ?' is a way to ask:",
            options: ["What is your name?", "Where do you live?", "How are things going?", "How old are you?"],
            correct: 2,
            explanation: "This is a common informal way to ask 'How are you?' or 'How is it going?'"
        },
        {
            section: "Pronunciation & Greetings",
            question: "The nasal sound in 'Vin' (wine) sounds most similar to the English word:",
            options: ["Van", "Von", "Sang", "(None of the above - French nasals are unique)"],
            correct: 3,
            explanation: "French nasal vowels involve air passing through both the nose and mouth simultaneously, creating sounds that don't have exact English equivalents."
        },
        {
            section: "Pronunciation & Greetings",
            question: "What does 'Enchanté' mean when meeting someone?",
            options: ["Goodbye", "Excuse me", "Nice to meet you", "Please"],
            correct: 2,
            explanation: "'Enchanté' (or 'Enchantée' for women) literally translates to 'Enchanted', but is used as 'Nice to meet you'."
        },
        {
            section: "Pronunciation & Greetings",
            question: "Which of these is a way to say 'Thank you very much'?",
            options: ["De rien", "Merci beaucoup", "Pas de quoi", "Pardon"],
            correct: 1,
            explanation: "'Merci' means thank you, and 'beaucoup' means a lot or very much."
        },
        {
            section: "Pronunciation & Greetings",
            question: "In the word 'Habiter', is the 'H' pronounced?",
            options: ["Yes, like in 'House'", "No, it is silent (H muet)", "It sounds like a 'Y'", "It sounds like a 'G'"],
            correct: 1,
            explanation: "In French, the 'H' is always silent. It is treated as either an 'H muet' (acts like a vowel) or an 'H aspiré' (acts like a consonant, preventing liaison)."
        },
        // Part 2: Introducing Yourself & Age (11-15)
        {
            section: "Introducing Yourself & Age",
            question: "How do you say 'My name is...'?",
            options: ["Je suis...", "J'ai...", "Je m'appelle...", "Moi est..."],
            correct: 2,
            explanation: "'Je m'appelle' literally means 'I call myself'. In French, you reflexively name yourself."
        },
        {
            section: "Introducing Yourself & Age",
            question: "To ask 'How old are you?' formally, you say:",
            options: ["Quel âge avez-vous ?", "Comment t'appelles-tu ?", "Où habitez-vous ?", "Quel est ton âge ?"],
            correct: 0,
            explanation: "French uses the verb 'avoir' (to have) to talk about age. Literally: 'What age have you?'"
        },
        {
            section: "Introducing Yourself & Age",
            question: "If you want to say 'I am 20 years old', which verb do you use?",
            options: ["Être (Je suis 20 ans)", "Avoir (J'ai 20 ans)", "Faire (Je fais 20 ans)", "Aller (Je vais 20 ans)"],
            correct: 1,
            explanation: "Unlike English which uses 'to be', French uses 'avoir' (to have) for age. You 'have' your years."
        },
        {
            section: "Introducing Yourself & Age",
            question: "'Je viens de France' means:",
            options: ["I live in France.", "I am going to France.", "I come from France.", "I like France."],
            correct: 2,
            explanation: "'Venir de' means 'to come from'. It indicates your origin or place of departure."
        },
        {
            section: "Introducing Yourself & Age",
            question: "What is the correct response to 'Où habites-tu ?'",
            options: ["J'ai dix ans.", "J'habite à Paris.", "Je m'appelle Marc.", "Enchanté."],
            correct: 1,
            explanation: "'Habiter' is the verb for 'to live' or 'to reside'. It is usually followed by 'à' + city."
        },
        // Part 3: Essential Verbs (16-25)
        {
            section: "Essential Verbs",
            question: "Conjugate ÊTRE: 'Nous ______ étudiants.'",
            options: ["sommes", "êtes", "sont", "suis"],
            correct: 0,
            explanation: "'Nous sommes' is the first person plural conjugation of the irregular verb 'être' (to be)."
        },
        {
            section: "Essential Verbs",
            question: "Conjugate AVOIR: 'Ils ______ un chien.'",
            options: ["ont", "ont", "avons", "as"],
            correct: 0,
            explanation: "'Ils ont' is the third person plural conjugation of 'avoir' (to have)."
        },
        {
            section: "Essential Verbs",
            question: "Conjugate ALLER: 'Je ______ au cinéma.'",
            options: ["vas", "vais", "va", "vont"],
            correct: 1,
            explanation: "'Aller' (to go) is highly irregular. 'Je vais' is the first person singular."
        },
        {
            section: "Essential Verbs",
            question: "Which verb means 'To be'?",
            options: ["Avoir", "Aller", "Être", "Faire"],
            correct: 2,
            explanation: "'Être' is the most fundamental verb in French, equivalent to 'to be'."
        },
        {
            section: "Essential Verbs",
            question: "Which verb means 'To go'?",
            options: ["Avoir", "Aller", "Être", "Venir"],
            correct: 1,
            explanation: "'Aller' means 'to go'. Even though it ends in -er, it is an irregular third-group verb."
        },
        {
            section: "Essential Verbs",
            question: "Complete: 'Tu ______ faim ?' (You are hungry?)",
            options: ["es", "as", "vas", "a"],
            correct: 1,
            explanation: "Like age, hunger and thirst are 'had' in French: 'avoir faim' (to have hunger)."
        },
        {
            section: "Essential Verbs",
            question: "Complete: 'Vous ______ en retard.' (You are late.)",
            options: ["avez", "allez", "êtes", "sont"],
            correct: 2,
            explanation: "'Être en retard' is the set phrase for 'to be late'."
        },
        {
            section: "Essential Verbs",
            question: "'Ils vont' is the plural form of which verb?",
            options: ["Avoir", "Être", "Aller", "Voir"],
            correct: 2,
            explanation: "'Aller' conjugates to 'Ils vont' in the present tense."
        },
        {
            section: "Essential Verbs",
            question: "'Elle a' means:",
            options: ["She is", "She goes", "She has", "She want"],
            correct: 2,
            explanation: "'Elle a' is the third person singular of 'avoir' (to have)."
        },
        {
            section: "Essential Verbs",
            question: "'Nous allons' means:",
            options: ["We have", "We are", "We go / We are going", "They go"],
            correct: 2,
            explanation: "'Aller' (to go) conjugates to 'Nous allons' in the first person plural."
        },
        // Part 4: Articles & Nouns (26-30)
        {
            section: "Articles & Nouns",
            question: "Which is the feminine singular definite article (the)?",
            options: ["Le", "La", "Les", "Une"],
            correct: 1,
            explanation: "'La' is used for feminine singular nouns. 'Le' is masculine, 'Les' is plural."
        },
        {
            section: "Articles & Nouns",
            question: "'Un' and 'Une' mean:",
            options: ["The", "Some", "A / An", "This"],
            correct: 2,
            explanation: "These are indefinite articles. 'Un' is masculine, 'Une' is feminine."
        },
        {
            section: "Articles & Nouns",
            question: "Choose the correct article for ' ______ écoles' (plural):",
            options: ["Le", "La", "L'", "Les"],
            correct: 3,
            explanation: "In the plural, all nouns take 'les' as the definite article, regardless of gender."
        },
        {
            section: "Articles & Nouns",
            question: "Which definite article is used for 'homme' (man)?",
            options: ["Le", "La", "L'", "Un"],
            correct: 2,
            explanation: "When a singular noun starts with a vowel or silent H, 'le' or 'la' becomes 'l''."
        },
        {
            section: "Articles & Nouns",
            question: "What is the plural of 'un livre' (a book)?",
            options: ["Le livre", "Des livres", "Les livres", "Une livre"],
            correct: 1,
            explanation: "The plural of the indefinite article 'un/une' is 'des'."
        },
        // Part 5: Numbers (31-40)
        {
            section: "Numbers",
            question: "What is 'seize' in English?",
            options: ["6", "16", "60", "76"],
            correct: 1,
            explanation: "Numbers from 11-16 have unique names (onze to seize) before becoming compound (dix-sept)."
        },
        {
            section: "Numbers",
            question: "How do you say '70' in French?",
            options: ["Soixante", "Soixante-dix", "Quatre-vingts", "Cinquante"],
            correct: 1,
            explanation: "French uses a base-60 system for 70: 'Soixante-dix' (sixty-ten)."
        },
        {
            section: "Numbers",
            question: "What is 'Quatre-vingt-douze'?",
            options: ["82", "92", "412", "22"],
            correct: 1,
            explanation: "This is based on 80 (4x20) + 12 = 92."
        },
        {
            section: "Numbers",
            question: "How do you say 'First' (masculine)?",
            options: ["Unième", "Premier", "Première", "Début"],
            correct: 1,
            explanation: "'Premier' is the ordinal number for first."
        },
        {
            section: "Numbers",
            question: "'Deuxième' means:",
            options: ["Second", "Twelve", "Half", "Twice"],
            correct: 0,
            explanation: "-ième is the standard suffix for ordinal numbers (except first)."
        },
        {
            section: "Numbers",
            question: "What is 'Vingt et un'?",
            options: ["20", "21", "31", "81"],
            correct: 1,
            explanation: "For 'one' after a ten (21-61), the word 'et' (and) is used."
        },
        {
            section: "Numbers",
            question: "How do you write '5th'?",
            options: ["Cinquième", "Cinqième", "Cinco", "Cinquante"],
            correct: 0,
            explanation: "For numbers ending in 'q', a 'u' is added before -ième."
        },
        {
            section: "Numbers",
            question: "'Cent' means:",
            options: ["10", "100", "1000", "50"],
            correct: 1,
            explanation: "'Cent' is 100. 'Mille' is 1000."
        },
        {
            section: "Numbers",
            question: "How do you say '80'?",
            options: ["Huitante", "Soixante-vingt", "Quatre-vingts", "Octante"],
            correct: 2,
            explanation: "'Quatre-vingts' literally means 'four-twenties'."
        },
        {
            section: "Numbers",
            question: "What is 'Mille'?",
            options: ["100", "1,000,000", "1,000", "10"],
            correct: 2,
            explanation: "'Mille' is 1,000 and is invariable (stays same in plural)."
        },
        // Part 6: Days & Seasons (41-45)
        {
            section: "Days, Months & Seasons",
            question: "'Lundi' is which day of the week?",
            options: ["Sunday", "Monday", "Tuesday", "Friday"],
            correct: 1,
            explanation: "Lundi comes from 'Lune' (Moon)."
        },
        {
            section: "Days, Months & Seasons",
            question: "Which of these is 'Summer'?",
            options: ["L'hiver", "Le printemps", "L'été", "L'automne"],
            correct: 2,
            explanation: "'L'été' is summer. 'L'hiver' is winter."
        },
        {
            section: "Days, Months & Seasons",
            question: "'Juillet' corresponds to:",
            options: ["June", "July", "January", "August"],
            correct: 1,
            explanation: "Juillet is the 7th month, July."
        },
        {
            section: "Days, Months & Seasons",
            question: "Which month comes after 'Avril'?",
            options: ["Mars", "Mai", "Juin", "Février"],
            correct: 1,
            explanation: "The order is: Mars, Avril, MAI, Juin."
        },
        {
            section: "Days, Months & Seasons",
            question: "'Le printemps' is known for:",
            options: ["Snow", "Falling leaves", "Flowers blooming", "Very hot sun"],
            correct: 2,
            explanation: "Printemps (Spring) is when nature awakens."
        },
        // Part 7: Family (46-50)
        {
            section: "The Family",
            question: "'Le frère de mon père' is my:",
            options: ["Cousin", "Grand-père", "Oncle", "Neveu"],
            correct: 2,
            explanation: "Your father's brother is your 'oncle'."
        },
        {
            section: "The Family",
            question: "Who is 'ma grand-mère'?",
            options: ["My mother", "My sister", "My grandmother", "My aunt"],
            correct: 2,
            explanation: "Grand-mère is your grandmother."
        },
        {
            section: "The Family",
            question: "'La fille' can mean 'the girl' or:",
            options: ["The son", "The daughter", "The wife", "The niece"],
            correct: 1,
            explanation: "Fille means both 'girl' and 'daughter'."
        },
        {
            section: "The Family",
            question: "What is 'husband' in French?",
            options: ["Femme", "Mari", "Homme", "Frère"],
            correct: 1,
            explanation: "Mari is husband. Femme is wife."
        },
        {
            section: "The Family",
            question: "'Les parents' in French refers to:",
            options: ["Only mothers", "Parents (Mother and Father)", "Cousins", "Grandparents"],
            correct: 1,
            explanation: "Usually specifically implies Mother and Father."
        },
        // Part 8: Possessive Adjectives (51-55)
        {
            section: "Possessive Adjectives",
            question: "How do you say 'My book' (Livre is masculine)?",
            options: ["Ma livre", "Mon livre", "Mes livre", "Votre livre"],
            correct: 1,
            explanation: "'Mon' matches masculine singular 'livre'."
        },
        {
            section: "Possessive Adjectives",
            question: "'Their house' (Maison is feminine singular):",
            options: ["Leur maison", "Leurs maison", "Ses maison", "Notre maison"],
            correct: 0,
            explanation: "Leur is used for singular 'their', regardless of gender."
        },
        {
            section: "Possessive Adjectives",
            question: "How do you say 'Your' (informal/singular) for a plural noun?",
            options: ["Ton", "Ta", "Tes", "Vos"],
            correct: 2,
            explanation: "'Tes' is the plural for 'tu' (informal you)."
        },
        {
            section: "Possessive Adjectives",
            question: "If a feminine noun starts with a vowel (like 'amie'), which 'my' do you use?",
            options: ["Ma", "Mon", "Mes", "M'"],
            correct: 1,
            explanation: "Masculine 'mon/ton/son' are used before feminine nouns starting with a vowel to avoid hiatus."
        },
        {
            section: "Possessive Adjectives",
            question: "'Notre' means:",
            options: ["Your", "Their", "Our", "His"],
            correct: 2,
            explanation: "Notre = our."
        },
        // Part 9: Demonstrative Adjectives (56-60)
        {
            section: "Demonstrative Adjectives",
            question: "Which word means 'This' for a masculine singular noun starting with a consonant?",
            options: ["Ce", "Cette", "Cet", "Ces"],
            correct: 0,
            explanation: "Ce + Masc Consonant."
        },
        {
            section: "Demonstrative Adjectives",
            question: "Which word means 'This' for a masculine singular noun starting with a vowel (e.g., homme)?",
            options: ["Ce", "Cette", "Cet", "Ces"],
            correct: 2,
            explanation: "Cet + Masc Vowel/H."
        },
        {
            section: "Demonstrative Adjectives",
            question: "'Cette' is used for nouns that are:",
            options: ["Masculine plural", "Feminine singular", "Masculine singular", "Feminine plural"],
            correct: 1,
            explanation: "Cette is the feminine singular demonstrative."
        },
        {
            section: "Demonstrative Adjectives",
            question: "What is the plural form of 'Ce/Cette/Cet' (These/Those)?",
            options: ["Cettes", "Ces", "Ceux", "Ce"],
            correct: 1,
            explanation: "Ces is the only plural form for all genders."
        },
        {
            section: "Demonstrative Adjectives",
            question: "How do you say 'These children' (enfants)?",
            options: ["Ce enfants", "Cette enfants", "Cet enfants", "Ces enfants"],
            correct: 3,
            explanation: "Ces + plural noun."
        }
    ],
    grammar: [
        // Part 1: Qualifying Adjectives (Agreement & Placement)
        {
            section: "Qualifying Adjectives",
            question: "Which is the correct way to say 'A big house'?",
            options: ["Une grande maison", "Une maison grande", "Un grand maison", "Une maison grand"],
            correct: 0,
            explanation: "BAGS adjectives (Beauty, Age, Goodness, Size) like 'grand' typically come BEFORE the noun."
        },
        {
            section: "Qualifying Adjectives",
            question: "\"The girls are happy\" translates to:",
            options: ["Les filles sont heureux.", "Les filles sont heureuse.", "Les filles sont heureuses.", "Les filles sont heureusesse."],
            correct: 2,
            explanation: "The subject 'Les filles' is feminine plural, so 'heureux' must become 'heureuses'."
        },
        {
            section: "Qualifying Adjectives",
            question: "Choose the correct form: \"Mes amis sont ______ (creative).\"",
            options: ["créatif", "créative", "créatifs", "créatives"],
            correct: 2,
            explanation: "'Mes amis' is masculine plural. The masculine plural of 'créatif' is 'créatifs'."
        },
        {
            section: "Qualifying Adjectives",
            question: "Where does the adjective \"bleu\" usually go?",
            options: ["Before the noun", "After the noun", "It doesn't matter", "Only at the start"],
            correct: 1,
            explanation: "Colors always follow the noun in French (e.g., 'Un stylo bleu')."
        },
        {
            section: "Qualifying Adjectives",
            question: "Which adjective is irregular in the feminine?",
            options: ["Vert", "Bleu", "Blanc", "Petit"],
            correct: 2,
            explanation: "Blanc becomes 'Blanche' in the feminine, which involves a spelling change beyond just adding an 'e'."
        },
        {
            section: "Qualifying Adjectives",
            question: "\"A beautiful hotel\" (Masculine noun starting with a vowel/silent H):",
            options: ["Un beau hôtel", "Un bel hôtel", "Une belle hôtel", "Un beaux hôtel"],
            correct: 1,
            explanation: "'Beau' becomes 'bel' before a masculine singular noun starting with a vowel or silent H for better flow (hiatus prevention)."
        },
        // Part 2: Personal Pronouns
        {
            section: "Personal Pronouns",
            question: "Which pronoun replaces \"Marie et moi\"?",
            options: ["Ils", "Vous", "Nous", "Elles"],
            correct: 2,
            explanation: "Any group including 'moi' (me) becomes 'Nous' (we)."
        },
        {
            section: "Personal Pronouns",
            question: "To replace \"the book\" in \"I read the book,\" which pronoun do you use?",
            options: ["Le", "La", "Lui", "En"],
            correct: 0,
            explanation: "'Le livre' is a masculine singular direct object, so it's replaced by 'le'."
        },
        {
            section: "Personal Pronouns",
            question: "\"I speak to my parents.\" -> \"Je ______ parle.\"",
            options: ["les", "leur", "lui", "eux"],
            correct: 1,
            explanation: "'À mes parents' is an indirect object plural, which is replaced by the pronoun 'leur'."
        },
        {
            section: "Personal Pronouns",
            question: "In the sentence \"Tu me regardes,\" what does me mean?",
            options: ["I", "Me", "My", "Myself"],
            correct: 1,
            explanation: "'Me' is an object pronoun meaning 'me' in this context."
        },
        {
            section: "Personal Pronouns",
            question: "Which pronoun is used for \"You\" when speaking to a group of friends?",
            options: ["Tu", "Toi", "Vous", "Ils"],
            correct: 2,
            explanation: "'Vous' is used whenever you address more than one person, even if they are close friends."
        },
        {
            section: "Personal Pronouns",
            question: "\"Je le vois\" means:",
            options: ["I see him/it.", "He sees me.", "I see them.", "I see her."],
            correct: 0,
            explanation: "'Le' represents a masculine singular direct object (him or it)."
        },
        // Part 3: Present Tense
        {
            section: "The Present Tense",
            question: "Conjugate \"Avoir\": \"Vous ______ faim.\"",
            options: ["avez", "avons", "ont", "as"],
            correct: 0,
            explanation: "Regular 'vous' ending for avoir is 'avez'."
        },
        {
            section: "The Present Tense",
            question: "Conjugate \"Être\": \"Elles ______ intelligentes.\"",
            options: ["sont", "sommes", "êtes", "est"],
            correct: 0,
            explanation: "'Elles sont' is the 3rd person plural of être."
        },
        {
            section: "The Present Tense",
            question: "What is the \"-er\" verb ending for the \"Nous\" form?",
            options: ["-ez", "-ent", "-ons", "-es"],
            correct: 2,
            explanation: "All regular verbs in the present tense (except for être/avoir variants) end in -ons for 'nous'."
        },
        {
            section: "The Present Tense",
            question: "\"Je ______ (faire) mes devoirs.\"",
            options: ["fais", "fait", "faisons", "font"],
            correct: 0,
            explanation: "The 'Je' form of 'faire' is 'fais'."
        },
        {
            section: "The Present Tense",
            question: "\"Tu ______ (aller) à la plage.\"",
            options: ["vais", "vas", "va", "vont"],
            correct: 1,
            explanation: "The 'Tu' form of 'aller' is 'vas'."
        },
        {
            section: "The Present Tense",
            question: "Which verb means \"To drink\"?",
            options: ["Dormir", "Boire", "Devoir", "Dire"],
            correct: 1,
            explanation: "'Boire' is the irregular verb meaning to drink."
        },
        {
            section: "The Present Tense",
            question: "Choose the correct form of \"Prendre\": \"Ils ______ le train.\"",
            options: ["prends", "prennent", "prendons", "prenez"],
            correct: 1,
            explanation: "Irregular root change in the plural: Ils prennent."
        },
        {
            section: "The Present Tense",
            question: "\"Nous ______ (vouloir) un café.\"",
            options: ["voulez", "voulons", "veulent", "veut"],
            correct: 1,
            explanation: "The 'Nous' form of 'vouloir' is 'voulons'."
        },
        // Part 4: Prepositions
        {
            section: "Prepositions",
            question: "\"I live in London\" (City):",
            options: ["En Londres", "À Londres", "Au Londres", "Dans Londres"],
            correct: 1,
            explanation: "All cities take the preposition 'à' in French."
        },
        {
            section: "Prepositions",
            question: "\"She is going to France\" (Feminine Country):",
            options: ["À la France", "Au France", "En France", "Dans France"],
            correct: 2,
            explanation: "Feminine countries (usually ending in -e) take 'en'."
        },
        {
            section: "Prepositions",
            question: "\"We are going to the supermarket\" (Masculine place):",
            options: ["À le supermarché", "Au supermarché", "En supermarché", "À la supermarché"],
            correct: 1,
            explanation: "The contraction of 'à' + 'le' is 'au'."
        },
        {
            section: "Prepositions",
            question: "\"I am at my friend's house\":",
            options: ["À mon ami", "Chez mon ami", "Dans mon ami", "Sur mon ami"],
            correct: 1,
            explanation: "'Chez' means 'at the place of' when referring to a person."
        },
        {
            section: "Prepositions",
            question: "The cat is on the table:",
            options: ["Sous", "Sur", "Dans", "Devant"],
            correct: 1,
            explanation: "'Sur' means on. 'Sous' means under."
        },
        {
            section: "Prepositions",
            question: "\"I come from Canada\" (Masculine Country):",
            options: ["De Canada", "Du Canada", "Des Canada", "De la Canada"],
            correct: 1,
            explanation: "'De' + 'le' (masc country) becomes 'du'."
        },
        // Part 5: Nationalities
        {
            section: "Nationalities",
            question: "A man from Spain is \"espagnol.\" A woman is:",
            options: ["Espagnol", "Espagnole", "Espagnols", "Espagnolles"],
            correct: 1,
            explanation: "Add 'e' to the masculine form to create the feminine nationality adjective."
        },
        {
            section: "Nationalities",
            question: "\"They (fem.) are American\":",
            options: ["Elles sont américain.", "Elles sont américaine.", "Elles sont américains.", "Elles sont américaines."],
            correct: 3,
            explanation: "Must match feminine plural: américaine + s = américaines."
        },
        {
            section: "Nationalities",
            question: "If a man is \"italien,\" a woman is:",
            options: ["Italien", "Italienne", "Italienes", "Italiene"],
            correct: 1,
            explanation: "Nationalities ending in -ien double the 'n' in the feminine form."
        },
        {
            section: "Nationalities",
            question: "\"Mon ami est ______ (English).\"",
            options: ["anglais", "anglaise", "anglaise", "anglaises"],
            correct: 0,
            explanation: "'Mon ami' is masculine, so use 'anglais'."
        },
        {
            section: "Nationalities",
            question: "\"Nous sommes ______ (Japanese, plural).\"",
            options: ["japonais", "japonaise", "japonaises", "japonais"],
            correct: 0,
            explanation: "Adjectives ending in 's' do not change in the masculine plural."
        },
        {
            section: "Nationalities",
            question: "Which of these is NOT capitalized in French unless it's at the start?",
            options: ["Names of people", "Nationality Adjectives", "Names of cities", "Names of countries"],
            correct: 1,
            explanation: "In French, nouns of nationality are capitalized ('un Français'), but adjectives are not ('un livre français')."
        },
        // Part 6: Futur Simple
        {
            section: "The Future Tense",
            question: "The future tense ending for \"Je\" is:",
            options: ["-ais", "-ai", "-as", "-e"],
            correct: 1,
            explanation: "Futur simple endings mimic 'avoir' in the present: ai, as, a, ons, ez, ont."
        },
        {
            section: "The Future Tense",
            question: "\"I will eat\" is:",
            options: ["Je mangerais", "Je mangerai", "Je vais manger", "Je mangé"],
            correct: 1,
            explanation: "Root (manger) + ending (ai) = mangerai. 'Je vais manger' is futur proche."
        },
        {
            section: "The Future Tense",
            question: "What is the future stem for \"Aller\"?",
            options: ["All-", "Ir-", "Aill-", "Ser-"],
            correct: 1,
            explanation: "Aller has the irregular stem 'ir-' (e.g., J'irai)."
        },
        {
            section: "The Future Tense",
            question: "\"Nous ______ (avoir) une maison.\"",
            options: ["aurons", "aurions", "avons", "avont"],
            correct: 0,
            explanation: "Avoir has the stem 'aur-'. Stem + ons = aurons."
        },
        {
            section: "The Future Tense",
            question: "\"Ils ______ (être) contents.\"",
            options: ["seront", "sont", "serons", "seront"],
            correct: 0,
            explanation: "Être has the stem 'ser-'. Stem + ont = seront."
        },
        {
            section: "The Future Tense",
            question: "\"Tu ______ (faire) le gâteau.\"",
            options: ["fairas", "feras", "feras", "ferais"],
            correct: 1,
            explanation: "Faire has the stem 'fer-'. Stem + as = feras."
        },
        // Part 7: Negation
        {
            section: "The Negation",
            question: "To make \"Je parle\" negative:",
            options: ["Je ne parle pas.", "Je pas parle.", "Je ne pas parle.", "Ne je parle pas."],
            correct: 0,
            explanation: "Standard negation wraps the conjugated verb: ne [verb] pas."
        },
        {
            section: "The Negation",
            question: "\"I no longer smoke\":",
            options: ["Je ne fume jamais.", "Je ne fume pas.", "Je ne fume plus.", "Je ne fume rien."],
            correct: 2,
            explanation: "'Ne... plus' is used for 'no longer' or 'not anymore'."
        },
        {
            section: "The Negation",
            question: "In the negative, \"J'ai un chien\" becomes:",
            options: ["Je n'ai pas un chien.", "Je n'ai pas de chien.", "Je n'ai pas du chien.", "Je n'ai pas le chien."],
            correct: 1,
            explanation: "In negative sentences, indefinite articles (un, une, des) change to 'de'."
        },
        {
            section: "The Negation",
            question: "\"He never travels\":",
            options: ["Il ne voyage pas.", "Il ne voyage plus.", "Il ne voyage jamais.", "Il ne voyage rien."],
            correct: 2,
            explanation: "'Ne... jamais' means 'never'."
        },
        {
            section: "The Negation",
            question: "\"Nothing is happening\":",
            options: ["Rien ne se passe.", "Pas ne se passe.", "Jamais ne se passe.", "Ne rien se passe."],
            correct: 0,
            explanation: "'Rien' can act as a subject, followed by 'ne'."
        },
        {
            section: "The Negation",
            question: "Which word is used for \"neither... nor\"?",
            options: ["Plus... plus", "Ni... ni", "Pas... pas", "Non... non"],
            correct: 1,
            explanation: "'Ni... ni' is the French equivalent of 'neither... nor'."
        },
        // Part 8: Relative Pronouns
        {
            section: "Relative Pronouns",
            question: "Use ______ when the pronoun is the subject (followed by a verb).",
            options: ["Qui", "Que", "Où", "Dont"],
            correct: 0,
            explanation: "'Qui' is the relative pronoun that acts as the subject of the following verb."
        },
        {
            section: "Relative Pronouns",
            question: "Use ______ when the pronoun is the object (followed by a noun/subject).",
            options: ["Qui", "Que", "Où", "Dont"],
            correct: 1,
            explanation: "'Que' is used as a direct object relative pronoun."
        },
        {
            section: "Relative Pronouns",
            question: "\"La voiture ______ j'ai achetée.\"",
            options: ["qui", "que", "où", "dont"],
            correct: 1,
            explanation: "The car is the object of 'I bought', so use 'que'."
        },
        {
            section: "Relative Pronouns",
            question: "\"L'homme ______ travaille ici.\"",
            options: ["qui", "que", "où", "dont"],
            correct: 0,
            explanation: "The man is the subject of 'works', so use 'qui'."
        },
        {
            section: "Relative Pronouns",
            question: "\"Le restaurant ______ nous mangeons.\"",
            options: ["qui", "que", "où", "dont"],
            correct: 2,
            explanation: "Use 'où' for places and times (where/when)."
        },
        {
            section: "Relative Pronouns",
            question: "If \"Que\" is followed by a vowel, it becomes:",
            options: ["Qui", "Qu'", "Que'", "Q'"],
            correct: 1,
            explanation: "Que undergoes elision (becoming qu') before a vowel, but qui never does."
        },
        // Part 9: Reading Comp
        {
            section: "Text Comprehension",
            question: "Où habite Marie ?",
            options: ["Au Nigeria", "À Paris", "À Londres", "Dans une bibliothèque"],
            correct: 1,
            explanation: "The text states: '...qui habite à Paris'."
        },
        {
            section: "Text Comprehension",
            question: "Qu'est-ce qu'elle étudie ?",
            options: ["La médecine", "Le droit", "Le français", "L'histoire"],
            correct: 1,
            explanation: "The text states: 'Elle étudie le droit'."
        },
        {
            section: "Text Comprehension",
            question: "Où ira-t-elle demain ?",
            options: ["Au café", "À la bibliothèque", "Chez elle", "Au Nigeria"],
            correct: 1,
            explanation: "The text states: '...elle ira à la bibliothèque'."
        },
        {
            section: "Text Comprehension",
            question: "Qu'est-ce qu'elle boit ?",
            options: ["Du café", "De l'eau", "Du thé", "Du jus"],
            correct: 2,
            explanation: "The text states: '...elle boit du thé'."
        },
        {
            section: "Text Comprehension",
            question: "\"Elle ira\" is in which tense?",
            options: ["Present", "Past", "Future", "Imperfect"],
            correct: 2,
            explanation: "'Ira' is the future simple of 'aller'."
        },
        // Part 10: Writing
        {
            section: "Essay Writing & Structure",
            question: "Which of these is a good \"Introduction\" phrase for an essay?",
            options: ["En conclusion", "Tout d'abord", "Cependant", "Enfin"],
            correct: 1,
            explanation: "'Tout d'abord' means 'First of all' and is great for starting points."
        },
        {
            section: "Essay Writing & Structure",
            question: "To show a contrast (But/However), use:",
            options: ["Et", "Parce que", "Mais", "Donc"],
            correct: 2,
            explanation: "'Mais' means 'But'."
        },
        {
            section: "Essay Writing & Structure",
            question: "\"Parce que\" means:",
            options: ["Therefore", "Because", "Although", "Since"],
            correct: 1,
            explanation: "'Parce que' introduces a cause (Because)."
        },
        {
            section: "Essay Writing & Structure",
            question: "\"Ensuite\" is used to:",
            options: ["Start a paragraph", "List sequence of events", "Give a final opinion", "Say goodbye"],
            correct: 1,
            explanation: "'Ensuite' means 'Next' or 'Then'."
        },
        {
            section: "Essay Writing & Structure",
            question: "To conclude an essay, you say:",
            options: ["Pour commencer", "Finalement / En conclusion", "D'un autre côté", "Par exemple"],
            correct: 1,
            explanation: "'En conclusion' summarizes and finishes the text."
        }
    ]
};

// App State
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let answers = [];

// DOM Elements
const views = {
    landing: document.getElementById('landing-view'),
    quiz: document.getElementById('quiz-view'),
    results: document.getElementById('results-view')
};

const elements = {
    nextBtn: document.getElementById('next-btn'),
    prevBtn: document.getElementById('prev-btn'),
    restartBtn: document.getElementById('restart-btn'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    explanationContainer: document.getElementById('explanation-container'),
    explanationText: document.getElementById('explanation-text'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    questionCounter: document.getElementById('question-counter'),
    sectionName: document.getElementById('section-name'),
    resultScoreText: document.getElementById('result-score-text'),
    scoreCircleFill: document.getElementById('score-circle-fill'),
    resultsBreakdown: document.querySelector('.results-breakdown')
};

// General Logic
function switchView(viewName) {
    Object.values(views).forEach(view => view.classList.remove('active'));
    views[viewName].classList.add('active');
}

function startQuiz(quizType) {
    currentQuizData = quizSets[quizType];
    currentQuestionIndex = 0;
    score = 0;
    answers = new Array(currentQuizData.length).fill(null);
    switchView('quiz');
    renderQuestion();
}

function renderQuestion() {
    const questionData = currentQuizData[currentQuestionIndex];
    const userAnswer = answers[currentQuestionIndex];
    
    // Reset Explanations
    elements.explanationContainer.classList.add('hidden');
    
    // Update Text
    elements.questionText.textContent = questionData.question;
    elements.questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;
    elements.sectionName.textContent = questionData.section;
    
    // Update Progress
    const progress = ((currentQuestionIndex + 1) / currentQuizData.length) * 100;
    elements.progressBarFill.style.width = `${progress}%`;
    
    // Update Buttons
    elements.prevBtn.disabled = currentQuestionIndex === 0;
    elements.nextBtn.textContent = currentQuestionIndex === currentQuizData.length - 1 ? "Finish" : "Next";
    elements.nextBtn.disabled = userAnswer === null;

    // Render Options
    elements.optionsContainer.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        
        let badgeContent = String.fromCharCode(65 + index);
        
        if (userAnswer !== null) {
            optionCard.classList.add('reveal-state');
            if (index === questionData.correct) {
                optionCard.classList.add('correct');
                badgeContent = '<i class="fa-solid fa-check"></i>';
            } else if (index === userAnswer) {
                optionCard.classList.add('incorrect');
                badgeContent = '<i class="fa-solid fa-xmark"></i>';
            }
            
            elements.explanationText.textContent = questionData.explanation;
            elements.explanationContainer.classList.remove('hidden');
        }
        
        optionCard.innerHTML = `
            <div class="option-badge">${badgeContent}</div>
            <div class="option-text">${option}</div>
        `;
        
        if (userAnswer === null) {
            optionCard.addEventListener('click', () => selectOption(index));
        } else {
            optionCard.style.cursor = 'default';
        }
        
        elements.optionsContainer.appendChild(optionCard);
    });
}

function selectOption(index) {
    if (answers[currentQuestionIndex] !== null) return;

    answers[currentQuestionIndex] = index;
    const questionData = currentQuizData[currentQuestionIndex];
    
    const options = elements.optionsContainer.querySelectorAll('.option-card');
    options.forEach((opt, i) => {
        opt.classList.add('reveal-state');
        opt.style.cursor = 'default';
        const badge = opt.querySelector('.option-badge');
        
        if (i === questionData.correct) {
            opt.classList.add('correct');
            badge.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (i === index) {
            opt.classList.add('incorrect');
            badge.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        }
    });

    elements.explanationText.textContent = questionData.explanation;
    elements.explanationContainer.classList.remove('hidden');
    
    elements.nextBtn.disabled = false;
}

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

function calculateScore() {
    let totalScore = 0;
    answers.forEach((answer, index) => {
        if (answer === currentQuizData[index].correct) {
            totalScore++;
        }
    });
    return totalScore;
}

function showResults() {
    const finalScore = calculateScore();
    const percentage = Math.round((finalScore / currentQuizData.length) * 100);
    
    elements.resultScoreText.textContent = `${finalScore}/${currentQuizData.length}`;
    elements.scoreCircleFill.setAttribute('stroke-dasharray', `${percentage}, 100`);
    
    const sectionStats = {};
    currentQuizData.forEach((q, i) => {
        if (!sectionStats[q.section]) {
            sectionStats[q.section] = { total: 0, correct: 0 };
        }
        sectionStats[q.section].total++;
        if (answers[i] === q.correct) {
            sectionStats[q.section].correct++;
        }
    });

    elements.resultsBreakdown.innerHTML = '';
    Object.keys(sectionStats).forEach(section => {
        const stats = sectionStats[section];
        const card = document.createElement('div');
        card.className = 'stats-card';
        card.innerHTML = `
            <h4>${section}</h4>
            <div class="value">${stats.correct}/${stats.total}</div>
        `;
        elements.resultsBreakdown.appendChild(card);
    });

    switchView('results');
}

function restartQuiz() {
    switchView('landing');
}

// Global exposure for onclick handlers
window.startQuiz = startQuiz;

// Initialization
elements.nextBtn.addEventListener('click', nextQuestion);
elements.prevBtn.addEventListener('click', prevQuestion);
elements.restartBtn.addEventListener('click', restartQuiz);
