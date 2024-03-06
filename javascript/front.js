var tg1 = document.getElementById("beaches");
var tg2 = document.getElementById("city");
var tg3 = document.getElementById("places");
var tg11 = document.getElementById("beaches-div");
var tg22 = document.getElementById("city-div");
var tg33 = document.getElementById("places-div");
var pop_dest = document.getElementById("popup-dest");
var des_input = document.getElementById("dest");
var cookie_con = document.getElementById("cookie-con");
var tesr = 0;
var kl = document.getElementsByClassName("top-chos");
var anim_box = `<ul id="load_anim" class="o-vertical-spacing o-vertical-spacing--l m-0 p-0" > <li class="blog-post o-media"><div class="o-media__body"> <div class="o-vertical-spacing"><p> <span class="skeleton-box" ></span><span class="skeleton-box" ></span><span class="skeleton-box" ></span></p></div></div></li></ul`;
var hotel_sec = document.getElementById("hotelad_Sec");
$("#flip").click(function(){
  $("#panel").slideToggle();
});

function am2(event){
  var clicked_ck = event.currentTarget;
  if(clicked_ck.checked == false){
    console.log( clicked_ck.value )

    let curr_loc = new URLSearchParams(location.search);
    var catgories_ar =  curr_loc.get("categories_filter_ids").split(',');
   

    const index = catgories_ar.indexOf(clicked_ck.value);
if (index > -1) {
  if(catgories_ar.length==1) 
  {
    curr_loc.delete("categories_filter_ids");

  var t1 = "?";
curr_loc = t1.concat("",curr_loc);
  redirect_search(curr_loc.toString())

  }
  else{
  catgories_ar.splice(index, 1); 

  curr_loc.set("categories_filter_ids", catgories_ar.toString());

  var t1 = "?";
curr_loc = t1.concat("",curr_loc);
  redirect_search(curr_loc.toString())
  }

}

  }
  

}
function amen_search(event){

  var clicked_ck = event.currentTarget.value;
  let curr_loc = new URLSearchParams(location.search);

  
if(!curr_loc.has("categories_filter_ids")){
  curr_loc.set("categories_filter_ids", clicked_ck);
  var t1 = "?";
  curr_loc = t1.concat("",curr_loc);
  // console.log(curr_loc.toString());
    redirect_search(curr_loc.toString())


}
else{
  
  var conc = curr_loc.get("categories_filter_ids").concat(",", clicked_ck);
  // console.log(conc)
  curr_loc.set("categories_filter_ids", conc);
  var t1 = "?";
  curr_loc = t1.concat("",curr_loc);
  // console.log(curr_loc.toString());
  redirect_search(curr_loc.toString())



}

}


  if(window.location.pathname === "/search.html" ){
    console.log(location.search)
    let locsearch = new URLSearchParams(location.search)
    if(locsearch.get("categories_filter_ids")!== null  ){
      if(locsearch.get("categories_filter_ids").search(',') == -1){
        var catgories_ar =  locsearch.get("categories_filter_ids");
        var cat_e = document.getElementById(catgories_ar)
        cat_e.checked = true;
      }
      else{
        var catgories_ar =  locsearch.get("categories_filter_ids").split(',');
        for (let x in catgories_ar) {
          var cat_e = document.getElementById(catgories_ar[x])
          console.log(cat_e)
          cat_e.checked = true; 
        }

      }
    
    console.log(catgories_ar)
   
  }
  hotel_search_api(location.search);
    }

    


  
  
  checkbox()
  function checkbox(){
    var chboxes = document.getElementsByClassName("ck")
    for(var ck = 0 ;ck<chboxes.length;ck++){

      var ckbtn =  chboxes[ck]
      ckbtn.addEventListener("change", am2);
      ckbtn.addEventListener("click", amen_search);

      
    }

  }

  

function getcookiedata() {
  var tmpobj = JSON.parse(localStorage.getItem("test2"));
  if (tmpobj !== null) {
    tmpobj.forEach((element) => {
      search_cookie(
        element.cityname,
        element.imgurl,
        element.checkin,
        element.checkout,
        element.roomnum,
        element.purl
      );
    });
  }
}
getcookiedata();

