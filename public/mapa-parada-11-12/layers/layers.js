var wms_layers = [];

var lyr_satelit1112_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'satelit11-12<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/satelit1112_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [266243.815949, 5157980.259073, 267856.272589, 5158996.314812]
        })
    });
var format_P1112LitologiadelScolPaleozoiciMesozoic_1 = new ol.format.GeoJSON();
var features_P1112LitologiadelScolPaleozoiciMesozoic_1 = format_P1112LitologiadelScolPaleozoiciMesozoic_1.readFeatures(json_P1112LitologiadelScolPaleozoiciMesozoic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112LitologiadelScolPaleozoiciMesozoic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112LitologiadelScolPaleozoiciMesozoic_1.addFeatures(features_P1112LitologiadelScolPaleozoiciMesozoic_1);
var lyr_P1112LitologiadelScolPaleozoiciMesozoic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112LitologiadelScolPaleozoiciMesozoic_1, 
                style: style_P1112LitologiadelScolPaleozoiciMesozoic_1,
                popuplayertitle: 'P11-12 Litologia del Sòcol (Paleozoic i Mesozoic)',
                interactive: true,
    title: 'P11-12 Litologia del Sòcol (Paleozoic i Mesozoic)<br />\
    <img src="styles/legend/P1112LitologiadelScolPaleozoiciMesozoic_1_0.png" /> PEILgb<br />\
    <img src="styles/legend/P1112LitologiadelScolPaleozoiciMesozoic_1_1.png" /> PEIv<br />\
    <img src="styles/legend/P1112LitologiadelScolPaleozoiciMesozoic_1_2.png" /> PELb1<br />\
    <img src="styles/legend/P1112LitologiadelScolPaleozoiciMesozoic_1_3.png" /> PELb2<br />\
    <img src="styles/legend/P1112LitologiadelScolPaleozoiciMesozoic_1_4.png" /> PELg<br />\
    <img src="styles/legend/P1112LitologiadelScolPaleozoiciMesozoic_1_5.png" /> PELgr<br />' });
var format_P1112_ContactesDiscordantsiEsllavissaments_2 = new ol.format.GeoJSON();
var features_P1112_ContactesDiscordantsiEsllavissaments_2 = format_P1112_ContactesDiscordantsiEsllavissaments_2.readFeatures(json_P1112_ContactesDiscordantsiEsllavissaments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_ContactesDiscordantsiEsllavissaments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_ContactesDiscordantsiEsllavissaments_2.addFeatures(features_P1112_ContactesDiscordantsiEsllavissaments_2);
var lyr_P1112_ContactesDiscordantsiEsllavissaments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_ContactesDiscordantsiEsllavissaments_2,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_P1112_ContactesDiscordantsiEsllavissaments_2,
                popuplayertitle: 'P11-12_Contactes Discordants i Esllavissaments',
                interactive: false,
    title: 'P11-12_Contactes Discordants i Esllavissaments<br />\
    <img src="styles/legend/P1112_ContactesDiscordantsiEsllavissaments_2_0.png" /> 3105 Contacte discordant<br />' });
var format_P1112_ContactesGeneralsiIntrusius_3 = new ol.format.GeoJSON();
var features_P1112_ContactesGeneralsiIntrusius_3 = format_P1112_ContactesGeneralsiIntrusius_3.readFeatures(json_P1112_ContactesGeneralsiIntrusius_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_ContactesGeneralsiIntrusius_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_ContactesGeneralsiIntrusius_3.addFeatures(features_P1112_ContactesGeneralsiIntrusius_3);
var lyr_P1112_ContactesGeneralsiIntrusius_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_ContactesGeneralsiIntrusius_3,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style_P1112_ContactesGeneralsiIntrusius_3,
                popuplayertitle: 'P11-12_Contactes Generals i Intrusius',
                interactive: false,
    title: 'P11-12_Contactes Generals i Intrusius<br />\
    <img src="styles/legend/P1112_ContactesGeneralsiIntrusius_3_0.png" /> 3101 Contacte concordant<br />\
    <img src="styles/legend/P1112_ContactesGeneralsiIntrusius_3_1.png" /> 3103 Contacte transicional<br />' });
