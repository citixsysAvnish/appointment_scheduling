# Copyright (c) 2025, Citixsys and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class AppointmentFor(Document):
	def validation(self):
		frappe.sendmail(
			recipients=self.email,
			subject='Appointment Booked',
			message='Your appointment has been booked successfully.'
		)
