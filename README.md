# Vær Progressive Web Application
Vær PWApp for å teste ut Service Workers, Manifest, Cache Strategies og Offline bruk.

## Caching
Applikasjonen bruker to ulike måter å cache webapplikasjonen til offline bruk. 

#### Cache, men hvis ikke faller vi tilbake til nettverk
Den første er å hente applikasjons-skallet fra cachen. Hvis filene ligger i cachen bruker vi de, uansett. Men hvis ikke er vi avhengig av å sende en ny forespørsel å laste ned filene på nytt. Det kan være ulemper med denne måten å bruke cache på, ved at det kan være vanskelig å oppdatere grensesnittet når vi alltid leser fra cachen.

#### Cache først, så oppdaterer vi fra nettet.
Den andre metoden er for selve vær dataene, for disse dataene vil man sjekke om innholdet er endret, hvis ikke viser vi det vi har i cachen. Men hvis det er noe nytt innhold viser vi fortsatt det vi har i cachen og oppdaterer fortløpende etterhvert som nytt innhold blir tilgjengelig.

## Android
Dette er et skjermbilde når webapplikasjonen kjører normal Google Chrome på Android. Når applikasjonen laster første gang vil man få en forespørsel om å legge webapplikasjonen på startsiden.
<img src="https://github.com/181192/P018-PWApp/blob/master/presentation/AndroidChrome.png" alt="Android Normal Chrome" width="auto" height="300" />
Når man har godtatt å legge applikasjonen på startsiden på telefonen vil applikasjonen starte som en normal applikasjon på telefonen med egen "splash-screen", altså egen logo som er definert i manifest.json vil da vises til applikasjonen er ferdig lastet. Og Chrome grensesnittet er fjernet automatisk. Er det lenker inne i webapplikasjonen kan man velge "Åpne i Chrome".
<img src="https://github.com/181192/P018-PWApp/blob/master/presentation/AndroidPWA.png" alt="Android PWApp" width="auto" height="300" />

## Windows
Man kan også legge til applikasjonen på windows, den vil da som på Android legge seg som en egen app på skrivebordet og vil starte uten at resten av Chrome er synlig, og vil oppleves som en native app.
<img src="https://github.com/181192/P018-PWApp/blob/master/presentation/Windows.PNG" alt="windows screenshot" width="auto" height="300" />

## Offline
Her er ett bilde som viser service-workeren kjører.
<img src="https://github.com/181192/P018-PWApp/blob/master/presentation/OfflineDev.PNG" alt="Offline" width="auto" height="300" />


