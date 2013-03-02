contacts_page = new Contacts_page();
$( document ).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
});

$("#index_page").live('pageinit', function() {
	if(!html5sql.database){
		html5sql.openDatabase("com.jtwo.contacts", "JTwo Data", 5*1024*1024);
		$.get('setup.sql',function(sqlStatements){
			console.log(sqlStatements);
			html5sql.process(
				sqlStatements,
				function(){
				},
				function(error, statement){
					console.error("Error: " + error.message + " when processing " + statement);
				}
				);
		});
	}
    
	html5sql.logInfo = true;
	html5sql.logErrors = true;
	
	html5sql.putSelectResultsInArray = true;
	html5sql.process(
		["SELECT * FROM groups"],
		function(transaction, results, rowArray) {
			contacts_page.set_groups_array(rowArray);
			contacts_page.render_groups();
			html5sql.process(
				["SELECT * FROM persons"],
				function(transaction, results, rowArray) {
					contacts_page.set_persons_array(rowArray);
					$.each(contacts_page.groups_array, function(index, value) {
						contacts_page.render_persons(value.id);
					});
					$('#contact_groups').trigger("create");
				},
				function(error, statement){
					console.error("Error: " + error.message + " when processing " + statement);
				}
				);
		},
		function(error, statement){
			console.error("Error: " + error.message + " when processing " + statement);
		}
		);
});

$("#index_page").live('pageshow', function() {
});

$("#contact_details_page").live('pagebeforeshow', function(e,data) {
	var beername = $('.ui-btn-hover-e #beernameinfo', data.prevPage).text();
});

function get_url_vars() {
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	{
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

$('#details_page').live('pageshow', function(event) {
	var id = get_url_vars()["id"];
	console.log(id);
	contacts_page.render_person_details(id);
});
