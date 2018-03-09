module.exports.pageNav = function(id) {
  var galleryTitles = [
    "A Mexican Vaquero (Study)",
    "Schumacher at Monaco",
    "Emerald Isle, NC: Sunset",
    "2017 Indy 500",
    "Wood Brothers #21 (1963, 1976, 2017)",
    "Rock on the Range 2017 Panorama",
    "Andretti vs Andretti at Long Beach (1986)",
    "San Diego",
    "Amanda (Pelecanus Venezia)",
    "Venezia Honeymoon",
    "Austria",
    "Stormtrooper Generations",
    "Osprey & Kingfisher",
    "Nascar at Chicagoland Speedway",
    "Waterfall at Blackwater Falls State Park",
    "Montoya Penske IndyCar at Mid-Ohio",
    "Emerald Isle, NC: Sunrise",
    "Formula E Long Beach ePrix",
    "Sundance 2015: Evening on Main Street",
    "Jim Clark Driving The Lotus 49",
    "Swamp Thing",
    "Edward Scissorhands",
    "Camden Lighthouse from aboard Schooner Olad",
    "Eastern Screech Owl",
    "Quanah Park, Last Chief of the Comanches",
    "Earth vs the Flying Saucers",
    "Blue Jay in the Desert",
    "Frank and the Cellar Door",
    "Frederic Chopin",
    "Eternal Sunshine",
    "Open Range",
    "Reframing Ruin: Bloomingdale Trail Twilight",
    "French Quarter Motorcycle Guitarist",
    "The Melting Doge",
    "Frozen Bench at Promontory Point",
    "Michael Schumacher at the Italian Grand Prix",
    "Notte a Venezia (Night in Venice)",
    "Lugano, Switzerland",
    "The Murder of Mingo Jack, book cover",
    "Wahkeena Falls, Oregon",
    "English Portfolio",
    "Corman and Poe",
    "Nine to Five",
    "Vincent Price in His Laboratory"
  ];
  var galleryIds = [
    "mexicanvaquero",
    "schumi-monaco",
    "ei-sunset",
    "2017indy500",
    "woodbrothers21",
    "rotr-pano",
    "andrettilongbeach",
    "sandiego",
    "pelicanvenice",
    "venezia",
    "austria",
    "stormtroopers",
    "ospreykingfisher",
    "nascarchicago-start",
    "blackwaterfalls",
    "montoyaindycar-midohio",
    "ei-sunrise",
    "formulae-longbeach",
    "sundance-mainst",
    "jimclark",
    "swampthing",
    "edwardscissorhands",
    "camdenlighthouse",
    "screechowl",
    "quanahparker",
    "earthvsflyingsaucers",
    "bluejaydesert",
    "frankcellardoor",
    "chopin",
    "eternalsunshine",
    "openrange",
    "bloomingdale",
    "fqmg",
    "meltingdoge",
    "frozenpromontory",
    "schumi-italy",
    "nottevenezia",
    "lugano",
    "mingojack",
    "wahkeena",
    "englishportfolio",
    "cormanandpoe",
    "ninetofive",
    "vincentprice"
  ];
  var num = (galleryIds.indexOf(id) > -1) ? galleryIds.indexOf(id) : 0,
      totalWorks = galleryIds.length - 1,
      prevNum = (num === 0) ? totalWorks : num - 1,
      nextNum = (num === totalWorks) ? 0 : num + 1,
      prevTitle = galleryTitles[prevNum],
      prevId = galleryIds[prevNum],
      nextTitle = galleryTitles[nextNum],
      nextId = galleryIds[nextNum];

  return '<li class="prev"><a href="'+prevId+'.html"><img src="../img/grid/thumbs/'+prevId+'-250.jpg" alt="'+prevTitle+'"><span>'+prevTitle+'</span></a></li>'+
         '<li class="next"><a href="'+nextId+'.html"><img src="../img/grid/thumbs/'+nextId+'-250.jpg" alt="'+nextTitle+'"><span>'+nextTitle+'</span></a></li>';
};

module.exports.monthNumber = function(month)  { 
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[(month - 1)];
};

