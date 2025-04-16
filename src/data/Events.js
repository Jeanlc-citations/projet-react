const Events = [
  // 📌 Antiquité
  { id: 1, date: "-600", title: "Fondation de Massalia", description: "Les Grecs de Phocée fondent la cité de Massalia (Marseille).", image: "/images/massalia.jpg", period: "Antiquité", difficulty: "Facile" },
  { id: 2, date: "-390", title: "Sacre de Brennus à Rome", description: "Les Gaulois menés par Brennus pillent Rome.", image: "/images/brennus.jpg", period: "Antiquité", difficulty: "Difficile" },
  { id: 3, date: "-105", title: "Bataille d'Orange", description: "Les Cimbres et les Teutons écrasent les armées romaines.", image: "/images/orange.jpg", period: "Antiquité", difficulty: "Difficile" },
  { id: 4, date: "-58", title: "Début de la Guerre des Gaules", description: "Jules César envahit la Gaule.", image: "/images/guerre-gaules.jpg", period: "Antiquité", difficulty: "Moyen" },
  { id: 5, date: "-52", title: "Bataille d'Alésia", description: "César assiège Alésia et vainc Vercingétorix.", image: "/images/alesia.jpg", period: "Antiquité", difficulty: "Facile" },
  { id: 6, date: "-27", title: "Début de l'Empire romain", description: "Octave devient Auguste, premier empereur romain.", image: "/images/auguste.jpg", period: "Antiquité", difficulty: "Moyen" },
  { id: 7, date: "212", title: "Édit de Caracalla", description: "Citoyenneté romaine accordée à tous les hommes libres de l'Empire.", image: "/images/caracalla.jpg", period: "Antiquité", difficulty: "Moyen" },
  
  // 📌 Moyen-Âge
  { id: 8, date: "451", title: "Bataille des Champs Catalauniques", description: "Flavius Aetius et ses alliés arrêtent Attila et les Huns.", image: "/images/champs-catalauniques.jpg", period: "Antiquité", difficulty: "Difficile" },
  { id: 9, date: "476", title: "Chute de l'Empire romain d'Occident", description: "Romulus Augustule est déposé par Odoacre.", image: "/images/chute-rome.jpg", period: "Antiquité", difficulty: "Facile" },
  { id: 10, date: "486", title: "Bataille de Soissons", description: "Clovis vainc Syagrius et s'empare de la Gaule du Nord.", image: "/images/soissons.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 11, date: "711", title: "Début de la conquête musulmane de l'Espagne", description: "Les Omeyyades franchissent le détroit de Gibraltar.", image: "/images/711.jpg", period: "Moyen-Âge", difficulty: "Difficile" },
  { id: 12, date: "732", title: "Bataille de Poitiers", description: "Charles Martel repousse les Arabes.", image: "/images/poitiers.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 13, date: "800", title: "Couronnement de Charlemagne", description: "Charlemagne est sacré empereur par le pape Léon III.", image: "/images/charlemagne.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 14, date: "843", title: "Traité de Verdun", description: "Partage de l'Empire carolingien entre les petits-fils de Charlemagne.", image: "/images/verdun.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 15, date: "987", title: "Hugues Capet devient roi", description: "Début de la dynastie capétienne.", image: "/images/hugues-capet.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 16, date: "1066", title: "Conquête de l'Angleterre par Guillaume le Conquérant", description: "Guillaume, duc de Normandie, devient roi d'Angleterre après la bataille d'Hastings.", image: "/images/hastings.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 17, date: "1095", title: "Appel d'Urbain II à Clermont", description: "Le pape Urbain II appelle à la première croisade.", image: "/images/urbain2.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 18, date: "1209", title: "Début de la Croisade des Albigeois", description: "Le pape Innocent III lance une croisade contre les Cathares.", image: "/images/albigeois.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 19, date: "1214", title: "Bataille de Bouvines", description: "Victoire de Philippe Auguste contre les Anglais et les Allemands.", image: "/images/bouvines.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 20, date: "1226", title: "Louis IX devient roi", description: "Futur Saint Louis, connu pour sa justice et ses croisades.", image: "/images/saint-louis.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 21, date: "1302", title: "Création des États généraux", description: "Philippe IV le Bel convoque les trois ordres du royaume.", image: "/images/etats-generaux.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 22, date: "1328", title: "Fin des Capétiens directs", description: "Mort de Charles IV, début de la dynastie des Valois.", image: "/images/valois.jpg", period: "Moyen-Âge", difficulty: "Moyen" },
  { id: 23, date: "1337", title: "Début de la Guerre de Cent Ans", description: "Conflit entre la France et l'Angleterre.", image: "/images/guerre-cent-ans.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 24, date: "1358", title: "Grande Jacquerie", description: "Révolte paysanne contre les seigneurs durant la guerre de Cent Ans.", image: "/images/jacquerie.jpg", period: "Moyen-Âge", difficulty: "Difficile" },
  { id: 25, date: "1429", title: "Jeanne d’Arc délivre Orléans", description: "Tournant dans la guerre contre les Anglais.", image: "/images/jeanne-arc.jpg", period: "Moyen-Âge", difficulty: "Facile" },
  { id: 26, date: "1431", title: "Procès et exécution de Jeanne d'Arc", description: "Jeanne d'Arc est brûlée vive à Rouen.", image: "/images/jeanne-proces.jpg", period: "Moyen-Âge", difficulty: "Facile" },  

  // 📌 Renaissance
  { id: 27, date: "1494", title: "Début des guerres d'Italie", description: "Charles VIII envahit l’Italie, début d’un long conflit.", image: "/images/italie.jpg", period: "Renaissance", difficulty: "Moyen" },
  { id: 28, date: "1515", title: "Bataille de Marignan", description: "Victoire de François Ier contre les Suisses en Italie.", image: "/images/marignan.jpg", period: "Renaissance", difficulty: "Facile" },
  { id: 29, date: "1525", title: "Bataille de Pavie", description: "François Ier est fait prisonnier par Charles Quint.", image: "/images/pavie.jpg", period: "Renaissance", difficulty: "Facile" },
  { id: 30, date: "1534", title: "Voyage de Jacques Cartier", description: "Cartier explore le Canada et le fleuve Saint-Laurent.", image: "/images/cartier.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 31, date: "1539", title: "Ordonnance de Villers-Cotterêts", description: "Impose le français comme langue officielle.", image: "/images/villers-cotterets.jpg", period: "Renaissance", difficulty: "Moyen" },
  { id: 32, date: "1547", title: "Mort de François Ier", description: "Fin du règne du roi emblématique de la Renaissance française.", image: "/images/francois1.jpg", period: "Renaissance", difficulty: "Facile" },
  { id: 33, date: "1562", title: "Massacre de Wassy", description: "Début des guerres de Religion en France.", image: "/images/wassy.jpg", period: "Renaissance", difficulty: "Moyen" },
  { id: 34, date: "1572", title: "Massacre de la Saint-Barthélemy", description: "Des milliers de protestants assassinés à Paris et en province.", image: "/images/saint-barthelemy.jpg", period: "Renaissance", difficulty: "Difficile" },
  { id: 35, date: "1589", title: "Assassinat d'Henri III", description: "Henri III tué par un moine fanatique.", image: "/images/henri3.jpg", period: "Renaissance", difficulty: "Difficile" },
  { id: 36, date: "1598", title: "Édit de Nantes", description: "Henri IV met fin aux guerres de Religion en accordant des droits aux protestants.", image: "/images/edit-nantes.jpg", period: "Renaissance", difficulty: "Facile" },


  { id: 37, date: "1610", title: "Assassinat d'Henri IV", description: "Henri IV est tué par Ravaillac à Paris.", image: "/images/henri4.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 38, date: "1627", title: "Siège de La Rochelle", description: "Louis XIII et Richelieu répriment les protestants français.", image: "/images/la-rochelle.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 39, date: "1643", title: "Début du règne de Louis XIV", description: "Louis XIV devient roi à l'âge de 5 ans.", image: "/images/louis-xiv.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 40, date: "1682", title: "Installation de la Cour à Versailles", description: "Louis XIV installe définitivement la cour à Versailles.", image: "/images/versailles.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 41, date: "1685", title: "Édit de Fontainebleau", description: "Louis XIV révoque l'Édit de Nantes et persécute les protestants.", image: "/images/fontainebleau.jpg", period: "Époque moderne", difficulty: "Difficile" },
  { id: 42, date: "1715", title: "Mort de Louis XIV", description: "Fin du règne le plus long de l'histoire de France.", image: "/images/louis-xiv-mort.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 43, date: "1720", title: "Grande peste de Marseille", description: "Dernière grande épidémie de peste en France.", image: "/images/peste.jpg", period: "Époque moderne", difficulty: "Difficile" },  
 
  // 📌 Révolution française
  { id: 44, date: "1748", title: "Publication de *L'Esprit des lois*", description: "Montesquieu théorise la séparation des pouvoirs.", image: "/images/montesquieu.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 45, date: "1751", title: "Parution de l'Encyclopédie", description: "Diderot et d'Alembert publient le premier volume de l'Encyclopédie.", image: "/images/encyclopedie.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 46, date: "1783", title: "Premier vol en montgolfière", description: "Les frères Montgolfier font voler un ballon à air chaud.", image: "/images/montgolfiere.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 47, date: "1789", title: "Prise de la Bastille", description: "Début de la Révolution française.", image: "/images/bastille.jpg", period: "Révolution", difficulty: "Facile" },
  { id: 48, date: "1791", title: "Constitution française", description: "Naissance de la monarchie constitutionnelle.", image: "/images/constitution-1791.jpg", period: "Révolution", difficulty: "Moyen" },
  { id: 49, date: "1791", title: "Fuite de Varennes", description: "Louis XVI est arrêté en tentant de fuir la France.", image: "/images/varennes.jpg", period: "Révolution", difficulty: "Moyen" },
  { id: 50, date: "1792", title: "Proclamation de la République", description: "Fin de la monarchie, naissance de la Première République.", image: "/images/republique.jpg", period: "Révolution", difficulty: "Facile" },
  { id: 51, date: "1793", title: "Exécution de Louis XVI", description: "Fin de la monarchie en France.", image: "/images/louis-xvi.jpg", period: "Révolution", difficulty: "Facile" },
  { id: 52, date: "1799", title: "Coup d'État du 18 Brumaire", description: "Napoléon Bonaparte prend le pouvoir.", image: "/images/18-brumaire.jpg", period: "Révolution", difficulty: "Moyen" },

  // 📌 Empire napoléonien
  { id: 53, date: "1801", title: "Concordat avec le pape", description: "Napoléon rétablit les relations avec l'Église.", image: "/images/concordat.jpg", period: "Révolution", difficulty: "Moyen" },
  { id: 54, date: "1804", title: "Napoléon devient empereur", description: "Sacré par le pape Pie VII.", image: "/images/napoleon-sacre.jpg", period: "Empire", difficulty: "Facile" },
  { id: 55, date: "1805", title: "Bataille d'Austerlitz", description: "Victoire éclatante de Napoléon contre les Russes et les Autrichiens.", image: "/images/austerlitz.jpg", period: "Empire", difficulty: "Facile" },
  { id: 56, date: "1815", title: "Bataille de Waterloo", description: "Défaite finale de Napoléon.", image: "/images/waterloo.jpg", period: "Empire", difficulty: "Facile" },

  // 📌 XIXe siècle
  { id: 57, date: "1825", title: "Première ligne ferroviaire en France", description: "Ouverture de la ligne Saint-Étienne - Andrézieux.", image: "/images/train.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 58, date: "1830", title: "Révolution de Juillet", description: "Les Trois Glorieuses entraînent l'abdication de Charles X.", image: "/images/1830.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 59, date: "1848", title: "Abolition de l'esclavage", description: "Victor Schœlcher met fin à l'esclavage en France.", image: "/images/esclavage.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 60, date: "1852", title: "Début du Second Empire", description: "Napoléon III devient empereur des Français.", image: "/images/second-empire.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 61, date: "1870", title: "Défaite de Sedan", description: "Napoléon III est capturé, chute du Second Empire.", image: "/images/sedan.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 62, date: "1871", title: "Commune de Paris", description: "Insurrection révolutionnaire après la guerre franco-prussienne.", image: "/images/commune.jpg", period: "Époque moderne", difficulty: "Difficile" },
  { id: 63, date: "1881", title: "Lois Jules Ferry", description: "École gratuite, laïque et obligatoire en France.", image: "/images/ferry.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 64, date: "1889", title: "Inauguration de la Tour Eiffel", description: "La Tour Eiffel est construite pour l’Exposition universelle de Paris.", image: "/images/eiffel.jpg", period: "Époque moderne", difficulty: "Facile" },
  
  // 📌 XXe siècle
  { id: 65, date: "1914", title: "Début de la Première Guerre mondiale", description: "La France entre en guerre contre l'Allemagne.", image: "/images/ww1.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 66, date: "1916", title: "Bataille de Verdun", description: "Une des batailles les plus meurtrières de la Première Guerre mondiale.", image: "/images/verdun.jpg", period: "Époque moderne", difficulty: "Difficile" },
  { id: 67, date: "1919", title: "Traité de Versailles", description: "Signature du traité mettant fin à la Première Guerre mondiale.", image: "/images/versailles-1919.jpg", period: "Époque contemporaine", difficulty: "Moyen" },
  { id: 68, date: "1920", title: "Traité de Sèvres", description: "Partage de l’Empire ottoman après la Première Guerre mondiale.", image: "/images/sevres.jpg", period: "Époque contemporaine", difficulty: "Difficile" },
  { id: 69, date: "1936", title: "Front populaire", description: "Léon Blum met en place des réformes sociales (congés payés, 40h…).", image: "/images/front-populaire.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 70, date: "1940", title: "Appel du 18 juin", description: "De Gaulle appelle à la résistance depuis Londres.", image: "/images/18juin.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 71, date: "1944", title: "Débarquement en Normandie", description: "Libération de la France par les Alliés.", image: "/images/debarquement.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 72, date: "1944", title: "Droit de vote des femmes", description: "Les femmes obtiennent le droit de vote en France.", image: "/images/droit-vote-femmes.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 73, date: "8 mai 1945", title: "Armistice de la Seconde Guerre mondiale", description: "L'Allemagne nazie capitule, mettant fin à la guerre en Europe.", image: "/images/armistice-1945.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 74, date: "1945", title: "Ordonnance sur la Sécurité sociale", description: "Création de la Sécurité sociale en France.", image: "/images/secu.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 75, date: "1954", title: "Défaite de Diên Biên Phu", description: "Fin de la guerre d’Indochine pour la France.", image: "/images/dien-bien-phu.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 76, date: "1958", title: "Naissance de la Ve République", description: "De Gaulle fonde un nouveau régime politique.", image: "/images/ve-republique.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 77, date: "1962", title: "Fin de la guerre d'Algérie", description: "Les accords d'Évian mettent fin à la guerre et l'Algérie devient indépendante.", image: "/images/guerre-algerie.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 78, date: "1968", title: "Mai 68", description: "Mouvement social et étudiant majeur en France.", image: "/images/mai68.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 79, date: "1969", title: "Démission de De Gaulle", description: "Après l’échec d’un référendum, il quitte le pouvoir.", image: "/images/de-gaulle.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 80, date: "1974", title: "Majorité abaissée à 18 ans", description: "Valéry Giscard d'Estaing réforme l'âge de la majorité.", image: "/images/majorite.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 81, date: "1981", title: "Abolition de la peine de mort", description: "La peine capitale est supprimée sous François Mitterrand.", image: "/images/abolition.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 82, date: "1981", title: "Élection de François Mitterrand", description: "Premier président socialiste de la Ve République.", image: "/images/mitterrand.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 83, date: "1989", title: "Bicentenaire de la Révolution française", description: "Célébrations nationales et internationales.", image: "/images/bicentenaire.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 84, date: "1992", title: "Traité de Maastricht", description: "Création de l'Union Européenne.", image: "/images/maastricht.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 85, date: "2002", title: "Passage à l'Euro", description: "La France abandonne le franc.", image: "/images/euro.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 86, date: "2005", title: "Référendum sur la Constitution européenne", description: "Les Français rejettent le projet de Constitution de l'UE.", image: "/images/2005.jpg", period: "Époque moderne", difficulty: "Moyen" },
  { id: 87, date: "2015", title: "Attentats de Paris", description: "Attaques terroristes au Bataclan et à Charlie Hebdo.", image: "/images/attentats-2015.jpg", period: "Époque moderne", difficulty: "Difficile" },
  { id: 88, date: "2019", title: "Incendie de Notre-Dame", description: "La cathédrale de Paris est ravagée par un incendie.", image: "/images/notre-dame.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 89, date: "2020", title: "Confinement national face au Covid-19", description: "Mesure inédite en France moderne pour lutter contre la pandémie.", image: "/images/covid.jpg", period: "Époque moderne", difficulty: "Facile" },
  { id: 90, date: "2023", title: "Réforme des retraites", description: "Adoption d’une loi controversée reportant l’âge légal à 64 ans.", image: "/images/retraites.jpg", period: "Époque moderne", difficulty: "Moyen" }


];

export default Events;
