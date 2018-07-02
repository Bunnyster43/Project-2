$(document).ready(function(){
    
    $('#frontPageRedirect').click(function(){
        console.log("Redirect to index!");
        // Reload the page to get the updated list
        location.assign("/");
    })
})