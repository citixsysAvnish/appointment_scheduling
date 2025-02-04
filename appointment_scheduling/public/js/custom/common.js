function getList(args, callback) {
    frappe.call({
        method: "frappe.client.get_list",
        args: args,
        callback: function (response) {
            let items = response.message;
            if (callback)
                callback(items);
        }
    });
}
function get(args, callback) {
    frappe.call({
        method: "frappe.client.get",
        args: args,
        callback: function (response) {
            let items = response.message;
            if (callback)
                callback(items);
        }
    });
}
