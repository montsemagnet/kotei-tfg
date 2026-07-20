export type Terme = {
  slug: string;
  terme: string;
  categoria: string;
  definicio: string;
  sinonims?: string[];
};

export const termes: Terme[] = [
  {
    "slug": "aflorament",
    "terme": "Aflorament",
    "categoria": "Camp",
    "definicio": "Zona on una roca o unitat geològica queda exposada a la superfície i es pot observar directament, sense estar coberta per sòl, vegetació densa o edificacions. En camp, identificar els afloraments permet descriure la litologia, l'estructura i, sovint, els fòssils que documenten la història geològica d'un indret.",
    "sinonims": [
      "al·lorament"
    ]
  },
  {
    "slug": "alteracio-superficial",
    "terme": "Alteració superficial",
    "categoria": "Geomorfologia",
    "definicio": "Canvis físics i químics que pateix la roca a la superfície per l'acció de l'aigua, el vent, les variacions tèrmiques i els organismes vius. Amb el temps, aquesta alteració contribueix a formar el regòlit i a modificar l'aspecte i la resistència de les afloraments.",
    "sinonims": [
      "meteorització superficial"
    ]
  },
  {
    "slug": "altipla-estructural",
    "terme": "Altiplà estructural",
    "categoria": "Geomorfologia",
    "definicio": "Superfície elevada i relativament plana el relleu de la qual està condicionat per l'estructura de les roques subjacents, més que per l'erosió recent. Al Collsacabra, l'altiplà estructural està delimitat per cingleres que segueixen la resistència diferencial de les capes eocenes.",
    "sinonims": [
      "altiplà"
    ]
  },
  {
    "slug": "argila",
    "terme": "Argila",
    "categoria": "Litologia",
    "definicio": "Sediment de mida molt fina format principalment per minerals argilosos, amb partícules invisible a simple vista. Les argiles són plàstiques quan s'humitegen i sovint es troben en ambients lacustres o de baixa energia, com les argiles vermelles de la Formació de Mediona.",
    "sinonims": [
      "argiles"
    ]
  },
  {
    "slug": "avenc",
    "terme": "Avenc",
    "categoria": "Geomorfologia",
    "definicio": "Cavitat vertical o molt inclinada desenvolupada per dissolució o col·lapse en terrenys solubles, especialment calcàries. En zones càrstiques com les del voltant de Tavertet, els avencs testimonien l'acció de l'aigua subterrània sobre les roques carbonatades.",
    "sinonims": [
      "avencs"
    ]
  },
  {
    "slug": "badia-marina",
    "terme": "Badia marina",
    "categoria": "Paleogeografia",
    "definicio": "Entrada del mar a l'interior de la costa, on l'aigua és generalment més protegida i es poden acumular sediments marins fins. Durant l'Eocè, sectors de la conca de l'Ebre van passar per fases de badia abans de la continentalització final.",
    "sinonims": [
      "badia"
    ]
  },
  {
    "slug": "basament",
    "terme": "Basament",
    "categoria": "Estratigrafia",
    "definicio": "Conjunt de roques antigues, sovint metamòrfiques o ígnies, sobre les quals es dipositen materials sedimentaris més moderns. A Sau–Tavertet, el basament paleozoic del granit de la presa actua com a sòcol rígid sobre el qual es recolza la cobertura sedimentària terciària.",
    "sinonims": [
      "sòcol",
      "basament cristal·lí"
    ]
  },
  {
    "slug": "biotita",
    "terme": "Biotita",
    "categoria": "Mineralogia",
    "definicio": "Mineral del grup de les miques, de color fosc i ric en ferro i magnesi, molt freqüent en granits i altres roques plutòniques. Contribueix a donar tonalitats més fosques a les roques i és un dels minerals que es pot identificar amb lupa en afloraments granítics."
  },
  {
    "slug": "bloc-tectonic",
    "terme": "Bloc tectònic",
    "categoria": "Tectònica",
    "definicio": "Porció de l'escorça delimitada per falles que s'ha desplaçat com a unitat relativament coherent respecte als blocs veïns. El bloc de Tavertet n'és un exemple clar: un sector elevat limitat per falles normals que condiciona el relleu actual del Collsacabra.",
    "sinonims": [
      "bloc de Tavertet"
    ]
  },
  {
    "slug": "braquiopode",
    "terme": "Braquiòpode",
    "categoria": "Paleontologia",
    "definicio": "Invertebrat marí amb closca bivalva simètrica, molt freqüent al registre fòssil des del Paleozoic. A les Guilleries, braquiòpodes d'edat Caradoc ajuden a datar la sèrie volcano-detrítica del sòcol paleozoic.",
    "sinonims": [
      "braquiòpodes"
    ]
  },
  {
    "slug": "calcaria",
    "terme": "Calcària",
    "categoria": "Litologia",
    "definicio": "Roca sedimentària formada majoritàriament per carbonat càlcic (calcita o aragonita), sovint d'origen biogènic o químic en ambients marins. Les calcàries solen ser resistents a l'erosió i poden originar cingleres i relleus marcats, com als cingles de Tavertet.",
    "sinonims": [
      "calcàries"
    ]
  },
  {
    "slug": "calcaria-nummulitica",
    "terme": "Calcària nummulítica",
    "categoria": "Litologia",
    "definicio": "Calcària rica en fòssils de nummulits, foraminífers discoides molt característics de l'Eocè (56–34 Ma). Aquest tipus de roca, coneguda popularment com a pedra de Girona, indica ambient de plataforma marina poc profunda i és molt visible als cingles de Tavertet.",
    "sinonims": [
      "pedra de Girona",
      "calcàries nummulítiques"
    ]
  },
  {
    "slug": "cambroordovicia",
    "terme": "Cambroordovicià",
    "categoria": "Cronologia",
    "definicio": "Interval geològic que agrupa el Cambrià i l'Ordovicià (541–443 Ma), corresponent als primers períodes del Paleozoic amb vida complexa ja diversificada. Al massís de les Guilleries afloren materials cambroordovicianes que formen part del sòcol més antic de la zona."
  },
  {
    "slug": "capa-grisa",
    "terme": "Capa grisa",
    "categoria": "Estratigrafia",
    "definicio": "Paquet de roques marines grises —gresos, margues i calcàries— dipositades durant l'Eocè superior al sector de Tavertet (38–34 Ma). Representa el pas cap a ambient marí més obert i és la litologia dominant de les cingleres que delimiten l'altiplà del Collsacabra."
  },
  {
    "slug": "capa-vermella",
    "terme": "Capa vermella",
    "categoria": "Estratigrafia",
    "definicio": "Paquet de sediments continentals vermells —argiles, gresos i conglomerats— del Paleocè i Eocè inferior (66–47 Ma), dipositats en ambients fluvials, lacustres i de ventall al·luvial. El color rogenós es deu als òxids de ferro i marca la base de la cobertura sedimentària sobre el sòcol paleozoic."
  },
  {
    "slug": "caradoc",
    "terme": "Caradoc",
    "categoria": "Cronologia",
    "definicio": "Etapa de l'Ordovicià superior (458–449 Ma), dins del Paleozoic antic. A Catalunya, fòssils d'edat Caradoc —com braquiòpodes— s'han trobat en materials del sòcol paleozoic de les Guilleries."
  },
  {
    "slug": "cenozoic",
    "terme": "Cenozoic",
    "categoria": "Cronologia",
    "definicio": "Era geològica actual, des del final del Mesozoic fins avui (66 Ma–actualitat), que inclou la formació dels Pirineus, el rebliment de la conca de l'Ebre i l'evolució del relleu recent de Catalunya.",
    "sinonims": [
      "Cenozoïc"
    ]
  },
  {
    "slug": "cinglera",
    "terme": "Cinglera",
    "categoria": "Geomorfologia",
    "definicio": "Paret o vessant rocos molt abrupte generat per erosió diferencial entre roques resistents i altres més fàcilment erosionables. Les cingleres de Tavertet són un dels elements paisatgístics més emblemàtics de l'itinerari i reflecteixen la resistència de les calcàries i gresos eocenes.",
    "sinonims": [
      "cingleres",
      "penya-segat"
    ]
  },
  {
    "slug": "cobertura-sedimentaria",
    "terme": "Cobertura sedimentària",
    "categoria": "Estratigrafia",
    "definicio": "Conjunt de roques sedimentàries més modernes que recobreixen un basament més antic, sovint en discordança erosiva. A Sau–Tavertet, la cobertura terciària eocena reposa sobre el sòcol paleozoic després d'un llarg hiatus mesozoic.",
    "sinonims": [
      "cobertes sedimentàries",
      "cobertura terciària"
    ]
  },
  {
    "slug": "collsacabra",
    "terme": "Collsacabra",
    "categoria": "Geografia geològica",
    "definicio": "Altiplà de la Serralada Transversal caracteritzat per cingleres eocenes, valls encaixades i relleu tabular. L'itinerari Sau–Tavertet recorre precisament aquest sector, on es pot llegir la transició entre el sòcol granític i la cobertura sedimentària terciària."
  },
  {
    "slug": "columna-estratigrafica",
    "terme": "Columna estratigràfica",
    "categoria": "Estratigrafia",
    "definicio": "Representació gràfica i ordenada de les unitats litològiques d'una zona, de la més antiga a la més recent. Permet visualitzar l'empilement de formacions, els contactes entre elles i els buits del registre geològic.",
    "sinonims": [
      "columna litològica"
    ]
  },
  {
    "slug": "conca-de-l-ebre",
    "terme": "Conca de l'Ebre",
    "categoria": "Geografia geològica",
    "definicio": "Gran conca sedimentària situada entre els Pirineus i les serralades costaneres, reblerta principalment durant el Cenozoic per l'orogènesi alpina. Sau–Tavertet s'ubica al marge sud-oriental d'aquesta conca, on afloren el sòcol i la cobertura eocena.",
    "sinonims": [
      "conca terciària de l'Ebre"
    ]
  },
  {
    "slug": "conca-de-l-emporda",
    "terme": "Conca de l'Empordà",
    "categoria": "Geografia geològica",
    "definicio": "Depressió sedimentària del nord-est de Catalunya associada al sistema extensiu neogen del litoral català. Comparteix el context tectònic d'extensió cenozoica que també afecta altres conces catalanes."
  },
  {
    "slug": "conca-neogena",
    "terme": "Conca neògena",
    "categoria": "Geografia geològica",
    "definicio": "Depressió formada durant el Neogen per tectònica extensiva (23–2,6 Ma), on s'acumulen sediments continentals i lacustres. A Catalunya, diverses conces litorals i prelitorals es van desenvolupar en aquest context."
  },
  {
    "slug": "conglomerat",
    "terme": "Conglomerat",
    "categoria": "Litologia",
    "definicio": "Roca sedimentària formada per còdols i grans clasts arrodonits cementats per una matriu més fina. Indica transport per corrents d'alta energia —rius de muntanya o platges— i és freqüent a la base de la seqüència eocena del Collsacabra.",
    "sinonims": [
      "conglomerats"
    ]
  },
  {
    "slug": "contacte-geologic",
    "terme": "Contacte geològic",
    "categoria": "Estratigrafia",
    "definicio": "Superfície o límit que separa dues unitats litològiques o estructurals diferents. Observar un contacte in situ —per exemple, entre granit i pòrfir a la presa de Sau— permet interpretar relacions temporals i processos geològics.",
    "sinonims": [
      "contacte litològic"
    ]
  },
  {
    "slug": "continentalitzacio",
    "terme": "Continentalització",
    "categoria": "Sedimentologia",
    "definicio": "Procés pel qual un sector que era marí passa a condicions continentals per retirada del mar, aport sedimentari o canvis tectònics. A la conca de l'Ebre, la seqüència eocena documenta aquest pas del mar continental cap a ambients fluvials i lacustres."
  },
  {
    "slug": "cordillera-litoral-catalana",
    "terme": "Cordillera Litoral Catalana",
    "categoria": "Geografia geològica",
    "definicio": "Basament hercinià de la zona costanera catalana, format per roques paleozoiques metamòrfiques i ígnies. És l'homòleg estructural del sòcol que aflora al massís de les Guilleries i a la presa de Sau."
  },
  {
    "slug": "cornisa",
    "terme": "Cornisa",
    "categoria": "Geomorfologia",
    "definicio": "Ressalt o balcó rocos resistent que sobresurt en un vessant per erosió diferencial. Les cornises marquen sovint canvis litològics o nivells estructurals i poden condicionar la vegetació rupícola.",
    "sinonims": [
      "cornises"
    ]
  },
  {
    "slug": "cretaci",
    "terme": "Cretaci",
    "categoria": "Cronologia",
    "definicio": "Últim període del Mesozoic (145–66 Ma), conegut com l'era dels dinosaures i caracteritzat per mars extensos i clima generalment càlid. A la superfície de Sau–Tavertet no hi ha registre del Cretaci: el Mesozoic representa un hiatus en la columna local."
  },
  {
    "slug": "cristal-litzacio",
    "terme": "Cristal·lització",
    "categoria": "Petrologia",
    "definicio": "Procés de formació i creixement de cristalls a partir d'un magma, d'un fluid o d'una dissolució quan es produeixen condicions de saturació. En roques plutòniques com el granit de Sau, la cristal·lització lenta en profunditat dóna lloc a textura fanerítica."
  },
  {
    "slug": "despullament",
    "terme": "Despullament",
    "categoria": "Geomorfologia",
    "definicio": "Moviment de materials rocosos o de sòl pendents avall per l'acció de la gravetat, sovint activat per l'aigua o pel gel. En cingleres i vessants inclinats pot representar un risc geològic i modificar ràpidament l'aspecte de l'aflorament."
  },
  {
    "slug": "diposit-de-vessant",
    "terme": "Dipòsit de vessant",
    "categoria": "Sedimentologia",
    "definicio": "Acumulació de materials transportats per gravetat al llarg d'un vessant, sovint en forma de ventall o de cos de debris. A la base de les cingleres eocenes s'hi poden trobar dipòsits relacionats amb despreniments i escorrentia superficial.",
    "sinonims": [
      "dipòsits de vessant"
    ]
  },
  {
    "slug": "discordanca",
    "terme": "Discordança",
    "categoria": "Estratigrafia",
    "definicio": "Superfície que separa dues successions sedimentàries d'edat diferent, indicant un interval de temps no registrat o un esdeveniment d'erosió o tectònica. Entre el sòcol paleozoic i la cobertura eocena de Sau–Tavertet hi ha una discordança erosiva majúscula.",
    "sinonims": [
      "discordança erosiva",
      "discordança angular"
    ]
  },
  {
    "slug": "disseccio-fluvial",
    "terme": "Dissecció fluvial",
    "categoria": "Geomorfologia",
    "definicio": "Incisió progressiva del relleu per l'acció dels rius, que excavar valls i reorganitzen el paisatge. En un context post-orogènic com el de la conca de l'Ebre, la dissecció fluvial ha contribuït a formar les valls encaixades del Collsacabra.",
    "sinonims": [
      "dissecció"
    ]
  },
  {
    "slug": "diaclasi",
    "terme": "Diàclasi",
    "categoria": "Estructura",
    "definicio": "Fractura de l'escorça o de la roca sense desplaçament apreciable entre els marges del pla de falla. Al granit de la presa de Sau, les diàclasis controlen l'estabilitat de l'aflorament i, sovint, la circulació de fluids i la formació de filons.",
    "sinonims": [
      "diàclasis"
    ]
  },
  {
    "slug": "eoce",
    "terme": "Eocè",
    "categoria": "Cronologia",
    "definicio": "Època del Paleogen compresa entre 56 i 34 Ma, durant la qual la conca de l'Ebre es va reblir amb sediments que passen d'ambients continentals a marins i de nou continentals. És l'edat de la major part de les roques visibles als cingles de Tavertet."
  },
  {
    "slug": "erosio-diferencial",
    "terme": "Erosió diferencial",
    "categoria": "Geomorfologia",
    "definicio": "Erosió desigual causada per la diferent resistència mecànica o química de les roques veïnes. En un mateix vessant, litologies més toves s'erosionen abans i deixen en relleu les més resistents, originant cingleres, cornises i graons morfològics.",
    "sinonims": [
      "erosió desigual"
    ]
  },
  {
    "slug": "escorca-continental",
    "terme": "Escorça continental",
    "categoria": "Tectònica",
    "definicio": "Part de l'escorça terrestre sota les terres emergides, més gruixuda i antiga que l'escorça oceànica. A Catalunya, l'escorça continental va experimentar extensional durant el Cenozoic i orogènesi alpina als Pirineus.",
    "sinonims": [
      "cortesa continental"
    ]
  },
  {
    "slug": "esquist",
    "terme": "Esquist",
    "categoria": "Litologia",
    "definicio": "Roca metamòrfica amb foliació marcada, formada generalment a partir de sediments argilosos sotmesos a pressió i temperatura elevades. Als sectors paleozoics de les Guilleries hi ha esquists que testimonien el metamorfisme hercinià.",
    "sinonims": [
      "esquists"
    ]
  },
  {
    "slug": "estratificacio",
    "terme": "Estratificació",
    "categoria": "Estratigrafia",
    "definicio": "Disposició dels materials sedimentaris en capes o estrats paral·lels, que reflecteixen canvis en el medi de dipòsit al llarg del temps. L'estratificació és la base per reconstruir l'ordre cronològic relatiu de les roques sedimentàries.",
    "sinonims": [
      "estrats"
    ]
  },
  {
    "slug": "extincio-permia-triasic",
    "terme": "Extinció Permià-Triàsic",
    "categoria": "Paleontologia",
    "definicio": "Major crisi biològica coneguda de la història de la Terra, al límit Permià–Triàsic (~252 Ma), en què va desaparèixer una gran part de les espècies marines i terrestres. Marca el final del Paleozoic i l'inici del Mesozoic.",
    "sinonims": [
      "extinció permotriàsica"
    ]
  },
  {
    "slug": "facies-porfirica",
    "terme": "Facies porfírica",
    "categoria": "Litologia",
    "definicio": "Textura ígnia amb cristalls grans (fenocristalls) immersos en una matriu més fina o vítria. Als pòrfirs de la presa de Sau, aquesta textura indica refredament en dues etapes: primer cristalls grans i després consolidació ràpida de la matriu.",
    "sinonims": [
      "facies porfíriques"
    ]
  },
  {
    "slug": "falla-de-tavertet",
    "terme": "Falla de Tavertet",
    "categoria": "Tectònica",
    "definicio": "Falla normal que delimita el bloc elevat de Tavertet respecte als sectors més baixos de l'est i del sud, en el context de l'extensió cenozoica. Condiciona el relleu del Collsacabra i explica el desnivell entre l'altiplà estructural i les valls veïnes."
  },
  {
    "slug": "falla-normal",
    "terme": "Falla normal",
    "categoria": "Tectònica",
    "definicio": "Falla produïda per extensió de l'escorça, en la qual el bloc penjant es desplaça cap avall respecte al bloc arrelat. Durante el Cenozoic, les falles normals han estructurat grabens, horsts i semigrabens a Catalunya i arreu d'Europa.",
    "sinonims": [
      "falla extensiva",
      "falla cenozoica"
    ]
  },
  {
    "slug": "feldespat-potassic",
    "terme": "Feldespat potàssic",
    "categoria": "Mineralogia",
    "definicio": "Mineral del grup dels feldespats ric en potassi, molt abundant als granits i sovint de color rosat o blanc. Juntament amb el quars, és un dels components principals de les roques plutòniques del sòcol de Sau.",
    "sinonims": [
      "feldespat K",
      "ortoclasa"
    ]
  },
  {
    "slug": "fenocristall",
    "terme": "Fenocristall",
    "categoria": "Litologia",
    "definicio": "Cristall gran i ben format, visible a simple vista, que es va desenvolupar abans que la resta de la roca acabés de cristal·litzar. En textura porfírica, els fenocristalls contrasten amb una matriu més fina.",
    "sinonims": [
      "fenocristalls"
    ]
  },
  {
    "slug": "filo",
    "terme": "Filó",
    "categoria": "Litologia",
    "definicio": "Cos tabular, generalment allargat, que omple una fractura o diàclasi preexistent amb roca cristal·litzada des de fluids o magmes. Al granit de Sau es poden observar filons de pòrfir més clars que la roca envoltant.",
    "sinonims": [
      "filons"
    ]
  },
  {
    "slug": "fluids-hidrotermals",
    "terme": "Fluids hidrotermals",
    "categoria": "Geoquímica",
    "definicio": "Aigües calentes, sovint riques en minerals dissolts, que circulen per fractures i faults en profunditat i poden precipitar minerals o alterar la roca hoste. En granits, contribueixen a la formació de filons i a l'alteració de minerals.",
    "sinonims": [
      "fluid hidrotermal"
    ]
  },
  {
    "slug": "foliacio",
    "terme": "Foliació",
    "categoria": "Estructura",
    "definicio": "Orientació preferencial de minerals plans —com les miques— o de bandes en roques metamòrfiques, produïda per pressió durant el metamorfisme. La foliació fa que la roca es trenqui preferentment en plans paral·lels.",
    "sinonims": [
      "foliacions"
    ]
  },
  {
    "slug": "foraminifer",
    "terme": "Foraminífer",
    "categoria": "Paleontologia",
    "definicio": "Organisme marí unicel·lular amb closca calcària, molt abundant al registre fòssil i útil per datar roques sedimentàries. Els nummulits són foraminífers macroscòpics característics de l'Eocè mediterrani.",
    "sinonims": [
      "foraminífers"
    ]
  },
  {
    "slug": "formacio-de-barcons",
    "terme": "Formació de Barcons",
    "categoria": "Estratigrafia",
    "definicio": "Formació sedimentària relacionada amb ambients continentals i marins de platja al tancament de la seqüència eocena (34–28 Ma). Marca la fase final de la sedimentació paleogena abans de l'evolució neogena del litoral català.",
    "sinonims": [
      "Fm. Barcons"
    ]
  },
  {
    "slug": "formacio-de-mediona",
    "terme": "Formació de Mediona",
    "categoria": "Estratigrafia",
    "definicio": "Unitat estratigràfica present a la zona de Sau–Tavertet, formada principalment per argiles vermelles i materials detrítics continentals. A la parada P3 s'hi poden observar argiles plàstiques d'aquesta formació.",
    "sinonims": [
      "Fm. Mediona"
    ]
  },
  {
    "slug": "formacio-de-romagats",
    "terme": "Formació de Romagats",
    "categoria": "Estratigrafia",
    "definicio": "Unitat geològica del registre eocè regional, integrada dins la successió paleogena de la conca de l'Ebre. Forma part del conjunt de formacions que documenten la transició entre ambients continentals i marins.",
    "sinonims": [
      "Fm. Romagats"
    ]
  },
  {
    "slug": "formacio-de-tavertet",
    "terme": "Formació de Tavertet",
    "categoria": "Estratigrafia",
    "definicio": "Unitat formada principalment per calcàries i gresos marins, molt visibles als cingles del Collsacabra. Conté calcàries nummulítiques i és una de les litologies més característiques de l'itinerari.",
    "sinonims": [
      "Fm. Tavertet"
    ]
  },
  {
    "slug": "formacio-de-vilanova-de-sau",
    "terme": "Formació de Vilanova de Sau",
    "categoria": "Estratigrafia",
    "definicio": "Unitat sedimentària característica del sector de Sau, integrada en la cobertura eocena sobre el sòcol granític. Forma part de la seqüència de materials detrítics i carbonats que recobreixen el basament paleozoic.",
    "sinonims": [
      "Fm. Vilanova de Sau"
    ]
  },
  {
    "slug": "formacio-del-coll-de-malla",
    "terme": "Formació del Coll de Malla",
    "categoria": "Estratigrafia",
    "definicio": "Unitat estratigràfica superior del conjunt eocè (38–34 Ma), constituïda principalment per margues grises amb fòssils marins. La seva litologia més tova afavoreix l'erosió i contribueix a l'escalonament de les cingleres.",
    "sinonims": [
      "Fm. Coll de Malla"
    ]
  },
  {
    "slug": "formacio-geologica",
    "terme": "Formació geològica",
    "categoria": "Estratigrafia",
    "definicio": "Unitat cartografiable de roques amb litologia, edat i distribució espacial reconeixibles, definida per criteris estratigràfics. És l'equivalent cartogràfic d'una «capa» o paquet litològic coherent en mapes geològics.",
    "sinonims": [
      "formació litològica"
    ]
  },
  {
    "slug": "fossa-de-valencia",
    "terme": "Fossa de València",
    "categoria": "Geografia geològica",
    "definicio": "Gran depressió relacionada amb l'obertura del Mediterrani occidental i amb l'extensió cenozoica de la placa Ibèrica. Forma part del context geodinàmic que va afectar el litoral i el prelitoral català durant el Neogen.",
    "sinonims": [
      "Surco de València"
    ]
  },
  {
    "slug": "fossa-de-la-selva",
    "terme": "Fossa de la Selva",
    "categoria": "Geografia geològica",
    "definicio": "Depressió tectònica neògena del sector litoral català, associada al sistema extensiu que va crear diverses conces i fosses a la costa. Comparteix el règim tectònic d'extensió amb altres estructures del Cenozoic català."
  },
  {
    "slug": "facies-amfibolitica",
    "terme": "Fàcies amfibolítica",
    "categoria": "Metamorfisme",
    "definicio": "Conjunt de condicions de metamorfisme de temperatura i pressió elevades en què es formen minerals com l'amfibol i la plagioclasi. Als sectors més profunds del sòcol paleozoic, el metamorfisme hercinià va assolir aquest grau en algunes zones.",
    "sinonims": [
      "facies amfibolítiques"
    ]
  },
  {
    "slug": "geozona",
    "terme": "Geozona",
    "categoria": "Patrimoni geològic",
    "definicio": "Àrea delimitada amb valor geològic, didàctic, científic o paisatgístic reconegut per l'administració. L'itinerari Sau–Tavertet està catalogat com a geozona al repositori de geotops de Catalunya.",
    "sinonims": [
      "geozones"
    ]
  },
  {
    "slug": "geotop",
    "terme": "Geòtop",
    "categoria": "Patrimoni geològic",
    "definicio": "Lloc d'interès geològic singular —aflorament, estructura, formació— identificat i documentat per al seu estudi o divulgació. Els geotops permeten connectar el coneixement de camp amb recursos accessibles al públic.",
    "sinonims": [
      "geotop"
    ]
  },
  {
    "slug": "graben",
    "terme": "Graben",
    "categoria": "Tectònica",
    "definicio": "Bloc o conca enfonsada limitada per falles normals, en el context de l'extensió de l'escorça. El sistema de rift cenozoic europeu va generar nombrosos grabens i semigrabens al llarg de la costa mediterrània.",
    "sinonims": [
      "fosa tectònica",
      "bloc enfonsat"
    ]
  },
  {
    "slug": "granitoide",
    "terme": "Granitoide",
    "categoria": "Litologia",
    "definicio": "Terme general per designar roques plutòniques àcides riques en quars i feldespats, incloent granits, monzogranits i granodiorites. El sòcol de Sau està format per granitoides paleozoics del cicle hercinià.",
    "sinonims": [
      "granitoides"
    ]
  },
  {
    "slug": "granitoide-peraluminic",
    "terme": "Granitoide peralumínic",
    "categoria": "Litologia",
    "definicio": "Granitoide amb contingut d'alumini superior al necessari per formar els minerals femílics, indicant un origen relacionat amb fusió de crosta continental. És un terme petrogràfic que descriu la composició química de certs plutons hercinis."
  },
  {
    "slug": "granodiorita",
    "terme": "Granodiorita",
    "categoria": "Litologia",
    "definicio": "Roca plutònica intermèdia entre granit i diorita, amb més plagioclasi que feldespat potàssic. Als pòrfirs granodiorítics de la presa de Sau es pot observar el contacte amb facies monzogranítiques i leucomonzogranítiques.",
    "sinonims": [
      "granodiorit",
      "pòrfirs granodiorítics"
    ]
  },
  {
    "slug": "gres",
    "terme": "Gres",
    "categoria": "Litologia",
    "definicio": "Roca sedimentària formada per grans de sorra cimentats, indicant generalment ambient de baixa a mitjana energia fluvial, eòlica o litoral. Els gresos vermells i grisos són molt freqüents a la seqüència eocena del Collsacabra.",
    "sinonims": [
      "gresos"
    ]
  },
  {
    "slug": "guilleries",
    "terme": "Guilleries",
    "categoria": "Geografia geològica",
    "definicio": "Massís paleozoic situat a l'altra banda del pantà de Sau, format per roques ígnies i metamòrfiques del sòcol hercinià. Constitueix el «basament» antic sobre el qual, molt més tard, es va dipositar la cobertura sedimentària de la conca de l'Ebre."
  },
  {
    "slug": "hiatus",
    "terme": "Hiatus",
    "categoria": "Estratigrafia",
    "definicio": "Interval de temps no representat en el registre sedimentari per falta de dipòsit o per erosió. Entre el sòcol paleozoic i la cobertura eocena de Sau–Tavertet hi ha un hiatus de gairebé tot el Mesozoic.",
    "sinonims": [
      "buit estratigràfic"
    ]
  },
  {
    "slug": "hornblenda",
    "terme": "Hornblenda",
    "categoria": "Mineralogia",
    "definicio": "Mineral fosc del grup dels amfíbols, ric en ferro i magnesi, freqüent en roques ígnies i metamòrfiques. És un dels minerals «femílics» que poden donar tonalitats fosques a les roques plutòniques."
  },
  {
    "slug": "horst",
    "terme": "Horst",
    "categoria": "Tectònica",
    "definicio": "Bloc elevat limitat per falles normals, en contraposició a un graben enfonsat. El bloc de Tavertet es pot interpretar com un horst dins el sistema de falles extensionals del Cenozoic.",
    "sinonims": [
      "bloc elevat"
    ]
  },
  {
    "slug": "intrusio-magmatica",
    "terme": "Intrusió magmàtica",
    "categoria": "Litologia",
    "definicio": "Cos de roca formada per magma que ha penetrat roques preexistents sense arribar a la superfície. Al granit de Sau, les intrusions tardanes es manifesten com filons i pòrfirs que tallen la roca principal.",
    "sinonims": [
      "intrusió",
      "intrusió granítica",
      "puls magmàtic"
    ]
  },
  {
    "slug": "leucocratic",
    "terme": "Leucocràtic",
    "categoria": "Litologia",
    "definicio": "Adjectiu que descriu una roca clara, amb abundants minerals clars (quars, feldespats) i pocs minerals foscos (biotita, hornblenda). Els leucomonzogranits de la presa de Sau són un exemple d'aquesta coloració."
  },
  {
    "slug": "leucomonzogranit",
    "terme": "Leucomonzogranit",
    "categoria": "Litologia",
    "definicio": "Varietat clara de monzogranit, amb predomini de quars i feldespats respecte als minerals femílics. Forma part del conjunt de pòrfirs i facies granítiques visibles al contacte litològic de la parada 1.",
    "sinonims": [
      "leucomonzogranits",
      "pòrfirs leucomonzogranítics"
    ]
  },
  {
    "slug": "litofacies",
    "terme": "Litofàcies",
    "categoria": "Estratigrafia",
    "definicio": "Conjunt de característiques litològiques, estructurals i paleontològiques que defineixen un tipus de sediment o roca dipositada en un ambient concret. Permet reconstruir si un sediment es va formar en mar, riu, llac o platja."
  },
  {
    "slug": "ma",
    "terme": "Ma",
    "categoria": "Cronologia",
    "definicio": "Abreviatura de megaannus (milions d'anys), unitat habitual per expressar edats geològiques en escales de temps profund. Per exemple, 66 Ma equival a 66 milions d'anys abans del present.",
    "sinonims": [
      "milions d'anys"
    ]
  },
  {
    "slug": "marga",
    "terme": "Marga",
    "categoria": "Litologia",
    "definicio": "Roca sedimentària mixta d'argila i carbonat càlcic, generalment de grana molt fina i textura homogènia. Les margues grises de la Formació del Coll de Malla contenen fòssils marins i són més erosionables que les calcàries veïnes.",
    "sinonims": [
      "margues"
    ]
  },
  {
    "slug": "mar-de-tetis",
    "terme": "Mar de Tetis",
    "categoria": "Paleogeografia",
    "definicio": "Antic oceà que separava Gondwana i Lauràsia (i més tard Euràsia) des del Paleozoic fins al tancament progressiu durant l'orogènesi alpina. La placa Ibèrica es va situar a la marga occidental de la Tetis abans de la formació dels Pirineus.",
    "sinonims": [
      "oceà de Tetis"
    ]
  },
  {
    "slug": "massis-de-les-guilleries",
    "terme": "Massís de les Guilleries",
    "categoria": "Geografia geològica",
    "definicio": "Part principal del sector paleozoic de les Guilleries, on afloren pissarres, esquists, ortogneissos i materials volcano-detrítics del Cambroordovicià al Carbonífer. És el lloc de referència per entendre el sòcol sobre el qual es recolza l'itinerari Sau–Tavertet."
  },
  {
    "slug": "mesozoic",
    "terme": "Mesozoic",
    "categoria": "Cronologia",
    "definicio": "Era geològica entre el Paleozoic i el Cenozoic (252–66 Ma), que inclou el Triàsic, el Juràssic i el Cretaci. A la superfície de Sau–Tavertet no es conserva registre mesozoic: tot aquest interval correspon a un hiatus estratigràfic."
  },
  {
    "slug": "metamorfisme",
    "terme": "Metamorfisme",
    "categoria": "Geologia",
    "definicio": "Transformació de roques preexistents per efecte de pressió, temperatura i, eventualment, fluids, sense arribar a fondre's completament. El sòcol paleozoic de les Guilleries va patir metamorfisme durant l'orogènia varisca.",
    "sinonims": [
      "metamorfitzada"
    ]
  },
  {
    "slug": "metasediment",
    "terme": "Metasediment",
    "categoria": "Litologia",
    "definicio": "Roca sedimentària —com pissarres o esquists— transformada per metamorfisme. Als sectors paleozoics de les Guilleries, els metasediments documenten antigues plataformes marines posteriorment deformades.",
    "sinonims": [
      "metasedimentaris"
    ]
  },
  {
    "slug": "meteoritzacio",
    "terme": "Meteorització",
    "categoria": "Geomorfologia",
    "definicio": "Alteració física i química de les roques a la superfície per agents atmosfèrics, biològics i hídrics. En granits, produeix el sauló i contribueix a l'alteració de l'aflorament i a la formació del sòl."
  },
  {
    "slug": "monzogranit",
    "terme": "Monzogranit",
    "categoria": "Litologia",
    "definicio": "Tipus de granitoide amb proporcions equilibrades de quars, feldespat potàssic i plagioclasi, molt freqüent al sòcol hercinià català. El granit de la presa de Sau n'és un exemple ben exposat, amb textura fanerítica i sistema de diàclasis.",
    "sinonims": [
      "monzogranits",
      "granit hercinià"
    ]
  },
  {
    "slug": "neogen",
    "terme": "Neogen",
    "categoria": "Cronologia",
    "definicio": "Període del Cenozoic comprès entre 23 i 2,6 Ma, durant el qual es va desenvolupar gran part de l'extensió tectònica al litoral mediterrani. A Catalunya, el Neogen va originar conces, falles normals i, localment, volcanisme alcalí.",
    "sinonims": [
      "Neògen"
    ]
  },
  {
    "slug": "nummulit",
    "terme": "Nummulit",
    "categoria": "Paleontologia",
    "definicio": "Foraminífer fòssil macroscòpic, en forma de disc, molt abundant a l'Eocè (56–34 Ma) de la Mediterrània. La presència de nummulits en calcàries indica ambient marí poc profund i càlid.",
    "sinonims": [
      "nummulits"
    ]
  },
  {
    "slug": "orogenesi-alpina",
    "terme": "Orogènesi alpina",
    "categoria": "Tectònica",
    "definicio": "Procés de formació de serralades —com els Pirineus— per col·lisió i acostament de plaques durant el Cenozoic (des de ~65 Ma). Va provocar el rejoveniment del relleu, el rebliment de la conca de l'Ebre i la reorganització del paisatge actual.",
    "sinonims": [
      "orogènesi pirenaica"
    ]
  },
  {
    "slug": "orogenia-varisca",
    "terme": "Orogènia varisca",
    "categoria": "Tectònica",
    "definicio": "Formació de grans serralades durant el Paleozoic per col·lisió de continents i tancament d'oceà (380–300 Ma), també anomenada hercínica. Va crear el sòcol paleozoic de les Guilleries i la major part del basament de la península Ibèrica.",
    "sinonims": [
      "orogènia herciniana",
      "col·lisió varisca",
      "col·lisió herciniana"
    ]
  },
  {
    "slug": "ortogneis",
    "terme": "Ortogneis",
    "categoria": "Litologia",
    "definicio": "Gneis derivat del metamorfisme d'una roca ígnia original, amb banding mineralògic visible. Als sectors paleozoics de les Guilleries, els ortogneissos alternen amb pissarres i esquists en el sòcol més antic.",
    "sinonims": [
      "ortogneissos"
    ]
  },
  {
    "slug": "paleoce",
    "terme": "Paleocè",
    "categoria": "Cronologia",
    "definicio": "Primera època del Paleogen (66–56 Ma), immediatament posterior a l'extinció dels dinosaures no aviar. A la conca de l'Ebre, els sediments paleocens marquen l'inici de la cobertura sobre el sòcol després de l'orogènesi pirenaica inicial."
  },
  {
    "slug": "paleogen",
    "terme": "Paleogen",
    "categoria": "Cronologia",
    "definicio": "Període geològic comprès entre 66 i 23 Ma, que inclou el Paleocè, l'Eocè i l'Oligocè. És el període durant el qual es va formar la major part de la cobertura sedimentària visible a Sau–Tavertet."
  },
  {
    "slug": "pangea",
    "terme": "Pangea",
    "categoria": "Paleogeografia",
    "definicio": "Supercontinent que agrupava gairebé totes les terres emergides durant el Paleozoic tardà i el Triàsic (335–175 Ma). La seva fragmentació va obrir nous oceans —com la Tetis— i va preparar la configuració actual de continents i oceans.",
    "sinonims": [
      "supercontinent"
    ]
  },
  {
    "slug": "permia",
    "terme": "Permià",
    "categoria": "Cronologia",
    "definicio": "Últim període del Paleozoic (299–252 Ma), anterior a l'extinció massiva permotriàsica. Marca el tancament de l'orogènia varisca i el final de la formació del gran sòcol paleozoic europeu."
  },
  {
    "slug": "pirineus",
    "terme": "Pirineus",
    "categoria": "Geografia geològica",
    "definicio": "Serralada formada principalment per l'orogènesi alpina al nord de la conca de l'Ebre, visible des de molts punts de l'itinerari. El seu aixecament va condicionar el drenatge, la sedimentació i el relleu del Prepirineu i del Collsacabra."
  },
  {
    "slug": "pissarra",
    "terme": "Pissarra",
    "categoria": "Litologia",
    "definicio": "Roca metamòrfica de grana fina que es trenca en làmines planes per la foliació, generalment derivada de fangs o cendres. És molt freqüent als trams cambroordovicianes del sòcol de les Guilleries.",
    "sinonims": [
      "pissarres"
    ]
  },
  {
    "slug": "placa-iberica",
    "terme": "Placa Ibèrica",
    "categoria": "Tectònica",
    "definicio": "Bloc tectònic corresponent a la península Ibèrica i part del sud de França, amb història pròpia de moviment i rotació durant el Mesozoic i el Cenozoic. La seva posició respecte a Euràsia va condicionar l'evolució del mar de Tetis i dels Pirineus."
  },
  {
    "slug": "plana-lacustre-endorreica",
    "terme": "Plana lacustre endorreica",
    "categoria": "Geomorfologia",
    "definicio": "Superfície plana associada a una conca sense sortida al mar, on l'aigua acumulada forma llacs temporals o permanents. En contextos tectònics extensionals, aquestes planes s'omplen sovint de sediments finsos."
  },
  {
    "slug": "pluto",
    "terme": "Plutó",
    "categoria": "Litologia",
    "definicio": "Gran massa de roca ígnia formada per la cristal·lització lenta d'un magma en profunditat, sense arribar a erupcionar. El granit de la presa de Sau correspon a un plutó paleozoic del cicle hercinià.",
    "sinonims": [
      "plutons"
    ]
  },
  {
    "slug": "prepirineu",
    "terme": "Prepirineu",
    "categoria": "Geografia geològica",
    "definicio": "Conjunt de serralades i relleus situats immediatament al sud dels Pirineus axials, amb geologia molt variada i transició cap a la conca de l'Ebre. Des de Tavertet s'aprecia la relació entre Prepirineu, conca i Serralada Transversal."
  },
  {
    "slug": "porfir",
    "terme": "Pòrfir",
    "categoria": "Litologia",
    "definicio": "Roca ígnia amb fenocristalls visibles dins una matriu més fina (textura porfírica), sovint producte d'una intrusió tardana. A la presa de Sau, diferents pòrfirs —monzogranític, leucomonzogranític i granodiorític— es poden distingir al contacte litològic.",
    "sinonims": [
      "pòrfirs"
    ]
  },
  {
    "slug": "quars",
    "terme": "Quars",
    "categoria": "Mineralogia",
    "definicio": "Mineral de diòxid de silici (SiO₂), molt abundant, dur i resistent a l'alteració. És un component essencial dels granits i contribueix a la resistència mecànica de moltes roques silíciques del sòcol."
  },
  {
    "slug": "quaternari",
    "terme": "Quaternari",
    "categoria": "Cronologia",
    "definicio": "Període geològic més recent (2,6 Ma–actualitat), caracteritzat per oscil·lacions climàtiques, glaciacions i l'evolució del relleu i dels sòls actuals. Inclou el registre de la presència humana i dels paisatges que veiem avui."
  },
  {
    "slug": "regolit",
    "terme": "Regòlit",
    "categoria": "Litologia",
    "definicio": "Capa de material fragmentat i alterat que recobreix la roca sòlida a la superfície, incloent sorres, grans i restes de meteorització. En granits, el regòlit granític o sauló es forma per descomposició dels minerals de la roca mare."
  },
  {
    "slug": "relleu-tabular",
    "terme": "Relleu tabular",
    "categoria": "Geomorfologia",
    "definicio": "Tipus de relleu dominat per superfícies planes o suavement inclinades, amb estrats gairebé horitzontals delimitats per cingleres. El Collsacabra n'és un exemple clàssic, on les capes eocenes mantenen encara la seva posició original."
  },
  {
    "slug": "rift-cenozoic-europeu",
    "terme": "Rift Cenozoic Europeu",
    "categoria": "Tectònica",
    "definicio": "Sistema extensiu desenvolupat a Europa durant el Cenozoic (66 Ma–actualitat), amb falles normals, grabens i obertura parcial de conces. A Catalunya, aquest règim extensional va crear la Fossa de la Selva, la Conca de l'Empordà i altres estructures.",
    "sinonims": [
      "sistema de rift europeu",
      "rift cenozoic"
    ]
  },
  {
    "slug": "saulo",
    "terme": "Sauló",
    "categoria": "Litologia",
    "definicio": "Sorres grans formades per l'alteració física i química del granit a la superfície, molt visibles als afloraments de Sau. Indica meteorització avançada del granit i condiciona la formació de sòls silícics als voltants.",
    "sinonims": [
      "regòlit granític"
    ]
  },
  {
    "slug": "semigraben",
    "terme": "Semigraben",
    "categoria": "Tectònica",
    "definicio": "Depressió tectònica limitada principalment per una falla normal dominant, amb el costat oposat menys clarament faultat. És una forma intermèdia entre un graben simètric i una conca monofallada.",
    "sinonims": [
      "semigrabens"
    ]
  },
  {
    "slug": "serralada-prelitoral",
    "terme": "Serralada Prelitoral",
    "categoria": "Geografia geològica",
    "definicio": "Unitat de relleu de les Serralades Costaneres Catalanes, situada entre la Depressió Prelitoral i la Serralada Litoral. Forma part del conjunt de serralades paral·leles a la costa que emmarquen la conca de l'Ebre."
  },
  {
    "slug": "serralades-costaneres-catalanes",
    "terme": "Serralades Costaneres Catalanes",
    "categoria": "Geografia geològica",
    "definicio": "Conjunt de serralades paral·leles a la costa catalana —Prelitoral, Litoral i zones intermèdies— que delimiten la Depressió Prelitoral. Des del Collsacabra s'observa la seva relació amb la conca de l'Ebre i els Pirineus."
  },
  {
    "slug": "serralada-transversal-catalana",
    "terme": "Serralada Transversal Catalana",
    "categoria": "Geografia geològica",
    "definicio": "Conjunt de relleus que connecta els Pirineus amb les serralades costaneres en direcció est–oest, creant un «nus geològic» de gran diversitat litològica. El Collsacabra i l'itinerari Sau–Tavertet s'hi ubiquen.",
    "sinonims": [
      "Serralada Transversal"
    ]
  },
  {
    "slug": "siluria",
    "terme": "Silurià",
    "categoria": "Cronologia",
    "definicio": "Període geològic del Paleozoic (443–419 Ma), posterior a l'Ordovicià i anterior al Devonià. Forma part del sòcol paleozoic europeu, tot i que a la superfície de Sau–Tavertet no hi aflora directament."
  },
  {
    "slug": "sismicitat-cenozoica",
    "terme": "Sismicitat cenozoica",
    "categoria": "Sismologia",
    "definicio": "Activitat sísmica associada als esforços tectònics del Cenozoic (66 Ma–actualitat), incloent l'orogènesi alpina i l'extensió posterior. Encara avui, Catalunya registra sismicitat relacionada amb falles actives heretades d'aquest període."
  },
  {
    "slug": "sistema-al-luvial",
    "terme": "Sistema al·luvial",
    "categoria": "Sedimentologia",
    "definicio": "Conjunt de processos i formes sedimentàries dominats per corrents fluvials que transporten i dipositen material en valls, planes i ventalls. A la base de la seqüència eocena, els sistemes al·luvials van dipositar argiles i gresos vermells continentals.",
    "sinonims": [
      "sistemes al·luvials"
    ]
  },
  {
    "slug": "sistema-extensiu-neogen",
    "terme": "Sistema extensiu neogen",
    "categoria": "Tectònica",
    "definicio": "Conjunt de falles, grabens i conces formades per l'extensió de l'escorça durant el Neogen (23–2,6 Ma). A Catalunya, va estructurar el litoral, la Depressió Prelitoral i diverses fosses com la de la Selva."
  },
  {
    "slug": "sistema-fluvio-lacustre",
    "terme": "Sistema fluvio-lacustre",
    "categoria": "Sedimentologia",
    "definicio": "Ambient sedimentari en què conviuen aportacions fluvials i acumulació en llacs, sovint en concas endorreiques. Durant l'Eocè inferior, aquest tipus d'ambient va produir argiles vermelles i materials fins a la conca de l'Ebre.",
    "sinonims": [
      "sistemes fluvio-lacustres"
    ]
  },
  {
    "slug": "superficie-estructural",
    "terme": "Superfície estructural",
    "categoria": "Geomorfologia",
    "definicio": "Superfície del relleu —planura, cinglera o vessant— condicionada per l'estructura geològica subjacent, com falles, estrats inclinats o diferències de resistència litològica. L'altiplà del Collsacabra és una superfície estructural delimitada per cingleres."
  },
  {
    "slug": "serie-volcano-detritica",
    "terme": "Sèrie volcano-detrítica",
    "categoria": "Litologia",
    "definicio": "Successió de materials volcànics i sediments detrítics dipositats alternativament, sovint en context de marges de continent. Al massís de les Guilleries, aquesta sèrie conté fòssils d'edat Caradoc i forma part del sòcol paleozoic."
  },
  {
    "slug": "socol-paleozoic",
    "terme": "Sòcol paleozoic",
    "categoria": "Estratigrafia",
    "definicio": "Conjunt de roques paleozoiques —ígnies, metamòrfiques i sedimentàries transformades— que formen la base estructural d'una regió. A Sau–Tavertet, el sòcol granític hercinià suporta la cobertura eocena en discordança erosiva.",
    "sinonims": [
      "sòcol cristal·lí",
      "basament paleozoic",
      "sòcol hercinià"
    ]
  },
  {
    "slug": "tectonica-extensional",
    "terme": "Tectònica extensional",
    "categoria": "Tectònica",
    "definicio": "Règim tectònic en què l'escorça s'estira i s'assaca, generant falles normals, grabens i afinament cortical. Durant el Cenozoic, la tectònica extensional va complementar l'orogènesi alpina al sud dels Pirineus.",
    "sinonims": [
      "tectònica extensiva"
    ]
  },
  {
    "slug": "textura-faneritica",
    "terme": "Textura fanerítica",
    "categoria": "Litologia",
    "definicio": "Textura ígnia amb cristalls visibles a simple vista, producte d'un refredament lent en profunditat. El monzogranit de la presa de Sau presenta textura fanerítica o «granítica», amb quars, feldespats i biotita reconeixibles.",
    "sinonims": [
      "textura granítica"
    ]
  },
  {
    "slug": "textura-holocristal-lina",
    "terme": "Textura holocristal·lina",
    "categoria": "Litologia",
    "definicio": "Textura ígnia formada completament per cristalls, sense matriu vítria (vidre). Indica refredament prou lent com perquè tot el magma cristal·litzi abans de consolidar-se."
  },
  {
    "slug": "triasic",
    "terme": "Triàsic",
    "categoria": "Cronologia",
    "definicio": "Primer període del Mesozoic (252–201 Ma), posterior a l'extinció permotriàsica i anterior al Juràssic. Marca l'inici de l'era mesozoica, tot i que a Sau–Tavertet no es conserva registre d'aquest període."
  },
  {
    "slug": "vall-del-rin",
    "terme": "Vall del Rin",
    "categoria": "Geografia geològica",
    "definicio": "Gran vall tectònica europea associada a l'extensió cortical i al sistema de rift cenozoic, paral·lela en origen a altres fosses com la de la Selva. N'és un referent continental del mateix tipus de processos tectònics.",
    "sinonims": [
      "Vall del Rhin"
    ]
  },
  {
    "slug": "vall-encaixada",
    "terme": "Vall encaixada",
    "categoria": "Geomorfologia",
    "definicio": "Vall profundament excavada per un curs fluvial, sovint amb parets rocoses i perfil estret. Al Collsacabra, les valls encaixades —com la del Ter— contrasten amb l'altiplà estructural que les domina."
  },
  {
    "slug": "ventall-al-luvial",
    "terme": "Ventall al·luvial",
    "categoria": "Sedimentologia",
    "definicio": "Acumulació de sediments en forma de ventall al peu d'un vessant o sortida de canyons, on el corrent perd energia bruscament. Durant l'Eocè inferior, els ventalls al·luvials van contribuir a dipositar materials vermells a la base de la seqüència del Collsacabra.",
    "sinonims": [
      "ventalls al·luvials"
    ]
  },
  {
    "slug": "volcanisme-alcali",
    "terme": "Volcanisme alcalí",
    "categoria": "Vulcanologia",
    "definicio": "Tipus de volcanisme associat a magmes riques en elements alcalins (sodi, potassi), freqüent en contextos d'extensió cortical. A Catalunya, apareix en fases neògenes i quaternàries del litoral, diferent del volcanisme de subducció.",
    "sinonims": [
      "volcanisme alcalí neogen–quaternari"
    ]
  }
];

export const termesCategories = [...new Set(termes.map((t) => t.categoria))].sort(
  (a, b) => a.localeCompare(b, "ca"),
);

export function getTermeBySlug(slug: string): Terme | undefined {
  return termes.find((t) => t.slug === slug);
}

export function getTermeSlugMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const terme of termes) {
    map.set(normalizeTermeKey(terme.terme), terme.slug);
    terme.sinonims?.forEach((s) => map.set(normalizeTermeKey(s), terme.slug));
  }
  return map;
}

export function normalizeTermeKey(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9·]+/g, " ")
    .trim();
}
