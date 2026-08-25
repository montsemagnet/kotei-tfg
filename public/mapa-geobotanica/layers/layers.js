var wms_layers = [];

var lyr_Satelit_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Satelit<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Satelit_0.jpg",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [264307.897634, 5155496.929919, 272942.435544, 5160592.695125]
        })
    });
var format_falles_1 = new ol.format.GeoJSON();
var features_falles_1 = format_falles_1.readFeatures(json_falles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_falles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_falles_1.addFeatures(features_falles_1);
var lyr_falles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_falles_1, 
                style: style_falles_1,
                popuplayertitle: 'Falles',
                interactive: false,
                title: '<img src="styles/legend/falles_1.png" /> falles'
            });
var format_Dipositsquaternaris_2 = new ol.format.GeoJSON();
var features_Dipositsquaternaris_2 = format_Dipositsquaternaris_2.readFeatures(json_Dipositsquaternaris_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dipositsquaternaris_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dipositsquaternaris_2.addFeatures(features_Dipositsquaternaris_2);
var lyr_Dipositsquaternaris_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dipositsquaternaris_2, 
                style: style_Dipositsquaternaris_2,
                popuplayertitle: 'Diposits quaternaris',
                interactive: true,
    title: 'Diposits quaternaris<br />\
    <img src="styles/legend/Dipositsquaternaris_2_0.png" /> QHc<br />\
    <img src="styles/legend/Dipositsquaternaris_2_1.png" /> QHcd0<br />\
    <img src="styles/legend/Dipositsquaternaris_2_2.png" /> QHec<br />\
    <img src="styles/legend/Dipositsquaternaris_2_3.png" /> QHeg<br />\
    <img src="styles/legend/Dipositsquaternaris_2_4.png" /> QHt0<br />\
    <img src="styles/legend/Dipositsquaternaris_2_5.png" /> QHt1<br />\
    <img src="styles/legend/Dipositsquaternaris_2_6.png" /> QPHc<br />\
    <img src="styles/legend/Dipositsquaternaris_2_7.png" /> QPHg<br />\
    <img src="styles/legend/Dipositsquaternaris_2_8.png" /> QPHt<br />\
    <img src="styles/legend/Dipositsquaternaris_2_9.png" /> QPHtg<br />' });
var format_Tipusderoca_3 = new ol.format.GeoJSON();
var features_Tipusderoca_3 = format_Tipusderoca_3.readFeatures(json_Tipusderoca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipusderoca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipusderoca_3.addFeatures(features_Tipusderoca_3);
var lyr_Tipusderoca_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tipusderoca_3, 
                style: style_Tipusderoca_3,
                popuplayertitle: 'Naturalesa litològica',
                interactive: true,
    title: 'Naturalesa litològica<br />\
    <img src="styles/legend/Tipusderoca_3_0.png" /> CARBONATAT<br />\
    <img src="styles/legend/Tipusderoca_3_1.png" /> IGNEA_ACIDA<br />\
    <img src="styles/legend/Tipusderoca_3_2.png" /> METAMORFICA<br />\
    <img src="styles/legend/Tipusderoca_3_3.png" /> SILICICLASTIC<br />' });
var format_Geologia_4 = new ol.format.GeoJSON();
var features_Geologia_4 = format_Geologia_4.readFeatures(json_Geologia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologia_4.addFeatures(features_Geologia_4);
var lyr_Geologia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologia_4, 
                style: style_Geologia_4,
                popuplayertitle: 'Litologia i unitats geològiques',
                interactive: true,
                title: 'Litologia i unitats geològiques'
            });
var format_Espais_naturals_protegit_5 = new ol.format.GeoJSON();
var features_Espais_naturals_protegit_5 = format_Espais_naturals_protegit_5.readFeatures(json_Espais_naturals_protegit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espais_naturals_protegit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espais_naturals_protegit_5.addFeatures(features_Espais_naturals_protegit_5);
var lyr_Espais_naturals_protegit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espais_naturals_protegit_5, 
                style: style_Espais_naturals_protegit_5,
                popuplayertitle: 'Espais_naturals_protegits',
                interactive: false,
                title: '<img src="styles/legend/Espais_naturals_protegit_5.png" /> Espais naturals protegits'
            });
