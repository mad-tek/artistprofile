//artist profile thumbnail scroller (Portfolio.js)
$(document).ready(function() {
    var p = $("#gallery").portfolio({
        enableKeyboardNavigation: true, // enable / disable keyboard navigation (default: true)
        loop: false, // loop on / off (default: false)
        easingMethod: 'easeOutQuint', // other easing methods please refer: http://gsgd.co.uk/sandbox/jquery/easing/
        height: '100px', // gallery height
        width: '100%', // gallery width in pixels or in percentage
        lightbox: true, // dim off other images, highlights only currently viewing image
        showArrows: true, // show next / prev buttons
        logger: false, // for debugging purpose, turns on/off console.log() statements in the script
        spinnerColor: '#000', // Ajax loader color
        offsetLeft: -5, // position left value for current image
        opacityLightbox: '0.2' // opacity of other images which are not active
    });
    p.init();
}); // end of ready(); thumbnail scroller

//selecting the artists
var selectartist = function(){
        var attr = $("#gallery").find('img.active').attr("artist");

            // determines which background image
            switch(attr){
                case 'artist':
                    artist();
                    break;
                case 'cindy':
                   cindy();
                   break; 
                case 'george':
                   george();
                   break;
                case 'marina':
                   marina();
                   break;
                case 'teck':
                   teck();
                   break;
            }
            
    };
    
//artist selection navigation
$(function(){
    $('#gallery').click(selectartist);
    $(document).keyup(selectartist);
    $('.gallery-arrow-left').click(selectartist);
    $('.gallery-arrow-right').click(selectartist);
});


//Name function
function profname(name) {
    $("#artist-name").fadeOut(function() {
        $(this).html(name);
    }).fadeIn();
}

//Default picture function
function defaultbg(name) {
    $("#profphoto").fadeOut(function(){
        $(this).css({backgroundImage:'url(../img/'+name+'-1.jpg)', transition: 'background-image 1s ease-in-out'});
    }).fadeIn();
}

//Populate preview photos
function previewimg(name){
    $("#preview-img-1").fadeOut(function() {
        $(this).html('<img src="../img/'+name+'-1.jpg"/>');
    }).fadeIn();
    $("#preview-img-2").fadeOut(function() {
        $(this).html('<img src="../img/'+name+'-2.jpg"/>');
    }).fadeIn();
    $("#preview-img-3").fadeOut(function() {
        $(this).html('<img src="../img/'+name+'-3.jpg"/>');
    }).fadeIn();
}

//refactoring code for previewimg and defaultbg
function pictures(name){
    defaultbg(name);
    previewimg(name);
}

//bg change on preview photos click function
$(function(){
    $('.previewimg').click(function(){
        var name = $("#gallery").find('img.active').attr("artist");
        var imgsrc = $(this).attr('id').split("-");
        var num = imgsrc[2];
        $("#profphoto").fadeOut(function(){
            $(this).css({backgroundImage:'url(../img/'+name+'-'+num+'.jpg)', transition: 'background-image 1s ease-in-out'});
        }).fadeIn();
    });
});

//Bio content function
function biocontent(content){
    $("#bio-content").fadeOut(function(){
        $(this).html(content);
    }).fadeIn();
}

//default profile
function artist(){
    var name = "artist";
    profname('<h1>Artists</h1>');
    pictures(name);
    biocontent('Ennui kogi cronut, small batch banh mi freegan letterpress sartorial fingerstache seitan single-origin coffee fixie. Pop-up Helvetica Marfa, hella heirloom narwhal authentic Thundercats Kickstarter wolf twee shabby chic sriracha skateboard flexitarian. Retro Banksy tilde, beard art party direct trade crucifix mustache raw denim locavore freegan PBR&B Marfa YOLO meggings. Stumptown seitan cliche photo booth, try-hard gentrify fixie paleo Wes Anderson kale chips taxidermy.');
}
//Cindy's profile
function cindy(){
    var name = "cindy";
    profname('<h1>Cindy</h1>');
    pictures(name);
    biocontent('<p>Vegan Thundercats Williamsburg sriracha food truck banh mi brunch. Biodiesel Pitchfork distillery bespoke skateboard. Biodiesel freegan Shoreditch Blue Bottle, listicle street art quinoa readymade paleo. Health goth fixie biodiesel, yr wayfarers photo booth food truck asymmetrical tattooed PBR DIY Carles crucifix semiotics Blue Bottle. Chambray cornhole butcher, Pitchfork kale chips tilde YOLO lumbersexual meggings yr Echo Park banh mi. Bespoke mlkshk paleo, you probably haven\'t heard of them food truck twee migas PBR&B craft beer skateboard gluten-free. Etsy synth Marfa PBR&B tote bag artisan.</p>');
}
//George's profile
function george(){
    var name = "george";
    profname('<h1>George</h1>');
    pictures(name);
    biocontent('<p>Vinyl before they sold out mumblecore salvia, drinking vinegar hashtag post-ironic Marfa locavore banh mi wayfarers distillery occupy. Disrupt tattooed lomo twee. Swag banjo squid irony put a bird on it fixie, deep v scenester. Marfa ennui mustache, lumbersexual Pinterest chia messenger bag put a bird on it gentrify. Keytar food truck deep v, lomo narwhal ugh health goth four dollar toast migas. Keytar quinoa tilde, tofu synth pork belly brunch banjo before they sold out whatever cronut flannel paleo twee. Fashion axe banh mi post-ironic hoodie, Brooklyn chia trust fund typewriter.</p>');
}
//Marina's profile
function marina(){
    var name = "marina";
    profname('<h1>Marina</h1>');
    pictures(name);
    biocontent('<p>Austin art party single-origin coffee, mlkshk Neutra four loko kitsch sustainable. Cliche tattooed before they sold out hashtag, Etsy Neutra Portland cred literally. Pour-over YOLO bitters, plaid PBR street art you probably haven\'t heard of them Echo Park fap cliche chia pug whatever. Lomo trust fund post-ironic slow-carb. Umami meh chia, chambray salvia authentic cardigan. Meh put a bird on it raw denim typewriter Wes Anderson Portland, single-origin coffee Pitchfork disrupt cronut. Food truck organic pop-up, lumbersexual fap slow-carb cliche hoodie freegan.</p>');
}
//Teck's profile
function teck(){
    var name = "teck";
    profname('<h1>Teck</h1>');
    pictures(name);
    biocontent('<p>Synth twee jean shorts forage viral, narwhal wayfarers. Pour-over scenester next level farm-to-table chambray. Hoodie beard trust fund, VHS cornhole meh Thundercats deep v. Brooklyn Williamsburg you probably haven\'t heard of them, four loko Tumblr Shoreditch asymmetrical scenester chillwave. Small batch butcher umami, YOLO scenester pork belly you probably haven\'t heard of them jean shorts craft beer American Apparel Portland hashtag pop-up street art lumbersexual. XOXO kitsch direct trade fashion axe, narwhal Tumblr Pitchfork meditation distillery. Bushwick pickled gentrify, sartorial trust fund gastropub banjo Vice Shoreditch yr fixie.</p>');
}