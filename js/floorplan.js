var values = {
    cricketsTopLeft: [100, 100],
    mealwormsTopLeft: [100, 600],
    cricketSetup: {
        rows: 3,
        columns: 3,
        height: 5,
        size: 100,
        padding: 10
    },
    mealwormSetup: {
        rows: 1,
        columns: 1,
        height: 5,
        perLevel: 5,
        size: 200,
        padding: 10
    }
}

var facility = {
    cricketArea: null,
    mealwormArea: null,

    drawCricketArea: function() {
        var outline = new Shape.Rectangle({
            point: values.cricketsTopLeft,
            size: [values.cricketSetup.rows*values.cricketSetup.size+(values.cricketSetup.rows+1)*values.cricketSetup.padding, values.cricketSetup.columns*values.cricketSetup.size+(values.cricketSetup.columns+1)*values.cricketSetup.padding],
            strokeColor: 'black',
            strokeWidth: 5
        });
        this.cricketArea = new Group([outline]);

        for (var i=0; i<values.cricketSetup.rows; i++) {
            for (var j=0; j<values.cricketSetup.columns; j++) {
                var box = new Shape.Rectangle({
                    point: [values.cricketsTopLeft[0] + i*values.cricketSetup.size + (i+1)*values.cricketSetup.padding, values.cricketsTopLeft[1] + j*values.cricketSetup.size + (j+1)*values.cricketSetup.padding],
                    size: [values.cricketSetup.size, values.cricketSetup.size],
                    strokeColor: 'black',
                    strokeWidth: 5
                });

                this.cricketArea.addChild(box);
            }
        }
    },

    drawMealwormArea: function() {
        var outline = new Shape.Rectangle({
            point: values.mealwormsTopLeft,
            size: [values.mealwormSetup.rows*values.mealwormSetup.size+(values.mealwormSetup.rows+1)*values.mealwormSetup.padding, values.mealwormSetup.columns*values.mealwormSetup.size+(values.mealwormSetup.columns+1)*values.mealwormSetup.padding],
            strokeColor: 'black',
            strokeWidth: 5
        });
        this.mealwormArea = new Group([outline]);

        for (var i=0; i<values.mealwormSetup.rows; i++) {
            for (var j=0; j<values.mealwormSetup.columns; j++) {
                var box = new Shape.Rectangle({
                    point: [values.mealwormsTopLeft[0] + i*values.mealwormSetup.size + (i+1)*values.mealwormSetup.padding, values.mealwormsTopLeft[1] + j*values.mealwormSetup.size + (j+1)*values.mealwormSetup.padding],
                    size: [values.mealwormSetup.size, values.mealwormSetup.size],
                    strokeColor: 'black',
                    strokeWidth: 5
                });

                this.mealwormArea.addChild(box);
            }
        }
    }
}

facility.drawCricketArea();
facility.drawMealwormArea();