var format_Interes_comunitari_6 = new ol.format.GeoJSON();
var features_Interes_comunitari_6 = format_Interes_comunitari_6.readFeatures(json_Interes_comunitari_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Interes_comunitari_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Interes_comunitari_6.addFeatures(features_Interes_comunitari_6);
var lyr_Interes_comunitari_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Interes_comunitari_6, 
                style: style_Interes_comunitari_6,
                popuplayertitle: 'Hab. Interes comunitari',
                interactive: false,
                title: '<img src="styles/legend/Interes_comunitari_6.png" /> Hab. Interes comunitari'
            });
var format_Terrestres_7 = new ol.format.GeoJSON();
var features_Terrestres_7 = format_Terrestres_7.readFeatures(json_Terrestres_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terrestres_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terrestres_7.addFeatures(features_Terrestres_7);
var lyr_Terrestres_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terrestres_7, 
                style: style_Terrestres_7,
                popuplayertitle: 'Hab. Terrestres',
                interactive: true,
                title: 'Hab. Terrestres'
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
                popuplayertitle: 'Parades',
                interactive: false,
                title: 'Parades'
            });
var format_ItinerraiSauTaveret_9 = new ol.format.GeoJSON();
var features_ItinerraiSauTaveret_9 = format_ItinerraiSauTaveret_9.readFeatures(json_ItinerraiSauTaveret_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ItinerraiSauTaveret_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ItinerraiSauTaveret_9.addFeatures(features_ItinerraiSauTaveret_9);
var lyr_ItinerraiSauTaveret_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ItinerraiSauTaveret_9, 
                style: style_ItinerraiSauTaveret_9,
                popuplayertitle: 'Itinerari Sau-Tavertet',
                interactive: false,
                title: '<img src="styles/legend/ItinerraiSauTaveret_9.png" /> Itinerari Sau-Tavertet'
            });
var format_Afloraments_10 = new ol.format.GeoJSON();
var features_Afloraments_10 = format_Afloraments_10.readFeatures(json_Afloraments_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afloraments_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afloraments_10.addFeatures(features_Afloraments_10);
var lyr_Afloraments_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Afloraments_10, 
                style: style_Afloraments_10,
                popuplayertitle: 'Afloraments',
                interactive: false,
                title: '<img src="styles/legend/Afloraments_10.png" /> Afloraments'
            });
var format_Noms_11 = new ol.format.GeoJSON();
var features_Noms_11 = format_Noms_11.readFeatures(json_Noms_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noms_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noms_11.addFeatures(features_Noms_11);
var lyr_Noms_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noms_11, 
                style: style_Noms_11,
                popuplayertitle: 'Noms',
                interactive: false,
                title: '<img src="styles/legend/Noms_11.png" /> Noms'
            });
var format_nomsgeografics_12 = new ol.format.GeoJSON();
var features_nomsgeografics_12 = format_nomsgeografics_12.readFeatures(json_nomsgeografics_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nomsgeografics_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nomsgeografics_12.addFeatures(features_nomsgeografics_12);
var lyr_nomsgeografics_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nomsgeografics_12, 
                style: style_nomsgeografics_12,
                popuplayertitle: 'noms geografics',
                interactive: false,
                title: 'noms geografics'
            });
var format_curvesdenivell_13 = new ol.format.GeoJSON();
var features_curvesdenivell_13 = format_curvesdenivell_13.readFeatures(json_curvesdenivell_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_curvesdenivell_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_curvesdenivell_13.addFeatures(features_curvesdenivell_13);
var lyr_curvesdenivell_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_curvesdenivell_13, 
                style: style_curvesdenivell_13,
                popuplayertitle: 'curves de nivell',
                interactive: false,
                title: 'curves de nivell'
            });
