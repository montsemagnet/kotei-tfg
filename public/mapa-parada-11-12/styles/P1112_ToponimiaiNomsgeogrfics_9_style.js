var size = 0;
var placement = 'point';
function categories_P1112_ToponimiaiNomsgeogrfics_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    /* Línia de base transparent: qgis2web la dibuixa com a ratlles de color */
    var noStroke = new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0});
    switch(valueStr) {
        case '1':
        case '2':
        case '3':
        case '5':
        case '12':
        case '13':
            return [ new ol.style.Style({
        stroke: noStroke,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_P1112_ToponimiaiNomsgeogrfics_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipus");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = true;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("nom") !== null && resolution > 0 && resolution < 20) {
        labelText = String(feature.get("nom"));
    }
    
    var style = categories_P1112_ToponimiaiNomsgeogrfics_9(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
