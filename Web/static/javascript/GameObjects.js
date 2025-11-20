/**
* Objects used to build levels
*/

/**
* ROOMS
* Players can cd between rooms
*
* API: Room(roomname, introtext, img){
*/

//HOME
var Home = new Room("Home",
    "Sei nel benessere di casa tua.",
    "loc_farm.gif");
Home.addItem(new Item("WelcomeLetter", "Benvenut*! Se sei nuov* del gioco, ecco alcuni suggerimenti: \n\n" +
		"Guardati attorno con il comando \"ls\". \n" +
		"Spostati in un luogo \"cd LUOGO\" \n" +
		"Puoi tornare indietro con il comando \"cd ..\". \n" +
		"Interagisci con le cose del mondo con il comando \"less ELEMENTO\" \n\n" +
        "Se hai dimenticato dove sei, digita \"pwd\" \n\n" + 
		"Avanti, esplora! Speriamo ti piaccia quanto troverai. Come primo comando dai ls.\n"));

//FORESTA OCCIDENTALE
var WesternForest = new Room("ForestaOccidentale",
    "Avanzi addentrandoti nelle profondità della foresta. \
Alla fine, il sentiero conduce a una radura con un grande edificio imponente. Un cartello \
recita: Accademia di Incantesimi: Scuola d'Elite di Magia.",
    "loc_forest.gif");
WesternForest.addItem(new Item("Cartello",
    "Accademia di Incantesimi: Scuola d'Elite di Magia \
Solo per oggi: lezioni introduttive gratuite! I/le principianti sono benvenut*!",
    "loc_forest.gif"));
WesternForest.addItem(new Item("RetroCartello",
    "Se vuoi tornare direttamente alla 'Home', digita semplicemente “cd ~” o il buon vecchio “cd” \
e tornerai a Casa. Tornare indietro, però, potrebbe essere più difficile.",
    "loc_forest.gif"));

//ACCADEMIA DI MAGIA
var SpellCastingAcademy = new Room("AccademiaDiMagia", 
    "I corridoi sono pieni del trambusto \
degli studenti dell'Accademia che corrono da una lezione all'altra. L'interno dell'Accademia \
è impressionante quanto l'esterno, con il soffitto alto e archi gotici \
che la fanno sembrare ancora più grande.", 
    "loc_academy.gif");
var HurryingStudent = new Item("StudenteInRitardo", 
    "Parli con un* studente in ritardo. \
Lx studente ti urta e cade a terra. \
L* studente si alza rapidamente \
e ti chiede scusa, domandandoti se stai bene. Sei più solid* di quanto sembri e \
non hai riportato alcun danno. \"Mi dispiace tanto, ero così di fretta che non ti ho vist*... \
A proposito, è la prima volta che ti vedo. Sei nuov* qui, vero?\" L* studente ti fa l'occhiolino, \"Non preoccuparti, \
oggi ci sono tantissimi nuovi arrivati, \
perché non provi a dare un'occhiata a una delle lezioni introduttive gratuite? Ti mostrerei dove andare, \
ma devo correre a lezione. Entra nella sala delle lezioni e qualcuno \
ti aiuterà. Ci vediamo in giro.\" L* studente ti supera correndo. Noti che \
è piuttosto carin* e probabilmente ha la tua età. Purtroppo, \
scompare dietro un angolo prima che tu riesca chiedere il nome...", 
    "item_student.gif")
SpellCastingAcademy.addItem(HurryingStudent);

//SALA ESERCIZI
var PracticeRoom = new Room("SalaEsercizi", 
    "La stanza è piena di manichini \
su cui gli studenti possono esercitarsi con i loro nuovi incantesimi.",
    "loc_practiceroom.gif");
PracticeRoom.addItem(new Item("Istruzioni", 
    "Benvenuto nella Sala di Allenamento. Qui \
troverai dei manichini su cui provare i tuoi nuovi incantesimi. Avanti, provaci! \
Se non conosci ancora nessun incantesimo, torna indietro e dai un'occhiata alle Lezioni.", 
    "item_manuscript.gif"));
PracticeRoom.addItem(new Item("Manichino1", "E' un manichino", "item_dummy.gif"));
PracticeRoom.addItem(new Item("Manichino2", "E' un manichino", "item_dummy.gif"));
PracticeRoom.addItem(new Item("Manichino3", "E' un manichino", "item_dummy.gif"));
PracticeRoom.addItem(new Item("Manichino4", "E' un manichino", "item_dummy.gif"));
PracticeRoom.addItem(new Item("Manichino5", "E' un manichino", "item_dummy.gif"));
PracticeRoom.addCommand("mv");

//SCATOLA
var Box = new Room("Scatola", "Questa scatola è troppo piccola, non ci stai...", "item_box.gif");
Box.removeCommand("cd");
Box.addCmdText("cd", "Sei troppo piccol* per la scatola.");

//PRATO DEL NORD
var NorthernMeadow = new Room("PratoDelNord", 
    "Questo è un bellissimo prato verde. Un pony grassoccio ma maestoso saltella allegramente.",
    "loc_meadow.gif");
NorthernMeadow.addItem(new Item("Pony", 
    "Ti avvicini al pony e provi a cavalcarlo. \
Funziona e cavalchi il pony in cerchio per un po'. Poi si stufa \
del tuo peso peso e ti disarciona. Poi guarda verso est, come per \
suggerirti di andare in quella direzione.", 
    "item_fatpony.gif"));

