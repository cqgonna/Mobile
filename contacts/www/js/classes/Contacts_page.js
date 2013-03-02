/**
 * 
 */
function Contacts_page() {
	this.groups_array = new Array();
	this.persons_array = new Array();
	
	this.set_groups_array = function (groups_array) {
		this.groups_array = groups_array;
	}
	this.set_persons_array = function (persons_array) {
		this.persons_array = persons_array;
	}
	/**
	 * 显示分组列表
	 *
	 */
	this.render_groups = function() {
		var html = '';
		groups_array = this.groups_array;
		$.each(groups_array, function(index, value) { 
			html += "<div data-role=\"collapsible\"><h2>" + value.title + "</h2><ul data-role=\"listview\" data-inset=\"true\" id=\"contact_group_" + value.id + "\"></ul></div>";
		});
		$('#contact_groups').append(html);
	}

	/**
	 * 显示员工列表
	 */
	this.render_persons = function(group_id) {
		var html = '';
		persons_array = this.persons_array;
		$.each(persons_array, function(index, value) {
			if (group_id == value.group_id) {
				html += "<li><a href=\"contact_details.html?id=" + value.id + "\"><h3>" + value.last_name + " " + value.first_name + "</h3><img src=\"images/photos/male.png\" /><p>" + value.mobile + "</p></a></li>";		
			}
		});
		$('#contact_group_' + group_id).append(html);
	}
	
	/**
	 * 显示联系人具体信息
	 * 
	 */
	this.render_person_details = function(person_id) {
		var html = '';
		persons_array = this.persons_array;
		$.each(persons_array, function(index, value) {
			if (person_id == value.id) {
				$('#contact_name').text(value.last_name + " " + value.first_name );
				$('#contact_gender').text(value.gender);
				$('#contact_department').text(value.department);
				$('#contact_email').text(value.email);
				$('#contact_im').text(value.im);
				$('#contact_mobile').text(value.mobile);
				$('#contact_phone').text(value.phone);
				$('#contact_office').text(value.office);
			}
		});
	}
}