var format_construccions_14 = new ol.format.GeoJSON();
var features_construccions_14 = format_construccions_14.readFeatures(json_construccions_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_construccions_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_construccions_14.addFeatures(features_construccions_14);
var lyr_construccions_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_construccions_14, 
                style: style_construccions_14,
                popuplayertitle: 'construccions',
                interactive: false,
                title: 'construccions'
            });
var format_hidrografiap_15 = new ol.format.GeoJSON();
var features_hidrografiap_15 = format_hidrografiap_15.readFeatures(json_hidrografiap_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografiap_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografiap_15.addFeatures(features_hidrografiap_15);
var lyr_hidrografiap_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografiap_15, 
                style: style_hidrografiap_15,
                popuplayertitle: 'hidrografia-p',
                interactive: false,
                title: 'hidrografia-p'
            });
var format_hidrografia_16 = new ol.format.GeoJSON();
var features_hidrografia_16 = format_hidrografia_16.readFeatures(json_hidrografia_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_16.addFeatures(features_hidrografia_16);
var lyr_hidrografia_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_16,
maxResolution:28.004746196923488,
 
                style: style_hidrografia_16,
                popuplayertitle: 'hidrografia',
                interactive: false,
                title: 'hidrografia'
            });
var group_TOPOGRAFIAVECTORIAL = new ol.layer.Group({
                                layers: [lyr_nomsgeografics_12,lyr_curvesdenivell_13,lyr_construccions_14,lyr_hidrografiap_15,lyr_hidrografia_16,],
                                fold: 'close',
                                title: 'TOPOGRAFIA VECTORIAL'});
var group_TFGsortides = new ol.layer.Group({
                                layers: [lyr_ItinerraiSauTaveret_9,lyr_Afloraments_10,lyr_Noms_11,lyr_ParadesP_8,],
                                fold: 'close',
                                title: 'ITINERARI'});
var group_HABITATS = new ol.layer.Group({
                                layers: [lyr_Espais_naturals_protegit_5,lyr_Terrestres_7,lyr_Interes_comunitari_6,],
                                fold: 'close',
                                title: 'HABITATS '});
var group_GEOLOGIA = new ol.layer.Group({
                                layers: [lyr_falles_1,lyr_Dipositsquaternaris_2,lyr_Tipusderoca_3,lyr_Geologia_4,],
                                fold: 'close',
                                title: 'GEOLOGIA'});
var group_Mapesbase = new ol.layer.Group({
                                layers: [lyr_Satelit_0,],
                                fold: 'close',
                                title: 'Mapes base'});

