var wms_layers = [];

var lyr_Ortofotomapa3_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ortofotomapa' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ortofotomapa3_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [264261.137385, 5155102.887590, 273794.566123, 5160559.674172]
        })
    });
var lyr_Relleu_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Relleu' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Relleu_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [264099.119361, 5153545.341093, 276978.238556, 5161494.746491]
        })
    });
var format_LitologiadelScolPaleozoiciMesozoic_2 = new ol.format.GeoJSON();
var features_LitologiadelScolPaleozoiciMesozoic_2 = format_LitologiadelScolPaleozoiciMesozoic_2.readFeatures(json_LitologiadelScolPaleozoiciMesozoic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LitologiadelScolPaleozoiciMesozoic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LitologiadelScolPaleozoiciMesozoic_2.addFeatures(features_LitologiadelScolPaleozoiciMesozoic_2);
var lyr_LitologiadelScolPaleozoiciMesozoic_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LitologiadelScolPaleozoiciMesozoic_2, 
                style: style_LitologiadelScolPaleozoiciMesozoic_2,
                popuplayertitle: 'Litologia del Sòcol (Paleozoic i Mesozoic)',
                interactive: true,
    title: 'Litologia del Sòcol (Paleozoic i Mesozoic)<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_0.png" /> Dpqd — Pòrfirs diorítics i quarsidiorítics<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_1.png" /> Dpqmd — Pòrfirs quarsimonzonítics i quarsimonzodiorítics<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_2.png" /> Gapp — Microaplites porfíriques<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_3.png" /> Glg1 — Leucogranits aplítics de gra fi a molt fi amb biotita i, en alguns casos, moscovita<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_4.png" /> Gmgb2 — Monzogranits biotítics de gra mitjà a fi<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_5.png" /> Gmgb3 — Monzogranits biotítics de gra mitjà a groller<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_6.png" /> Gpg — Pòrfirs monzogranítics i leucomonzogranítics<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_7.png" /> Gpgd — Pòrfirs granodiorítics<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_8.png" /> mc_ZOgp — Roques de la unitat Zogp afectades pel metamorfisme de contacte varisc<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_9.png" /> PEBp1 — Gresos arcòsics grisos<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_10.png" /> PEBp2 — Margues, limolites margoses i gresos grisos<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_11.png" /> PEBp3 — Gresos de gra fi i limolites margoses grises<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_12.png" /> PEILgb — Conglomerats i gresos vermells<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_13.png" /> PEIv — Gresos, conglomerats i lutites vermelles<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_14.png" /> PELb1 — Gresos arcòsics grisos<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_15.png" /> PELb2 — Gresos grisos, microconglomerats, calcarenites i margues laminades<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_16.png" /> PELg — Calcàries bioclàstiques amb nummulits, calcarenites i gresos grisos<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_17.png" /> PELgr — Gresos grisos i conglomerats<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_18.png" /> PPTm — Lutites vermelles, gresos i conglomerats<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_2_19.png" /> ZOgp — Pelites grises amb intercalacions de gresos de gra fi<br />' });
var format_DipsitsQuaternarisiMaterialsSuperficials_3 = new ol.format.GeoJSON();
var features_DipsitsQuaternarisiMaterialsSuperficials_3 = format_DipsitsQuaternarisiMaterialsSuperficials_3.readFeatures(json_DipsitsQuaternarisiMaterialsSuperficials_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DipsitsQuaternarisiMaterialsSuperficials_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DipsitsQuaternarisiMaterialsSuperficials_3.addFeatures(features_DipsitsQuaternarisiMaterialsSuperficials_3);
var lyr_DipsitsQuaternarisiMaterialsSuperficials_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DipsitsQuaternarisiMaterialsSuperficials_3, 
                style: style_DipsitsQuaternarisiMaterialsSuperficials_3,
                popuplayertitle: 'Dipòsits Quaternaris i Materials Superficials',
                interactive: true,
    title: 'Dipòsits Quaternaris i Materials Superficials<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_0.png" /> QHc — Argiles, llims i sorres i graves<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_1.png" /> QHcd0 — Graves amb sorres i llims<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_2.png" /> QHec — Graves, sorres i llims<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_3.png" /> QHeg — Blocs i graves<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_4.png" /> QHt0 — Blocs, graves i sorres<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_5.png" /> QHt1 — Graves, sorres i llims<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_6.png" /> QPHc — Llims i sorres<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_7.png" /> QPHg — Sorres i llims<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_8.png" /> QPHt — Graves i blocs<br />\
    <img src="styles/legend/DipsitsQuaternarisiMaterialsSuperficials_3_9.png" /> QPHtg — Blocs, graves i sorres<br />' });
