function selectColor() {
    var color=4;
    var colorName;

        // 케이스마다 브레이크 달아주는 것이 죠음!! :)
    switch (color) {
        case 1:
            colorName = 'Red';
            break;
        case 2:
            colorName = 'Orange';
            break;
        case 3:
            colorName = 'Yellow';
            break;
        case 4:
            colorName = 'Green';
            break;
        case 5:
            colorName = 'Deepblue';
            break;
        case 6:
            colorName = 'Purple';
            break;
        default:
            colorName = NaN;
    }
    alert(colorName);
}