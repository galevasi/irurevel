const projection = geoAzimuthalEqualArea()
    .scale(200)
    .translate([262, 1187])
    .clipAngle(180 - 1e-3)
    .precision(1);
const path = geoPath().projection(projection);
return path;
