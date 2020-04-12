var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'custom',
    customDirection: {
        x0: '40%',
        y0: '10px',
        x1: '60%',
        y1: '50%',
    },
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});
