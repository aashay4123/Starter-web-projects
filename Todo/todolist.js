$("input[type = text]").on("keypress",function(e)
{
	if (e.which == 13)
	{
		var text = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + text + "</li>");
		$(this).val("");
	}
})
$("ul").on("click","li",function() {
		$(this).toggleClass("completed");
});

$("ul").on("click","span" , function(e) {
		$(this).parent().fadeOut(200,function()
		{
			$(this).remove();
		});
		e.stopPropagation();
});

$(".fa-plus").click(function()
{
	$("input[type = text]").fadeToggle();
})