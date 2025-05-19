
document.getElementById("shopForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => { data[key] = value });
    fetch("https://script.google.com/macros/s/AKfycbxAgnfbOwbYbWP5c7tKwscE-D-ZHpBRlas1S_reqz4GOWqJBWQ3sJrACSKU59kqLxg5/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => alert("সফলভাবে সংরক্ষিত হয়েছে"))
    .catch(err => alert("সমস্যা হয়েছে: " + err));
});