//MONTAGNE ORIENTALI
var EasternMountains = new Room("MontagneOrientali", 
    "Percorri un sentiero di montagna, \
che alla fine ti conduce all'ingresso di una caverna. Seduto all'ingresso dalla caverna \
c'è un vecchio.", 
    "loc_mountains.gif");
EasternMountains.addItem(new Item("Vecchio", 
    "EasternMountains.addItem(new Item("Vecchio", 
    "Parli con il vecchio. Ti saluta \
calorosamente come se foste vecchi amici. Ti senti a tuo agio con lui. \n\
\"Salve avventurier*! Buongiorno! Sembri un'esplorator* giovane \
ed energic*. Se sei abbastanza coraggios*, il tuo destino ti aspetta all'interno di questa caverna. Quel \
destino si manifesterà sotto forma di un portale. Entra in questo portale e inizia il prossimo \
capitolo della tua vita.\"\n\
Il vecchio vede lo shock sul tuo viso e sorride \
rassicurante, \"Sono solo un povero vecchio e non posso accompagnarti attraverso \
questa caverna, ma ciò che posso offrire sono alcuni semplici incantesimi che ti aiuteranno \
lungo il cammino. Basta leggere i miei vecchi manoscritti e provare quegli incantesimi.\"", 
	"item_mysteryman.gif"));
EasternMountains.addItem(new Item("VecchiManoscritti", 
    "Se dimentichi un incantesimo, usa semplicemente \
\“help”\ e apparirà un elenco degli incantesimi disponibili. Se hai bisogno di dettagli su come \
usare un incantesimo specifico, usa 'man' seguito dal comando dell'incantesimo. Ad esempio, \
se ti interessano i dettagli su come usare l'incantesimo “mv”, dovresti usare: \
man mv",
    "item_manuscript.gif"));

//LEZIONI
var Lessons = new Room("Lezioni", 
    "Entri nell'aula delle lezioni pront* e impaziente. \
Qui è molto più tranquillo, molte lezioni sono già iniziate. \
Vieni portat* velocemente alla lezione introduttiva, che è già iniziata. \
Entri nella classe dedicata all'\"Incantesimo di Movimento.\"", 
    "loc_classroom.gif");
Lessons.addItem(new Item("Professore", 
    "Il professore è difficile da capire, ma riesci a cogliere quanto basta per imparare 3 cose: \
\n\
1. Puoi usare 'mv' per spostare oggetti nel mondo \n\
2. Devi indicare l'oggetto e la nuova posizione (ad es.: mv OGGETTO NUOVAPOSIZIONE) \n\
3. Questo incantesimo funziona solo su determinati oggetti, ad esempio gli oggetti Manichino nella SalaEsercizi \n\
\n\
Non hai prestato abbastanza attenzione per imparare quali tipi di oggetti non sono spostabili. \
Oh beh, sperimentare è sempre stato più nel tuo stile comunque. Ma fai attenzione!", 
    "item_professor.gif"));

//CAVERNA
var Cave = new Room("Caverna", "E' la tipica caverna: buia e umida.", "loc_cave.gif");
		
//CorridoioBuio
var DarkCorridor = new Room("CorridoioBuio", 
    "Attraversi il corridoio buio e alla fine trovi una piccola stanza umida.", 
    "loc_corridor.gif");

//SCALA
var Staircase = new Room("Scala", 
    "La scala rocciosa conduce a un vicolo cieco e a un cartello che lo indica.", 
    "loc_stair.gif");
Staircase.addItem(new Item("Cartello", "CULO DI SACCO", "item_sign.gif"));

//STANZA UMIDA
var DankRoom = new Room("StanzaUmida", 
    "È una stanza umida e ammuffita. Sul lato destro della stanza c'è un masso rotondo.",
    "loc_darkroom.gif");
var Boulder = new Item("Masso",
    "Senti un'arietta leggera da dietro il masso. \
Magari lo sposti?",
    "item_boulder.gif")
DankRoom.addItem(Boulder);
DankRoom.addCommand("mv");

//PICCOLO BUCO
var SmallHole = new Room("PiccoloBuco", 
    "Non c'è nulla di eccitante in quel piccolo buco, ed è piuttosto sporco. \
Non c'è alcun motivo valido per entrarci.",
    "none.gif");
SmallHole.addCmdText("cd", 
    "Non c'è nulla di eccitante nel piccolo buco, ed è piuttosto sporco. Suggerisco di uscirne.");
//add event handler to the "addItem" method of SmallHole to cause the rest of the level to be connected
DankRoom.ev.addListener("mvMasso", function(){
	// link_rooms(StanzaUmida, Tunnel);
    state.applyState("mvMasso");
});

//TUNNEL
var Tunnel = new Room("Tunnel", 
    "Qui dentro è piuttosto umido. \
    Con la coda dell'occhio noti un piccolo movimento peloso nell'angolo. \
Probabilmente è un ratto. Un ratto molto grande. Forse una mangusta. \
Alla fine del tunnel trovi una camera di pietra.",
    "loc_tunnel.gif");
