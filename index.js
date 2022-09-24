var select = document.getElementById("selectNumber");
var options = ["Marwadi University", "Trikonbaug", "Madhapar", "Bedi Chowk", "Ratanpar","Manek Chowk", "Arpit University","Darshan Univerity"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
  