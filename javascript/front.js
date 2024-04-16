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
var skelton_ad = `<div class="right1"> <div class="card mb-3" style="max-width: 980PX;"> <div class="row g-0"> <div class="col-md-4"> <img class="header-img skeleton" src class="rounded mx-auto d-block" style="width: 100%; height: 100%;"> </div> <div class="col-md-8"> <div class="card-body"> <div style="text-align: left;"> <div class="box-title"> <h4 class="skeleton skeleton-text" style="max-width: 70%;  height: 30px;"></h4> <li> <i class="skeleton  me-2" class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px; height: 10px;"> </i> <i class="skeleton " class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px;  height: 10px;"></i> </li> </div> <p class="skeleton skeleton-text" class="card-text" style="max-width: 50%; height: 20px; "><small class="text-body-secondary"></small></p> <div class="the details mt-3"> <p class="skeleton skeleton-text" class="card-text" style="max-width: 60%; height: 15px;"><b></b></p> <div style="line-height: 4px; font-size: 15px;  margin-left: 12px;"> <p style="height: 15px;" class="skeleton skeleton-text"></p> <p  style="height: 15px;" class="skeleton skeleton-text"></p> </div> </div> <div class="evaluation mt-4 d-flex justify-content-between  align-items-end "> <p class="skeleton skeleton-text" class="card-text" style="max-width: 40%; height: 18px; "><small class="text-body-secondary"></small></p> <div class="fees d-flex flex-column align-items-end"> <div class="tax d-flex  align-items-end"> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 55%; height: 18px;"></p> </div> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 70%; height: 18px; "></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class="right1"> <div class="card mb-3" style="max-width: 980PX;"> <div class="row g-0"> <div class="col-md-4"> <img class="header-img skeleton" src class="rounded mx-auto d-block" style="width: 100%; height: 100%;"> </div> <div class="col-md-8"> <div class="card-body"> <div style="text-align: left;"> <div class="box-title"> <h4 class="skeleton skeleton-text" style="max-width: 70%;  height: 30px;"></h4> <li> <i class="skeleton  me-2" class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px; height: 10px;"> </i> <i class="skeleton " class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px;  height: 10px;"></i> </li> </div> <p class="skeleton skeleton-text" class="card-text" style="max-width: 50%; height: 20px; "><small class="text-body-secondary"></small></p> <div class="the details mt-3"> <p class="skeleton skeleton-text" class="card-text" style="max-width: 60%; height: 15px;"><b></b></p> <div style="line-height: 4px; font-size: 15px;  margin-left: 12px;"> <p style="height: 15px;" class="skeleton skeleton-text"></p> <p  style="height: 15px;" class="skeleton skeleton-text"></p> </div> </div> <div class="evaluation mt-4 d-flex justify-content-between  align-items-end "> <p class="skeleton skeleton-text" class="card-text" style="max-width: 40%; height: 18px; "><small class="text-body-secondary"></small></p> <div class="fees d-flex flex-column align-items-end"> <div class="tax d-flex  align-items-end"> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 55%; height: 18px;"></p> </div> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 70%; height: 18px; "></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class="right1"> <div class="card mb-3" style="max-width: 980PX;"> <div class="row g-0"> <div class="col-md-4"> <img class="header-img skeleton" src class="rounded mx-auto d-block" style="width: 100%; height: 100%;"> </div> <div class="col-md-8"> <div class="card-body"> <div style="text-align: left;"> <div class="box-title"> <h4 class="skeleton skeleton-text" style="max-width: 70%;  height: 30px;"></h4> <li> <i class="skeleton  me-2" class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px; height: 10px;"> </i> <i class="skeleton " class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px;  height: 10px;"></i> </li> </div> <p class="skeleton skeleton-text" class="card-text" style="max-width: 50%; height: 20px; "><small class="text-body-secondary"></small></p> <div class="the details mt-3"> <p class="skeleton skeleton-text" class="card-text" style="max-width: 60%; height: 15px;"><b></b></p> <div style="line-height: 4px; font-size: 15px;  margin-left: 12px;"> <p style="height: 15px;" class="skeleton skeleton-text"></p> <p  style="height: 15px;" class="skeleton skeleton-text"></p> </div> </div> <div class="evaluation mt-4 d-flex justify-content-between  align-items-end "> <p class="skeleton skeleton-text" class="card-text" style="max-width: 40%; height: 18px; "><small class="text-body-secondary"></small></p> <div class="fees d-flex flex-column align-items-end"> <div class="tax d-flex  align-items-end"> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 55%; height: 18px;"></p> </div> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 70%; height: 18px; "></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class="right1"> <div class="card mb-3" style="max-width: 980PX;"> <div class="row g-0"> <div class="col-md-4"> <img class="header-img skeleton" src class="rounded mx-auto d-block" style="width: 100%; height: 100%;"> </div> <div class="col-md-8"> <div class="card-body"> <div style="text-align: left;"> <div class="box-title"> <h4 class="skeleton skeleton-text" style="max-width: 70%;  height: 30px;"></h4> <li> <i class="skeleton  me-2" class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px; height: 10px;"> </i> <i class="skeleton " class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px;  height: 10px;"></i> </li> </div> <p class="skeleton skeleton-text" class="card-text" style="max-width: 50%; height: 20px; "><small class="text-body-secondary"></small></p> <div class="the details mt-3"> <p class="skeleton skeleton-text" class="card-text" style="max-width: 60%; height: 15px;"><b></b></p> <div style="line-height: 4px; font-size: 15px;  margin-left: 12px;"> <p style="height: 15px;" class="skeleton skeleton-text"></p> <p  style="height: 15px;" class="skeleton skeleton-text"></p> </div> </div> <div class="evaluation mt-4 d-flex justify-content-between  align-items-end "> <p class="skeleton skeleton-text" class="card-text" style="max-width: 40%; height: 18px; "><small class="text-body-secondary"></small></p> <div class="fees d-flex flex-column align-items-end"> <div class="tax d-flex  align-items-end"> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 55%; height: 18px;"></p> </div> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 70%; height: 18px; "></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class="right1"> <div class="card mb-3" style="max-width: 980PX;"> <div class="row g-0"> <div class="col-md-4"> <img class="header-img skeleton" src class="rounded mx-auto d-block" style="width: 100%; height: 100%;"> </div> <div class="col-md-8"> <div class="card-body"> <div style="text-align: left;"> <div class="box-title"> <h4 class="skeleton skeleton-text" style="max-width: 70%;  height: 30px;"></h4> <li> <i class="skeleton  me-2" class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px; height: 10px;"> </i> <i class="skeleton " class="" style="color:hsl(200, 20%, 70%); padding:0 10px ; width: 30px;  height: 10px;"></i> </li> </div> <p class="skeleton skeleton-text" class="card-text" style="max-width: 50%; height: 20px; "><small class="text-body-secondary"></small></p> <div class="the details mt-3"> <p class="skeleton skeleton-text" class="card-text" style="max-width: 60%; height: 15px;"><b></b></p> <div style="line-height: 4px; font-size: 15px;  margin-left: 12px;"> <p style="height: 15px;" class="skeleton skeleton-text"></p> <p  style="height: 15px;" class="skeleton skeleton-text"></p> </div> </div> <div class="evaluation mt-4 d-flex justify-content-between  align-items-end "> <p class="skeleton skeleton-text" class="card-text" style="max-width: 40%; height: 18px; "><small class="text-body-secondary"></small></p> <div class="fees d-flex flex-column align-items-end"> <div class="tax d-flex  align-items-end"> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 55%; height: 18px;"></p> </div> <p class="skeleton skeleton-text" class="card-text text-body-secondary" style="max-width: 70%; height: 18px; "></p> </div> </div> </div> </div> </div> </div> </div> </div>`
var hotel_sec = document.getElementById("ads_con");
var policy_sec = document.getElementById("policy_sec");
var ques_sec = document.getElementById("ques_sec");
var vr_sec = document.getElementById("rv_section")
var desc_sec = document.getElementById("desc-sec");
var nearby_sec = document.getElementById("nearby_sec");
var hoteldet_sec =  document.getElementById("hoteldet_sec")
var img_sec = document.getElementById("img-sec")
var amen_sec = document.getElementById("amen-sec");
var ad_con = document.getElementById("ads_con");



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

    redirect_search(curr_loc.toString())


}
else{
  
  var conc = curr_loc.get("categories_filter_ids").concat(",", clicked_ck);
  // console.log(conc)
  curr_loc.set("categories_filter_ids", conc);
  var t1 = "?";
  curr_loc = t1.concat("",curr_loc);

  redirect_search(curr_loc.toString())



}

}




  if(window.location.pathname === "/search.html" ){

    let locsearch = new URLSearchParams(location.search)
   order_by();
    if(locsearch.get("categories_filter_ids")!== null  ){

      if(locsearch.get("categories_filter_ids").search(',') == -1){
        var catgories_ar =  locsearch.get("categories_filter_ids");
        var cat_e = document.getElementById(catgories_ar)

        cat_e.checked = true;
      }
      else{
        var catgories_ar =  locsearch.get("categories_filter_ids").split(',');
        console.log(catgories_ar[0])

        for (let x in catgories_ar) {
          var cat_e = document.getElementById(catgories_ar[x])
          console.log(cat_e)
          cat_e.checked = true; 
        }
      }
  }
  hotel_search_api(location.search);
    }

    if(window.location.pathname === "/hotel-details.html" ){
      let locsearch = new URLSearchParams(location.search)
      var h_id = locsearch.get("hotel_id");

      localgethotelphotos(h_id);
      // localgethoteldata(h_id)
      
      
      // var t0 = setTimeout(localgetdesc(h_id), 2500);
     
      // var t0 = setTimeout(localgethotelfacilties(h_id), 2500);

      // var t1 = setTimeout(localgetreviews(h_id), 4500);
      // var t2 = setTimeout( localgetloction(h_id), 4500);
      // var t3 = setTimeout( localgetnearby(h_id), 5500);
      // var t4 = setTimeout( localgetquestions(h_id), 5500);

    }

    


  
  
  checkbox()
  function checkbox(){
    var chboxes = document.getElementsByClassName("ck")
    for(var ck = 0 ;ck<chboxes.length;ck++){

      var ckbtn =  chboxes[ck]
      ckbtn.addEventListener("change", am2);
      ckbtn.addEventListener("click", amen_search)
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
async function localgetloction(h_id) {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/policies?locale=en-gb&hotel_id=${h_id}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    for(var l = 0; l<result.policy.length;l++){
  
      var policy_name =result.policy[l].content[0].name
      var policiy_label = result.policy[l].content[0].ruleset;
      add_policy_divs(policy_name,policiy_label)
      
    }
    localgetnearby(h_id)
  } catch (error) {
    console.error(error);
  }
}

async function localgetnearby(h_id) {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/nearby-places?hotel_id=${h_id}&locale=en-gb`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.landmarks.closests[0].landmark_name)

    for(var l = 0; l<result.landmarks.closests.length;l++){
  
      var landmark =result.landmarks.closests[l].landmark_name;
      var landmark_dis = result.landmarks.closests[l].distance;
      add_neardes_divs(landmark,landmark_dis)
      
    }
    localgetquestions(h_id)
  } catch (error) {
    console.error(error);
  }
}

async function localgetquestions(h_id) {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/questions?hotel_id=${h_id}&locale=en-gb`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    for(var l = 0; l<result.q_and_a_pairs.length;l++){
  
      var question =result.q_and_a_pairs[l].question;
      var answer = result.q_and_a_pairs[l].answer;
      add_question_divs(question,answer)
      if(l==8)break;
      
    }
 
  } catch (error) {
    console.error(error);
  }
}
async function localgetreviews(h_id) {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/review-scores?hotel_id=${h_id}&locale=en-gb`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
  
    console.log(result)
    for(var l = 0; l<result.score_breakdown[0].question.length;l++){
      var rev_score =  result.score_breakdown[0].question[l].score 
      console.log(rev_score)
      
      var rev_label = result.score_breakdown[0].question[l].localized_question
      add_reviews_divs(rev_score,rev_label)
    }
    localgetloction(h_id)
  } catch (error) {
    console.error(error);
  }
}
async function localgethoteldata(h_id) {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=${h_id}&locale=en-gb`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.name)
    var reviewsc = result.review_score 
    var reviewsc_word = result.review_score_word 
    var hotel_class = result.class
    var hotel_name = result.name
    var hotel_address = result.address
  
     add_hoteldet_divs(reviewsc,reviewsc_word,hotel_class,hotel_name,hotel_address)
 
     localgetdesc(h_id)
  } catch (error) {
    console.error(error);
  }
}
async function localgethotelphotos(h_id) {
  // const url = "http://127.0.0.1:5500/javascript/hotel-photos.json";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=${h_id}&locale=en-gb`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result[0].url_square60)
 
  
      add_hotelphotos_divs(result)
 
      localgethoteldata(h_id)
  } catch (error) {
    console.error(error);
  }
}
async function localgethotelfacilties(h_id) {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/facilities?hotel_id=${h_id}&locale=en-gb`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result[0])


    for(var r = 0; r<result.length;r++){

      var am_icon;
      switch (result[r].facility_name) {
        case "Restaurant":
          var am_icon = `<i class="fa-solid fa-utensils"> </i>`
            add_hotelamnties_divs(am_icon,"Restaurant");
          break;
        case "Room service":
          am_icon = `<i class="fa-solid fa-bell-concierge"></i>`
          add_hotelamnties_divs(am_icon,"Room service");
          break;
        case "Bar":
         am_icon = `<i class="fa-solid fa-martini-glass-empty"></i>`
          add_hotelamnties_divs(am_icon,"Bar")
         break;
         case "24-hour front desk":
         am_icon = `<i class="fa-solid fa-door-open"></i>`
          add_hotelamnties_divs(am_icon," 24-hour front desk")
         break;
         case "Sauna":
          am_icon =`<i class="fa-solid fa-water-ladder"></i>`
           add_hotelamnties_divs(am_icon,"Sauna")
          break;
          case "Fitness centre":
            am_icon = `<i class="fa-solid fa-dumbbell"></i>`
             add_hotelamnties_divs(am_icon,"Fitness centre")
            break;
            case "Non-smoking rooms":
              am_icon = `<i class="fa-solid fa-smoking"></i>`
               add_hotelamnties_divs(am_icon," Non-smoking rooms")
              break;
              case "Laundry (additional charge)":
                am_icon = `<i class="fa-solid fa-soap"></i>`
                 add_hotelamnties_divs(am_icon,"Laundry")
                break;
                case "Facilities for disabled guests":
                am_icon = `<i class="fa-solid fa-wheelchair"></i>`
                 add_hotelamnties_divs(am_icon," disabled guests")
                break;
                case "Breakfast in the room":
                am_icon = `<i class="fa-solid fa-mug-saucer"></i>`
                 add_hotelamnties_divs(am_icon,"Breakfast ");
                break;

      }
    }
    localgetreviews(h_id)
  } catch (error) {
    console.error(error);
  }
}
async function localgethotelrooms(){
  const url = "http://127.0.0.1:5500/javascript/hotel-rooms.json";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
//   const url = `https://booking-com.p.rapidapi.com/v1/hotels/description?hotel_id=${h_id}&locale=en-gb`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
// 		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
// 	}
// };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const room_name  = result[0].rooms[167616101].bed_configurations[0].bed_types[0].name
console.log(result[0].rooms[167616101])
  // add_desc_div(result.description)

  // localgethotelfacilties(h_id)
  } catch (error) {
    console.error(error);
  }
}
async function localgetdesc(h_id){
  // const url = "http://127.0.0.1:5500/javascript/hotel-des.json";
  // const options = {
  //   method: "GET,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/description?hotel_id=${h_id}&locale=en-gb`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bea5676ca1msheb920d6760fc0dap1ec6f2jsne1a7e2289391',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};
  try {
    const response = await fetch(url, options);
    const result = await response.json();

  add_desc_div(result.description)

  localgethotelfacilties(h_id)
  } catch (error) {
    console.error(error);
  }
}
function add_hotelamnties_divs(icon,iname){
  var am_tmp = `<div class=" amenties-sec col d-flex align-items-center">
                                          ${icon}
                                          <p class="p-0 ps-2 m-0">${iname}</p>
                                    </div>`;
    var amen_div = document.createElement("div");
    amen_div.innerHTML = am_tmp;
    amen_sec.appendChild(amen_div);



}
function add_hotelphotos_divs(result){
  var img_tmp = `
  <div class="col-md-6 p-1 m-0" >
                        <img src="${result[0].url_max}" class="  m-0  " style="width: 100%; height: 408px;" alt="...">
                  </div>
                  <div class="col-md-6  m-0"  >
                        <div class="row" >
                              <div class="col-md-6 p-1 m-0"><img src="${result[1].url_max}" class="  m-0 d-block" style="width: 100%; height: 200px;" alt="...">
                              </div>
                              <div class="col-md-6 p-1 m-0"> <img src="${result[2].url_max}" class="  m-0 d-block" style="width: 100%; height: 200px;" alt="...">
                              </div>
                        </div>
                        <div class="row"  >
                              <div class="col-md-6 p-1 m-0">   <img src="${result[3].url_max}" class="  m-0 d-block" style="width: 100%; height: 200px;" alt="...">
                              </div>
                              <div class="col-md-6 p-1 m-0 " style="position:relative;"> <img src="${result[4].url_max}" class="  m-0 d-block" style="width: 100%;  height: 200px;" alt="...">
                                    <li class=" m-0  d-flex align-items-center img-count " > 
                                          <i class="fa-regular fa-image me-1"></i>
                                          <p ng-click="" class="p-0 m-0 cursor-pointe" >13+</p>
                                      </li>
                              </div>
                        </div>
                  </div>
  `;
  var img_div = document.createElement("div")
  img_div.classList = "row container";
  img_div.innerHTML = img_tmp 
  img_sec.appendChild(img_div)


}
function add_question_divs(ques,ans){
  var tmp = `  <div  class=" flib question mb-2 cursor-pointe  d-flex justify-content-between align-items-center">

  <h5 style="color: var(--carmine); " class=" mb-2 card-title "><b>${ques}</b></h5>
  <i class="fa-solid fa-chevron-down"></i>  
</div>
<p  style="color: var(--jet); font-size: 16px " class=" panel text-capitalize text-start mb-1">${ans}</p>

  `;
  var qdiv = document.createElement("div");
  qdiv.classList = "mb-3"
  qdiv.innerHTML = tmp
  ques_sec.appendChild(qdiv)
}
function add_desc_div(desc){
  var des_p = document.createElement("p")
  des_p.innerHTML = desc
  desc_sec.appendChild(des_p)

}
function add_neardes_divs(lm,ds){
  var nearby_tmp = `<div class="d-flex justify-content-between">
  <div class="d-flex cursor-pointer  align-items-center " style="color: var(--jet);">
        <i class="fa-solid fa-location-dot"></i>
        <p class="ms-1 m-0 p-0 ">${lm} </p>
    </div>
    <p class="m-0 p-0">${ds} mi</p>

</div>`;
var nearby_div = document.createElement("div");
nearby_div.innerHTML = nearby_tmp;
nearby_sec.appendChild(nearby_div)
}
function add_reviews_divs(sc,lb){
  var rv_tmp = `
  <div class="reviews-div mb-4">
       <div class="upper-reviews d-flex mb-1 p-0 justify-content-between align-items-center">
             <p class="m-0 text-capitalize"><b>${lb}</b></p>
             <p class="m-0">${sc}</p>
       </div>
       <div class="grey-div">
             <div style="width:${+ sc * 10}%;" class="carmine-div"></div>
       </div>
 </div>`;
 var rv_div = document.createElement("div")
 rv_div.classList = "col";
 rv_div.innerHTML = rv_tmp;
 vr_sec.appendChild(rv_div);
}
function add_hoteldet_divs(r_sc,r_sc_w,cl,na,addr){
  var hotelde_tmp = `<h2 id="rs_num" class="font-weight-bold mt-4" style="text-align: left; font-weight: bold;">${na}</h2>
  


   <div       class="d-flex cursor-pointer pb-1 align-items-center i-fav " style="color: var(--dm-gray);">
        <i class="fa-regular fa-location-dot"></i>
       <p class="m-0 ps-1 ">${addr} </p>
    </div>
    <div       class="d-flex cursor-pointer pb-1 align-items-center i-fav " style="color: var(--dm-gray);">
        <i class="fa-regular fa-star"></i>
       <p class="m-0 ps-1 ">${cl}-star hotel </p>
    </div>

   <div class="d-flex align-items-center">
        <div class="star m-0 rating-div ">${r_sc}</div>
        <p style="font-size: 20px;" class="card-text text-capitalize  ms-2 text-body-secondary">
   <span>${r_sc_w}</span> 
        </p>
  </div>
  `;
  var hdiv = document.createElement("div");
  hdiv.innerHTML = hotelde_tmp;
  hoteldet_sec.prepend(hdiv);


}

