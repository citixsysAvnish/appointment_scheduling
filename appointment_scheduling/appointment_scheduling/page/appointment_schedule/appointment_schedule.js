let employeeItems = [];
let storeItems = [];
let appointmentSettings;
let calendar = {};
frappe.pages['appointment_schedule'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Appointment Schedule',
		single_column: true
	});

	$(frappe.render_template("appointment_schedule")).appendTo(page.main);
	// Fetch data from the Appointment DocType
	loadStore();
	loadEmployee();
}

function loadCalendar() {
	var date = new Date();
	debugger;
	if (!appointmentSettings) {
		let calendarEl = document.getElementById('calendar');
		calendar = new FullCalendar.Calendar(calendarEl, {
			initialDate: date,
			initialView: 'timeGridWeek',
			nowIndicator: true,
			eventOverlap: true,
			headerToolbar: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay'
			},
		});
		calendar.render();
	}
	else {
		var calendarEl = document.getElementById('calendar');
		var storeStartTime = appointmentSettings.custom_opt_store_setting_booking_starttime;
		var storeEndTime = appointmentSettings.custom_opt_store_setting_booking_end_time;
		console.log(storeStartTime);
		var dayOffWeek = [];
		if (appointmentSettings.custom_opt_store_setting_monday) {
			dayOffWeek.push(1);
		}
		if (appointmentSettings.custom_opt_store_setting_tuesday) {
			dayOffWeek.push(2);
		}
		if (appointmentSettings.custom_opt_store_setting_wednesday) {
			dayOffWeek.push(3);
		}
		if (appointmentSettings.custom_opt_store_setting_thursday) {
			dayOffWeek.push(4);
		}
		if (appointmentSettings.custom_opt_store_setting_friday) {
			dayOffWeek.push(5);
		}
		if (appointmentSettings.custom_opt_store_setting_saturday) {
			dayOffWeek.push(6);
		}
		if (appointmentSettings.custom_opt_store_setting_sunday) {
			dayOffWeek.push(0);
		}
		calendar = new FullCalendar.Calendar(calendarEl, {
			firstDay: getDayNumber(appointmentSettings.custom_opt_store_setting_week_start_day),
			businessHours: {
				daysOfWeek: dayOffWeek, // Sunday to Saturday				
				startTime: storeStartTime, // Start time
				endTime: storeEndTime // End time
			},
			slotMinTime: storeStartTime, // Earliest time displayed
			slotMaxTime: storeEndTime, // Latest time displayed
			initialDate: date,
			initialView: 'timeGridWeek',
			nowIndicator: true,
			eventOverlap: true,
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
					start: '2025-02-04T08:00:00',
					end: '2025-02-04T20:00',
					overlap: false,
					rendering: 'background',
					color: 'Red',
					bgColor: 'yellow'
				},
				{
					title: 'Meeting',
					start: '2025-02-04T11:00:00',
					constraint: 'availableForMeeting', // defined below
					color: '#257e4a'
				},
				{
					id: 'availableForMeeting',
					start: '2025-02-04T10:00:00',
					end: '2025-02-04T16:00:00',
					rendering: 'background'
				}
			]
		});

		calendar.render();
	}
}
function loadEmployee() {
	getList({
		doctype: "Appointment For",   // Replace with your DocType name
		fields: ["custom_opt_optomestrist_code", "custom_opt_optomestrist_name", "custom_opt_optomestrist_phone", "custom_opt_optomestrist_bgcolor", "custom_opt_optomestrist_schedule_fore_color", "custom_opt_optomestrist_appointment_color", "custom_opt_optomestrist_unscheduled"],  // Fields you need
		//filters: { "disabled": 0 },  // Optional filter conditions
		limit_page_length: 10  // Fetch only 10 records
	}, function (appointments) {
		employeeItems = [];
		// Populate the table with data		
		appointments.forEach(row => {
			var item = {
				code: row.custom_opt_optomestrist_code, name: row.custom_opt_optomestrist_name,
				phone: row.custom_opt_optomestrist_phone, bgColor: row.custom_opt_optomestrist_bgcolor,
				scheduleForeColor: row.custom_opt_optomestrist_schedule_fore_color,
				appointmentColor: row.custom_opt_optomestrist_appointment_color,
				unscheduled: row.custom_opt_optomestrist_unscheduled
			};
			employeeItems.push(item);
			addOptionInSelect('employee', item);
		});
		$('#employee').on('change', function () {
			getAppointmnetSlotes(this.value);
		});
	});
}
function loadStore() {
	getList({
		doctype: "Warehouse",   // Replace with your DocType name
		fields: ["name", "warehouse_name"],  // Fields you need
		filters: { "custom_is_retail_store": 1 },  // Optional filter conditions
		limit_page_length: 10  // Fetch only 10 records
	}, function (appointments) {
		storeItems = [];
		// Populate the table with data 
		appointments.forEach(row => {
			var item = {
				code: row.name, name: row.warehouse_name
			};
			storeItems.push(item);
			addOptionInSelect('store', item);
		});
		$('#store').on('change', function () {
			debugger;
			getAppointmnetSetting(this.value);
		});
		loadCalendar();
	});
}
function getAppointmnetSetting(stroeId) {
	getList({
		doctype: "Appointment Setting",   // Replace with your DocType name
		fields: ["*"],  // Fields you need
		filters: { "custom_opt_store_setting_store": stroeId },  // Optional filter conditions
		limit_page_length: 10  // Fetch only 10 records
	}, function (appointments) {
		appointmentSettings = appointments[0];
		console.log(appointmentSettings);
		loadCalendar();
	});
}
function getAppointmnetSlotes(employeeId) {
	get({
		doctype: "Appointment Schedule",
		name: employeeId // Replace with actual ID
	}, function (response) {
		let invoice = response;
		// Get Parent Field
		console.log(invoice);
	})
}
function createCalanderevents() {

}