Tunnel.addItem(new Item("Ratto", 
    "Dopo un'ulteriore ispezione, determini che la presenza pelosa \
è in realtà un ratto... delle dimensioni di un piccolo cane. Ti morde. \
Sei molto scontent*.",
    "item_rat.gif"));

//GROTTA
var StoneChamber = new Room("Grotta", 
    "L'intero ambiente è illuminato da una tenue luce verde. \
La fonte di questa luce è un portale che si trova al centro della stanza. \
E' ovviamente il portale di cui parlava il vecchio.", 
    "loc_portalroom.gif");

//PORTALE (to bring you to the next level
var Portal = new Room("Portale", 
    "You have been transported through time...", 
    "item_portal.gif");
//---------------END LEVEL 1-----------------


//---------------LEVEL 2---------------------
//PIAZZA DEL PAESE
var TownSquare = new Room("PiazzaDelPaese", 
    "Ti trovi in una piazza spaziosa e soleggiata . \
Al centro di un crocevia c'è un piedistallo, ma senza statue. \
L'architettura è affascinante, ma qui per qualche motivo sembrano tutt* nervos*.",
    "loc_square.gif");
TownSquare.addItem(new Item("Cittadino1", 
    "\"Chiedo scusa,\" esordisci. L'uomo si volta, sorpreso. \
\"Oh, salve! Benvenuto a Terminus. Mi perdoni, ma ultimamente siamo tutti un po' \
nervosi, con il Mago Oscuro che sta diffondendo la corruzione lungo tutta la \
costa. Stia attent*!\"",
    "item_citizen1.gif"));
TownSquare.addItem(new Item("Cittadino2", 
    "L'uomo ti guarda da sopra il giornale quando si accorge che lo stai fissando. \
\"Ha letto?\" esclama, agitando l'ultima edizione de \"L'Ultimo \
Mondo\" sotto al tuo naso. \"Qui dice che la corruzione del mago si è diffusa fino a \
Oston a sud, e New Console è completamente irrecuperabile! Questi sono \
tempi pericolosi\", mormora, scuotendo la testa e tornando alla lettura.",
    "item_citizen2.gif"));
TownSquare.addItem(new Item("DonnaSconvolta", 
    "La donna singhiozza incontrollabilmente, il viso tra le mani. \
\“Il mio bambino\”, grida, \"Hanno rapito il mio bambino! So solo che tutto questo \
dev'essere colpa di quel mago.\"",
    "item_lady.gif"));

//MERCATO
var Marketplace = new Room("Mercato", 
    "Linee di mercanti e delle loro merci affollano le strade.",
    "loc_market.gif");
var Vendor = new Item("", 
    "\" Ma ciao.\” Il venditore ti sorride in modo sgradevole, \
mostrando la bocca piena di denti d'oro. \“Allora? Cosa stai cercando?\"",
    "item_merchant.gif");
Vendor.addCmdText("rm", 
    "\"Ah! Quell'incantesimo non funziona su tutto, sai. Forse ho dimenticato \
di dirlo prima di vendertelo...\"");
Marketplace.addItem(Mercante);
//var Backpack = new Item("Sacca", "Sul tavolo c'è una sacca dall'aspetto malconcio senza cartellino del prezzo.  Il tessuto sembra \n" +
//        "sfilacciato, ma resistente. Dai un'occhiata veloce al venditore, ma la sua attenzione è altrove. \n" +
//		"Vuoi prendere la sacca? s\\n \n", "item_backpack.gif");
//Marketplace.addItem(Sacca);
var RmSpell = new Item("rmIncantesimo", 
    "\"Ah, sì, l'incantesimo rm,\" riflette il Mercante. \”Basta dire \"rm\" seguito dal nome di un oggetto o di una persona, \
e questi scompariranno da questo piano... per sempre. Mi chiedo se avrai il coraggio di usarlo.\"",
    "item_manuscript.gif");

//	"Sul tavolo c'è una pergamena incantata con la scritta \"Rimuovi.\" \n" +
//		"Vuoi comrarla per 15 pezzi d'oro? s/n \n", "item_manuscript.gif")
//"Il mercante ti strappa l'oro dalle mani e poi ti consegna la pergamena,\n" +
//				"con uno sguardo lascivo. \"Ah, sì, l'incantesimo rm,\" riflette. \"Sbasta dire \"rm\" seguito dal nome di una persona o di un oggetto, \n" +
//				"e questi scompariranno da questo piano... per sempre. Mi chiedo se avrai il coraggio di usarlo\"\n" +
//				"ora puoi usare l'incantesimo \"rm\".\n", "Torna più tardi.\n");
Marketplace.addItem(RmSpell);
var MkdirSpell = new Item("Incantesimomkdir",
    "\"Trasforma i sogni in realtà. basta dire \"mkdir\" seguito da qualunque nome ti piaccia, e puoi creare un nuovo luogo che \
prima non esisteva. E' un po' complicato, comunque...\" mormora il Mercante.",
    "item_manuscript.gif");
//		"Vuoi comprarlo per 30 pezzi d'oro? s\\n \n"
//, "Il mercante gracchia. \"Ambizios*, eh? Molto bene. \n" +
//				"Basta dire \"mkdir\" seguito da qualunque nome ti piaccia, e puoi creare un nuovo luogo che \n" +
//				"prima non esisteva. Ha! Non molto utile secondo me...\"\n" +
//				"ora puoi usare l'incantesimo \"mkdir\".\n", "Lasci l'Incantesimomkdir sul tavolo\n");
Marketplace.addItem(MkdirSpell);

