let employeeItems = [];
let storeItems = [];
frappe.pages['appointment_schedule'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Appointment Schedule ',
		single_column: true
	});

	$(frappe.render_template("appointment_schedule")).appendTo(page.main);
	// Load the FullCalendar Library

	loadCalendar();
	// Fetch data from the Appointment DocType
	getDocTypeList({
		doctype: "Warehouse",   // Replace with your DocType name
		fields: ["warehouse_name"],  // Fields you need
		filters: { "custom_is_retail_store": 1 },  // Optional filter conditions
		limit_page_length: 10  // Fetch only 10 records
	}, function (appointments) {
		storeItems = [];
		// Populate the table with data
		let select = document.getElementById("store");
		appointments.forEach(row => {
			var item = {
				code: row.warehouse_name, name: row.warehouse_name
			};
			storeItems.push(item);
			let option = document.createElement("option");
			option.value = item.code;
			option.textContent = item.name;
			select.appendChild(option);
		});
	});
	getDocTypeList({
		doctype: "Appointment For",   // Replace with your DocType name
		fields: ["custom_opt_optomestrist_code", "custom_opt_optomestrist_name", "custom_opt_optomestrist_phone", "custom_opt_optomestrist_bgcolor", "custom_opt_optomestrist_schedule_fore_color", "custom_opt_optomestrist_appointment_color", "custom_opt_optomestrist_unscheduled"],  // Fields you need
		//filters: { "disabled": 0 },  // Optional filter conditions
		limit_page_length: 10  // Fetch only 10 records
	}, function (appointments) {
		employeeItems = [];
		// Populate the table with data
		let select = document.getElementById("employee");
		appointments.forEach(row => {
			var item = {
				code: row.custom_opt_optomestrist_code, name: row.custom_opt_optomestrist_name,
				phone: row.custom_opt_optomestrist_phone, bgColor: row.custom_opt_optomestrist_bgcolor,
				scheduleForeColor: row.custom_opt_optomestrist_schedule_fore_color,
				appointmentColor: row.custom_opt_optomestrist_appointment_color,
				unscheduled: row.custom_opt_optomestrist_unscheduled
			};
			employeeItems.push(item);
			let option = document.createElement("option");
			option.value = item.code;
			option.textContent = item.name;
			select.appendChild(option);
		});
	});
	// frappe.model.
	// frappe.model.with_doctype('Appointment Schedules', function () {
	// 	var form = new frappe.ui.form.Form("Appointment Schedules", wrapper);
	// 	form.refresh();
	// });
	// // Load a specific DocType Form inside the Page
	// frappe.model.with_doctype('Calendar View', function () {
	// 	var form = new frappe.ui.form.Form("Calendar View", wrapper);
	// 	form.refresh();
	// });
	// Fetch data from a DocType	
}
$(document).ready(function () {
	// page is now ready, initialize the calendar...
	// $('#calendar').fullCalendar({
	//   weekends: true
	// });
});
function loadCalendar() {
	var date = new Date();
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialDate: date,
		initialView: 'timeGridWeek',
		nowIndicator: true,
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		},
		navLinks: true, // can click day/week names to navigate views
		editable: true,
		selectable: true,
		selectMirror: true,
		allDaySlot: false,
		dayMaxEvents: true, // allow "more" link when too many events
		events: [
			{
				title: 'Meeting',
				start: '2023-01-12T10:30:00',
				end: '2023-01-12T10:35:00'
			},
			{
				title: 'Lunch',
				start: '2023-01-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2023-01-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2023-01-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2023-01-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2023-01-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2023-01-28'
			}
		]
	});

	calendar.render();
}