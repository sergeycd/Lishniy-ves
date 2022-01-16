
alert("Seychas mi uznaem est' li u vas problemi s lishnim veson.Najmite ok");
let ves=prompt('V stroke napishite vash ves v kg');
let rost=prompt("Teper' napishite svoi rost v metrah");


let BMI=ves/(rost**2);

if(BMI>=25){console.log(alert('K sojaleniu vash BMI bolshe normi na '+((BMI-25).toPrecision(3))))}else{console.log(alert('Pozdravlyaem, vi ne imeete problem s lishnim vesom!'))};