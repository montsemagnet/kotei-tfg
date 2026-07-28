var size = 0;
var placement = 'point';
function categories_HidrografiaLniesRieresiRius_19(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'can':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,150,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'round', width: m2px(0.75)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'flu':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(19,82,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'round', width: m2px(0.75)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'res':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'round', width: m2px(0.75)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_HidrografiaLniesRieresiRius_19 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipus");
    var labelFont = "13.0px \'Agency FB\', sans-serif";
    var labelFill = "#232323";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_HidrografiaLniesRieresiRius_19(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
