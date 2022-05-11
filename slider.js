
    var details={
 "Keyboard":4,
 "Bike":10,
 "Cups":14,
 "Mobile":19,
 "Mouse":24,
 "Bicycle":29,
 "Laptop":36,
 "Charger":40,
 "Table":45,
 "DinnerTable":50
};
$(document).ready(function(){

$("#slider").slider({max:50,range:true,values:[8,50],
 change:function(event,ui){
     getDetails(ui.values[0],ui.values[1]);
 
}});
var current = $("#slider").slider("option","values");
getDetails(current[0],current[1]);
});
function getDetails(minimum,maxmimum)
{
$("#range").text("Age"+minimum+"-Age"+maxmimum);
var result="<br> <table border 1><tr><th>PRODUCT</th><th>AGE</th></tr>";
for(var item in details)
{
   if(details[item]>=minimum&&details[item]<=maxmimum)
   {
       result +="<tr><td>"+item+"</td><td>" +details[item]+"</td></tr>";
   }
}
result +="</table>";
$("#output").html(result);
}
