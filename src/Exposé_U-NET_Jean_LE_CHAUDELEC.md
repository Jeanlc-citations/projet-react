# Titre de mon article

Nom prénom : LE CHAUDELEC Jean


## Méta données

* titre de l'article : U-Net: Convolutional Networks for Biomedical Image Segmentation
* 
* auteurs : Olaf Ronneberger, Philipp Fischer et Thomas Brox, chercheurs affiliés au Centre BIOSS pour l'étude de la signalisation biologique de l'Université de Fribourg en Allemagne.
* 
* année de publication : 2015
* 
* conférence ou journal : conférence MICCAI (Medical Image Computing and Computer-Assisted Intervention)
* Le nombre de citations : 100793 selon google Scholar
* 
* sujet : Une nouvelle architecture de CNN pour la segmentation d'image, plus rapide, plus précise et nécessitant moins
* de données que les autres méthodes utilisant des CNN


##  Contribution

L’article propose une nouvelle architecture CNN, appelée U-Net en raison de sa forme de U. Elle repose sur deux phases :

1.	Une phase d'encodage (la partie de gauche) : réduit progressivement la taille de l’image pour extraire des caractéristiques importantes, en utilisant les opérations suivantes :
-	Convolutions 3*3 (pour détecter des motifs)
-	Max-pooling (pour réduire la taille par 2 tout en conservant les informations essentielles)
-   Ce processus est employé 4/5 fois pendant la phase d'encodage

2.	Une phase de décodage (la partie de droite) : reconstruit l’image segmentée en appliquant :
-	Upsampling (transposed convolutions) pour augmenter progressivement la résolution de l'image
-   D'autres convolutions
-   Ce processus est aussi répété 4/5 fois, le même nombre de répétitions que pour la phase d'encodage

L’innovation majeure de U-Net repose sur des skip connections. Ce sont des fonctions qui stockent les données n'ayant pas été retenues lors de la compression pour les réutiliser si besoin pendant le décodage. Ce système permet de limiter les pertes de données, le problème majeur des anciens CNN en segmentation d'image.


## Les données

Les chercheurs disposaient seulement de 30 images médicales pour l'entrainement d'U-NET, un volume trop faible pour entraîner un CNN classique. Un CNN classique a besoin  de plusieurs milliers, voire dizaines de milliers d'échantillons pour être entrainé. Pour contourner cette contrainte, ils ont utilisé la technique d’augmentation de données, qui consiste à générer de nouvelles images en appliquant des transformations (rotations, zooms, variations de luminosité, etc.) sur des images existantes.


## Les expérimentations

L’architecture U-Net a été testée sur trois bases de données :
•	Images de cellules au microscope
•	Scanners médicaux (IRM, scanners)
•	ISBI 2012 Challenge, une compétition en segmentation d’images biomédicales
Les résultats montrent que U-Net surpasse les autres méthodes sur la majorité des critères. Les seules méthodes qui ont 
eu des résultats supérieurs à U-NET ont bénéficié de post-traitements, des opérations d'ajustement.

## Les applications

U-NET est applicable dans de nombreux domaines de la santé. La segmentation sert principalement à détecter des maladies graves, en particulier les maladies cardiaques, les cancers ou les pathologies cérébrales. Les méthodes de Deep Learning ont aussi contribué aux progrès pour détecter la maladie d’Alzheimer à des stades peu avancés. U-Net est également applicable dans beaucoup d’autres domaines. On peut l’utiliser en astronomie pour segmenter des objets célestes. En agriculture, elle peut détecter des maladies de plantes. Elle peut aussi segmenter des photos satellites à des fins de cartographie. Enfin, elle peut être utile dans le cadre du développement des véhicules autonomes, permettant de localiser les routes et les obstacles.


## Analyse critique (difficile)

U-NET est une technologie qui possède ses forces et ses faiblesses :

Forces :
- Résout le problème de perte d’informations des anciens CNN grâce aux skip connections
- Fonctionne avec peu d'images d'entrainement grâce à l'augmentation de données
- On peut l'appliquer dans de nombreux domaines

Faiblesses :
- Consomme beaucoup de mémoire, nécessitant un GPU performant
- U-NET a du mal à segmenter des petites structures ou des images avec du bruit
- Moins performante si les images utilisées diffèrent trop des images d'entrainement



## Les références

U-Net: Convolutional Networks for Biomedical Image Segmentation, 
O. Ronneberger, P. Fischer, T. Brox (2015), MICCAI

U-net for Biomedicale Image Segmentation
Latentiview.com, 28 octobre 2020
https://www.latentview.com/blog/u-net-for-biomedical-image-segmentation

U-net
wikipédia, 28 octobre 2020
https://fr.wikipedia.org/wiki/U-Net

U-net: Convolutional networks for biomedical image segmentation
Google Scholar
https://scholar.google.com.sg/citations?view_op=view_citation&hl=en&user=7jrO1NwAAAAJcitation_for_view=7jrO1NwAAAAJ:K3LRdlH-MEoC

Paper Review Calls 011 -- U-Net: Convolutional Networks for Biomedical Image Segmentation
Machine learning dojo, 28 avril 2019
https://www.youtube.com/watch?v=E1Y8HZcpm-I