var size = 0;
var placement = 'point';
function categories_HidrografiaPoligons_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'bas':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(103,105,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'emb':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(35,145,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'flu':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(129,214,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'lla':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(204,67,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'pis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(23,127,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'pre':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(152,229,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'ram':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(239,213,83,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'res':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(226,38,132,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(0.75)}),fill: new ol.style.Fill({color: 'rgba(82,238,108,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_HidrografiaPoligons_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipus");
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
    
    var style = categories_HidrografiaPoligons_17(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
