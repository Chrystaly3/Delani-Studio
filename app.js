$(document).ready(function(){
$("#image-icon").click(function(){
$(".paragraph-1").show();
$("#image-icon").hide();


});
$(".paragraph-1").click(function(){
$("#image-icon").show();
$(".paragraph-1").hide();
});
});

$(document).ready(function(){
$("#development-image").click(function(){
$(".paragraph-3").show();
$("#development-image").hide();
})
$(".paragraph-3").click(function(){
$("#development-image").show();
$(".paragraph-3").hide();
});
});

$(document).ready(function(){
$("#product-image").click(function(){
$(".paragraph-4").show();
$("#product-image").hide();
});

$(".paragraph-4").click(function(){
$("#product-image").show();
$(".paragraph-4").hide();
});
});

$(document).ready(function(){
$("#images1").hover(function(){
$(".portfolio-name1").slideToggle("slow")
});
})

