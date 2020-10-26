function postScore() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse( window.localStorage.getItem( 'highscores' ) ) || [];
    // sort highscores by score property in descending order
    highscores.sort( function ( a, b ) {
        return b.score - a.score;
    } );
    highscores.forEach( function ( highscores ) {
        // create li tag for each high score
        var list = document.createElement( 'li' );
        list.textContent = highscores.initials + ' - ' + highscores.score;
        console.log( highscores.score )
        console.log( highscores.initials )
        // display on page
        var sList = document.querySelector( '#scorelist' );
        sList.appendChild( list );
    } );
}
function clearHighscores() {
    window.localStorage.removeItem( 'highscores' );
    window.location.reload();
}
document.getElementById( 'clear-btn' ).onclick = clearHighscores;
// run function when page loads
postScore();