var format_ContactesGeneralsiIntrusius_4 = new ol.format.GeoJSON();
var features_ContactesGeneralsiIntrusius_4 = format_ContactesGeneralsiIntrusius_4.readFeatures(json_ContactesGeneralsiIntrusius_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContactesGeneralsiIntrusius_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContactesGeneralsiIntrusius_4.addFeatures(features_ContactesGeneralsiIntrusius_4);
var lyr_ContactesGeneralsiIntrusius_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContactesGeneralsiIntrusius_4,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_ContactesGeneralsiIntrusius_4,
                popuplayertitle: 'Contactes Generals i Intrusius',
                interactive: false,
    title: 'Contactes Generals i Intrusius<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_0.png" /> 3101 Contacte concordant<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_1.png" /> 3103 Contacte transicional<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_2.png" /> 3105 Contacte discordant<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_3.png" /> 3201 Contacte intrusiu<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_4.png" /> 3202 Contacte intrusiu en posició suposada<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_5.png" /> 3203 Contacte igni transicional<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_6.png" /> 3206 Contacte igni heterogeni<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_7.png" /> 3301 Límit d\'aurèola de metamorfisme de contacte<br />\
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_8.png" /> 3404 Contacte hidrotermal en posició suposada<br />' });
var format_ContactesDiscordantsiEsllavissaments_5 = new ol.format.GeoJSON();
var features_ContactesDiscordantsiEsllavissaments_5 = format_ContactesDiscordantsiEsllavissaments_5.readFeatures(json_ContactesDiscordantsiEsllavissaments_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContactesDiscordantsiEsllavissaments_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContactesDiscordantsiEsllavissaments_5.addFeatures(features_ContactesDiscordantsiEsllavissaments_5);
var lyr_ContactesDiscordantsiEsllavissaments_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContactesDiscordantsiEsllavissaments_5,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_ContactesDiscordantsiEsllavissaments_5,
                popuplayertitle: 'Contactes Discordants i Esllavissaments',
                interactive: false,
    title: 'Contactes Discordants i Esllavissaments<br />\
    <img src="styles/legend/ContactesDiscordantsiEsllavissaments_5_0.png" /> 3105 Contacte discordant<br />\
    <img src="styles/legend/ContactesDiscordantsiEsllavissaments_5_1.png" /> 3108 Contacte per esllavissament gravitacional<br />' });
var format_GeomorfolgicadeVessants_6 = new ol.format.GeoJSON();
var features_GeomorfolgicadeVessants_6 = format_GeomorfolgicadeVessants_6.readFeatures(json_GeomorfolgicadeVessants_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorfolgicadeVessants_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorfolgicadeVessants_6.addFeatures(features_GeomorfolgicadeVessants_6);
var lyr_GeomorfolgicadeVessants_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorfolgicadeVessants_6,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_GeomorfolgicadeVessants_6,
                popuplayertitle: 'Geomorfològica de Vessants',
                interactive: false,
    title: 'Geomorfològica de Vessants<br />\
    <img src="styles/legend/GeomorfolgicadeVessants_6_0.png" /> tn Triangles negres (pendent dels ventalls al·luvials i cons de dejecció)<br />\
    <img src="styles/legend/GeomorfolgicadeVessants_6_1.png" /> tt Triangles transparents (pendent dels glacis)<br />' });
var format_Sentitdemoviment_7 = new ol.format.GeoJSON();
var features_Sentitdemoviment_7 = format_Sentitdemoviment_7.readFeatures(json_Sentitdemoviment_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentitdemoviment_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentitdemoviment_7.addFeatures(features_Sentitdemoviment_7);
var lyr_Sentitdemoviment_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentitdemoviment_7,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_Sentitdemoviment_7,
                popuplayertitle: 'Sentit de moviment',
                interactive: false,
    title: 'Sentit de moviment<br />\
    <img src="styles/legend/Sentitdemoviment_7_0.png" /> 6105 Sentit de moviment de material desplaçat (pendent màxim)<br />' });
var format_ElementsAntrpicsiZonesModificades_8 = new ol.format.GeoJSON();
var features_ElementsAntrpicsiZonesModificades_8 = format_ElementsAntrpicsiZonesModificades_8.readFeatures(json_ElementsAntrpicsiZonesModificades_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElementsAntrpicsiZonesModificades_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElementsAntrpicsiZonesModificades_8.addFeatures(features_ElementsAntrpicsiZonesModificades_8);
var lyr_ElementsAntrpicsiZonesModificades_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElementsAntrpicsiZonesModificades_8, 
                style: style_ElementsAntrpicsiZonesModificades_8,
                popuplayertitle: 'Elements Antròpics i Zones Modificades',
                interactive: false,
    title: 'Elements Antròpics i Zones Modificades<br />\
    <img src="styles/legend/ElementsAntrpicsiZonesModificades_8_0.png" /> Aoh<br />' });
var format_Cabussaments_9 = new ol.format.GeoJSON();
var features_Cabussaments_9 = format_Cabussaments_9.readFeatures(json_Cabussaments_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabussaments_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabussaments_9.addFeatures(features_Cabussaments_9);
var lyr_Cabussaments_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cabussaments_9,
                style: style_Cabussaments_9,
                popuplayertitle: 'Cabussaments',
                interactive: false,
    title: 'Cabussaments<br />\
    <img src="styles/legend/Cabussaments_9_0.png" /> 1111 Cabussament de l\'estratificació<br />\
    <img src="styles/legend/Cabussaments_9_1.png" /> 1121 Cabussament de la foliació regional varisca<br />' });
var format_Extraccions_10 = new ol.format.GeoJSON();
var features_Extraccions_10 = format_Extraccions_10.readFeatures(json_Extraccions_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extraccions_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extraccions_10.addFeatures(features_Extraccions_10);
var lyr_Extraccions_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extraccions_10,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_Extraccions_10,
                popuplayertitle: 'Extraccions',
                interactive: false,
    title: 'Extraccions<br />\
    <img src="styles/legend/Extraccions_10_0.png" /> 2401 Extracció a cel obert<br />\
    <img src="styles/legend/Extraccions_10_1.png" /> 2403 Extracció en galeria<br />' });
