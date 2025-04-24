ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([412282.038930, 5563677.952537, 444403.152724, 5586409.386470]);
var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_AdducPompage_1 = new ol.format.GeoJSON();
var features_AdducPompage_1 = format_AdducPompage_1.readFeatures(json_AdducPompage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdducPompage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdducPompage_1.addFeatures(features_AdducPompage_1);
var lyr_AdducPompage_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdducPompage_1, 
                style: style_AdducPompage_1,
                popuplayertitle: 'Adduc Pompage',
                interactive: true,
                title: '<img src="styles/legend/AdducPompage_1.png" /> Adduc Pompage'
            });
var format_Adduction_2 = new ol.format.GeoJSON();
var features_Adduction_2 = format_Adduction_2.readFeatures(json_Adduction_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adduction_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adduction_2.addFeatures(features_Adduction_2);
var lyr_Adduction_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adduction_2, 
                style: style_Adduction_2,
                popuplayertitle: 'Adduction',
                interactive: true,
                title: '<img src="styles/legend/Adduction_2.png" /> Adduction'
            });
var format_Cadre_3 = new ol.format.GeoJSON();
var features_Cadre_3 = format_Cadre_3.readFeatures(json_Cadre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadre_3.addFeatures(features_Cadre_3);
var lyr_Cadre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadre_3, 
                style: style_Cadre_3,
                popuplayertitle: 'Cadre',
                interactive: true,
                title: '<img src="styles/legend/Cadre_3.png" /> Cadre'
            });
var format_Captages_4 = new ol.format.GeoJSON();
var features_Captages_4 = format_Captages_4.readFeatures(json_Captages_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Captages_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Captages_4.addFeatures(features_Captages_4);
var lyr_Captages_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Captages_4, 
                style: style_Captages_4,
                popuplayertitle: 'Captages',
                interactive: true,
                title: '<img src="styles/legend/Captages_4.png" /> Captages'
            });
var format_Rservoirs_5 = new ol.format.GeoJSON();
var features_Rservoirs_5 = format_Rservoirs_5.readFeatures(json_Rservoirs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirs_5.addFeatures(features_Rservoirs_5);
var lyr_Rservoirs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirs_5, 
                style: style_Rservoirs_5,
                popuplayertitle: 'Réservoirs',
                interactive: true,
                title: '<img src="styles/legend/Rservoirs_5.png" /> Réservoirs'
            });
var format_essai_6 = new ol.format.GeoJSON();
var features_essai_6 = format_essai_6.readFeatures(json_essai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_essai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_essai_6.addFeatures(features_essai_6);
var lyr_essai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_essai_6, 
                style: style_essai_6,
                popuplayertitle: 'essai',
                interactive: true,
                title: '<img src="styles/legend/essai_6.png" /> essai'
            });
var format_Rocles_7 = new ol.format.GeoJSON();
var features_Rocles_7 = format_Rocles_7.readFeatures(json_Rocles_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rocles_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rocles_7.addFeatures(features_Rocles_7);
var lyr_Rocles_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rocles_7, 
                style: style_Rocles_7,
                popuplayertitle: 'Rocles',
                interactive: true,
                title: '<img src="styles/legend/Rocles_7.png" /> Rocles'
            });

lyr_OSMOpenTopoMap_0.setVisible(true);lyr_AdducPompage_1.setVisible(true);lyr_Adduction_2.setVisible(true);lyr_Cadre_3.setVisible(true);lyr_Captages_4.setVisible(true);lyr_Rservoirs_5.setVisible(true);lyr_essai_6.setVisible(true);lyr_Rocles_7.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_AdducPompage_1,lyr_Adduction_2,lyr_Cadre_3,lyr_Captages_4,lyr_Rservoirs_5,lyr_essai_6,lyr_Rocles_7];
lyr_AdducPompage_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'commune': 'commune', });
lyr_Adduction_2.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'commune': 'commune', 'longueur': 'longueur', });
lyr_Cadre_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'réf': 'réf', });
lyr_Captages_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'commune': 'commune', 'nom usuel': 'nom usuel', 'hauteur ng': 'hauteur ng', });
lyr_Rservoirs_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'commune': 'commune', 'nom': 'nom', 'capacité': 'capacité', 'cote gnf': 'cote gnf', 'Pho': 'Pho', });
lyr_essai_6.set('fieldAliases', {'id': 'id', 'vjhj': 'vjhj', 'njkhih': 'njkhih', 'photo': 'photo', 'photos': 'photos', });
lyr_Rocles_7.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_AdducPompage_1.set('fieldImages', {'qc_id': '', 'id': '', 'commune': '', });
lyr_Adduction_2.set('fieldImages', {'qc_id': '', 'id': '', 'commune': '', 'longueur': '', });
lyr_Cadre_3.set('fieldImages', {'qc_id': '', 'id': '', 'réf': '', });
lyr_Captages_4.set('fieldImages', {'qc_id': '', 'id': '', 'commune': '', 'nom usuel': '', 'hauteur ng': '', });
lyr_Rservoirs_5.set('fieldImages', {'qc_id': '', 'id': '', 'commune': '', 'nom': '', 'capacité': '', 'cote gnf': '', 'Pho': '', });
lyr_essai_6.set('fieldImages', {'id': 'TextEdit', 'vjhj': 'TextEdit', 'njkhih': 'TextEdit', 'photo': 'ExternalResource', 'photos': 'ExternalResource', });
lyr_Rocles_7.set('fieldImages', {'qc_id': '', 'id': '', });
lyr_AdducPompage_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'commune': 'no label', });
lyr_Adduction_2.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'commune': 'no label', 'longueur': 'no label', });
lyr_Cadre_3.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'réf': 'no label', });
lyr_Captages_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'commune': 'no label', 'nom usuel': 'no label', 'hauteur ng': 'no label', });
lyr_Rservoirs_5.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'commune': 'no label', 'nom': 'no label', 'capacité': 'no label', 'cote gnf': 'no label', 'Pho': 'no label', });
lyr_essai_6.set('fieldLabels', {'id': 'no label', 'vjhj': 'no label', 'njkhih': 'no label', 'photo': 'inline label - visible with data', 'photos': 'inline label - visible with data', });
lyr_Rocles_7.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_Rocles_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});