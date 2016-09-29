var jsonfile = require('jsonfile');
var Svg = require('svgutils').Svg;
 
Svg.fromSvgDocument(__dirname + '/drawing1.svg', function(err, svg){
    if(err){
        throw new Error('SVG file not found or invalid');
    }
 
    var json = svg.toJSON();
    
    jsonfile.writeFile('drawing1.json', json, (err) => {
      if (err) throw err;
      console.log('we did it!');
    });
});
