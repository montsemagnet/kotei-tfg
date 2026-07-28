var wms_layers = [];

var lyr_satelit_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'satelit<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/satelit_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [268342.833248, 5155852.754335, 269133.756174, 5156399.163469]
        })
    });
var format_TipusiNaturalesaLitolgica_1 = new ol.format.GeoJSON();
var features_TipusiNaturalesaLitolgica_1 = format_TipusiNaturalesaLitolgica_1.readFeatures(json_TipusiNaturalesaLitolgica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipusiNaturalesaLitolgica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipusiNaturalesaLitolgica_1.addFeatures(features_TipusiNaturalesaLitolgica_1);
var lyr_TipusiNaturalesaLitolgica_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipusiNaturalesaLitolgica_1, 
                style: style_TipusiNaturalesaLitolgica_1,
                popuplayertitle: 'Tipus i Naturalesa Litològica',
                interactive: false,
    title: 'Tipus i Naturalesa Litològica<br />\
    <img src="styles/legend/TipusiNaturalesaLitolgica_1_0.png" /> IGNEA_ACIDA<br />' });
var format_HidrografiaPoligons_2 = new ol.format.GeoJSON();
var features_HidrografiaPoligons_2 = format_HidrografiaPoligons_2.readFeatures(json_HidrografiaPoligons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HidrografiaPoligons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidrografiaPoligons_2.addFeatures(features_HidrografiaPoligons_2);
var lyr_HidrografiaPoligons_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HidrografiaPoligons_2, 
                style: style_HidrografiaPoligons_2,
                popuplayertitle: 'Hidrografia Poligons',
                interactive: false,
    title: 'Hidrografia Poligons<br />\
    <img src="styles/legend/HidrografiaPoligons_2_0.png" /> bas<br />\
    <img src="styles/legend/HidrografiaPoligons_2_1.png" /> emb<br />\
    <img src="styles/legend/HidrografiaPoligons_2_2.png" /> flu<br />\
    <img src="styles/legend/HidrografiaPoligons_2_3.png" /> pre<br />\
    <img src="styles/legend/HidrografiaPoligons_2_4.png" /> ram<br />\
    <img src="styles/legend/HidrografiaPoligons_2_5.png" /> res<br />' });
var format_Carbesdenivell_3 = new ol.format.GeoJSON();
var features_Carbesdenivell_3 = format_Carbesdenivell_3.readFeatures(json_Carbesdenivell_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carbesdenivell_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carbesdenivell_3.addFeatures(features_Carbesdenivell_3);
var lyr_Carbesdenivell_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carbesdenivell_3, 
                style: style_Carbesdenivell_3,
                popuplayertitle: 'Carbes de nivell',
                interactive: false,
    title: 'Carbes de nivell<br />\
    <img src="styles/legend/Carbesdenivell_3_0.png" /> [mes] corba de nivell mestra<br />\
    <img src="styles/legend/Carbesdenivell_3_1.png" /> [sen] corba de nivell senzilla<br />' });
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
    <img src="styles/legend/ContactesGeneralsiIntrusius_4_0.png" /> 3201 Contacte intrusiu<br />' });
var format_LitologiadelScolPaleozoiciMesozoic_5 = new ol.format.GeoJSON();
var features_LitologiadelScolPaleozoiciMesozoic_5 = format_LitologiadelScolPaleozoiciMesozoic_5.readFeatures(json_LitologiadelScolPaleozoiciMesozoic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LitologiadelScolPaleozoiciMesozoic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LitologiadelScolPaleozoiciMesozoic_5.addFeatures(features_LitologiadelScolPaleozoiciMesozoic_5);
var lyr_LitologiadelScolPaleozoiciMesozoic_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LitologiadelScolPaleozoiciMesozoic_5, 
                style: style_LitologiadelScolPaleozoiciMesozoic_5,
                popuplayertitle: 'Litologia del Sòcol (Paleozoic i Mesozoic)',
                interactive: true,
    title: 'Litologia del Sòcol (Paleozoic i Mesozoic)<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_5_0.png" /> Pòrfirs diorítics i quarsidiorítics (Dpqd)<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_5_1.png" /> Microaplites porfíriques (Gapp)<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_5_2.png" /> Monzogranits biotítics de gra mitjà a groller (Gmgb3)<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_5_3.png" /> Pòrfirs monzogranítics i leucomonzogranítics (Gpg)<br />\
    <img src="styles/legend/LitologiadelScolPaleozoiciMesozoic_5_4.png" /> Pòrfirs granodiorítics (Gpgd)<br />' });
var format_RutaSauTaveret_6 = new ol.format.GeoJSON();
var features_RutaSauTaveret_6 = format_RutaSauTaveret_6.readFeatures(json_RutaSauTaveret_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutaSauTaveret_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutaSauTaveret_6.addFeatures(features_RutaSauTaveret_6);
var lyr_RutaSauTaveret_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutaSauTaveret_6, 
                style: style_RutaSauTaveret_6,
                popuplayertitle: 'Ruta Sau-Taveret',
                interactive: false,
                title: '<img src="styles/legend/RutaSauTaveret_6.png" /> Ruta Sau-Taveret'
            });
