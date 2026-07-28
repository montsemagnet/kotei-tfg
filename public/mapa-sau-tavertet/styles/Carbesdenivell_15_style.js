var size = 0;
var placement = 'point';
function categories_Carbesdenivell_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'mes':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,100,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'sen':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,100,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.285}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'mgb':
            return [ new ol.style.Style({
        
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(0.125)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'dmt':
            return [ new ol.style.Style({
        
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(0.325)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Carbesdenivell_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipus");
    var labelFont = "11px 'Open Sans', sans-serif";
    var labelFill = "#5c4033";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = true;
    var repeat = 0;
    var placement = 'line';

    // Cotes reals (metres): només a corbes mestres, i amb zoom suficient
    var z = feature.get("z");
    if (value === 'mes' && z !== null && z !== undefined && !isNaN(z) && resolution < 12) {
        labelText = String(Math.round(Number(z)));
    }
    
    var style = categories_Carbesdenivell_15(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
