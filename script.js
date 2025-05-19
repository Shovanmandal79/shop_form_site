
document.getElementById("shopForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => { data[key] = value });
    fetch("https://mepinfo.netlify.app", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => alert("সফলভাবে সংরক্ষিত হয়েছে"))
    .catch(err => alert("সমস্যা হয়েছে: " + err));
});