for (var d = 0; d < kl.length; d++) {
  kll = kl[d];
  kll.addEventListener("click", asf);
}
function asf(event) {
  for (var d = 0; d < kl.length; d++) {
    if (event.currentTarget == kl[d]) {
      console.log(event.target);
      event.target.classList.add("selected");
    } else {
      kl[d].classList.remove("selected");
    }
  }
}
gethotels
async function localgetloction() {
//   const url = "http://127.0.0.1:5500/data.json";
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
// console.log(result)
//     add_search_dest(result);
//    var rs_p = document.getElementById('rs_num'); 
//    rs_p.innerHTML = `showing ${result.primary_count} properties in ${result.result[0].city_trans} `;
  
//     for(var j = 0 ;j<result.result.length;j++){
//       add_hotel_ads(result.result[j],j)
//     }
 
//   } catch (error) {
//     console.error(error);
//   }
}
localgetloction();

function redirect_search(query){
  window.location.assign(`http://127.0.0.1:5500/search.html${query}` )

}
function redirect_search_nw(dest_id,checkout_date,checkin_date,dest_type,adults_number,room_number,childern_number){
  window.open(`http://127.0.0.1:5500/search.html?order_by=popularity&checkout_date=${checkout_date}&filter_by_currency=AED&locale=en-gb&units=metric&dest_id=${dest_id}&dest_type=${dest_type}&adults_number=${adults_number}&room_number=${room_number}&checkin_date=${checkin_date}&include_adjacency=false&page_number=0&children_number=${childern_number}`, "mozillaWindow");

}
async function hotel_search_api(quey) {
  
  	const url = `https://booking-com.p.rapidapi.com/v1/hotels/search${quey}`;

  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',

  		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  	}
  };
  try {
  	var response = await fetch(url, options);
  	var result = await response.json();
    add_search_dest(result);
   var rs_p = document.getElementById('rs_num'); 
   rs_p.innerHTML = `showing ${result.primary_count} properties in ${result.result[0].city_trans} `;
  
    for(var j = 0 ;j<result.result.length;j++){
      add_hotel_ads(result.result[j],j)
    }



  } catch (error) {
  	console.error(error);
  }
}

