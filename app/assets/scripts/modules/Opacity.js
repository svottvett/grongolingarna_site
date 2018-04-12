$(document).ready(function()
{
	var current_service;		//Current service (nothing is choosen from start)

	$(".opacity-script img").click(function()	//On image click
	{
		change_service(this);
	});

	function change_service(service)	//Change the selected service, to the service clicked
	{
		if(current_service == service)
		{
			
		}
		else
		{
			$("input[name='service']").val($(service).attr("class"));
			$(current_service).css("opacity", "0.5");
			current_service = service;
		}
		
		$(service).css("opacity", "1");
	}


});