var size = 0;
var placement = 'point';

function createHatchPattern_Interes_comunitari_6() {
    var size = 8;
    var canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(20, 20, 20, 0.85)';
    ctx.lineWidth = 1.35;
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(size, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-1, 1);
    ctx.lineTo(1, -1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(size - 1, size + 1);
    ctx.lineTo(size + 1, size - 1);
    ctx.stroke();
    return ctx.createPattern(canvas, 'repeat');
}

var fill_Interes_comunitari_6 = new ol.style.Fill({
    color: createHatchPattern_Interes_comunitari_6()
});

var style_Interes_comunitari_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
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
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,30,30,0.85)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.2}),
        fill: fill_Interes_comunitari_6,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
