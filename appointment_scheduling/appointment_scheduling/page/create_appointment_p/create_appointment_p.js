frappe.pages['create-appointment-p'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Create Appointment',
		single_column: true
	});

	//let container = $(`create_appointment_p`).appendTo(page.body);
	let container = $(frappe.render_template("create_appointment_p")).appendTo(page.body);
	// Create a Data field formPage
	// fetch('create_appointment_p/create_appointment.json')
	// 	.then(response => response.json())
	// 	.then(fields => {
	// 		fields.forEach(field => {
	// 			let control = frappe.ui.form.make_control({
	// 				df: {
	// 					label: field.label,
	// 					fieldname: field.fieldname,
	// 					fieldtype: field.fieldtype
	// 				},
	// 				parent: $('#field-container'),
	// 				render_input: true
	// 			});

	// 			control.refresh();
	// 		});
	// 	});
	let fields = [
		{
			"module": "Cxs Optical",
			"fieldname": "custom_opt_optical_tab_break",
			"fieldtype": "Tab Break",
			"in_preview": 1,
			"label": "Optical"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_section_break",
			"fieldtype": "Section Break",
			"label": "Optical",
			"insert_after": "custom_opt_optical_tab_break"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_item_type",
			"fieldtype": "Link",
			"label": "Item Type",
			"options": "Item Type",
			"insert_after": "custom_opt_section_break",
			"reqd": 1
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_column_break_item_type",
			"fieldtype": "Column Break",
			"insert_after": "custom_opt_item_type"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_item_type.custom_opt_itemtype_description",
			"fieldname": "custom_opt_item_type_description",
			"fieldtype": "Read Only",
			"insert_after": "custom_opt_column_break_item_type",
			"label": "Item Type Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"collapsible": 1,
			"depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"fieldname": "custom_opt_lens_section_break",
			"fieldtype": "Section Break",
			"insert_after": "custom_opt_item_type_description",
			"label": "Lens"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_sphere_min",
			"fieldtype": "Float",
			"label": "Sphere (Min)",
			"placeholder": "Sphere (Min)",
			"insert_after": "custom_opt_lens_section_break",
			"precision": "2",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_cylinder_min",
			"fieldtype": "Float",
			"label": "Cylinder (Min)",
			"placeholder": "Cylinder (Min)",
			"insert_after": "custom_opt_lens_sphere_min",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_addition",
			"fieldtype": "Float",
			"label": "Addition",
			"placeholder": "Addition",
			"insert_after": "custom_opt_lens_cylinder_min",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_diameter",
			"fieldtype": "Float",
			"label": "Diameter",
			"insert_after": "custom_opt_lens_addition",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"placeholder": "Diameter"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_lenscatogory",
			"fieldtype": "Link",
			"label": "Lens Category",
			"options": "Lens Category",
			"insert_after": "custom_opt_diameter",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"placeholder": "Lens Category"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_lens_lenscatogory.custom_opt_lenscategory_description",
			"fieldname": "custom_opt_lens_lenscatogorydesc",
			"fieldtype": "Read Only",
			"label": "Lens Category Description",
			"insert_after": "custom_opt_lens_lenscatogory",
			"placeholder": "Lens Category"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_lenstype",
			"fieldtype": "Link",
			"label": "Lens Type",
			"options": "Lens Type",
			"insert_after": "custom_opt_lens_lenscatogorydesc",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"placeholder": "Lens Type"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_lens_lenstype.custom_opt_lens_type_description",
			"fieldname": "custom_opt_lens_lenstypedesc",
			"fieldtype": "Read Only",
			"label": "Lens Type Description",
			"insert_after": "custom_opt_lens_lenstype",
			"placeholder": "Lens Type Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_column_break_lens",
			"insert_after": "custom_opt_lens_lenstypedesc",
			"fieldtype": "Column Break"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_sphere_max",
			"fieldtype": "Float",
			"label": "Sphere (Max)",
			"placeholder": "Sphere (Max)",
			"insert_after": "custom_opt_column_break_lens",
			"precision": "2",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_cylinder_max",
			"fieldtype": "Float",
			"label": "Cylinder (Max)",
			"placeholder": "Cylinder (Min)",
			"insert_after": "custom_opt_lens_sphere_max",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_basecurve",
			"fieldtype": "Float",
			"label": "Base Curve",
			"placeholder": "Base Curve",
			"insert_after": "custom_opt_lens_cylinder_max",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_eye",
			"fieldtype": "Select",
			"label": "Eye",
			"insert_after": "custom_opt_lens_basecurve",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"options": "Left\nRight\nBoth"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_lensmaterial",
			"fieldtype": "Link",
			"label": "Lens Material",
			"insert_after": "custom_opt_lens_eye",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"options": "Lens Material"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_lensmaterial_description",
			"fieldtype": "Read Only",
			"insert_after": "custom_opt_lens_lensmaterial",
			"label": "Lens Material Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_lens_lenscolor",
			"fieldtype": "Link",
			"label": "Lens Color",
			"link_filters": "[[\"Lens or Frame Color\",\"lens\",\"=\",1]]",
			"insert_after": "custom_opt_lens_lensmaterial_description",
			"options": "Lens or Frame Color"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_lens_lenscolor.custom_opt_lens_frame_color_description",
			"fieldname": "custom_opt_lens_lenscolor_desc",
			"fieldtype": "Read Only",
			"label": "Lens Color Description",
			"insert_after": "custom_opt_lens_lenscolor",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Lens';",
			"placeholder": "Lens Color Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"collapsible": 1,
			"depends_on": "eval: doc.custom_opt_item_type === 'Contact Lens'",
			"fieldname": "custom_opt_cl_contact_lens_section",
			"fieldtype": "Section Break",
			"insert_after": "custom_opt_lens_lenscolor_desc",
			"label": "Contact Lens"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_cl_sphere",
			"fieldtype": "Float",
			"label": "Sphere",
			"placeholder": "Sphere",
			"insert_after": "custom_opt_cl_contact_lens_section",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type === 'Contact Lens'",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custome_opt_cl_diameter",
			"fieldtype": "Float",
			"label": "Diameter",
			"placeholder": "Diameter",
			"insert_after": "custom_opt_cl_sphere",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type === 'Contact Lens'",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_cl_axis",
			"fieldtype": "Float",
			"label": "Axis",
			"insert_after": "custome_opt_cl_diameter",
			"placeholder": "Axis"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_cl_lens_color",
			"fieldtype": "Link",
			"label": "Lens Color",
			"link_filters": "[[\"Lens or Frame Color\",\"contact_lens\",\"=\",1]]",
			"insert_after": "custom_opt_cl_axis",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type === 'Contact Lens'",
			"options": "Lens or Frame Color"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fieldname": "custom_opt_cl_column_break_cl",
			"insert_after": "custom_opt_cl_lens_color",
			"fieldtype": "Column Break"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_cl_column_break_cl",
			"fieldname": "custom_opt_cl_base_curve",
			"fieldtype": "Float",
			"label": "Base Curve",
			"placeholder": "Base Curve",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_cl_base_curve",
			"fieldname": "custom_opt_cl_cylinder",
			"fieldtype": "Float",
			"label": "Cylinder",
			"placeholder": "Cylinder",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_cl_cylinder",
			"fieldname": "custom_opt_cl_addition",
			"fieldtype": "Float",
			"label": "Addition",
			"placeholder": "Addition",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_cl_addition",
			"fetch_from": "custom_opt_cl_lens_color.custom_opt_lens_frame_color_description",
			"fieldname": "custom_opt_cl_lens_color_desc",
			"fieldtype": "Read Only",
			"label": "Lens Color Description",
			"placeholder": "Lens Color Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_cl_lens_color_desc",
			"collapsible": 1,
			"depends_on": "eval: doc.custom_opt_item_type ==='Frame' || doc.custom_opt_item_type ==='Sunglass';",
			"fieldname": "custom_opt_frame",
			"fieldtype": "Section Break",
			"label": "Frame"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame",
			"fieldname": "custom_opt_frame_a_box",
			"fieldtype": "Float",
			"label": "A Box",
			"placeholder": "A Box"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_a_box",
			"fieldname": "custom_opt_frame_b_box",
			"fieldtype": "Float",
			"label": "B Box",
			"placeholder": "B Box",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_b_box",
			"fieldname": "custom_opt_frame_model",
			"fieldtype": "Data",
			"label": "Frame Model"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_model",
			"fieldname": "custom_opt_frame_type",
			"fieldtype": "Link",
			"label": "Frame Type",
			"options": "Frame type"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_frame_type.custom_opt_frame_type_description",
			"fieldname": "custom_opt_frame_type_desc",
			"fieldtype": "Read Only",
			"label": "Frame Type Description",
			"insert_after": "custom_opt_frame_type",
			"placeholder": "Trame Type Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_type_desc",
			"fieldname": "custom_opt_frame_color",
			"fieldtype": "Link",
			"label": "Frame Color",
			"link_filters": "[[\"Lens or Frame Color\",\"frame\",\"=\",1]]",
			"mandatory_depends_on": "eval: (doc.custom_opt_item_type ==='Frame' || doc.custom_opt_item_type ==='Sunglass') && !doc.custom_opt_frame_pof;",
			"options": "Lens or Frame Color"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_frame_color.custom_opt_lens_frame_color_description",
			"fieldname": "custom_opt_frame_lenscolor_desc",
			"fieldtype": "Read Only",
			"label": "Lens Color Description",
			"insert_after": "custom_opt_frame_color",
			"placeholder": "Lens Color Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_lenscolor_desc",
			"fieldname": "custom_opt_frame_column_break",
			"fieldtype": "Column Break"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_column_break",
			"fieldname": "custom_opt_frame_ed",
			"fieldtype": "Float",
			"label": "ED",
			"placeholder": "B Box",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_ed",
			"fieldname": "custom_opt_frame_dbl",
			"fieldtype": "Float",
			"label": "DBL",
			"placeholder": "B Box",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_dbl",
			"fieldname": "custom_opt_frame_size",
			"fieldtype": "Float",
			"label": "Frame Size",
			"placeholder": "B Box",
			"precision": "2"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_size",
			"fieldname": "custom_opt_frame_shapetype",
			"fieldtype": "Link",
			"label": "Shape Type ",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type ==='Frame' || doc.custom_opt_item_type ==='Sunglass';",
			"options": "Shape Type"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"fetch_from": "custom_opt_frame_shapetype.custom_opt_shae_type_description",
			"fieldname": "custom_opt_frame_shapetype_desc",
			"fieldtype": "Read Only",
			"label": "Shape Type Description",
			"insert_after": "custom_opt_frame_shapetype",
			"placeholder": "Shape Type Description"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_shapetype_desc",
			"fieldname": "custom_opt_frame_pof",
			"fieldtype": "Check",
			"label": "Is POF",
			"placeholder": "Is POF"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_frame_pof",
			"depends_on": "eval: doc.custom_opt_item_type ==='Eye Exam';",
			"fieldname": "custom_opt_eye_exam_section",
			"fieldtype": "Section Break",
			"label": "Eye Exam"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_eye_exam_section",
			"default": "0",
			"fieldname": "custom_opt_eye_exam_optometrist_service",
			"fieldtype": "Check",
			"label": "Optometrist Service"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_eye_exam_optometrist_service",
			"fieldname": "custom_opt_eye_exam_column_break",
			"fieldtype": "Column Break"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_eye_exam_column_break",
			"fieldname": "custom_opt_service_time_in_minutes",
			"fieldtype": "Int",
			"label": "Service Time (In Minutes)"
		},
		{
			"module": "Cxs Optical",
			"insert_after": "custom_opt_service_time_in_minutes",
			"collapsible": 1,
			"fieldname": "custom_opt_lead_time_section_break",
			"fieldtype": "Section Break",
			"label": "Lead Time"
		},
		{
			"module": "Cxs Optical",
			"insert_after": "custom_opt_lead_time_section_break",
			"fieldname": "custom_opt_lead_time_min_delivery_day",
			"fieldtype": "Int",
			"mandatory_depends_on": "eval: doc.custom_opt_item_type !=='None' && doc.custom_opt_item_type !=='Eye Exam';",
			"label": "Min Delivery Days"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_lead_time_min_delivery_day",
			"collapsible": 1,
			"fieldname": "custom_opt_warranty_and_service_section_break",
			"fieldtype": "Section Break",
			"label": "Warranty and Service"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_and_service_section_break",
			"default": "0",
			"fieldname": "custom_opt_warranty_is_serviceable",
			"fieldtype": "Check",
			"label": "Is Serviceable"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_is_serviceable",
			"default": "0",
			"fieldname": "custom_opt_warranty_ischargeable",
			"fieldtype": "Check",
			"label": "Is Chargeable Under Warranty"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_ischargeable",
			"default": "0",
			"fieldname": "custom_opt_warranty_is_warrany_applicable",
			"fieldtype": "Check",
			"label": "Is Warranty Applicable"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_is_warrany_applicable",
			"fieldname": "custom_opt_warranty_column_break",
			"fieldtype": "Column Break"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_column_break",
			"fieldname": "custom_opt_warranty_min_service_days",
			"fieldtype": "Int",
			"label": "Minimum Service Days"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_min_service_days",
			"fieldname": "custom_opt_warranty_warranty_days",
			"fieldtype": "Data",
			"label": "Warranty Days"
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_warranty_warranty_days",
			"collapsible": 1,
			"fieldname": "custom_opt_spare_part_section",
			"fieldtype": "Section Break",
			"label": "Spare Part "
		},
		{
			"is_system_generated": 1,
			"module": "Cxs Optical",
			"insert_after": "custom_opt_spare_part_section",
			"default": "0",
			"fieldname": "custom_opt_spare_part_is_spare_part",
			"fieldtype": "Check",
			"label": "Is Spare Part"
		}
	];

	fields.forEach(field => {
		let control = frappe.ui.form.make_control({
			df: field,
			parent: container,
			render_input: true
		});
		//control.refresh();
	});

	// Create a Button
	let button = $('<button class="btn btn-primary">Submit</button>').appendTo(container);
	button.click(() => {
		frappe.msgprint(`You entered: ${field1.get_value()}`);
	});
}