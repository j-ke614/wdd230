const today = new Date ();
console.log(today);

    const dayNumber = today.getDay();
    console.log(dayNumber);
    const element = document.getElementById("banner");
        if (dayNumber == 4) {
            element.classlist.add("showme");
        } else {
            element.classlist.add("hideme");
        }
        if (dayNumber == 1) {
            element.classlist.add("showme");
        } else {
            element.classlist.add("hideme");
        }