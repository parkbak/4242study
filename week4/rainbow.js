function selectColor() {
    var color=4;
    var colorName;

    switch (color) {
        case 1:
            colorName = 'Red';
        case 2:
            colorName = 'Orange';
        case 3:
            colorName = 'Yellow';
        case 4:
            colorName = 'Green';
            break;
        case 5:
            colorName = 'Deepblue';
        case 6:
            colorName = 'Purple';
        default:
            colorName = NaN;
    }
    alert(colorName);
}