JXG.Options = JXG.deepCopy(JXG.Options, {
    showCopyright: false,
    showNavigation: false,

    navbar: {
        strokeColor: '#bbb',
        fillColor: 'none'
    },

    elements: {
        strokeColor: '#6BBA70',
        highlightStrokeColor: '#84e68a',
        fillColor: 'none',
        highlightFillColor: 'none',

        strokeOpacity: 1,
        highlightStrokeOpacity: 1,
        fillOpacity: 1,
        highlightFillOpacity: 1,
        strokeWidth: '2px',
	    withLabel: false,

        draft : {
            draft : false,
            color : '#565656',
            opacity : 0.8,
            strokeWidth : '1px'
        }
    },

    point: {
        face: 'o',
        size: 4,
        fillColor : '#eeeeee',
        highlightFillColor : '#eeeeee',
        strokeColor : 'white',
        highlightStrokeColor : 'white',
        showInfobox: false
    },

    line : {
        firstArrow : false,
        lastArrow : false,
        straightFirst : true,
        straightLast : true,
        fillColor : '#000000',
        highlightFillColor : 'none',
        strokeColor : '#4096EE',
        highlightStrokeColor : '#45a1ff',

        ticks : {
            drawLabels : true,
            drawZero : false,
            insertTicks : false,
            minTicksDistance : 50,
            maxTicksDistance : 300,
            minorHeight : 4,
            majorHeight : 10,
            minorTicks : 4,
            defaultDistance : 1
        },
        labelOffsets: [10,10]
    },

    axis : {
        strokeColor : '#aaa',
        highlightStrokeColor : '#aaa'
    },

    circle : {
        fillColor : 'none',
        highlightFillColor : 'none',
        strokeColor : '#0000ff',
        highlightStrokeColor : '#C3D9FF'
    },

    conic : {
        fillColor : 'none',
        highlightFillColor : 'none',
        strokeColor : '#0000ff',
        highlightStrokeColor : '#C3D9FF'
    },

    angle : {
	    withLabel:true,
        radius : 1.0,
        fillColor : '#FF7F00',
        highlightFillColor : '#FF7F00',
        strokeColor : '#FF7F00',
        textColor : '#0000FF',
        fillOpacity : 0.3,
        highlightFillOpacity : 0.3
    },

    /* special arc options */
    arc : {
        firstArrow : false,
        lastArrow : false,
        fillColor : 'none',
        highlightFillColor : 'none',
        strokeColor : '#0000ff',
        highlightStrokeColor : '#C3D9FF'
    },

    /* special polygon options */
    polygon : {
        fillColor : '#6BBA70',
        highlightFillColor : '#6BBA70',
        fillOpacity : 0.3,
        highlightFillOpacity : 0.3
    },

    text: {
        fontSize : 10,
        strokeColor : 'gray',
        useASCIIMathML : false,
        useMathJax : false,
        defaultDisplay : 'html' //'html' or 'internal'
    },

    curve: {
        strokeWidth : '2px',
        strokeColor : '#6BBA70'
    },

    slider: {
        snapWidth: null,
        firstArrow : false,
        lastArrow : false,
        withTicks: true,
        withLabel: true,
        glider: {
            fillColor : '#eeeeee',
            highlightFillColor : '#eeeeee',
            strokeColor : 'white',
            highlightStrokeColor : 'white',
            size: 6,
            face: '<>'
        },
        segment1: {
            needsRegularUpdate : false,
            name : '',
            strokeWidth: 1,
            strokeColor : '#ddd',
            highlightStrokeColor : '#ddd'
        },
        /* line ticks options */
        ticks : {
            needsRegularUpdate : false,
            drawLabels : false,
            drawZero : true,
            insertTicks : true,
            minorHeight : 4,          // if <0: full width and height
            majorHeight : 10,        // if <0: full width and height
            minorTicks : 0,
            defaultDistance : 1,
            opacity : 1,
            strokeWidth: 1,
            strokeColor : '#000000'
        },
        segment2: {
            strokeWidth: 5,
            name : '',
            strokeColor : '#eee',
            highlightStrokeColor : '#eee'
        },
        text: {
            strokeColor: '#ccc'
        }
    }
});