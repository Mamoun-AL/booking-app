
var tg1 = document.getElementById('beaches')
var tg2 = document.getElementById('city')
var tg3 = document.getElementById('places')

var tg11 = document.getElementById('beaches-div')
var tg22 = document.getElementById('city-div')
var tg33 = document.getElementById('places-div')
var pop_dest = document.getElementById('popup-dest');
var des_input = document.getElementById('dest');

var kl = document.getElementsByClassName('top-chos')
for(var d = 0 ;d<kl.length; d++){
	kll= kl[d]
	kll.addEventListener('click', asf)
}
function asf(event){
	for(var d = 0 ;d<kl.length; d++){
		if(event.currentTarget==kl[d]){
			console.log(event.target)
			event.target.classList.add("selected")
		}
		else{
			kl[d].classList.remove("selected")
		}
	}
}

async function getdata(){
	pop_dest.innerHTML ="";
	var query = des_input.value;
	console.log(query);

// 	const url = 'http://127.0.0.1:5500/data.json';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	}
// };
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	var lb_result = result.data[0].label;
// 	var lb_1 = lb_result.split(",", 1);
// 	var lb_2 = lb_result.slice(lb_1[0].length+2);


// 	add_search_dest(result)
// } catch (error) {
// 	console.error(error);
// }

//  var url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${query}&locale=en-gb`;
// console.log(url)
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a52afd9723msha91f8291b928d48p12d98djsnbd58709c9cff',
// 		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
// 	}
// };

try {
	const response = await fetch(url, options);
	const result = await response.json();

	add_search_dest(result)

} catch (error) {
	console.error(error);
}

}


function add_search_dest(rs){
	console.log(rs)
for(var d = 0; d<rs.length;d++){
	var lb_result = rs[d].label;
	var lb_1 = lb_result.split(",", 1);
	var  lb_2 = lb_result.slice(lb_1[0].length+2);
	var loc_type = rs[d].dest_type;
	var each_dest_id = rs[d].dest_id

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



	var rowcontent = `
	<div onclick="addname(event)"  data-each_dest_id=${each_dest_id} class="location-box p-2 ps-3 rounded d-flex align-items-center">
	  ${dest_type_icon}
	  <div class="loc-name-box">
		<p  id="loc-head" class="m-0 p-0 loc-text-1  text-capitalize">${lb_1[0]}</p>
		<p id="loc-text"  class="m-0 p-0 loc-text-2 text-capitalize ">${lb_2}</p>
	  </div>
     </div>

                                `;
var ele = document.createElement('div')
ele.innerHTML = rowcontent
pop_dest.append(ele);
}
}



function addname(event){
	var button = event.currentTarget;
	var x = button;
	var firstloc = x.lastElementChild.firstElementChild.innerText
	var lastloc = x.lastElementChild.lastElementChild.innerText

	var xj = firstloc.concat(" ",lastloc)
	des_input.value = xj;
	cl_dest_api();
	
	var btn1 = document.getElementById('popup-dest');
	btn1.style.display = "none";
	var choessen_dest_id = x.dataset.each_dest_id;
	document.querySelector("#dest").dataset.dest_id =  choessen_dest_id
	
}
function cl_dest_api(){

	if(des_input.value.length >1){
		getdata()
	}

}
function focus_input(){
	var btn1 = document.getElementById('popup-dest');
	btn1.style.display = "block";
}
async function gethotels(){
     
	var checkout_date = new Date(document.getElementById('checkout').value).toISOString().split('T')[0];
	var checkin_date = new Date(document.getElementById('checkin').value).toISOString().split('T')[0];
	var dest_id = document.querySelector("#dest").dataset.dest_id;
	var dest_type = document.querySelector("#dest").dataset.dest_type;
	var adults_number  = document.querySelector("#adults_num").dataset.adults_num;
	var room_number  = document.querySelector("#rooms_num").dataset.rooms_num;
	var childern_number  = document.querySelector("#childern_num").dataset.childern_num;

	console.log(checkout_date)



// 	const url = `https://booking-com.p.rapidapi.com/v1/hotels/search?order_by=popularity&checkout_date=${checkout_date}&filter_by_currency=AED&locale=en-gb&units=metric&dest_id=${dest_id}&dest_type=${dest_type}&adults_number=${adults_number}&room_number=${room_number}&checkin_date=${checkin_date}&include_adjacency=true&page_number=0&children_number=${childern_number}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a52afd9723msha91f8291b928d48p12d98djsnbd58709c9cff',
// 		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const hotelsresult = await response.json();
// 	console.log(hotelsresult);
// } catch (error) {
// 	console.error(error);
// }
}


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count = 1;
    $scope.d1 = true;
    $scope.d2 = false;
    $scope.d3 = false;
    $scope.count1 = 1;
    $scope.count2 = 0;
    $scope.increment = function() {
	if($scope.count>=1&&$scope.count<9){
	    $scope.count++;
	    }
	}
	$scope.minus = function() {
		if($scope.count>1){
		    $scope.count--;
		    }
	}
	$scope.increment1 = function() {
		if($scope.count1>=1&&$scope.count1<9){
		    $scope.count1++;
		    }
		}
		$scope.minus1 = function() {
			if($scope.count1>1){
			    $scope.count1--;
			    }
		}
		$scope.increment2 = function() {
			if($scope.count2>=0&&$scope.count2<9){
			    $scope.count2++;
			    }
			}
			$scope.minus2 = function() {
				if($scope.count2>0){
				    $scope.count2--;
				    }
			}
			$scope.m1fun = function() {
				$scope.d1 = true;
				$scope.d2 = false;
                        $scope.d3 = false;
				
			}
			$scope.m2fun = function() {
				$scope.d1 = false;
				$scope.d2 = true;
                        $scope.d3 = false;
				angular.element('#places').addClass("selected");

			}
			$scope.m3fun = function() {
				$scope.d1 = false;
				$scope.d2 = false;
                        $scope.d3 = true;
			}

	
});


// var app = angular.module('myApp1', []);
// app.controller('myCtrl1', function($scope) {
//     $scope.d1 = true;
//     $scope.d2 = "false";
//     $scope.d3 = true;
 

	
// });


