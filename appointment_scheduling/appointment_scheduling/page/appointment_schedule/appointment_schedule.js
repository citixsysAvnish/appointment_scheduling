frappe.pages['appointment_schedule'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Appointment Schedule ',
		single_column: true
	});
}