var format_P1112_DipsitsQuaternarisiMaterialsSuperficials_4 = new ol.format.GeoJSON();
var features_P1112_DipsitsQuaternarisiMaterialsSuperficials_4 = format_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.readFeatures(json_P1112_DipsitsQuaternarisiMaterialsSuperficials_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_DipsitsQuaternarisiMaterialsSuperficials_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.addFeatures(features_P1112_DipsitsQuaternarisiMaterialsSuperficials_4);
var lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_DipsitsQuaternarisiMaterialsSuperficials_4, 
                style: style_P1112_DipsitsQuaternarisiMaterialsSuperficials_4,
                popuplayertitle: 'P11-12_Dipòsits Quaternaris i Materials Superficials',
                interactive: true,
    title: 'P11-12_Dipòsits Quaternaris i Materials Superficials<br />\
    <img src="styles/legend/P1112_DipsitsQuaternarisiMaterialsSuperficials_4_0.png" /> QPHt<br />' });
var format_P1112_TipusiNaturalesaLitolgica_5 = new ol.format.GeoJSON();
var features_P1112_TipusiNaturalesaLitolgica_5 = format_P1112_TipusiNaturalesaLitolgica_5.readFeatures(json_P1112_TipusiNaturalesaLitolgica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_TipusiNaturalesaLitolgica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_TipusiNaturalesaLitolgica_5.addFeatures(features_P1112_TipusiNaturalesaLitolgica_5);
var lyr_P1112_TipusiNaturalesaLitolgica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_TipusiNaturalesaLitolgica_5, 
                style: style_P1112_TipusiNaturalesaLitolgica_5,
                popuplayertitle: 'P11-12_Tipus i Naturalesa Litològica',
                interactive: true,
    title: 'P11-12_Tipus i Naturalesa Litològica<br />\
    <img src="styles/legend/P1112_TipusiNaturalesaLitolgica_5_0.png" /> CARBONATAT<br />\
    <img src="styles/legend/P1112_TipusiNaturalesaLitolgica_5_1.png" /> SILICICLASTIC<br />\
    <img src="styles/legend/P1112_TipusiNaturalesaLitolgica_5_2.png" /> SILICICLASTIC <br />' });
var format_P1112_Zonesconsideradesdinteresgeologic_6 = new ol.format.GeoJSON();
var features_P1112_Zonesconsideradesdinteresgeologic_6 = format_P1112_Zonesconsideradesdinteresgeologic_6.readFeatures(json_P1112_Zonesconsideradesdinteresgeologic_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_Zonesconsideradesdinteresgeologic_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_Zonesconsideradesdinteresgeologic_6.addFeatures(features_P1112_Zonesconsideradesdinteresgeologic_6);
var lyr_P1112_Zonesconsideradesdinteresgeologic_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_Zonesconsideradesdinteresgeologic_6, 
                style: style_P1112_Zonesconsideradesdinteresgeologic_6,
                popuplayertitle: 'P11-12_Zones considerades d\'interesgeologic',
                interactive: true,
    title: 'P11-12_Zones considerades d\'interesgeologic<br />\
    <img src="styles/legend/P1112_Zonesconsideradesdinteresgeologic_6_0.png" /> Espai d\'Interès Geològic<br />\
    <img src="styles/legend/P1112_Zonesconsideradesdinteresgeologic_6_1.png" /> Geòtop inclòs en geozona<br />' });
var format_P1112_Carbesdenivell_7 = new ol.format.GeoJSON();
var features_P1112_Carbesdenivell_7 = format_P1112_Carbesdenivell_7.readFeatures(json_P1112_Carbesdenivell_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_Carbesdenivell_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_Carbesdenivell_7.addFeatures(features_P1112_Carbesdenivell_7);
var lyr_P1112_Carbesdenivell_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_Carbesdenivell_7, 
                style: style_P1112_Carbesdenivell_7,
                popuplayertitle: 'P11-12_Carbes de nivell',
                interactive: false,
    title: 'P11-12_Carbes de nivell' });
var format_P1112_Contruccions_8 = new ol.format.GeoJSON();
var features_P1112_Contruccions_8 = format_P1112_Contruccions_8.readFeatures(json_P1112_Contruccions_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_Contruccions_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_Contruccions_8.addFeatures(features_P1112_Contruccions_8);
var lyr_P1112_Contruccions_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_Contruccions_8, 
                style: style_P1112_Contruccions_8,
                popuplayertitle: 'P11-12_Contruccions',
                interactive: false,
    title: 'P11-12_Contruccions' });
