var size = 0;
var placement = 'point';
function categories_ElementsAntrpicsiZonesModificades_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Aoh':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.5}),
        fill: new ol.style.Fill({color: 'rgba(204,0,0,0.35)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
        default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),
        fill: new ol.style.Fill({color: 'rgba(204,0,0,0.25)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
    }};

var style_ElementsAntrpicsiZonesModificades_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("CODI_CAS");
    var labelFont = "11px 'Arial', sans-serif";
    var labelFill = "#b00000";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("CODI_CAS") !== null) {
        labelText = String(feature.get("CODI_CAS"));
    }
    
    var style = categories_ElementsAntrpicsiZonesModificades_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
