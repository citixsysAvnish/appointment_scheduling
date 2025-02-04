function getDayNumber(weekName) {
    const formattedName = weekName.charAt(0).toUpperCase() + weekName.slice(1).toLowerCase();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days.indexOf(formattedName);
}

function addOptionInSelect(selectId, item) {
    let select = document.getElementById(selectId);
    let option = document.createElement("option");
    option.value = item.code;
    option.textContent = item.name;
    select.appendChild(option);
}