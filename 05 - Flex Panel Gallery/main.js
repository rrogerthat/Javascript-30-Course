const columns = document.querySelectorAll(".panel");

columns.forEach(item => item.addEventListener("click", toggleColumn));
function toggleColumn(e) {
    // console.log(this);
    this.classList.toggle("open");

    //my add'tl code: column that was expanded on click will shrink back down when another column is clicked on
    const other_columns = Array.from(columns).filter(item => item !== this);
    other_columns.forEach(item => item.classList.remove("open"));   
};  //don't need to remove "current-open" class since it automatically toggles after every end of transition of each column (on and off)

columns.forEach(item => item.addEventListener("transitionend", toggleWords));
function toggleWords(e) {
    if (e.propertyName.includes("flex-grow")) {
        console.log(e.propertyName);
        this.classList.toggle("current-open");
    }
}