var format_TipusiNaturalesaLitolgica_11 = new ol.format.GeoJSON();
var features_TipusiNaturalesaLitolgica_11 = format_TipusiNaturalesaLitolgica_11.readFeatures(json_TipusiNaturalesaLitolgica_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipusiNaturalesaLitolgica_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipusiNaturalesaLitolgica_11.addFeatures(features_TipusiNaturalesaLitolgica_11);
var lyr_TipusiNaturalesaLitolgica_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipusiNaturalesaLitolgica_11, 
                style: style_TipusiNaturalesaLitolgica_11,
                popuplayertitle: 'Tipus i Naturalesa Litològica',
                interactive: true,
    title: 'Tipus i Naturalesa Litològica<br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_11_0.png" /> CARBONATAT<br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_11_1.png" /> CARBONATAT <br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_11_2.png" /> IGNEA_ACIDA<br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_11_3.png" /> METAMORFICA<br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_11_4.png" /> SILICICLASTIC<br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_11_5.png" /> SILICICLASTIC <br />' });
var format_Zonesconsideradesdinteresgeologic_12 = new ol.format.GeoJSON();
var features_Zonesconsideradesdinteresgeologic_12 = format_Zonesconsideradesdinteresgeologic_12.readFeatures(json_Zonesconsideradesdinteresgeologic_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesconsideradesdinteresgeologic_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesconsideradesdinteresgeologic_12.addFeatures(features_Zonesconsideradesdinteresgeologic_12);
var lyr_Zonesconsideradesdinteresgeologic_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesconsideradesdinteresgeologic_12, 
                style: style_Zonesconsideradesdinteresgeologic_12,
                popuplayertitle: 'Zones considerades d\'interesgeologic',
                interactive: true,
    title: 'Zones considerades d\'interesgeologic<br />\
    <img src="styles/legend/Zonesconsideradesdinteresgeologic_12_0.png" /> Espai d\'Interès Geològic<br />\
    <img src="styles/legend/Zonesconsideradesdinteresgeologic_12_1.png" /> Geòtop inclòs en geozona<br />' });
var format_Falles_13 = new ol.format.GeoJSON();
var features_Falles_13 = format_Falles_13.readFeatures(json_Falles_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Falles_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falles_13.addFeatures(features_Falles_13);
var lyr_Falles_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falles_13,
maxResolution:42.00669922839295,
 minResolution:0.00028004466152261963,

                style: style_Falles_13,
                popuplayertitle: 'Falles',
                interactive: false,
    title: 'Falles<br />\
    <img src="styles/legend/Falles_13_0.png" /> 4201 Falla normal<br />' });
var format_ToponimiaiNomsgeogrfics_14 = new ol.format.GeoJSON();
var features_ToponimiaiNomsgeogrfics_14 = format_ToponimiaiNomsgeogrfics_14.readFeatures(json_ToponimiaiNomsgeogrfics_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ToponimiaiNomsgeogrfics_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToponimiaiNomsgeogrfics_14.addFeatures(features_ToponimiaiNomsgeogrfics_14);
var lyr_ToponimiaiNomsgeogrfics_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ToponimiaiNomsgeogrfics_14, 
                style: style_ToponimiaiNomsgeogrfics_14,
                popuplayertitle: 'Toponimia i Noms geogràfics',
                interactive: false,
    title: 'Toponimia i Noms geogràfics<br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_0.png" /> [1] Elevacions del terreny en general (massís, serra, turó, muntanya, cim...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_1.png" /> [2] Depressions del terreny en general (circ, coll, vall, conca, congost, pas...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_2.png" /> [3] Altres elements de relleu terrestre (espadat, pla, cova...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_3.png" /> [4] Indrets i paratges (camp, partida, bosc, paratges en general...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_4.png" /> [5] Cursos d’aigua (riu, riera, torrent, canal, rec, naixement de riu, font...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_5.png" /> [6] Masses d’aigua (llac, estany, aiguamoll, badia, cala, pantà, bassa, dipòsit, pou...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_6.png" /> [8] Vies de comunicació i transport (carretera, camí, ferrocarril, transport per cable...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_7.png" /> [9] Caps de municipi (o d’altres entitats politicoadministratives)<br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_8.png" /> [10] Altres ens de poblament concentrat (poble, veïnat, barriada, urbanització...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_9.png" /> [11] Components de trama urbana (barri, carrer, plaça...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_10.png" /> [12] Poblament disseminat, indústria (casa, mas, bloc d\'apartaments, granja, hivernacle, fàbrica, central d’energia, mina, salina, abocador...)<br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_11.png" /> [13] Serveis comunitaris (administració, comerç, docència, sanitat, esport, lleure...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_12.png" /> [14] Elements d’interès historicocultural (castell, monument, monestir, església...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_13.png" /> [15] Estructures annexes a transport i obres hidràuliques (aeroport, peatge, pont, túnel, port, moll, escullera, presa...) <br />\
    <img src="styles/legend/ToponimiaiNomsgeogrfics_14_14.png" /> [17] Referències a termes municipals (o altres entitats politicoadministratives)<br />' });
var format_Carbesdenivell_15 = new ol.format.GeoJSON();
var features_Carbesdenivell_15 = format_Carbesdenivell_15.readFeatures(json_Carbesdenivell_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carbesdenivell_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carbesdenivell_15.addFeatures(features_Carbesdenivell_15);
var lyr_Carbesdenivell_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carbesdenivell_15, 
                style: style_Carbesdenivell_15,
                popuplayertitle: 'Carbes de nivell ',
                interactive: false,
    title: 'Carbes de nivell <br />\
    <img src="styles/legend/Carbesdenivell_15_0.png" /> [mes] corba de nivell mestra<br />\
    <img src="styles/legend/Carbesdenivell_15_1.png" /> [sen] corba de nivell senzilla<br />\
    <img src="styles/legend/Carbesdenivell_15_2.png" /> [mgb] marge superior de bancal<br />\
    <img src="styles/legend/Carbesdenivell_15_3.png" /> [dmt] desmunt<br />' });
