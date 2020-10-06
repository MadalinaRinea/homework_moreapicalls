$(function(){
    console.log("Ready!");
    addEvents();
    window.root = 'https://games-app-siit.herokuapp.com/';
    getAllGames();
    deleteGame();
    createGameEntry();
})

function addEvents(){
    let $container = $("#container");
    $container.on("click", function(){
        console.log('clicked');
    });
    $container.on("click", getAllGames);
    $container.on("click", deleteGame);
    $container.on("click", createGameEntry);
    // $container.on("click", doPromiseRequest);
}

function getAllGames() {
    fetch(root + '/posts/1', {
        method: 'GET'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
       console.log(jsonResp);
    });
}

function deleteGame() {
    fetch(root + '/games/2edf64fc-9133-705a-dcdd-13716db795dc', {
        method: 'DELETE'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
       console.log(jsonResp);
    });
}

function createGameEntry() {
    fetch(root + '/games', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Call of Duty®: WWII Returned',
            releaseDate: 1333929600,
            genre: 'First Person Shooter',
            publisher: 'Activision',
            imageUrl: 'https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr17?$TwoColumn_Image$'
        })
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
    });
}


// function doPostRequest(){
//     fetch(root + '/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         })
//     }).then(function(response){
//         return response.json();
//     }).then(function(jsonResp) {
//         console.log(jsonResp);
//     });
// }

// function doPutRequest(){
//     fetch(root + '/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         })
//     }).then(function(response){
//         return response.json();
//     }).then(function(jsonResp) {
//         console.log(jsonResp); 
//     });
// }


// function doPromiseRequest(){
//     fetch(root + '/posts/1', { method: 'GET'})
//     .then(function(response) {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     }).then(function(jsonResp) {
//        console.log(jsonResp);
//     }).catch(function(error) {
//         console.log("There was a network error", error);
//     });
// }