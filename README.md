# noticies
Pàgina web de notícies - tema 6 i 7

> notícies. Enllaç de rawgit https://rawgit.com/komadreja70/noticies/master/index.html

----
## Tasques prèvies amb les imatges
Descàrrega d'imatges i modificació utilitzant l'eina web de http://www.picresize.com/ per ajustar i comprimir-les.
Imatges obtingudes de:
* Club nàutic de Palma http://www.rcnp.es 
* Club de vela port d'Andratx http://www.cvpa.es/
* Club nàutic porto petro http://www.rcnportopetro.com/Paginas/Default.aspx
* Club nàutic port de Pollença http://rcnpp.es/es/
* Club nàutic Villacarlos http://clubnauticovillacarlospiraguismo.blogspot.com.es/
* Club nàutic Sant Antoni de Portmany http://www.esnautic.com/
* Federació Espanyola de piragüisme http:www.rfep.es
* Federació Balear de piragüisme http://fibp.org/

----
## Llista de fitxers pujats a GitHub

Hem creat un repositori dins GitHub que es diu noticies i hem pujat els fitxers següents:

* Carpeta img amb totes les imatges del projecte
* Carpeta css amb el codi d'estils tant per la pàgina principal com per la notícia individual
* Carpeta js amb el fitxer que conté el codi javascript
* Carpeta data amb els fitxers 1.json, 2.json i 3.json de les dades de les notícies a carregar des de fitxer.
* index.html página principal
* news1.html página de la notícia número 1
* news1.html página de la notícia número 2
* layerdesign.pdf esquema inicial de com ha de quedar la pàgina web (versió desktop i versió mòbil)

----
## Utilització de javascript
Hem utilitzat javascript per controlar la càrrega de notícies ja sigui mitjançant botó o bé amb l'scroll del mouse.
* llegim les notícies desde el fitxer .json amb les eines de javascript i jquery

----
## Funcionament bàsic
* En carregar la pàgina es presenta el titol i el menú. A continuació la publicitat a la dreta en el cas desktop i al centre i a dalt en el cas de dispositiu mòbil.

* Apareixen les notícies en grups de 2 i d'entrada només les dues primeres. 
* Si pitjam el botó de carregar més notícies o bé fein scroll es carrguen 2 notícies més i així fins que acabam amb 6 notícies més.
* Quan no hi ha més notícies a carregar apareix el missatge abaix com un warning.



