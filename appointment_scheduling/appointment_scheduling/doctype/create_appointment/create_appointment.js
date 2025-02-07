// Copyright (c) 2025, Citixsys and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Create Appointment", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Create Appointment", {
    refresh: function (frm) {
        frm.add_custom_button("Select Items", function () {
            new frappe.ui.form.MultiSelectDialog({
                doctype: "Item",
                target: frm,
                setters: {
                    item_group: "All Item Groups" // Filter items
                },
                action: function (selected_items) {
                    frappe.msgprint("Selected Items: " + selected_items.join(", "));
                }
            });
        });
    }
});