var format_Contruccions_16 = new ol.format.GeoJSON();
var features_Contruccions_16 = format_Contruccions_16.readFeatures(json_Contruccions_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contruccions_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contruccions_16.addFeatures(features_Contruccions_16);
var lyr_Contruccions_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contruccions_16, 
                style: style_Contruccions_16,
                popuplayertitle: 'Contruccions',
                interactive: false,
    title: 'Contruccions<br />\
    <img src="styles/legend/Contruccions_16_0.png" /> [edi] edificació<br />\
    <img src="styles/legend/Contruccions_16_1.png" /> [dip] dipòsit cobert<br />\
    <img src="styles/legend/Contruccions_16_2.png" /> [hiv] hivernacle<br />\
    <img src="styles/legend/Contruccions_16_3.png" /> [ind] industria<br />\
    <img src="styles/legend/Contruccions_16_4.png" /> [prt] parterre<br />\
    <img src="styles/legend/Contruccions_16_5.png" /> [tpn] tauler de pont<br />\
    <img src="styles/legend/Contruccions_16_6.png" /> [pas] passarel·la<br />\
    <img src="styles/legend/Contruccions_16_7.png" /> [ces] altres tipus de camps d’esports<br />' });
var format_HidrografiaPoligons_17 = new ol.format.GeoJSON();
var features_HidrografiaPoligons_17 = format_HidrografiaPoligons_17.readFeatures(json_HidrografiaPoligons_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HidrografiaPoligons_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidrografiaPoligons_17.addFeatures(features_HidrografiaPoligons_17);
var lyr_HidrografiaPoligons_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HidrografiaPoligons_17, 
                style: style_HidrografiaPoligons_17,
                popuplayertitle: 'Hidrografia Poligons',
                interactive: false,
    title: 'Hidrografia Poligons<br />\
    <img src="styles/legend/HidrografiaPoligons_17_0.png" /> bas<br />\
    <img src="styles/legend/HidrografiaPoligons_17_1.png" /> emb<br />\
    <img src="styles/legend/HidrografiaPoligons_17_2.png" /> flu<br />\
    <img src="styles/legend/HidrografiaPoligons_17_3.png" /> lla<br />\
    <img src="styles/legend/HidrografiaPoligons_17_4.png" /> pis<br />\
    <img src="styles/legend/HidrografiaPoligons_17_5.png" /> pre<br />\
    <img src="styles/legend/HidrografiaPoligons_17_6.png" /> ram<br />\
    <img src="styles/legend/HidrografiaPoligons_17_7.png" /> res<br />\
    <img src="styles/legend/HidrografiaPoligons_17_8.png" /> <br />' });
var format_Xarxaviria_18 = new ol.format.GeoJSON();
var features_Xarxaviria_18 = format_Xarxaviria_18.readFeatures(json_Xarxaviria_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xarxaviria_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xarxaviria_18.addFeatures(features_Xarxaviria_18);
var lyr_Xarxaviria_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Xarxaviria_18, 
                style: style_Xarxaviria_18,
                popuplayertitle: 'Xarxa viària ',
                interactive: false,
    title: 'Xarxa viària <br />\
    <img src="styles/legend/Xarxaviria_18_0.png" /> [mca] marge de camí<br />\
    <img src="styles/legend/Xarxaviria_18_1.png" /> [mvi] marge de vial revestit<br />\
    <img src="styles/legend/Xarxaviria_18_2.png" /> [cor] corriol<br />\
    <img src="styles/legend/Xarxaviria_18_3.png" /> [eix] eix vial<br />\
    <img src="styles/legend/Xarxaviria_18_4.png" /> [cnx] connexió<br />' });
var format_HidrografiaLniesRieresiRius_19 = new ol.format.GeoJSON();
var features_HidrografiaLniesRieresiRius_19 = format_HidrografiaLniesRieresiRius_19.readFeatures(json_HidrografiaLniesRieresiRius_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HidrografiaLniesRieresiRius_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidrografiaLniesRieresiRius_19.addFeatures(features_HidrografiaLniesRieresiRius_19);
var lyr_HidrografiaLniesRieresiRius_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HidrografiaLniesRieresiRius_19,
maxResolution:28.004746196923488,
 
                style: style_HidrografiaLniesRieresiRius_19,
                popuplayertitle: 'Hidrografia (Línies / Rieres i Rius)',
                interactive: false,
    title: 'Hidrografia (Línies / Rieres i Rius)<br />\
    <img src="styles/legend/HidrografiaLniesRieresiRius_19_0.png" /> [can] canal, rec, séquia<br />\
    <img src="styles/legend/HidrografiaLniesRieresiRius_19_1.png" /> [flu] curs fluvial<br />\
    <img src="styles/legend/HidrografiaLniesRieresiRius_19_2.png" /> [res] resclosa<br />' });