async function getdata() {
  pop_dest.innerHTML = "";
  var ele1 = document.createElement("div");
  ele1.innerHTML = anim_box;
  pop_dest.append(ele1);
  var query = des_input.value;

    var url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${query}&locale=en-gb`;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391",
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      var anim_box1 = document.getElementById("load_anim");
      anim_box1.style.display = "none";

      add_search_dest(result);
    } catch (error) {
      console.error(error);
    }
}

function add_search_dest(rs) {

  
  console.log(rs);
  for (var d = 0; d < rs.length; d++) {
    var lb_result = rs[d].label;
    var lb_1 = lb_result.split(",", 1);
    var lb_2 = lb_result.slice(lb_1[0].length + 2);
    var loc_type = rs[d].dest_type;
    var each_dest_id = rs[d].dest_id;
    var each_dest_idIMG = rs[d].image_url;

    let dest_type_icon;
    switch (loc_type) {
      case "landmark":
        dest_type_icon = '<i class="fa-solid fa-building-columns pe-3"></i>';
        break;
      case "airport":
        dest_type_icon = '<i class="fa-solid fa-plane-departure pe-3"></i>';
        break;
      case "hotel":
        dest_type_icon = '<i class="fa-solid fa-hotel pe-3"></i>';
        break;
      default:
        dest_type_icon = '<i class="fa-regular fa-location-dot pe-3 "></i>';
    }

    var rowcontent = `<div onclick="addname(event)"  data-each_dest_id=${each_dest_id} data-each_dest_fname=${lb_1}   data-each_dest_id_img=${each_dest_idIMG}   class="location-box p-2 ps-3 rounded d-flex align-items-center"> ${dest_type_icon} <div class="loc-name-box"> <p  id="loc-head" class="m-0 p-0 loc-text-1  text-capitalize">${lb_1[0]}</p> <p id="loc-text"  class="m-0 p-0 loc-text-2 text-capitalize ">${lb_2}</p> </div> </div> `;
    var ele = document.createElement("div");
    ele.innerHTML = rowcontent;
    pop_dest.append(ele);
  }
}

function store_rec_search(first_city_name, d1, d2, room_number, image_url,purl) {
  function cookie_data(city, da1, da2, roomn, imgu ,purl) {
    this.cityname = city;
    this.checkin = da1;
    this.checkout = da2;
    this.roomnum = roomn;
    this.imgurl = imgu;
    this.purl = purl;
  }
  const obj1 = new cookie_data(first_city_name, d1, d2, room_number, image_url,purl);

  if (JSON.parse(localStorage.getItem("test2")) === null) {
    var objarray = new Array();
    objarray.push(obj1);
    localStorage.setItem("test2", JSON.stringify(objarray));
  } else {
    var tmpobj = JSON.parse(localStorage.getItem("test2"));
    tmpobj.push(obj1);
    localStorage.setItem("test2", JSON.stringify(tmpobj));
  }
}

function addname(event) {
  var button = event.currentTarget;
  var x = button;
  var firstloc = x.lastElementChild.firstElementChild.innerText;
  var lastloc = x.lastElementChild.lastElementChild.innerText;
  var fcityname = firstloc;

  var xj = firstloc.concat(" ", lastloc);
  des_input.value = xj;
  cl_dest_api();

  var btn1 = document.getElementById("popup-dest");
  btn1.style.display = "none";
  var choessen_dest_id = x.dataset.each_dest_id;
  var choessen_dest_idIMG = x.dataset.each_dest_id_img;
  var choessen_dest_fcityname = x.dataset.each_dest_fname;
  document.querySelector("#dest").dataset.dest_id = choessen_dest_id;
  document.querySelector("#dest").dataset.dest_id_img = choessen_dest_idIMG;
  document.querySelector("#dest").dataset.dest_fcityname = choessen_dest_fcityname;
}
function cl_dest_api() {
  if (des_input.value.length > 1) {
    var ele1 = document.createElement("div");
    ele1.innerHTML = anim_box;
    pop_dest.append(ele1);
    getdata();
  }
}
function focus_input() {
  var btn1 = document.getElementById("popup-dest");
  btn1.style.display = "block";
}
async function gethotels() {

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
  var checkout_date = new Date(document.getElementById("checkout").value).toISOString().split("T")[0];
  var checkin_date = new Date(document.getElementById("checkin").value).toISOString().split("T")[0];
  var dest_id = document.querySelector("#dest").dataset.dest_id;
  var image_url = document.querySelector("#dest").dataset.dest_id_img;
  var first_city_name = document.querySelector("#dest").dataset.dest_fcityname;
  var dest_type = document.querySelector("#dest").dataset.dest_type;
  var adults_number = document.querySelector("#adults_num").dataset.adults_num;
  var room_number = document.querySelector("#rooms_num").dataset.rooms_num;
  var childern_number = document.querySelector("#childern_num").dataset.childern_num;
  var des_input = document.getElementById("dest");
  const date1 = new Date(checkin_date);
  let month1 = months[date1.getMonth()];
  let day1 = date1.getDate();
  const date2 = new Date(checkout_date);
  let month2 = months[date2.getMonth()];
  let day2 = date2.getDate();
  var d1 = month1.concat(" ", day1);
  var d2 = month2.concat(" ", day2);

  const purl = `https://booking-com.p.rapidapi.com/v1/hotels/search?order_by=popularity&checkout_date=${checkout_date}&filter_by_currency=AED&locale=en-gb&units=metric&dest_id=${dest_id}&dest_type=${dest_type}&adults_number=${adults_number}&room_number=${room_number}&checkin_date=${checkin_date}&include_adjacency=false&page_number=0&page_number=0&children_number=${childern_number}`;
console.log(purl)
  store_rec_search(first_city_name, d1, d2, room_number, image_url,purl);
  redirect_search_nw(dest_id,checkout_date,checkin_date,dest_type,adults_number,room_number,childern_number);
}

function search_cookie(cname, cimg, d1, d2, peop_num,purl) {
  var cookie_row = `
  <a href="${purl}">
  <div class="cockie-box d-flex align-items-center me-3">
	<img class="border" src="${cimg}" style="border-radius: 10px;" alt="">
	<div class="d-flex flex-column ms-2 align-middle ">
		<h5 class="m-0 text-capitalize">${cname}</h5>
		<p id="cockie-date" class= "p-0 m-0">
		 <span>${d1}</span>-<span>${d2}</span> , <span>${peop_num} people</span></p>
	</div>
</div> </a>`;

  var ele = document.createElement("div");
  ele.innerHTML = cookie_row;
  if(cookie_con!==null){
    cookie_con.append(ele);

  }

}
var currencies =  document.getElementsByClassName("ft-li-curr");

for (var d = 0; d < currencies.length; d++) {
	kll = currencies[d];
	kll.addEventListener("click", currency_clicked);
	
    }