//BIBLIOTECA
var Library = new Room("Biblioteca", 
    "La biblioteca è buia e odora di muffa. \
Comunque, dentro fa caldo e il morbido tappeto verde rende l'ambiente piuttosto accogliente.",
    "loc_library.gif");
Library.addItem(new Item("LibroFighissimoDiIncantesimi",
    "Le leggende narrano di una potente parola che permette a chi la pronuncia di compiere \
qualsiasi azione su qualsiasi oggetto. \“Sudo\”, come la chiamavano gli antichi, conferisce il completo dominio sugli elementi. \
Sfortunatamente, o forse fortunatamente, la password mistica si è perduta \
nelle sabbie del tempo.",
    "item_radspellbook.gif"));
Library.addItem(new Item("TascabileRomantico", 
    "Apri il libro tascabile su una pagina a caso. \
\"Oh, Orazio, non preoccuparti amore mio! Ti salverò!\" esclamò Antonia mentre \
brandiva la sua spada e pugnalava abilmente il drago. Orazio, stupito di non essere morto violentemente,\
crollò a terra singhiozzando e  ... — Chiudi il \
libro disinteressat*, lo rimetti a posto sullo scaffale.",
    "item_romancenovel.gif"));
Library.addItem(new Item("StoriaDiTerminus", 
    "Sembra un libro interessante, ma è troppo lungo e la stampa troppo piccola. \
Ecco un estratto:\n \
MagoOscuro', '...vecchi racconti narrano di un MagoOscuro che frammenterà la terra...\n \
...solo il creatore di mondi potrà impedire che il virus del MagoOscuro...\n\
...che il potere di \“sudo\” potrebbe essere l'unica debolezza del MagoOscuro...\n",
    "item_historybook.gif"));
Library.addItem(new Item("NostalgiaDiCasa", 
    "Se mai ti sentissi sol* e avessi nostalgia di Casa, basta digitare 'cd ~' e tornerai lì. \
Ma ricorda che tornare indietro potrebbe essere più difficile.",
    "item_historybook.gif"));
		// "DarkWizard", "...old tales tell of a dark wizard who will fragment the land...\n" +
		//"...only the world-maker can stop the dark wizard's virus from...\n" +
		//"...that the power of \"sudo\" may be the dark wizard's only weakness...\n"));
//add lever back when items when events can be added to items
Library.addItem(new Item("LevaDiscreta", 
   "Notate una leva discreta dietro gli scaffali.  Incuriosit*, la tiri, \
e un pannello scorre aprendosi per rivelare una stanza segreta sul retro.",
   "item_lever.gif"));
Library.addCommand("grep");
Library.ev.addListener("pullLever", function(){
    state.applyState("pullLever");
});

//RETRO BOTTEGA
var BackRoom = new Room("RetroBottega", 
    "C'è una misteriosa stanza sul retro. Trovi un bibliotecario \
da solo con un piccolo elfo. Speri di non interrompere nulla.",
    "loc_backroom.gif");
BackRoom.addItem(new Item("Grep", 
    "L'elfo, di una bruttezza eccezionale, si gira verso di te con un'espressione acida. \
\“Greeeeeep\”, dice cupamente.",
    "grep.gif"));
BackRoom.addItem(new Item("LibroDegliEsercizi", 
    "Trentatrè trentini\nOf entrarono a Trento.\nA tutti e trentatrè\n\
trotterellando."));
var Librarian = new Item("Bibliotecario", 
    "\"Hm? Oh, ciao. Scusa per il disordine, ma sono molto preso \
dalle ricerche sul mago oscuro. Mi faresti un favore? Vai a cercare tutti \
i riferimenti a MagoOscuro nella Storia di Terminus. Il mio assistente Grep \
può aiutarti.\" \
Grep ti fissa minacciosamente. \"Greeepp.\" \"Per filtrare il contenuto del libro, basta digitare \
\“grep FRASE ELEMENTO\”, dove FRASE è la frase che si desidera cercare, \
ed ELEMENTO è il nome del libro che si desidera cercare. Provalo con il LibroDegliEsercizi qui \
- - vedi se riesci a trovare la riga con la parola 'Trento'.\"",
    "item_librarian.gif");
BackRoom.addItem(Librarian);
BackRoom.addCommand("grep");

//SENTIERO ROCCIOSO
var RockyPath = new Room("SentieroRoccioso",
    "Il sentiero ricoperto di erbacce si inoltra per i campi.",
    "loc_rockypath.gif");
