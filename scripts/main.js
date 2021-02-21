$().ready(function(){
	$(".btn.btn-primary:submit").on("click", function(){
		var zeroAbszero = false;
		var config = { childList: true };
		var tb = $("#tableBody");
		var observer = new MutationObserver(function(){
			if ( $("#zeroAbszeroBtn").length == 0 && tb.find("input.Note-control").length > 0 ) {
				if ( !zeroAbszero && $("#btnSave").length == 1 ) {
					var put0, rem0;

					put0 = $("#btnSave").clone().empty();
					put0.attr("id", "zeroAbszeroBtn");
					put0.text("تصفيـــر {0}");
					
					rem0 = put0.clone().empty();
					rem0.attr("id", "zeroAbszeroRemBtn");
					rem0.text("إلغاء التصفيـــر");
					tb.parent().prepend(put0, rem0);
					
					put0.on("click", function() {
						tb.find( "input.Note-control:not([readonly])" ).val(function( index, value ) {
							return ( value == "" ) ? "0" : value;
						});
					});
					rem0.on("click", function() {
						tb.find( "input.Note-control:not([readonly])" ).val(function( index, value ) {
							return ( value == "0" ) ? "" : value;
						});
					});
					zeroAbszero = true;
				}
			}
		});
		observer.observe(document.getElementById("tableBody"), config);
	});
});