function currency_clicked(event){
	var show_curr = document.getElementById("currency")
	curr_btn = event.currentTarget.firstElementChild.innerText
	show_curr.innerText = curr_btn
	show_curr.click();
    }
    var pageNo = 0;
    let params = new URLSearchParams(location.search);
    function show_btn_clicked(){
      pageNo++;
  
params.set("page_number", pageNo);
var loc_srch = params.toString()
 var t1 = "?";
  loc_srch = t1.concat("",loc_srch);
      console.log(loc_srch)
    //  hotel_search_api(loc_srch);

    }
    function add_hotel_ads(rs,j){

      var hotel_box = `
      <div class="card mb-3">
      <div class="row g-0">
          <div class="col-md-4" style="height: 210px;">
              <img src="${rs.max_photo_url}" class="rounded  d-block" style="width: 100%; height: 100%;" alt="...">
          </div>
          <div class="col-md-8">
              <div class="card-body p-3" style="height:100%;">
                  <div class="d-flex flex-column justify-content-between" style="text-align: left; height:100%;">
                  <div>
                      <div class="box-title">
                          <h4 class="m-0" class="card-title " style="max-width: 437px;">${rs.hotel_name}</h4>
                          <li style="font-size: 19px;">
                             <i class="fa-solid fa-location-dot" ></i>               
                            <i class="fa-regular fa-heart"></i>
                          </li>
                          </div>
                          <p class="card-text text-body-secondary text-decoration-underline sm-text">
                          ${rs.address}
                         </p>
                      </div>
                   
                    
                      <div class="the details">
                    
                          <div >
                          <p class="card-text" style="max-width:310px; margin:auto 0;">${rs.unit_configuration_label}</p>
                         <div id="prom${j}">
                            
                            </div>   
                          </div>
                      </div>
                      <div class="evaluation d-flex justify-content-between align-items-end">
                          <div class="d-flex align-items-center">
                                <div class="star m-0 ">${rs.review_score.toFixed(1)}</div>
                                <p class="card-text   ms-2 text-body-secondary" style="font-size:16px;">
                           <span>${rs.review_nr.toLocaleString("en-US")} ratings</span> | <span>${rs.review_score_word}</span>
                                </p>
                          </div>
                         
                          <div class="fees d-flex flex-column align-items-end">
                              <div class="tax">
                                  <li class="d-flex  align-items-end">
                                      <p class="material-symbols-outlined text-body-secondary m-0 me-2"style="font-size: 16px;"><span class="text-decoration-line-through">$</span><span class="text-decoration-line-through">342</span></p>
                                      <p class="material-symbols-outlined text-bold fw-bold m-0"style="font-size: 24px; color:var(--jet);"><span>$</span><span>${rs.composite_price_breakdown.gross_amount_per_night.value}</span></p>
                                </li>                                 
                              </div>
                              <p class="card-text text-body-secondary" style="font-size: 12px;">Included Tax & Fees</p>
                          </div>
                      </div>
                      </div>
              </div>
          </div>
      </div>
  </div>`;

  var ele1 = document.createElement("div");
  ele1.innerHTML = hotel_box;
  hotel_sec.append(ele1);

                           
  var prom_con = document.getElementById(`prom${j}`)

  if(rs.is_free_cancellable!=0){
    var t = `<div class="d-flex cancel align-items-center">
    <i class="fa-solid fa-check"></i>
    <p class="m-0 ms-1 p-0">free canceltion</p>
    </div>`;
   var elem1 = document.createElement("div");
    elem1.innerHTML = t;
    prom_con.append(elem1);


  }
  if(rs.is_no_prepayment_block!=0){
    var t = `
    <div   class="d-flex cancel align-items-center">
    <i class="fa-solid fa-check"></i>
    <p class="m-0 ms-1 p-0">no prepayment needed</p>
    </div>`;
   var elem1 = document.createElement("div");
    elem1.innerHTML = t;
    prom_con.append(elem1);
  }
  if(rs.hotel_include_breakfast!=0){
    

var t = `
<div class="d-flex cancel align-items-center">
                            <i class="fa-solid fa-check"></i>
                            <p class="m-0 ms-1 p-0">breakast included</p>
                            </div>`;
var elem1 = document.createElement("div");
elem1.innerHTML = t;
prom_con.append(elem1);
  }
  


    }