function add_policy_divs(poli_name,poli_label){

      var div = document.createElement("div");
      div.classList = "poli";
      var para_poli = document.createElement("p");
      para_poli.innerHTML = poli_name;
      div.appendChild(para_poli)

      para_poli.classList = "poli-h mb-1";
      var para_ul = document.createElement("ul");
      div.appendChild(para_ul);
for(var sl = 0;sl<poli_label.length;sl++){
      var para_li = document.createElement("li");
      para_li.style = "list-style:outside !important;";
      para_li.innerHTML = poli_label[sl].rule[0].content
      para_ul.appendChild(para_li);
}

      policy_sec.appendChild(div);
}
// localgetloction();
// localgetquestions();
// localgetreviews();
// localgetdesc();
// localgetnearby();
// localgethoteldata();
// localgethotelphotos();
// localgethotelfacilties();
localgethotelrooms();

function redirect_search(query){
  window.location.assign(`http://127.0.0.1:5500/search.html${query}`)

}
function redirect_search_nw(dest_id,checkout_date,checkin_date,dest_type,adults_number,room_number,childern_number){
  window.open(`http://127.0.0.1:5500/search.html?order_by=popularity&checkout_date=${checkout_date}&filter_by_currency=AED&locale=en-gb&units=metric&dest_id=${dest_id}&dest_type=${dest_type}&adults_number=${adults_number}&room_number=${room_number}&checkin_date=${checkin_date}&include_adjacency=false&page_number=0&children_number=${childern_number}`, "mozillaWindow");

}
async function hotel_search_api(quey) {

  var div = document.createElement("div");
  div.classList = "ads_con_sk";
  div.innerHTML = skelton_ad

    ad_con.append(div);

  
  
  
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
    var ads_con_sk = document.getElementsByClassName("ads_con_sk");
    for(var k = 0;k<ads_con_sk.length;k++){
      ads_con_sk[k].innerHTML = "";
    }
 
    add_search_dest(result);
   var rs_p = document.getElementById('rs_num'); 
   rs_p.innerHTML = `showing ${result.primary_count} properties in ${result.result[0].city_trans} `;
  
    for(var j = 0 ;j<result.result.length;j++){
      add_hotel_ads(result.result[j],j)
    }


    hotel_name_event()
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
  for (var d = 0; d < rs.length; d++){
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
      hotel_search_api(loc_srch);

    }
    function add_hotel_ads(rs,j){
      if(rs.review_score===null){
        rs.review_score = 8.46;
        rs.review_nr = "2322"
        rs.review_score_word= "good"

      }
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
                          <h4  class="card-title m-0 hotel_n cursor-pointe " data-hotel_id=${rs.hotel_id} style="max-width: 437px;">${rs.hotel_name}</h4>
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
   
  var order_list =  document.getElementsByClassName("order_list");
  for (var d = 0; d < order_list.length; d++) {
	kll = order_list[d];
	kll.addEventListener("click", orderyby_clicked);
    }
function hotel_name_event(){
  var hotels_name_list =  document.getElementsByClassName("hotel_n");


    for (var ht = 0; ht < hotels_name_list.length; ht++) {
    k = hotels_name_list[ht];
    k.addEventListener("click", hotelp_redirect);
      }

}
    
      function hotelp_redirect(event){
       
        var hotel_id = event.currentTarget.dataset.hotel_id;
        window.open(`http://127.0.0.1:5500/hotel-details.html?hotel_id=${hotel_id}`)
     

      }

    function orderyby_clicked(event){
     

      let params = new URLSearchParams(location.search);

      var order_by_btn = event.currentTarget.dataset.order_type;
  
params.set("order_by", order_by_btn);

history.pushState({}, "", `search.html?${params}`);


var loc_srch = params.toString()
 var t1 = "?";
  loc_srch = t1.concat("",loc_srch);
      console.log(loc_srch)


ad_con.innerHTML = "";
order_by();
      hotel_search_api(loc_srch);

        }
    function order_by() {
          let locsearch = new URLSearchParams(location.search)
          var order_by_para =  locsearch.get("order_by");
          var order_type = document.getElementById("order_type")

          let order_by_word;
    switch (order_by_para) {
      case "price":
        order_by_word = 'price lowest first';
        break;
      case "class_ascending":
        order_by_word = 'property class (high to low)';
        break;
        case "class_descending":
          order_by_word = 'property class (low to high)';
          break;
        case "review_score":
          order_by_word = 'top reviewed';
          default:
          order_by_word = 'our top picks';
    }
          order_type.innerHTML = order_by_word;
          order_type.click();

        }

    
        $(document).on("click", '.flib', function(){
          $(this).next(".panel").slideToggle("1000");

        });
      