var lyr_Cobertesdelsl_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cobertes del sòl<br />\
    <img src="styles/legend/Cobertesdelsl_20_0.png" /> 0<br />\
    <img src="styles/legend/Cobertesdelsl_20_1.png" /> Aigua<br />\
    <img src="styles/legend/Cobertesdelsl_20_2.png" /> Aigua<br />\
    <img src="styles/legend/Cobertesdelsl_20_3.png" /> Congestes<br />\
    <img src="styles/legend/Cobertesdelsl_20_4.png" /> Sorrals<br />\
    <img src="styles/legend/Cobertesdelsl_20_5.png" /> Vegetació escassa o nula<br />\
    <img src="styles/legend/Cobertesdelsl_20_6.png" /> Vegatació zones humides<br />\
    <img src="styles/legend/Cobertesdelsl_20_7.png" /> Prats de terra baixa<br />\
    <img src="styles/legend/Cobertesdelsl_20_8.png" /> Prats de terra mitjana<br />\
    <img src="styles/legend/Cobertesdelsl_20_9.png" /> Prats supraforestals<br />\
    <img src="styles/legend/Cobertesdelsl_20_10.png" /> Matollars<br />\
    <img src="styles/legend/Cobertesdelsl_20_11.png" /> Boscos aciculifolis<br />\
    <img src="styles/legend/Cobertesdelsl_20_12.png" /> Boscos esclerofiles<br />\
    <img src="styles/legend/Cobertesdelsl_20_13.png" /> Boscos caducifolis<br />\
    <img src="styles/legend/Cobertesdelsl_20_14.png" /> Zones cremades<br />\
    <img src="styles/legend/Cobertesdelsl_20_15.png" /> Conrreus herbacis de seca<br />\
    <img src="styles/legend/Cobertesdelsl_20_16.png" /> Conrreus herbacis de regadiu<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cobertesdelsl_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [264294.408429, 5155118.638593, 273790.438854, 5160604.841431]
        })
    });
var format_ParadesP_21 = new ol.format.GeoJSON();
var features_ParadesP_21 = format_ParadesP_21.readFeatures(json_ParadesP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadesP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadesP_21.addFeatures(features_ParadesP_21);
var lyr_ParadesP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadesP_21, 
                style: style_ParadesP_21,
                popuplayertitle: 'Parades-P',
                interactive: true,
    title: 'Parades-P<br />\
    <img src="styles/legend/ParadesP_21_0.png" /> A1. Pissarrres del Cambrordovicià<br />\
    <img src="styles/legend/ParadesP_21_1.png" /> P1. Monzogranit i pòrfirs<br />\
    <img src="styles/legend/ParadesP_21_2.png" /> P10. Superfície estructural amb diàclasis<br />\
    <img src="styles/legend/ParadesP_21_3.png" /> P11. Margues, Fm. Coll de Malla<br />\
    <img src="styles/legend/ParadesP_21_4.png" /> P12. Gresos, Fm. Barcons<br />\
    <img src="styles/legend/ParadesP_21_5.png" /> P2. Cantera de Sauló<br />\
    <img src="styles/legend/ParadesP_21_6.png" /> P3. Argiles del Paleocè, Fm. Mediona<br />\
    <img src="styles/legend/ParadesP_21_7.png" /> P4. Dipòsits de vessant (Quaternari)<br />\
    <img src="styles/legend/ParadesP_21_8.png" /> P5. Gresos i conglomerats vermells, Fm. Vilanova de Sau<br />\
    <img src="styles/legend/ParadesP_21_9.png" /> P6.Conglomerats, Fm. Romagats<br />\
    <img src="styles/legend/ParadesP_21_10.png" /> P7. Gresos grisos i vermells, Fm. Tavertet<br />\
    <img src="styles/legend/ParadesP_21_11.png" /> P8. Gresos grisos, Fm. Tavertet<br />\
    <img src="styles/legend/ParadesP_21_12.png" /> P9. Calcàries amb nummulits, Fm. Tavertet<br />\
    <img src="styles/legend/ParadesP_21_13.png" /> <br />' });
var format_RutaSauTaveret_22 = new ol.format.GeoJSON();
var features_RutaSauTaveret_22 = format_RutaSauTaveret_22.readFeatures(json_RutaSauTaveret_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutaSauTaveret_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutaSauTaveret_22.addFeatures(features_RutaSauTaveret_22);
var lyr_RutaSauTaveret_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutaSauTaveret_22, 
                style: style_RutaSauTaveret_22,
                popuplayertitle: 'Ruta Sau-Taveret',
                interactive: true,
                title: '<img src="styles/legend/RutaSauTaveret_22.png" /> Ruta Sau-Taveret'
            });
var format_Afloraments_23 = new ol.format.GeoJSON();
var features_Afloraments_23 = format_Afloraments_23.readFeatures(json_Afloraments_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afloraments_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afloraments_23.addFeatures(features_Afloraments_23);
var lyr_Afloraments_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Afloraments_23, 
                style: style_Afloraments_23,
                popuplayertitle: 'Afloraments ',
                interactive: true,
                title: '<img src="styles/legend/Afloraments_23.png" /> Afloraments '
            });
var format_Noms_24 = new ol.format.GeoJSON();
var features_Noms_24 = format_Noms_24.readFeatures(json_Noms_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noms_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noms_24.addFeatures(features_Noms_24);
var lyr_Noms_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noms_24, 
                style: style_Noms_24,
                popuplayertitle: 'Noms ',
                interactive: true,
                title: '<img src="styles/legend/Noms_24.png" /> Noms '
            });
var group_ITINERARISAUTAVERTET = new ol.layer.Group({
                                layers: [lyr_ParadesP_21,lyr_RutaSauTaveret_22,lyr_Afloraments_23,lyr_Noms_24,],
                                fold: 'close',
                                title: 'ITINERARI SAU TAVERTET'});
