var size = 0;
var placement = 'point';
function categories_hidrografiap_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'emb':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,150,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(215,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'flu':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,150,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(215,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'pre':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(230,230,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_hidrografiap_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("nom");
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_hidrografiap_15(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
