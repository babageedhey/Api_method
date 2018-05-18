var btn = document.querySelector('#btn');
var img = document.querySelector('#photo');

//Making API call using AJAx
//Random Photo Calls
btn.addEventListener('click', function () {
    xHR = new XMLHttpRequest();

    xHR.onreadystatechange = function(){
        if (xHR.readyState == 4 && xHR.status == 200){
          var data = JSON.parse(xHR.responseText);
          var url = data.message;
        }

       img.src = url;
    }

    xHR.open('GET','https://dog.ceo/api/breeds/image/random');
    xHR.send();
});


//Bitcoin price
var refresh = document.querySelector('#ref');
var price   = document.querySelector('#dollar');

refresh.addEventListener('click', function(){
    xHR = new XMLHttpRequest();
    xHR.onreadystatechange = function(){
        if (xHR.readyState == 4 && xHR.status == 200){
            var data = JSON.parse(xHR.responseText);
            var coin = data.bpi.USD.rate;
            price.innerText = coin;
        }
       
    } 

    xHR.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json');
    xHR.send();
});



//Using Fetch
 var url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

 var pounds = document.querySelector('#pounds');
refresh.addEventListener('click', function(){
    fetch(url).then(function(response){
        return response.json()
            .then(function(data){
                var coin = data.bpi.GBP.rate;
                pounds.innerText = coin;
            })
         
      })
})
 
//Using Fetch to gather random Users
var users = document.querySelector('#users');
users.addEventListener('click', function(){
    var url = 'https://randomuser.me/api';
    var name = document.querySelector('#name');
    var image = document.querySelector('#image');
    var age = document.querySelector('#age');
    var location = document.querySelector('#location');
    var email = document.querySelector('#email');
    fetch(url).then(function(response){
        return response.json()
            .then(function(data){
                console.log(data.results[0].picture.medium);
                var fname = data.results[0].name.first;
                var lname = data.results[0].name.last;
                var loc = data.results[0].location.state;
                var mail = data.results[0].email;
                var dob = data.results[0].dob;
                var picture = data.results[0].picture.medium;

                //display on page
                name.innerHTML = fname + ' ' + lname;
                age.innerHTML = dob;
                location.innerHTML = loc;
                email.innerHTML = mail;
                image.src = picture;

            })
    })
})

//Changing the multiple span with button click
$(document).ready(function(){
    $('.change').click(function(){
        $('.test').each(function(){
            $(this).text(0);
        })
    })
})

//Using ajax for xmlHttp Request
$('#generate').click(function(){
    $.ajax({
        method: 'GET',
        url: 'https://baconipsum.com/api/?type=meat-and-filler',
        dataType: 'json'
    })
    .done(function(data){
        $('#target').text(data[2]);
        console.log(data[1]);
    })
    .fail(function(err){
        console.log(err);
    });
})

//using ajax to call API
$('#cat').click(function(){
    $.ajax({
        method: 'GET',
        url: 'https://aws.random.cat/meow',
        dataType: 'json'
    })
    .then(function(data){
        console.log(data.file);
        $('#api-cat').attr('src', data.file);
       
    })
    .fail(function(error){
        console.log(error)
    });
})

//Using axios to make api calls
$('.question').click(function(){
    var category = document.querySelector('#category');
    var question = document.querySelector('#question');
    var answer = document.querySelector('#answer');
    var level = document.querySelector('#level');
    
    $.getJSON('https://opentdb.com/api.php?amount=10'
    )
    .done(function(data){
        var randomQuestion = data.results[0];
        
        $('#category').text(randomQuestion.category);
        $('#question').text(randomQuestion.question);
        $('#answer').text(randomQuestion.correct_answer);
        $('#level').text(randomQuestion.difficulty);
        
    })
    .fail(function(err){
        console.log(err);
    });
})

//Api call using axios
//  $('.question').click(function(){
//         var category = document.querySelector('#category');
//         var question = document.querySelector('#question');
//         var answer = document.querySelector('#answer');
//         var level = document.querySelector('#level');
//         var page = 'https://opentdb.com/api.php?amount=10';

//         axios({
//             method: 'GET',
//             url: 'https://opentdb.com/api.php?amount=10'
//         })
        
//         .then(function(data){
//             console.log(data.results);
//             var randomQuestion = data.results;
//             $('#category').text(randomQuestion.category);
//             $('#question').text(randomQuestion.question);
//             $('#answer').text(randomQuestion.correct_answer);
//             $('#level').text(randomQuestion.difficulty);
//         })
//         .catch(function(err){
//             console.log(err);
//         })
//  })