var format_Afloraments_7 = new ol.format.GeoJSON();
var features_Afloraments_7 = format_Afloraments_7.readFeatures(json_Afloraments_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afloraments_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afloraments_7.addFeatures(features_Afloraments_7);
var lyr_Afloraments_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Afloraments_7, 
                style: style_Afloraments_7,
                popuplayertitle: 'Afloraments',
                interactive: false,
                title: '<img src="styles/legend/Afloraments_7.png" /> Afloraments'
            });
var format_ParadesP_8 = new ol.format.GeoJSON();
var features_ParadesP_8 = format_ParadesP_8.readFeatures(json_ParadesP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadesP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadesP_8.addFeatures(features_ParadesP_8);
var lyr_ParadesP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadesP_8, 
                style: style_ParadesP_8,
                popuplayertitle: 'Parades-P',
                interactive: false,
    title: 'Parades-P<br />\
    <img src="styles/legend/ParadesP_8_0.png" /> P1. Monzogranit i pòrfirs<br />' });
var group_PARADA1 = new ol.layer.Group({
                                layers: [lyr_TipusiNaturalesaLitolgica_1,lyr_HidrografiaPoligons_2,lyr_Carbesdenivell_3,lyr_ContactesGeneralsiIntrusius_4,lyr_LitologiadelScolPaleozoiciMesozoic_5,lyr_RutaSauTaveret_6,lyr_Afloraments_7,lyr_ParadesP_8,],
                                fold: 'open',
                                title: 'PARADA1'});

lyr_satelit_0.setVisible(true);lyr_TipusiNaturalesaLitolgica_1.setVisible(false);lyr_HidrografiaPoligons_2.setVisible(false);lyr_Carbesdenivell_3.setVisible(false);lyr_ContactesGeneralsiIntrusius_4.setVisible(false);lyr_LitologiadelScolPaleozoiciMesozoic_5.setVisible(true);lyr_RutaSauTaveret_6.setVisible(true);lyr_Afloraments_7.setVisible(true);lyr_ParadesP_8.setVisible(true);
var layersList = [lyr_satelit_0,group_PARADA1];
lyr_TipusiNaturalesaLitolgica_1.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_HidrografiaPoligons_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'entorn': 'entorn', 'estat': 'estat', 'terreny': 'terreny', 'nom': 'nom', });
lyr_Carbesdenivell_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'z': 'z', });
lyr_ContactesGeneralsiIntrusius_4.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_LitologiadelScolPaleozoiciMesozoic_5.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_RutaSauTaveret_6.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'DESCRIPCIO': 'DESCRIPCIO', 'longuitud': 'longuitud', });
lyr_Afloraments_7.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'name': 'name', 'latitud_final': 'latitud_final', 'longuitud_final': 'longuitud_final', 'Parada': 'Parada', });
lyr_ParadesP_8.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Descripcio2': 'Descripcio2', });
lyr_TipusiNaturalesaLitolgica_1.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_HidrografiaPoligons_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'entorn': 'TextEdit', 'estat': 'TextEdit', 'terreny': 'TextEdit', 'nom': 'TextEdit', });
lyr_Carbesdenivell_3.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'tipus': 'TextEdit', 'z': 'TextEdit', });
lyr_ContactesGeneralsiIntrusius_4.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_LitologiadelScolPaleozoiciMesozoic_5.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_RutaSauTaveret_6.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'longuitud': 'TextEdit', });
lyr_Afloraments_7.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'DateTime', 'name': 'TextEdit', 'latitud_final': 'TextEdit', 'longuitud_final': 'TextEdit', 'Parada': 'TextEdit', });
lyr_ParadesP_8.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Descripcio2': 'TextEdit', });
lyr_TipusiNaturalesaLitolgica_1.set('fieldLabels', {'fid': 'no label', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', 'ERA': 'no label', 'PERIODE': 'no label', 'EPOCA': 'no label', 'EDAT': 'no label', 'OBS_EDAT': 'no label', 'MET': 'no label', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'header label - visible with data', });
lyr_HidrografiaPoligons_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'header label - always visible', 'entorn': 'no label', 'estat': 'no label', 'terreny': 'no label', 'nom': 'no label', });
lyr_Carbesdenivell_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'inline label - always visible', 'z': 'no label', });
lyr_ContactesGeneralsiIntrusius_4.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_LitologiadelScolPaleozoiciMesozoic_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'IDABS': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'header label - visible with data', 'ERA': 'header label - visible with data', 'PERIODE': 'header label - visible with data', 'EPOCA': 'header label - visible with data', 'EDAT': 'header label - visible with data', 'OBS_EDAT': 'no label', 'MET': 'header label - visible with data', 'EDAT_MET': 'no label', 'ordre_lleg': 'no label', 'Categoria': 'no label', });
lyr_RutaSauTaveret_6.set('fieldLabels', {'fid': 'no label', 'NOM': 'no label', 'DESCRIPCIO': 'no label', 'longuitud': 'no label', });
lyr_Afloraments_7.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'name': 'header label - visible with data', 'latitud_final': 'no label', 'longuitud_final': 'no label', 'Parada': 'header label - visible with data', });
lyr_ParadesP_8.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Descripcio2': 'no label', });
lyr_ParadesP_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});