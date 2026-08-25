var size = 0;
var placement = 'point';
function categories_nomsgeografics_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    var noStroke = new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0});
    switch(valueStr) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
        case '15':
        default:
            return [ new ol.style.Style({
        stroke: noStroke,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_nomsgeografics_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("tipus");
    var labelFont = "13.0px 'Open Sans', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = true;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("nom") !== null) {
        labelText = String(feature.get("nom"));
    }

    var style = categories_nomsgeografics_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    if (style && style.length) {
        style.forEach(function(s) {
            s.setStroke(null);
        });
    }

    return style;
};
