var size = 0;
var placement = 'point';

function style_Cabussaments_9(feature, resolution){
    // Sense text al mapa: INCLIN només al popup.
    var labelText = "";
    var value = feature.get("CODI_CAS");
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    var labelFont = "10px 'Arial', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';

    // DIR = azimut (graus des del nord, sentit horari) → radiants OpenLayers
    var dir = feature.get("DIR");
    var rotation = (dir !== null && dir !== undefined && !isNaN(dir))
        ? (Number(dir) * Math.PI / 180)
        : 0;

    // Escala visible a escala d'itinerari (abans 1.6 era massa petit)
    var iconScale = 0.9;
    var iconSrc = (valueStr === '1121') ? "styles/embedded_1.svg" : "styles/embedded.svg";

    return [ new ol.style.Style({
        image: new ol.style.Icon({
            scale: iconScale,
            anchor: [0.5, 0.5],
            anchorXUnits: "fraction",
            anchorYUnits: "fraction",
            rotation: rotation,
            rotateWithView: true,
            src: iconSrc
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
};