var format_P1112_ToponimiaiNomsgeogrfics_9 = new ol.format.GeoJSON();
var features_P1112_ToponimiaiNomsgeogrfics_9 = format_P1112_ToponimiaiNomsgeogrfics_9.readFeatures(json_P1112_ToponimiaiNomsgeogrfics_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_ToponimiaiNomsgeogrfics_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_ToponimiaiNomsgeogrfics_9.addFeatures(features_P1112_ToponimiaiNomsgeogrfics_9);
var lyr_P1112_ToponimiaiNomsgeogrfics_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_ToponimiaiNomsgeogrfics_9, 
                style: style_P1112_ToponimiaiNomsgeogrfics_9,
                popuplayertitle: 'P11-12_Toponimia i Noms geogràfics',
                interactive: false,
    title: 'P11-12_Toponimia i Noms geogràfics' });
var format_P1112Tipusinaturalesalitologicav2_10 = new ol.format.GeoJSON();
var features_P1112Tipusinaturalesalitologicav2_10 = format_P1112Tipusinaturalesalitologicav2_10.readFeatures(json_P1112Tipusinaturalesalitologicav2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112Tipusinaturalesalitologicav2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112Tipusinaturalesalitologicav2_10.addFeatures(features_P1112Tipusinaturalesalitologicav2_10);
var lyr_P1112Tipusinaturalesalitologicav2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112Tipusinaturalesalitologicav2_10, 
                style: style_P1112Tipusinaturalesalitologicav2_10,
                popuplayertitle: 'P11-12 Tipus i naturalesa litologica v2',
                interactive: false,
    title: 'P11-12 Tipus i naturalesa litologica v2' });
var format_P1112_Afloraments_11 = new ol.format.GeoJSON();
var features_P1112_Afloraments_11 = format_P1112_Afloraments_11.readFeatures(json_P1112_Afloraments_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_Afloraments_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_Afloraments_11.addFeatures(features_P1112_Afloraments_11);
var lyr_P1112_Afloraments_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_Afloraments_11, 
                style: style_P1112_Afloraments_11,
                popuplayertitle: 'P11-12_Afloraments',
                interactive: false,
                title: 'P11-12_Afloraments'
            });
var format_P1112_ParadesP_12 = new ol.format.GeoJSON();
var features_P1112_ParadesP_12 = format_P1112_ParadesP_12.readFeatures(json_P1112_ParadesP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_ParadesP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_ParadesP_12.addFeatures(features_P1112_ParadesP_12);
var lyr_P1112_ParadesP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_ParadesP_12, 
                style: style_P1112_ParadesP_12,
                popuplayertitle: 'P11-12_Parades-P',
                interactive: false,
    title: 'P11-12_Parades-P' });
var format_P1112_RutaSauTaveret_13 = new ol.format.GeoJSON();
var features_P1112_RutaSauTaveret_13 = format_P1112_RutaSauTaveret_13.readFeatures(json_P1112_RutaSauTaveret_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1112_RutaSauTaveret_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1112_RutaSauTaveret_13.addFeatures(features_P1112_RutaSauTaveret_13);
var lyr_P1112_RutaSauTaveret_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1112_RutaSauTaveret_13, 
                style: style_P1112_RutaSauTaveret_13,
                popuplayertitle: 'P11-12_Ruta Sau-Taveret',
                interactive: false,
                title: 'P11-12_Ruta Sau-Taveret'
            });
var group_ITINERARISAUTAVERTET = new ol.layer.Group({
                                layers: [lyr_P1112_Afloraments_11,lyr_P1112_ParadesP_12,lyr_P1112_RutaSauTaveret_13,],
                                fold: 'close',
                                title: 'ITINERARI SAU TAVERTET'});
var group_TOPOGRAFIA = new ol.layer.Group({
                                layers: [lyr_P1112_Carbesdenivell_7,lyr_P1112_Contruccions_8,lyr_P1112_ToponimiaiNomsgeogrfics_9,lyr_P1112Tipusinaturalesalitologicav2_10,],
                                fold: 'close',
                                title: 'TOPOGRAFIA'});