var group_TOPOGRAFIA = new ol.layer.Group({
                                layers: [lyr_ToponimiaiNomsgeogrfics_14,lyr_Carbesdenivell_15,lyr_Contruccions_16,lyr_HidrografiaPoligons_17,lyr_Xarxaviria_18,lyr_HidrografiaLniesRieresiRius_19,lyr_Cobertesdelsl_20,],
                                fold: 'close',
                                title: 'TOPOGRAFIA'});
var group_CAPESGEOLOGIQUES = new ol.layer.Group({
                                layers: [lyr_LitologiadelScolPaleozoiciMesozoic_2,lyr_DipsitsQuaternarisiMaterialsSuperficials_3,lyr_ContactesGeneralsiIntrusius_4,lyr_ContactesDiscordantsiEsllavissaments_5,lyr_GeomorfolgicadeVessants_6,lyr_Sentitdemoviment_7,lyr_ElementsAntrpicsiZonesModificades_8,lyr_Cabussaments_9,lyr_Extraccions_10,lyr_TipusiNaturalesaLitolgica_11,lyr_Zonesconsideradesdinteresgeologic_12,lyr_Falles_13,],
                                fold: 'close',
                                title: 'Capes Geològiques'});
var group_FONS = new ol.layer.Group({
                                layers: [lyr_Ortofotomapa3_0, lyr_Relleu_1],
                                fold: 'close',
                                title: 'FONS'});

