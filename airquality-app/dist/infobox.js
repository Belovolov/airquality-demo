function showInfoBox(mymap) {
  var info = L.control();
  info.onAdd = function (mymap) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };
  info.update = function (information) {
    this._div.innerHTML =
      '<h4>Monitor Site Information</h4>' +
      (information
        ? '<b>' + 'hello' + '</b><br />' + 'world' + ' people / mi<sup>2</sup>'
        : 'Hover over a marker <br /> <br />to check monitoring site information');
  };

  info.addTo(mymap);
}