var group_CAPESGEOLOGIQUES = new ol.layer.Group({
                                layers: [lyr_P1112LitologiadelScolPaleozoiciMesozoic_1,lyr_P1112_ContactesDiscordantsiEsllavissaments_2,lyr_P1112_ContactesGeneralsiIntrusius_3,lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4,lyr_P1112_TipusiNaturalesaLitolgica_5,lyr_P1112_Zonesconsideradesdinteresgeologic_6,],
                                fold: 'close',
                                title: 'CAPES GEOLOGIQUES '});

lyr_satelit1112_0.setVisible(false);lyr_P1112LitologiadelScolPaleozoiciMesozoic_1.setVisible(true);lyr_P1112_ContactesDiscordantsiEsllavissaments_2.setVisible(false);lyr_P1112_ContactesGeneralsiIntrusius_3.setVisible(false);lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.setVisible(false);lyr_P1112_TipusiNaturalesaLitolgica_5.setVisible(false);lyr_P1112_Zonesconsideradesdinteresgeologic_6.setVisible(false);lyr_P1112_Carbesdenivell_7.setVisible(true);lyr_P1112_Contruccions_8.setVisible(true);lyr_P1112_ToponimiaiNomsgeogrfics_9.setVisible(true);lyr_P1112Tipusinaturalesalitologicav2_10.setVisible(false);lyr_P1112_Afloraments_11.setVisible(true);lyr_P1112_ParadesP_12.setVisible(true);lyr_P1112_RutaSauTaveret_13.setVisible(true);
lyr_P1112LitologiadelScolPaleozoiciMesozoic_1.setOpacity(0.5);
lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.setOpacity(0.5);
lyr_P1112_TipusiNaturalesaLitolgica_5.setOpacity(0.5);
lyr_P1112_Zonesconsideradesdinteresgeologic_6.setOpacity(0.5);
lyr_P1112Tipusinaturalesalitologicav2_10.setOpacity(0.5);
var layersList = [lyr_satelit1112_0,group_CAPESGEOLOGIQUES,group_TOPOGRAFIA,group_ITINERARISAUTAVERTET];
lyr_P1112LitologiadelScolPaleozoiciMesozoic_1.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_P1112_ContactesDiscordantsiEsllavissaments_2.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_P1112_ContactesGeneralsiIntrusius_3.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'TIPUS_DIP': 'TIPUS_DIP', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', });
lyr_P1112_TipusiNaturalesaLitolgica_5.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_P1112_Zonesconsideradesdinteresgeologic_6.set('fieldAliases', {'fid': 'fid', 'AMENAC_ANT': 'AMENAC_ANT', 'AMENAC_NAT': 'AMENAC_NAT', 'ANY_DIAGN': 'ANY_DIAGN', 'CATEGORIA': 'CATEGORIA', 'CODI': 'CODI', 'CODI_GEOZO': 'CODI_GEOZO', 'CONT_GEOL': 'CONT_GEOL', 'DESCRIPCIO': 'DESCRIPCIO', 'DOMINI': 'DOMINI', 'DOMINI_MEC': 'DOMINI_MEC', 'EV_EST_CON': 'EV_EST_CON', 'FITXA_DESC': 'FITXA_DESC', 'FITXA_DIAG': 'FITXA_DIAG', 'FITXA_RESU': 'FITXA_RESU', 'IMPACT_ANT': 'IMPACT_ANT', 'IMPACT_NAT': 'IMPACT_NAT', 'INT_CIENT': 'INT_CIENT', 'INT_DIDACT': 'INT_DIDACT', 'INT_TURIST': 'INT_TURIST', 'NOM_ESPAI': 'NOM_ESPAI', 'NOM_GEOZON': 'NOM_GEOZON', 'N_GEOTOPS': 'N_GEOTOPS', 'OBJECTID': 'OBJECTID', 'PROCES_GEO': 'PROCES_GEO', 'R_DEG_ANT': 'R_DEG_ANT', 'R_DEG_NAT': 'R_DEG_NAT', 'S_DEG_ANT': 'S_DEG_ANT', 'S_DEG_NAT': 'S_DEG_NAT', 'TEMPS_GEOL': 'TEMPS_GEOL', 'TIPUS_ESPA': 'TIPUS_ESPA', 'TIPUS_INTE': 'TIPUS_INTE', 'TIPUS_ROCA': 'TIPUS_ROCA', 'UNITAT_REP': 'UNITAT_REP', });
lyr_P1112_Carbesdenivell_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'z': 'z', });
lyr_P1112_Contruccions_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'estat': 'estat', 'altura': 'altura', 'nom': 'nom', });
lyr_P1112_ToponimiaiNomsgeogrfics_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'subtipus': 'subtipus', 'fontname': 'fontname', 'fontsize': 'fontsize', 'bold': 'bold', 'italic': 'italic', 'placement': 'placement', 'crlfpos1': 'crlfpos1', 'crlfpos2': 'crlfpos2', 'veralign': 'veralign', 'horalign': 'horalign', 'leading': 'leading', 'chrwidth': 'chrwidth', 'chrspacing': 'chrspacing', 'labeling': 'labeling', 'nom': 'nom', });
lyr_P1112Tipusinaturalesalitologicav2_10.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_P1112_Afloraments_11.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'name': 'name', 'latitud_final': 'latitud_final', 'longuitud_final': 'longuitud_final', 'Parada': 'Parada', });
lyr_P1112_ParadesP_12.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Descripcio2': 'Descripcio2', });
lyr_P1112_RutaSauTaveret_13.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'DESCRIPCIO': 'DESCRIPCIO', 'longuitud': 'longuitud', });
lyr_P1112LitologiadelScolPaleozoiciMesozoic_1.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_P1112_ContactesDiscordantsiEsllavissaments_2.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_P1112_ContactesGeneralsiIntrusius_3.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'TIPUS_DIP': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', });
lyr_P1112_TipusiNaturalesaLitolgica_5.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_P1112_Zonesconsideradesdinteresgeologic_6.set('fieldImages', {'fid': 'TextEdit', 'AMENAC_ANT': 'TextEdit', 'AMENAC_NAT': 'TextEdit', 'ANY_DIAGN': 'TextEdit', 'CATEGORIA': 'TextEdit', 'CODI': 'TextEdit', 'CODI_GEOZO': 'TextEdit', 'CONT_GEOL': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'DOMINI': 'TextEdit', 'DOMINI_MEC': 'TextEdit', 'EV_EST_CON': 'TextEdit', 'FITXA_DESC': 'TextEdit', 'FITXA_DIAG': 'TextEdit', 'FITXA_RESU': 'TextEdit', 'IMPACT_ANT': 'TextEdit', 'IMPACT_NAT': 'TextEdit', 'INT_CIENT': 'TextEdit', 'INT_DIDACT': 'TextEdit', 'INT_TURIST': 'TextEdit', 'NOM_ESPAI': 'TextEdit', 'NOM_GEOZON': 'TextEdit', 'N_GEOTOPS': 'Range', 'OBJECTID': 'TextEdit', 'PROCES_GEO': 'TextEdit', 'R_DEG_ANT': 'TextEdit', 'R_DEG_NAT': 'TextEdit', 'S_DEG_ANT': 'TextEdit', 'S_DEG_NAT': 'TextEdit', 'TEMPS_GEOL': 'TextEdit', 'TIPUS_ESPA': 'TextEdit', 'TIPUS_INTE': 'TextEdit', 'TIPUS_ROCA': 'TextEdit', 'UNITAT_REP': 'TextEdit', });
lyr_P1112_Carbesdenivell_7.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'z': 'TextEdit', });
lyr_P1112_Contruccions_8.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'estat': 'TextEdit', 'altura': 'TextEdit', 'nom': 'TextEdit', });
lyr_P1112_ToponimiaiNomsgeogrfics_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'subtipus': 'TextEdit', 'fontname': 'TextEdit', 'fontsize': 'TextEdit', 'bold': 'TextEdit', 'italic': 'TextEdit', 'placement': 'TextEdit', 'crlfpos1': 'TextEdit', 'crlfpos2': 'TextEdit', 'veralign': 'TextEdit', 'horalign': 'TextEdit', 'leading': 'TextEdit', 'chrwidth': 'TextEdit', 'chrspacing': 'TextEdit', 'labeling': 'TextEdit', 'nom': 'TextEdit', });
lyr_P1112Tipusinaturalesalitologicav2_10.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_P1112_Afloraments_11.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'DateTime', 'name': 'TextEdit', 'latitud_final': 'TextEdit', 'longuitud_final': 'TextEdit', 'Parada': 'TextEdit', });
lyr_P1112_ParadesP_12.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Descripcio2': 'TextEdit', });
lyr_P1112_RutaSauTaveret_13.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'longuitud': 'TextEdit', });
lyr_P1112LitologiadelScolPaleozoiciMesozoic_1.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'ERA': 'header label - visible with data', 'PERIODE': 'header label - visible with data', 'EPOCA': 'header label - visible with data', 'EDAT': 'header label - visible with data', 'OBS_EDAT': 'no label', 'MET': 'no label', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'no label', });
lyr_P1112_ContactesDiscordantsiEsllavissaments_2.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_P1112_ContactesGeneralsiIntrusius_3.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_P1112_DipsitsQuaternarisiMaterialsSuperficials_4.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'TIPUS_DIP': 'no label', 'ERA': 'header label - visible with data', 'PERIODE': 'header label - visible with data', 'EPOCA': 'header label - visible with data', 'EDAT': 'header label - visible with data', });
lyr_P1112_TipusiNaturalesaLitolgica_5.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'ERA': 'no label', 'PERIODE': 'no label', 'EPOCA': 'no label', 'EDAT': 'no label', 'OBS_EDAT': 'no label', 'MET': 'no label', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'header label - visible with data', });
lyr_P1112_Zonesconsideradesdinteresgeologic_6.set('fieldLabels', {'fid': 'no label', 'AMENAC_ANT': 'no label', 'AMENAC_NAT': 'no label', 'ANY_DIAGN': 'no label', 'CATEGORIA': 'no label', 'CODI': 'no label', 'CODI_GEOZO': 'no label', 'CONT_GEOL': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'DOMINI': 'no label', 'DOMINI_MEC': 'no label', 'EV_EST_CON': 'no label', 'FITXA_DESC': 'header label - visible with data', 'FITXA_DIAG': 'no label', 'FITXA_RESU': 'no label', 'IMPACT_ANT': 'no label', 'IMPACT_NAT': 'no label', 'INT_CIENT': 'no label', 'INT_DIDACT': 'no label', 'INT_TURIST': 'no label', 'NOM_ESPAI': 'no label', 'NOM_GEOZON': 'header label - visible with data', 'N_GEOTOPS': 'no label', 'OBJECTID': 'no label', 'PROCES_GEO': 'no label', 'R_DEG_ANT': 'no label', 'R_DEG_NAT': 'no label', 'S_DEG_ANT': 'no label', 'S_DEG_NAT': 'no label', 'TEMPS_GEOL': 'header label - visible with data', 'TIPUS_ESPA': 'no label', 'TIPUS_INTE': 'no label', 'TIPUS_ROCA': 'no label', 'UNITAT_REP': 'no label', });
lyr_P1112_Carbesdenivell_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'inline label - always visible', 'z': 'no label', });
lyr_P1112_Contruccions_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'estat': 'no label', 'altura': 'no label', 'nom': 'no label', });
lyr_P1112_ToponimiaiNomsgeogrfics_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'subtipus': 'no label', 'fontname': 'no label', 'fontsize': 'no label', 'bold': 'no label', 'italic': 'no label', 'placement': 'no label', 'crlfpos1': 'no label', 'crlfpos2': 'no label', 'veralign': 'no label', 'horalign': 'no label', 'leading': 'no label', 'chrwidth': 'no label', 'chrspacing': 'no label', 'labeling': 'no label', 'nom': 'no label', });
lyr_P1112Tipusinaturalesalitologicav2_10.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', 'ERA': 'no label', 'PERIODE': 'no label', 'EPOCA': 'no label', 'EDAT': 'no label', 'OBS_EDAT': 'no label', 'MET': 'no label', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'header label - visible with data', });
lyr_P1112_Afloraments_11.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'name': 'header label - visible with data', 'latitud_final': 'no label', 'longuitud_final': 'no label', 'Parada': 'header label - visible with data', });
lyr_P1112_ParadesP_12.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Descripcio2': 'no label', });
lyr_P1112_RutaSauTaveret_13.set('fieldLabels', {'fid': 'no label', 'NOM': 'no label', 'DESCRIPCIO': 'no label', 'longuitud': 'no label', });
lyr_P1112_RutaSauTaveret_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});