lyr_Ortofotomapa3_0.setVisible(false);lyr_Relleu_1.setVisible(false);lyr_LitologiadelScolPaleozoiciMesozoic_2.setVisible(false);lyr_DipsitsQuaternarisiMaterialsSuperficials_3.setVisible(false);lyr_ContactesGeneralsiIntrusius_4.setVisible(false);lyr_ContactesDiscordantsiEsllavissaments_5.setVisible(false);lyr_GeomorfolgicadeVessants_6.setVisible(false);lyr_Sentitdemoviment_7.setVisible(false);lyr_ElementsAntrpicsiZonesModificades_8.setVisible(false);lyr_Cabussaments_9.setVisible(false);lyr_Extraccions_10.setVisible(false);lyr_TipusiNaturalesaLitolgica_11.setVisible(false);lyr_Zonesconsideradesdinteresgeologic_12.setVisible(false);lyr_Falles_13.setVisible(false);lyr_ToponimiaiNomsgeogrfics_14.setVisible(true);lyr_Carbesdenivell_15.setVisible(true);lyr_Contruccions_16.setVisible(true);lyr_HidrografiaPoligons_17.setVisible(true);lyr_Xarxaviria_18.setVisible(false);lyr_HidrografiaLniesRieresiRius_19.setVisible(false);lyr_Cobertesdelsl_20.setVisible(false);lyr_ParadesP_21.setVisible(true);lyr_RutaSauTaveret_22.setVisible(true);lyr_Afloraments_23.setVisible(false);lyr_Noms_24.setVisible(true);
var layersList = [group_FONS,group_TOPOGRAFIA,group_CAPESGEOLOGIQUES,group_ITINERARISAUTAVERTET];
lyr_LitologiadelScolPaleozoiciMesozoic_2.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_DipsitsQuaternarisiMaterialsSuperficials_3.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'TIPUS_DIP': 'TIPUS_DIP', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', });
lyr_ContactesGeneralsiIntrusius_4.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_ContactesDiscordantsiEsllavissaments_5.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_GeomorfolgicadeVessants_6.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Sentitdemoviment_7.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_ElementsAntrpicsiZonesModificades_8.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'EDAT': 'EDAT', });
lyr_Cabussaments_9.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'DIR': 'DIR', 'INCLIN': 'INCLIN', });
lyr_Extraccions_10.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'OBS': 'OBS', });
lyr_TipusiNaturalesaLitolgica_11.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_Zonesconsideradesdinteresgeologic_12.set('fieldAliases', {'fid': 'fid', 'AMENAC_ANT': 'AMENAC_ANT', 'AMENAC_NAT': 'AMENAC_NAT', 'ANY_DIAGN': 'ANY_DIAGN', 'CATEGORIA': 'CATEGORIA', 'CODI': 'CODI', 'CODI_GEOZO': 'CODI_GEOZO', 'CONT_GEOL': 'CONT_GEOL', 'DESCRIPCIO': 'DESCRIPCIO', 'DOMINI': 'DOMINI', 'DOMINI_MEC': 'DOMINI_MEC', 'EV_EST_CON': 'EV_EST_CON', 'FITXA_DESC': 'FITXA_DESC', 'FITXA_DIAG': 'FITXA_DIAG', 'FITXA_RESU': 'FITXA_RESU', 'IMPACT_ANT': 'IMPACT_ANT', 'IMPACT_NAT': 'IMPACT_NAT', 'INT_CIENT': 'INT_CIENT', 'INT_DIDACT': 'INT_DIDACT', 'INT_TURIST': 'INT_TURIST', 'NOM_ESPAI': 'NOM_ESPAI', 'NOM_GEOZON': 'NOM_GEOZON', 'N_GEOTOPS': 'N_GEOTOPS', 'OBJECTID': 'OBJECTID', 'PROCES_GEO': 'PROCES_GEO', 'R_DEG_ANT': 'R_DEG_ANT', 'R_DEG_NAT': 'R_DEG_NAT', 'S_DEG_ANT': 'S_DEG_ANT', 'S_DEG_NAT': 'S_DEG_NAT', 'TEMPS_GEOL': 'TEMPS_GEOL', 'TIPUS_ESPA': 'TIPUS_ESPA', 'TIPUS_INTE': 'TIPUS_INTE', 'TIPUS_ROCA': 'TIPUS_ROCA', 'UNITAT_REP': 'UNITAT_REP', });
lyr_Falles_13.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_ToponimiaiNomsgeogrfics_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'subtipus': 'subtipus', 'fontname': 'fontname', 'fontsize': 'fontsize', 'bold': 'bold', 'italic': 'italic', 'placement': 'placement', 'crlfpos1': 'crlfpos1', 'crlfpos2': 'crlfpos2', 'veralign': 'veralign', 'horalign': 'horalign', 'leading': 'leading', 'chrwidth': 'chrwidth', 'chrspacing': 'chrspacing', 'labeling': 'labeling', 'nom': 'nom', });
lyr_Carbesdenivell_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'z': 'z', });
lyr_Contruccions_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'estat': 'estat', 'altura': 'altura', 'nom': 'nom', });
lyr_HidrografiaPoligons_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'entorn': 'entorn', 'estat': 'estat', 'terreny': 'terreny', 'nom': 'nom', });
lyr_Xarxaviria_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'entorn': 'entorn', 'estat': 'estat', 'terreny': 'terreny', 'xarxa': 'xarxa', 'codivia': 'codivia', 'nom': 'nom', });
lyr_HidrografiaLniesRieresiRius_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'entorn': 'entorn', 'estat': 'estat', 'terreny': 'terreny', 'nom': 'nom', });
lyr_ParadesP_21.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Descripcio2': 'Descripcio2', });
lyr_RutaSauTaveret_22.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'DESCRIPCIO': 'DESCRIPCIO', 'longuitud': 'longuitud', });
lyr_Afloraments_23.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'name': 'name', 'latitud_final': 'latitud_final', 'longuitud_final': 'longuitud_final', 'Parada': 'Parada', });
lyr_Noms_24.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_LitologiadelScolPaleozoiciMesozoic_2.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': '', });
lyr_DipsitsQuaternarisiMaterialsSuperficials_3.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'TIPUS_DIP': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', });
lyr_ContactesGeneralsiIntrusius_4.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_ContactesDiscordantsiEsllavissaments_5.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_GeomorfolgicadeVessants_6.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_Sentitdemoviment_7.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_ElementsAntrpicsiZonesModificades_8.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'EDAT': 'TextEdit', });
lyr_Cabussaments_9.set('fieldImages', {'fid': 'Hidden', 'CODI_CAS': 'Hidden', 'DESCRIPCIO': 'Hidden', 'DIR': 'Hidden', 'INCLIN': 'Hidden', });
lyr_Extraccions_10.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'OBS': 'TextEdit', });
lyr_TipusiNaturalesaLitolgica_11.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Zonesconsideradesdinteresgeologic_12.set('fieldImages', {'fid': 'TextEdit', 'AMENAC_ANT': 'TextEdit', 'AMENAC_NAT': 'TextEdit', 'ANY_DIAGN': 'TextEdit', 'CATEGORIA': 'TextEdit', 'CODI': 'TextEdit', 'CODI_GEOZO': 'TextEdit', 'CONT_GEOL': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'DOMINI': 'TextEdit', 'DOMINI_MEC': 'TextEdit', 'EV_EST_CON': 'TextEdit', 'FITXA_DESC': 'TextEdit', 'FITXA_DIAG': 'TextEdit', 'FITXA_RESU': 'TextEdit', 'IMPACT_ANT': 'TextEdit', 'IMPACT_NAT': 'TextEdit', 'INT_CIENT': 'TextEdit', 'INT_DIDACT': 'TextEdit', 'INT_TURIST': 'TextEdit', 'NOM_ESPAI': 'TextEdit', 'NOM_GEOZON': 'TextEdit', 'N_GEOTOPS': 'Range', 'OBJECTID': 'TextEdit', 'PROCES_GEO': 'TextEdit', 'R_DEG_ANT': 'TextEdit', 'R_DEG_NAT': 'TextEdit', 'S_DEG_ANT': 'TextEdit', 'S_DEG_NAT': 'TextEdit', 'TEMPS_GEOL': 'TextEdit', 'TIPUS_ESPA': 'TextEdit', 'TIPUS_INTE': 'TextEdit', 'TIPUS_ROCA': 'TextEdit', 'UNITAT_REP': 'TextEdit', });
lyr_Falles_13.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_ToponimiaiNomsgeogrfics_14.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'subtipus': 'TextEdit', 'fontname': 'TextEdit', 'fontsize': 'TextEdit', 'bold': 'TextEdit', 'italic': 'TextEdit', 'placement': 'TextEdit', 'crlfpos1': 'TextEdit', 'crlfpos2': 'TextEdit', 'veralign': 'TextEdit', 'horalign': 'TextEdit', 'leading': 'TextEdit', 'chrwidth': 'TextEdit', 'chrspacing': 'TextEdit', 'labeling': 'TextEdit', 'nom': 'TextEdit', });
lyr_Carbesdenivell_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'z': 'TextEdit', });
lyr_Contruccions_16.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'estat': 'TextEdit', 'altura': 'TextEdit', 'nom': 'TextEdit', });
lyr_HidrografiaPoligons_17.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'entorn': 'TextEdit', 'estat': 'TextEdit', 'terreny': 'TextEdit', 'nom': 'TextEdit', });
lyr_Xarxaviria_18.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'entorn': 'TextEdit', 'estat': 'TextEdit', 'terreny': 'TextEdit', 'xarxa': 'TextEdit', 'codivia': 'TextEdit', 'nom': 'TextEdit', });
lyr_HidrografiaLniesRieresiRius_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'entorn': 'TextEdit', 'estat': 'TextEdit', 'terreny': 'TextEdit', 'nom': 'TextEdit', });
lyr_ParadesP_21.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Descripcio2': 'TextEdit', });
lyr_RutaSauTaveret_22.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'longuitud': 'TextEdit', });
lyr_Afloraments_23.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'DateTime', 'name': 'TextEdit', 'latitud_final': 'TextEdit', 'longuitud_final': 'TextEdit', 'Parada': 'TextEdit', });
lyr_Noms_24.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LitologiadelScolPaleozoiciMesozoic_2.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'ERA': 'header label - visible with data', 'PERIODE': 'header label - visible with data', 'EPOCA': 'header label - visible with data', 'EDAT': 'header label - visible with data', 'OBS_EDAT': 'no label', 'MET': 'header label - visible with data', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'header label - visible with data', });
lyr_DipsitsQuaternarisiMaterialsSuperficials_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'TIPUS_DIP': 'header label - visible with data', 'ERA': 'header label - visible with data', 'PERIODE': 'header label - visible with data', 'EPOCA': 'header label - visible with data', 'EDAT': 'header label - visible with data', });
lyr_ContactesGeneralsiIntrusius_4.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_ContactesDiscordantsiEsllavissaments_5.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_GeomorfolgicadeVessants_6.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'inline label - always visible', 'DESCRIPCIO': 'no label', });
lyr_Sentitdemoviment_7.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_ElementsAntrpicsiZonesModificades_8.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', 'EDAT': 'no label', });
lyr_Cabussaments_9.set('fieldLabels', {'fid': 'hidden field', 'CODI_CAS': 'hidden field', 'DESCRIPCIO': 'hidden field', 'DIR': 'hidden field', 'INCLIN': 'hidden field', });
lyr_Extraccions_10.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', 'OBS': 'no label', });
lyr_TipusiNaturalesaLitolgica_11.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', 'ERA': 'no label', 'PERIODE': 'no label', 'EPOCA': 'no label', 'EDAT': 'no label', 'OBS_EDAT': 'no label', 'MET': 'no label', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'header label - visible with data', });
lyr_Zonesconsideradesdinteresgeologic_12.set('fieldLabels', {'fid': 'no label', 'AMENAC_ANT': 'no label', 'AMENAC_NAT': 'no label', 'ANY_DIAGN': 'no label', 'CATEGORIA': 'no label', 'CODI': 'no label', 'CODI_GEOZO': 'no label', 'CONT_GEOL': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'DOMINI': 'no label', 'DOMINI_MEC': 'no label', 'EV_EST_CON': 'no label', 'FITXA_DESC': 'header label - visible with data', 'FITXA_DIAG': 'no label', 'FITXA_RESU': 'no label', 'IMPACT_ANT': 'no label', 'IMPACT_NAT': 'no label', 'INT_CIENT': 'no label', 'INT_DIDACT': 'no label', 'INT_TURIST': 'no label', 'NOM_ESPAI': 'no label', 'NOM_GEOZON': 'header label - visible with data', 'N_GEOTOPS': 'no label', 'OBJECTID': 'no label', 'PROCES_GEO': 'no label', 'R_DEG_ANT': 'no label', 'R_DEG_NAT': 'no label', 'S_DEG_ANT': 'no label', 'S_DEG_NAT': 'no label', 'TEMPS_GEOL': 'header label - visible with data', 'TIPUS_ESPA': 'no label', 'TIPUS_INTE': 'no label', 'TIPUS_ROCA': 'no label', 'UNITAT_REP': 'no label', });
lyr_Falles_13.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_ToponimiaiNomsgeogrfics_14.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'no label', 'tipus': 'no label', 'subtipus': 'no label', 'fontname': 'no label', 'fontsize': 'no label', 'bold': 'no label', 'italic': 'no label', 'placement': 'no label', 'crlfpos1': 'no label', 'crlfpos2': 'no label', 'veralign': 'no label', 'horalign': 'no label', 'leading': 'no label', 'chrwidth': 'no label', 'chrspacing': 'no label', 'labeling': 'no label', 'nom': 'no label', });
lyr_Carbesdenivell_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'inline label - always visible', 'z': 'no label', });
lyr_Contruccions_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'estat': 'no label', 'altura': 'no label', 'nom': 'no label', });
lyr_HidrografiaPoligons_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'header label - always visible', 'entorn': 'no label', 'estat': 'no label', 'terreny': 'no label', 'nom': 'no label', });
lyr_Xarxaviria_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'entorn': 'no label', 'estat': 'no label', 'terreny': 'no label', 'xarxa': 'no label', 'codivia': 'no label', 'nom': 'no label', });
lyr_HidrografiaLniesRieresiRius_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'entorn': 'hidden field', 'estat': 'no label', 'terreny': 'no label', 'nom': 'no label', });
lyr_ParadesP_21.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Descripcio2': 'no label', });
lyr_RutaSauTaveret_22.set('fieldLabels', {'fid': 'no label', 'NOM': 'no label', 'DESCRIPCIO': 'no label', 'longuitud': 'no label', });
lyr_Afloraments_23.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'name': 'header label - visible with data', 'latitud_final': 'no label', 'longuitud_final': 'no label', 'Parada': 'header label - visible with data', });
lyr_Noms_24.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Noms_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});