lyr_Satelit_0.setVisible(false);lyr_falles_1.setVisible(false);lyr_Dipositsquaternaris_2.setVisible(false);lyr_Tipusderoca_3.setVisible(false);lyr_Geologia_4.setVisible(false);lyr_Espais_naturals_protegit_5.setVisible(false);lyr_Interes_comunitari_6.setVisible(true);lyr_Terrestres_7.setVisible(true);lyr_ParadesP_8.setVisible(true);lyr_ParadesP_8.set('title', 'Parades');lyr_ItinerraiSauTaveret_9.setVisible(true);lyr_Afloraments_10.setVisible(false);lyr_Noms_11.setVisible(true);lyr_nomsgeografics_12.setVisible(false);lyr_curvesdenivell_13.setVisible(false);lyr_construccions_14.setVisible(false);lyr_hidrografiap_15.setVisible(false);lyr_hidrografia_16.setVisible(false);
var layersList = [group_Mapesbase,group_GEOLOGIA,group_HABITATS,group_TFGsortides,group_TOPOGRAFIAVECTORIAL];
lyr_falles_1.set('fieldAliases', {'fid': 'fid', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Dipositsquaternaris_2.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'Descripció', 'TIPUS_DIP': 'TIPUS_DIP', 'ERA': 'Era', 'PERIODE': 'Període', 'EPOCA': 'Època', 'EDAT': 'Edat', });
lyr_Tipusderoca_3.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'DESCRIPCIO', 'ERA': 'ERA', 'PERIODE': 'PERIODE', 'EPOCA': 'EPOCA', 'EDAT': 'EDAT', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_Geologia_4.set('fieldAliases', {'fid': 'fid', 'IDABS': 'IDABS', 'CODI_CAS': 'CODI_CAS', 'DESCRIPCIO': 'Descripció', 'ERA': 'Era', 'PERIODE': 'Període', 'EPOCA': 'Època', 'EDAT': 'Edat', 'OBS_EDAT': 'OBS_EDAT', 'MET': 'MET', 'EDAT_MET': 'EDAT_MET', 'ordre_lleg': 'ordre_lleg', 'Categoria': 'Categoria', });
lyr_Espais_naturals_protegit_5.set('fieldAliases', {'fid': 'fid', 'ANY_CAMP': 'ANY_CAMP', 'AREA_M2': 'AREA_M2', 'AUTOR_MAPA': 'AUTOR_MAPA', 'COD_CORINE': 'COD_CORINE', 'COD_HIC': 'COD_HIC', 'COD_HIC_TP': 'COD_HIC_TP', 'COD_TIPUS': 'COD_TIPUS', 'CORINE_CA': 'CORINE_CA', 'HIC_CA': 'HIC_CA', 'HIC_PRIOR': 'HIC_PRIOR', 'HIC_TP_CA': 'HIC_TP_CA', 'ID': 'ID', 'NOM_ENP': 'NOM_ENP', 'TIPUS_CA': 'TIPUS_CA', });
lyr_Interes_comunitari_6.set('fieldAliases', {'fid': 'fid', 'AMENACA': 'AMENACA', 'AREA_M2': 'AREA_M2', 'COD_CORINE': 'COD_CORINE', 'COD_EUNIS': 'COD_EUNIS', 'COD_GRUP': 'COD_GRUP', 'COD_HIC': 'COD_HIC', 'COD_LPEHT': 'COD_LPEHT', 'COD_SUBTIP': 'COD_SUBTIP', 'COD_TIPUS': 'COD_TIPUS', 'CORINE_CA': 'CORINE_CA', 'C_EUNIS_ES': 'C_EUNIS_ES', 'EUNIS_EN': 'EUNIS_EN', 'EUNIS_ES': 'EUNIS_ES', 'EXCENTRICI': 'EXCENTRICI', 'GRUP_CA': 'GRUP_CA', 'HIC_CA': 'HIC_CA', 'HIC_PRIOR': 'HIC_PRIOR', 'ID': 'ID', 'LPEHT_ES': 'LPEHT_ES', 'PERCEN_POL': 'PERCEN_POL', 'REL_EUN_LP': 'REL_EUN_LP', 'SUBTIP_CA': 'SUBTIP_CA', 'TIPUS_CA': 'TIPUS_CA', 'VGI': 'VGI', });
lyr_Terrestres_7.set('fieldAliases', {'fid': 'fid', 'AMENACA': 'AMENACA', 'AREA_M2': 'AREA_M2', 'COD_CORINE': 'COD_CORINE', 'COD_EUNIS': 'COD_EUNIS', 'COD_GRUP': 'COD_GRUP', 'COD_HIC': 'COD_HIC', 'COD_LPEHT': 'COD_LPEHT', 'COD_SUBTIP': 'COD_SUBTIP', 'COD_TIPUS': 'COD_TIPUS', 'CORINE_CA': 'CORINE_CA', 'C_EUNIS_ES': 'C_EUNIS_ES', 'EUNIS_EN': 'EUNIS_EN', 'EUNIS_ES': 'EUNIS_ES', 'EXCENTRICI': 'EXCENTRICI', 'GRUP_CA': 'GRUP_CA', 'HIC_CA': 'HIC_CA', 'HIC_PRIOR': 'HIC_PRIOR', 'ID': 'ID', 'LPEHT_ES': 'LPEHT_ES', 'PERCEN_POL': 'PERCEN_POL', 'REL_EUN_LP': 'REL_EUN_LP', 'SUBTIP_CA': 'SUBTIP_CA', 'TIPUS_CA': 'TIPUS_CA', 'VGI': 'VGI', });
lyr_ParadesP_8.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Descripcio2': 'Descripcio2', });
lyr_ItinerraiSauTaveret_9.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'DESCRIPCIO': 'DESCRIPCIO', 'longuitud': 'longuitud', });
lyr_Afloraments_10.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'name': 'name', 'latitud_final': 'latitud_final', 'longuitud_final': 'longuitud_final', 'Parada': 'Parada', });
lyr_Noms_11.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_nomsgeografics_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'subtipus': 'subtipus', 'fontname': 'fontname', 'fontsize': 'fontsize', 'bold': 'bold', 'italic': 'italic', 'placement': 'placement', 'crlfpos1': 'crlfpos1', 'crlfpos2': 'crlfpos2', 'veralign': 'veralign', 'horalign': 'horalign', 'leading': 'leading', 'chrwidth': 'chrwidth', 'chrspacing': 'chrspacing', 'labeling': 'labeling', 'nom': 'nom', });
lyr_curvesdenivell_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'z': 'z', });
lyr_construccions_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'estat': 'estat', 'altura': 'altura', 'nom': 'nom', });
lyr_hidrografiap_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'entorn': 'entorn', 'estat': 'estat', 'terreny': 'terreny', 'nom': 'nom', });
lyr_hidrografia_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'tipus': 'tipus', 'entorn': 'entorn', 'estat': 'estat', 'terreny': 'terreny', 'nom': 'nom', });
lyr_falles_1.set('fieldImages', {'fid': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_Dipositsquaternaris_2.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'TIPUS_DIP': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', });
lyr_Tipusderoca_3.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Geologia_4.set('fieldImages', {'fid': 'TextEdit', 'IDABS': 'TextEdit', 'CODI_CAS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ERA': 'TextEdit', 'PERIODE': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAT': 'TextEdit', 'OBS_EDAT': 'TextEdit', 'MET': 'TextEdit', 'EDAT_MET': 'TextEdit', 'ordre_lleg': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Espais_naturals_protegit_5.set('fieldImages', {'fid': '', 'ANY_CAMP': '', 'AREA_M2': '', 'AUTOR_MAPA': '', 'COD_CORINE': '', 'COD_HIC': '', 'COD_HIC_TP': '', 'COD_TIPUS': '', 'CORINE_CA': '', 'HIC_CA': '', 'HIC_PRIOR': '', 'HIC_TP_CA': '', 'ID': '', 'NOM_ENP': '', 'TIPUS_CA': '', });
lyr_Interes_comunitari_6.set('fieldImages', {'fid': 'TextEdit', 'AMENACA': 'Range', 'AREA_M2': 'TextEdit', 'COD_CORINE': 'TextEdit', 'COD_EUNIS': 'TextEdit', 'COD_GRUP': 'Range', 'COD_HIC': 'TextEdit', 'COD_LPEHT': 'TextEdit', 'COD_SUBTIP': 'TextEdit', 'COD_TIPUS': 'Range', 'CORINE_CA': 'TextEdit', 'C_EUNIS_ES': 'TextEdit', 'EUNIS_EN': 'TextEdit', 'EUNIS_ES': 'TextEdit', 'EXCENTRICI': 'Range', 'GRUP_CA': 'TextEdit', 'HIC_CA': 'TextEdit', 'HIC_PRIOR': 'TextEdit', 'ID': 'TextEdit', 'LPEHT_ES': 'TextEdit', 'PERCEN_POL': 'TextEdit', 'REL_EUN_LP': 'TextEdit', 'SUBTIP_CA': 'TextEdit', 'TIPUS_CA': 'TextEdit', 'VGI': 'Range', });
lyr_Terrestres_7.set('fieldImages', {'fid': 'TextEdit', 'AMENACA': 'Range', 'AREA_M2': 'TextEdit', 'COD_CORINE': 'TextEdit', 'COD_EUNIS': 'TextEdit', 'COD_GRUP': 'Range', 'COD_HIC': 'TextEdit', 'COD_LPEHT': 'TextEdit', 'COD_SUBTIP': 'TextEdit', 'COD_TIPUS': 'Range', 'CORINE_CA': 'TextEdit', 'C_EUNIS_ES': 'TextEdit', 'EUNIS_EN': 'TextEdit', 'EUNIS_ES': 'TextEdit', 'EXCENTRICI': 'Range', 'GRUP_CA': 'TextEdit', 'HIC_CA': 'TextEdit', 'HIC_PRIOR': 'TextEdit', 'ID': 'TextEdit', 'LPEHT_ES': 'TextEdit', 'PERCEN_POL': 'TextEdit', 'REL_EUN_LP': 'TextEdit', 'SUBTIP_CA': 'TextEdit', 'TIPUS_CA': 'TextEdit', 'VGI': 'Range', });
lyr_ParadesP_8.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Descripcio2': 'TextEdit', });
lyr_ItinerraiSauTaveret_9.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'longuitud': 'TextEdit', });
lyr_Afloraments_10.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'DateTime', 'name': 'TextEdit', 'latitud_final': 'TextEdit', 'longuitud_final': 'TextEdit', 'Parada': 'TextEdit', });
lyr_Noms_11.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_nomsgeografics_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'subtipus': 'TextEdit', 'fontname': 'TextEdit', 'fontsize': 'TextEdit', 'bold': 'TextEdit', 'italic': 'TextEdit', 'placement': 'TextEdit', 'crlfpos1': 'TextEdit', 'crlfpos2': 'TextEdit', 'veralign': 'TextEdit', 'horalign': 'TextEdit', 'leading': 'TextEdit', 'chrwidth': 'TextEdit', 'chrspacing': 'TextEdit', 'labeling': 'TextEdit', 'nom': 'TextEdit', });
lyr_curvesdenivell_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'z': 'TextEdit', });
lyr_construccions_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'estat': 'TextEdit', 'altura': 'TextEdit', 'nom': 'TextEdit', });
lyr_hidrografiap_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'entorn': 'TextEdit', 'estat': 'TextEdit', 'terreny': 'TextEdit', 'nom': 'TextEdit', });
lyr_hidrografia_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'entorn': 'TextEdit', 'estat': 'TextEdit', 'terreny': 'TextEdit', 'nom': 'TextEdit', });
lyr_falles_1.set('fieldLabels', {'fid': 'no label', 'CODI_CAS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_Dipositsquaternaris_2.set('fieldLabels', {'fid': 'hidden field', 'IDABS': 'hidden field', 'CODI_CAS': 'hidden field', 'DESCRIPCIO': 'inline label - visible with data', 'TIPUS_DIP': 'hidden field', 'ERA': 'inline label - visible with data', 'PERIODE': 'inline label - visible with data', 'EPOCA': 'inline label - visible with data', 'EDAT': 'inline label - visible with data', });
lyr_Tipusderoca_3.set('fieldLabels', {'fid': 'hidden field', 'IDABS': 'hidden field', 'CODI_CAS': 'hidden field', 'DESCRIPCIO': 'hidden field', 'ERA': 'hidden field', 'PERIODE': 'hidden field', 'EPOCA': 'hidden field', 'EDAT': 'hidden field', 'OBS_EDAT': 'hidden field', 'MET': 'hidden field', 'EDAT_MET': 'hidden field', 'ordre_lleg': 'hidden field', 'Categoria': 'inline label - visible with data', });
lyr_Geologia_4.set('fieldLabels', {'fid': 'hidden field', 'IDABS': 'hidden field', 'CODI_CAS': 'hidden field', 'DESCRIPCIO': 'inline label - visible with data', 'ERA': 'inline label - visible with data', 'PERIODE': 'inline label - visible with data', 'EPOCA': 'inline label - visible with data', 'EDAT': 'inline label - visible with data', 'OBS_EDAT': 'hidden field', 'MET': 'hidden field', 'EDAT_MET': 'hidden field', 'ordre_lleg': 'hidden field', 'Categoria': 'hidden field', });
lyr_Espais_naturals_protegit_5.set('fieldLabels', {'fid': 'no label', 'ANY_CAMP': 'no label', 'AREA_M2': 'no label', 'AUTOR_MAPA': 'no label', 'COD_CORINE': 'no label', 'COD_HIC': 'no label', 'COD_HIC_TP': 'no label', 'COD_TIPUS': 'no label', 'CORINE_CA': 'no label', 'HIC_CA': 'no label', 'HIC_PRIOR': 'no label', 'HIC_TP_CA': 'no label', 'ID': 'no label', 'NOM_ENP': 'no label', 'TIPUS_CA': 'no label', });
lyr_Interes_comunitari_6.set('fieldLabels', {'fid': 'no label', 'AMENACA': 'no label', 'AREA_M2': 'no label', 'COD_CORINE': 'no label', 'COD_EUNIS': 'no label', 'COD_GRUP': 'no label', 'COD_HIC': 'no label', 'COD_LPEHT': 'no label', 'COD_SUBTIP': 'no label', 'COD_TIPUS': 'no label', 'CORINE_CA': 'no label', 'C_EUNIS_ES': 'no label', 'EUNIS_EN': 'no label', 'EUNIS_ES': 'no label', 'EXCENTRICI': 'no label', 'GRUP_CA': 'no label', 'HIC_CA': 'no label', 'HIC_PRIOR': 'no label', 'ID': 'no label', 'LPEHT_ES': 'no label', 'PERCEN_POL': 'no label', 'REL_EUN_LP': 'no label', 'SUBTIP_CA': 'no label', 'TIPUS_CA': 'no label', 'VGI': 'no label', });
lyr_Terrestres_7.set('fieldLabels', {'fid': 'hidden field', 'AMENACA': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'COD_CORINE': 'inline label - visible with data', 'COD_EUNIS': 'hidden field', 'COD_GRUP': 'hidden field', 'COD_HIC': 'inline label - visible with data', 'COD_LPEHT': 'hidden field', 'COD_SUBTIP': 'hidden field', 'COD_TIPUS': 'hidden field', 'CORINE_CA': 'inline label - visible with data', 'C_EUNIS_ES': 'hidden field', 'EUNIS_EN': 'hidden field', 'EUNIS_ES': 'hidden field', 'EXCENTRICI': 'hidden field', 'GRUP_CA': 'hidden field', 'HIC_CA': 'hidden field', 'HIC_PRIOR': 'hidden field', 'ID': 'hidden field', 'LPEHT_ES': 'hidden field', 'PERCEN_POL': 'hidden field', 'REL_EUN_LP': 'hidden field', 'SUBTIP_CA': 'inline label - visible with data', 'TIPUS_CA': 'inline label - visible with data', 'VGI': 'hidden field', });
lyr_Terrestres_7.set('popupPairFields', [['COD_CORINE', 'COD_HIC']]);
lyr_ParadesP_8.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Descripcio2': 'no label', });
lyr_ItinerraiSauTaveret_9.set('fieldLabels', {'fid': 'no label', 'NOM': 'no label', 'DESCRIPCIO': 'no label', 'longuitud': 'no label', });
lyr_Afloraments_10.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'name': 'no label', 'latitud_final': 'no label', 'longuitud_final': 'no label', 'Parada': 'no label', });
lyr_Noms_11.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_nomsgeografics_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'subtipus': 'no label', 'fontname': 'no label', 'fontsize': 'no label', 'bold': 'no label', 'italic': 'no label', 'placement': 'no label', 'crlfpos1': 'no label', 'crlfpos2': 'no label', 'veralign': 'no label', 'horalign': 'no label', 'leading': 'no label', 'chrwidth': 'no label', 'chrspacing': 'no label', 'labeling': 'no label', 'nom': 'no label', });
lyr_curvesdenivell_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'z': 'no label', });
lyr_construccions_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'estat': 'no label', 'altura': 'no label', 'nom': 'no label', });
lyr_hidrografiap_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'entorn': 'no label', 'estat': 'no label', 'terreny': 'no label', 'nom': 'no label', });
lyr_hidrografia_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'tipus': 'no label', 'entorn': 'no label', 'estat': 'no label', 'terreny': 'no label', 'nom': 'no label', });
lyr_hidrografia_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});