var LargeBoulder = new Item("GrandeMasso", "C'è un enorme masso che blocca la strada.  È troppo grande per spostarlo.", "item_boulder.gif");
LargeBoulder.addCmdText("rm", \"Pop!\" Il masso scompare.".");
RockyPath.addItem(LargeBoulder);
RockyPath.addCommand("rm");
LargeBoulder.addValidCmd("rm");
RockyPath.ev.addListener("rmGrandeMasso", function(){
    state.applyState("rmGrandeMasso");
});

//BOTTEGA
var ArtisanShop = new Room("Bottega", 
    "Le pareti del negozio sono ricoperte di orologi, \
tutti leggermente fuori sincrono. Al banco da lavoro una donna con enormi occhiali protettivi \
maneggia una fiamma ossidrica con spaventoso entusiasmo.",
    "loc_artisanshop.gif");
var StrangeTrinket = new Item("StranoGingillo", "Sembra una specie di cristallo. E' molto bello.", "item_trinket.gif");
StrangeTrinket.addCmdText("rm", 
    "Non te l'ha insegnato la mamma che è scortese cancellare la roba \
d'altri dal loro piano di esistenza?");
StrangeTrinket.addCmdText("mv", 
    "Non puoi prenderlo, non è roba tua!");
ArtisanShop.addItem(StrangeTrinket);
var ClockworkDragon = new Item("DragoMeccanico",
    "Un drago grande quanto un piccolo cane sta saltellando per la stanza. \
Se non fosse per la chiave a molla che spunta dalla sua schiena lo scambieresti per vero.",
    "item_clockdragon.gif");
ClockworkDragon.addCmdText("rm",  
    "Non te l'ha insegnato la mamma che è scortese cancellare la roba \
d'altri dal loro piano di esistenza?");
ClockworkDragon.addCmdText("mv", 
    "Non puoi prenderlo, non è roba tua!");
ArtisanShop.addItem(ClockworkDragon);
var Artisan = new Item("Artigiana", 
    "L'Artigiana solleva gli occhiali e ti guarda sorpresa. \
 \"Are you the new assistant? You're late! ...  \
\n\
You say you aren't my assistant? \
Well, that doesn't mean you can't make yourself useful. I need some gears, quickly! \
\n\
... \
\n\
You don't even know how to make things? Hmph. Some assistant you are. Just \
say \"touch ITEM\" alright? Where ITEM is the name of the thing you want to create. \
Now make me a Gear! Then come back.\"",
    "item_artisan.gif");
ArtisanShop.addItem(Artisan);
ArtisanShop.addCommand("touch");
ArtisanShop.ev.addListener("touchGear", function(){
    state.applyState("touchGear");
});
ArtisanShop.ev.addListener("FiveGearsCopied", function(){
    state.applyState("FiveGearsCopied");
});

//FARM
var Farm = new Room("Farm",
    "There was once a farm of some sort here, but now the fields are scorched and brown.",
    "loc_farm.gif");
var EarOfCorn = new Item("EarOfCorn",
    "The corn is sad and withered-looking.",
    "item_corn.gif");
EarOfCorn.addCmdText("rm",
    "Why would you destroy a starving man's only food?");
Farm.addItem(EarOfCorn);
var Farmer = new Item("Farmer", 
    "\"Ruined! I'm ruined! Look at these crops... almost nothing \
left! The wizard's minions were here last week... they destroyed everything. How \
will I feed my 3 children with just one ear of corn? I could really use AnotherEarOfCorn! \"",
    "item_farmer.gif");
Farm.addItem(Farmer);
Farm.addCommand("cp");
Farm.ev.addListener("CornCopied", function(){
    state.applyState("CornCopied");
});

//CLEARING
var Clearing = new Room("Clearing", 
    "There's a small grassy clearing here, with a man sitting on a \
stone, weeping. Behind him is a pile of rubble.",
    "loc_clearing.gif");
var CryingMan = new Item("CryingMan", 
    "\"You! You're a magic-user! I can tell, you've got that look. \
Come to finish the job, have you? Well, go ahead, do your worst there's nothing else you \
can take from me. Not since the rest of you were here a few days ago.\" \
\n\n\
\"What happened? You DARE to ask-- you know perfectly well what happened. \
Your friends, the wizard's minions, destroyed my house and kidnapped my poor \
daughter, that's what! My wife even went into town to look for help, and I haven't \
heard from her since!\" \
\n\n\
\"Hm? Well, I guess it's true that you don't look like one of the wizard's minions. Still, \
I don't trust you magicfolk. If you really are who you say you are, then prove your \
good intentions by making me a new House!\"",
    "item_man.gif");
Clearing.addItem(CryingMan);
Clearing.removeCommand("cd");
Clearing.addCmdText("cd", "You can’t cross the bridge until you’ve replaced the missing Plank.");
Clearing.addCommand("mkdir");
Clearing.ev.addListener("HouseMade", function(){
    state.applyState("HouseMade");    
});

//BROKEN BRIDGE
var BrokenBridge = new Room("BrokenBridge",
    "A creaky wooden bridges stretches across a chasm. But it's missing a \
Plank, and the gap is too far to jump.",
    "loc_bridge.gif");
//beforeClearing = new Room("Clearing", "You can't cross the bridge until you've replaced the missing Plank.", "");
BrokenBridge.addCommand("touch");
BrokenBridge.ev.addListener("touchPlank", function(){
    // link_rooms(BrokenBridge, Clearing);
    state.applyState("touchPlank");
});
		
//OMINOUS-LOOKING PATH
var OminousLookingPath = new Room("OminousLookingPath", 
    "The path leads toward a dark cave. It's an ordinary cobblestone path, but for \
some reason it fills you with a sense of dread.",
    "loc_path.gif");
var ThornyBrambles = new Item("ThornyBrambles", 
    "This thicket of brambles is covered with wicked-looking thorns. You \
can't go around it, and you definitely aren't about to go through it. And yet something \
tells you that you really want to.",
    "item_brambles.gif");
ThornyBrambles.addCmdText("mv",
    "You can't touch them because they are covered with thorns. Ouch!");
ThornyBrambles.addCmdText("rm", 
    "You speak the words of the Remove spell and the brambles glimmer a \
deep blue. After fizzling for a minute, they disappear with a puff of smoke.");
ThornyBrambles.addValidCmd("rm");
OminousLookingPath.addItem(ThornyBrambles);
OminousLookingPath.addCommand("rm");
OminousLookingPath.ev.addListener("rmBrambles", function(){
    state.applyState("rmBrambles");
});

//SLIDE
var Slide = new Room("Slide", "The slides is long. At the end, you see the KernelFiles.");
Slide.removeCommand("cd");
Slide.addCmdText("cd", "You have to get past the UglyTroll first.");

//KERNEL FILES
var KernelFiles = new Room("KernelFiles", "The KernelFiles hold the sudo-secret (no, not \
pseudo). You'd better read the Instructions.")
var Certificate = new Item("Certificate", "You must read the Certificate with the sudo password.");
KernelFiles.addItem(Certificate);
var Instructions = new Item("Instructions", "You've learned how to make use of your friend grep I see. \
If you haven't it might be wise for you to go back to the Library again to do some reading. \
Because here, you'll need to use him to help you. Here is your task: \n\
There are a lot of items in the MoreKernelFiles room and one of them contains the sudo password. This \
password is very powerful password that lets you do absolutely anything in the world. \
It lets you cast a spell on any item that is protected in any way. You know the password \
is contained in one of these .txt items. You know that it appears \
on a line that says the word: 'password='. You should find it with grep's help. \
Then you'll need to use the sudo spell to find Paradise. To do this, just \
Type 'sudo' before the command you want to run, like so: \
'sudo cp ITEM_A ITEM_B'. You will then be prompted for the sudo password. \
Type the password, and the spell that comes after sudo will be cast. If you open \
the Certificate in Paradise with sudo, you will have truly found Paradise.");
var L_txt = new Item("L_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var M_txt = new Item("M_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
// var N_txt = new Item("N_txt", "INSERT SOME LONG TEXT");
// var O_txt = new Item("O_txt", "INSERT SOME LONG TEXT");
// var P_txt = new Item("P_txt", "INSERT SOME LONG TEXT");
var Q_txt = new Item("Q_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var R_txt = new Item("R_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var S_txt = new Item("S_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var T_txt = new Item("T_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var U_txt = new Item("U_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find password=IHTFP another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var V_txt = new Item("V_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var W_txt = new Item("W_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
// var X_txt = new Item("X_txt", "INSERT SOME LONG TEXT");
// var Y_txt = new Item("Y_txt", "INSERT SOME LONG TEXT");
// var Z_txt = new Item("Z_txt", "INSERT SOME LONG TEXT");
// var AA_txt = new Item("AA_txt", "INSERT SOME LONG TEXT");
// var BB_txt = new Item("BB_txt", "INSERT SOME LONG TEXT");
// var CC_txt = new Item("CC_txt", "INSERT SOME LONG TEXT");
// var DD_txt = new Item("DD_txt", "INSERT SOME LONG TEXT");
// var EE_txt = new Item("EE_txt", "INSERT SOME LONG TEXT");
// var FF_txt = new Item("FF_txt", "INSERT SOME LONG TEXT");
var MoreKernelFiles = new Room("MoreKernelFiles", "There are so many files here!");
MoreKernelFiles.addItem(L_txt);
MoreKernelFiles.addItem(M_txt);
// MoreKernelFiles.addItem(N_txt);
// MoreKernelFiles.addItem(O_txt);
// MoreKernelFiles.addItem(P_txt);
MoreKernelFiles.addItem(Q_txt);
MoreKernelFiles.addItem(R_txt);
MoreKernelFiles.addItem(S_txt);
MoreKernelFiles.addItem(T_txt);
MoreKernelFiles.addItem(U_txt);
MoreKernelFiles.addItem(V_txt);
MoreKernelFiles.addItem(W_txt);
// MoreKernelFiles.addItem(X_txt);
// MoreKernelFiles.addItem(Y_txt);
// MoreKernelFiles.addItem(Z_txt);
// MoreKernelFiles.addItem(AA_txt);
// MoreKernelFiles.addItem(BB_txt);
// MoreKernelFiles.addItem(CC_txt);
// MoreKernelFiles.addItem(DD_txt);
// MoreKernelFiles.addItem(EE_txt);
// MoreKernelFiles.addItem(FF_txt);
KernelFiles.addItem(Instructions);
KernelFiles.addCommand("sudo");
KernelFiles.addCmdText("sudo", "Password:");
MoreKernelFiles.addCommand("grep");
KernelFiles.ev.addListener("tryEnterSudo", function(){
    KernelFiles.addCommand("IHTFP");
    KernelFiles.addCmdText("IHTFP", "You have correctly entered the password. You are now in Paradise. \
Take a look around, and congratulations.");
});
KernelFiles.ev.addListener("sudoComplete", function(){
    state.applyState("sudoComplete");
});

//PARADISE (end game screen)
var Paradise = new Room("Paradise", "You have truly found Paradise with the sudo password. \
Congratulations.", "loc_theend.gif");
Paradise.addCmdText("ls", "There's really nothing interesting in Paradise.");

//CAVE
//Room beforeCave = new Room("CaveOfDisgruntledTrolls", "A patch of thorny brambles is growing at the mouth of the cave, blocking your way.", "loc_cave");
var CaveOfDisgruntledTrolls = new Room("CaveOfDisgruntledTrolls", 
    "The cave is dark and smells like... feet? Oh, right, it's probably the trolls. \
There's a scared-looking kid in a cage by the far wall.",
    "loc_cave.gif");
var UglyTroll = new Item("UglyTroll", 
    "He looks mad, and really ugly.",
    "item_troll1.gif");
UglyTroll.addCmdText("rm",
    "The troll looks briefy surprised, then vanishes with an unpleasant squelching sound.");
UglyTroll.addValidCmd("rm");
UglyTroll.addValidCmd("mv");
UglyTroll.addCmdText("mv", "The troll looks briefly surprised, then moves away. He's mostly \
    harmless anyway.")
UglyTroll.addValidCmd("cp");
UglyTroll.addCmdText("cp", "They're multiplying!");
CaveOfDisgruntledTrolls.addItem(UglyTroll);
//beforeCave.addItem(uglyTroll);
var UglierTroll = new Item("UglierTroll", "He looks mad, and really, really ugly. \
But he wants to tell you something. Between his \
garbled grunts, you manage to understand the following: \
You can cast spells on items that you don't currently see. For example, if you want \
to copy an item from this room to the OminousLookingPath from which you came, you can \
cp [ITEM_TO_COPY] ../[NEW_ITEM_NAME]. You can do this for most spells and most rooms. \
Use this knowledge wisely. Remember.... you can't undo an 'rm' spell.",
    "item_troll2.gif");
UglierTroll.addValidCmd("rm");
UglierTroll.addCmdText("rm",
    "The troll looks briefy surprised, then vanishes with an unpleasant squelching sound.");
CaveOfDisgruntledTrolls.addItem(UglierTroll);
//beforeCave.addItem(uglierTroll);
/*hideousTroll = new MoveableItem("AbsolutelyHideousTroll", "You probably don't want to look at this guy. Oops, too late. \n", "item_supertroll");
hideousTroll.setRMText("The troll belches spectacularly, and you could swear he actually smirks. \n" +
		"You won't get rid of him that easily, not without admin privileges.\n");
hideousTroll.setMVText("If you move him out of the cave, he'll terrorize \n" +
		"the countryside. Also he will probably eat you. \n");*/
var HideousTroll = new Item("AbsolutelyHideousTroll", 
    "You probably don't want to look at this guy. Oops, too late.",
    "item_supertroll.gif");
HideousTroll.addCmdText("rm", 
    "The troll belches spectacularly, and you could swear he actually smirks. \
You won't get rid of him that easily, not without the 'sudo password'. It's not \
'pseudo', it's 'sudo'. You'll find that in KernelFiles. But first you have to \
get past the UglyTroll to the Slide.");
HideousTroll.addCmdText("mv", 
    "If you move him out of the cave, he'll terrorize \
the countryside. Also he will probably eat you.");
CaveOfDisgruntledTrolls.addItem(HideousTroll);
//beforeCave.addItem(hideousTroll);
CaveOfDisgruntledTrolls.addCommand("rm");
CaveOfDisgruntledTrolls.addCommand("mv");
CaveOfDisgruntledTrolls.addCommand("cp");
CaveOfDisgruntledTrolls.ev.addListener("openSlide", function(){
    state.applyState("openSlide");
});

//CAGE
var Cage = new Room("Cage", 
    "There's a scared-looking kid in there.",
    "item_cage.gif");
var KidnappedChild = new Item("KidnappedChild",
    "You know it's kind of mean, but you can't help but think that that is one \
funny-looking kid.",
    "item_cagedboy.gif");
Cage.removeCommand("cd");
Cage.addCmdText("cd", "You can’t squeeze through the bars. Anyway, are you crazy? \
    Why would you want to go into a cage?");
KidnappedChild.addCmdText("mv", 
    "The kid looks around, dazed, surprised to find himself out of the cage. \
You smile at him and speak in a gentle voice. 'You should probably be getting home, \
little boy. Someone is there waiting for you.' \
'I'm a girl,' says the little girl smartly. Then she dashes past you, out of the cave, and \
runs up the ominous path towards home.");
Cage.addItem(KidnappedChild);

//Athena cluster
var AthenaCluster = new Room("AthenaCluster", "None shall pass without the combination. You \
have one chance to enter the combination. Enter password:",
"loc_cluster.gif");
var Workstation = new Item("Workstation", "The Workstation has resources you can use to \
access files in a joint Athena locker. It adds new rooms (when they're in your Home we \
call them lockers) to your Home, and you can \
add them to your collection of lockers if you have permission. If you know what you want to add \
to your Home (the name of the locker you want, of course), just 'add LOCKERNAME'. It \
gives you extra spells (if you learn them), and gives you more Rooms to explore.",
"item_workstation.gif")
AthenaCluster.addItem(Workstation);
AthenaCluster.removeCommand("ls");
AthenaCluster.addCmdText("ls", "You must enter the Athena cluster combo first.");
AthenaCluster.removeCommand("cd");
AthenaCluster.addCmdText("cd", "None shall pass without the combination. You\
have one chance to enter the combination. Enter password:")
AthenaCluster.ev.addListener("AthenaClusterExited", function(){
    AthenaCluster.removeCommand("cd");
});
AthenaCluster.addCommand("tellme");
AthenaCluster.addCommand("add");
var add_locker_func = function(){
    state.applyState("addMagicLocker");
};
AthenaCluster.ev.addListener("addMagicLocker", add_locker_func);

//MIT
var MIT = new Room("MIT", "You have arrived by magic carpet to MIT!", "loc_MIT.gif");
var AdmissionLetter = new Item("AdmissionLetter", "Congratulations on entering MIT! \
Here you will learn special spells that you can only use at MIT. Enjoy!", "item_manuscript.gif")
MIT.addItem(AdmissionLetter);
MIT.ev.addListener("tryEnterAthenaCluster", function(){
    MIT.addCommand("terminus");
    MIT.addCmdText("terminus", "You have correctly entered the cluster combo. Entering the AthenaCluster.");
    AthenaCluster.removeCommand("ls");
    AthenaCluster.addCmdText("ls", "You must enter the Athena cluster combo first.");
    // AthenaCluster.removeCommand("cd");
    // AthenaCluster.addCmdText("cd", "None shall pass without the combination. You\
    // have one chance to enter the combination. Enter password:");
});
MIT.ev.addListener("AthenaComboEntered", function(){
    state.applyState("AthenaComboEntered");
});
MIT.addCommand("tellme");
MIT.addCommand("add");
MIT.ev.addListener("addMagicLocker", add_locker_func);

//StataCenter
var StataCenter = new Room("StataCenter",
"The center of computer science and artificial intelligence research at MIT. Lots of \
magic happens here, including TAs, grad students, etc.",
"loc_stata.gif");
var WaryEyeOfGradStudent = new Item("WaryEyeOfGradStudent", "If you so desire, you can add \
a new MagicLocker outside your Home. In this MagicLocker you can find some tools that \
will be useful in your time at MIT (and beyond). There you can find portals to \
other places, you can write notes, and you can store various items you collect in \
your travels in the MagicLocker. But first you need to go to the AthenaCluster and \
learn how.",
"item_grad.gif");
StataCenter.addItem(WaryEyeOfGradStudent);
var HelpfulTA = new Item("HelpfulTA", "Ah, welcome to the wonderful land of Stata. \
There's one room here that you'll need the combination for. All you have to do is ask:\n \
'tellme combo'.",
"item_TA.gif");
StataCenter.addItem(HelpfulTA);
StataCenter.addCommand("tellme");
StataCenter.addCommand("add");
StataCenter.ev.addListener("addMagicLocker", add_locker_func);

//Magic locker
var MagicLocker = new Room("MagicLocker", "This contains items and spells that can be used \
anywhere in the world after you add the locker. More is coming.", "item_locker.gif");
var MoreComing = new Item("MoreComing", "The MagicLocker contains Items that can be \
used (and spells that can be used) anywhere else in the game once you add \
the locker. MIT is making updates to the locker at all times, so check back \
frequently.", "item_comingsoon.gif");
MagicLocker.addItem(MoreComing);

/**
* LINKS BETWEEN ROOMS
* Fulfill parent/child relationships between rooms
*
* API: link(parentRoom, childRoom) 
*/
function link_rooms(parentRoom, childRoom){if (!(childRoom in parentRoom.children)){parentRoom.addChild(childRoom);}if (!(parentRoom in childRoom.parents)){childRoom.addParent(parentRoom);}};


// LEVEL 1 LINKS
link_rooms(Home, WesternForest);
link_rooms(WesternForest, SpellCastingAcademy);
link_rooms(SpellCastingAcademy, PracticeRoom);
link_rooms(PracticeRoom, Box);
link_rooms(Home, NorthernMeadow);
link_rooms(NorthernMeadow, EasternMountains);
link_rooms(SpellCastingAcademy, Lessons);
link_rooms(EasternMountains, Cave);
link_rooms(Cave, DarkCorridor);
link_rooms(Cave, Staircase);
link_rooms(DarkCorridor, DankRoom);
link_rooms(DankRoom, SmallHole);
link_rooms(Tunnel, StoneChamber);
link_rooms(StoneChamber, Portal);

//level 1 -> level 2
link_rooms(Portal, TownSquare);

//LEVEL 2 LINKS
link_rooms(TownSquare, Marketplace);
link_rooms(TownSquare, Library);
link_rooms(TownSquare, RockyPath);
link_rooms(TownSquare, ArtisanShop);
link_rooms(TownSquare, BrokenBridge);
//link(library, backRoom); 
// link_rooms(RockyPath, Farm);
link_rooms(BrokenBridge, Clearing);
link_rooms(Clearing, OminousLookingPath);
// link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
link_rooms(CaveOfDisgruntledTrolls, Cage);
link_rooms(Slide, KernelFiles);
link_rooms(CaveOfDisgruntledTrolls, Slide);
link_rooms(KernelFiles, MoreKernelFiles);

//MIT level links
link_rooms(Home, MIT);
link_rooms(MIT, StataCenter);
link_rooms(MIT, AthenaCluster);
