# Abschlussprüfung · 4. Oktober 2026

Die bestehende MainGlanz-Website wurde gezielt überarbeitet; Branding, Farbpalette, Seitenstruktur, Texte und sechs Leistungskarten bleiben erhalten.

## Darstellung

1440, 1024, 768, 430 und 390 Pixel wurden im Browser geprüft. Bei keiner Breite entstand horizontaler Überlauf oder eine abgeschnittene Überschrift. Auf Smartphones stehen Leistungskarten und Formularfelder in einer Spalte; die Hero- und Formularbuttons nutzen die verfügbare Breite. Laptop- und Tabletansichten verwenden zwei Leistungsspalten, Desktop drei.

## Interaktionen

- Alle internen Anchor-Ziele vorhanden; sämtliche sechs Leistungslinks wählen die passende Leistung im Formular vor.
- Mobile-Menü mit Tastatur und Touch bedienbar; Schließen bei Linkauswahl, Escape, Außenklick und Wechsel zur Desktopbreite.
- Sticky-Header und aktuelle Navigation beim Scrollen geprüft.
- Unerwünschter Fokusrahmen um Sektionen entfernt; sichtbare Fokusmarkierungen an interaktiven Elementen bleiben erhalten.
- Karten-Hover: 4 Pixel Anhebung, 250 Millisekunden, dezenter Schatten.
- Leere Pflichtfelder, reine Leerzeichen, ungültige E-Mail und fehlende Datenschutzbestätigung werden mit feldbezogenen Meldungen zurückgewiesen.
- Erfolgreiche Validierung zeigt die angeforderte Demo-Erfolgsmeldung. Es gibt weder Netzwerkversand noch Speicherung der Formulardaten.
- Rechtshinweise öffnen und schließen per Tastatur; keine JavaScript-Fehler oder Warnungen in der Browser-Konsole bei der Prüfung.
- Reduced-Motion-Regel deaktiviert Übergänge und Smooth-Scrolling. Es wurden keine Scroll-Reveal-Animationen ergänzt.

## Fotos

Lokal gespeicherte WebP-Dateien, responsive `srcset`, feste Layoutflächen, priorisiertes Hero-Bild und Lazy Loading im Über-uns-Bereich. Herkunft und Pexels-Lizenz sind in `dist/images/SOURCES.md` dokumentiert. Die Bild-Badges wurden gemäß Pexels-Lizenz entfernt; freiwillige Quellenhinweise bleiben im Footer. Die Website ist ausdrücklich als fiktive WEBKANT-Konzeptwebsite gekennzeichnet; abgebildete Personen werden nicht als MainGlanz-Mitarbeiter dargestellt.

## Finaler Feinschliff

Neues natürliches Farbfoto von Mikkel Jul im Über-uns-Bereich, anderer Fensterreiniger als im Hero. Logo-Unterzeile minimal auf 9 px (Desktop) bzw. 8 px (Mobile) angehoben. Finale Sichtprüfung bei 1440, 1024, 768, 430 und 390 px: kein horizontaler Überlauf und keine abgeschnittenen Texte. Leistungen, Über uns, Ablauf und Kontakt per Navigation auf Desktop und Mobile geprüft: Zielbeginn rund 17 px unter dem Header. Einheitliches scroll-margin-top von 114 px bzw. 96 px; Start bleibt am Seitenanfang vollständig sichtbar. Alle sechs Anchor-Ziele existieren.

