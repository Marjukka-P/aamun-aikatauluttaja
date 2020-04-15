# SIVUSTON TAUSTA

Sivusto on ensimmäinen "isompi" työ jossa yhdistän HTML, CSS sekä JavaScriptiä. Tämä on oikeastaan ensimmäinen kerta, kun käytän JavaScriptiä muuten kuin yksittäisten harjoitusten tekemiseen. Sivuston taustalla on idea apista, joka ohjaisi lasta kouluun. Tämän sivuston kanssa yritin jo enemmän huomioida responsiivisuutta, mutta edelleen se tuottaa haasteita, erityisesti kuvien kooon kanssa: jos suhde on pienellä näytöllä suhde ok, niin isolla ei välttämättä ole. Ihan kaikkea en vielä osannut teknisesti toteuttaa niin kuin olisin halunnut, mutta ainakin divit tulivat tutuksi ja taito googlettaa lisääntyi.


Tämän tehtävän myötä olen oppinut hyödyntämään inspect element-toimintoja monipuolisesti: etsimään HTML ja CSS virheitä, hahmottamaan divejä, kokeilemaan mitä kannattaa muuttaa, etsimään consolen avulla JavaScriptin virheitä, jne. Kävin tehtävän läpi ensimmäistä kertaa SiteImproven kanssa ja totesin, että se kannattaa pitää auki koko ajan eikä tehdä lopussa. Kyseinen ohjelma vaatii vielä lisää osaamista, jotta osaa kaiken ottaa huomioon. Lisäksi tarkistin koodin W3 validaattorilla.

Sivuston pohjalla on valmis W3 template, responsiivisuuden varmistamiseksi. Alkuperäisestä asettelusta ei tosin ole paljon enää jäljellä. 

Linkki sivustolle: https://public.bc.fi/s1901277/Vapp_Git/vapp_etusivu_3.1.html

# Sivuston toiminnot

## Kellotaulu ja laskuri
En osannut itse koodata analogista kellotaulua ja laskurikin tuntui tässä vaiheessa vähän turhan haastavalta. Hyödynsin niissä valmista koodia jonka löysin netistä. Laskurin (`function countdown()`) koodia (`function Decrement()`) muokkasin enemmän omiin tarpeisiin sopivaksi. 

## Päivämäärää 
`Function pvm()` hakee päivämäärän ja tulostaa päivän ja kuukauden. Funktiota kutsutaan, kun body latautuu. 

## Tehtäväruutu
Kun klikkaa tehtäväkuvaa (esim. munakas) aktivoituu `function countdown()`. Funktio on vähenevä laskuri. Lisäksi alkuun tulee teksti (`function Decrement()`): "Klikkaa seuraavan tehtävän kuvaa, kun olet valmis". Kun aikaa on 50s, numerot muuttuvat punaiseksi ja teksti vaihtuu "HOP HOP". 

- Jos aika loppuu eikä tehtävää ole tehty valmiiksi, aktivoituu `function myohassa()`: joka tulostaa tekstin: 'Aika loppui, tee seuraavan tehtävän aikana myös tämä tehtävä loppuun!' sekä tuo esiin nuolen, jota klikkaamalla pääsee seuraavaan tehtävään

- Kun klikkaa seuraavan tehtävän kuvaa (esim. hammaspesu) merkiksi, että tehtävä on suoritettu, aktivoituu `function kehuminen()` eli tulee teksti: "Superhienoa! Sait pisteen", eläinanimaatio alkaa pyörimään ruudulla ja esiin tulee nuoli, jota klikkaamalla pääsee seuraamaan tehtävään. Myös laskuri häviää. 

## Yhteystiedot
Tehtävään piti sisällyttää yhteystiedot ja logo. Yhteystiedoissa on hyödynnetty templaten pohjaa. 

## Ohjaavat tekstit
Kuvien yhteyteen on laitettu useampi ohjaava teksti jotka tulevat näkyviin, kun hiiren laittaa kuvan päälle. 














