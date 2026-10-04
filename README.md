# MainGlanz · Konzeptwebsite von WEBKANT

Frameworkfreie responsive One-Page. Die auslieferbare Website liegt in `dist/`: `index.html`, `css/style.css`, `js/script.js`, `images/`.

Hero und Über-uns-Bereich verwenden lokal gespeicherte, responsive WebP-Symbolfotos von Tima Miroshnichenko und Mikkel Jul / Pexels. Quellen und Lizenz stehen in `dist/images/SOURCES.md`. Abgebildete Personen werden nicht als MainGlanz-Mitarbeiter dargestellt. Zum Austausch eigene lizenzierte Fotos in `images/` ablegen und `src`, `srcset`, Abmessungen und Alt-Texte in `index.html` aktualisieren. Die früheren eigenen SVG-Illustrationen bleiben als alternative Motive erhalten.

Das Formular prüft Eingaben nur lokal. Es besitzt keine Serveranbindung, sendet keine Daten und verwendet keinen Browser-Speicher. Rechtstexte sind klar gekennzeichnete Demo-Platzhalter und müssen vor echter geschäftlicher Nutzung ersetzt werden.

Farben, Abstände und Radien werden in `css/style.css` gepflegt. Die Hauptfarben stehen als Custom Properties in `:root`. Es werden keine externen Schriftarten, Bibliotheken oder Bilddienste geladen.

Lokale Vorschau: `dist/` mit einem beliebigen statischen Webserver ausliefern. Alternativ `dist/index.html` direkt im Browser öffnen.

