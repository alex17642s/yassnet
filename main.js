document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profile-pic');

    // منع تنزيل الصورة
    profilePic.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('لا يمكن تنزيل الصورة');
    });
});

function disableInspectElement(event) {
    if (event.keyCode === 123) { // منع F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) { // منع Ctrl+Shift+I
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 74) { // منع Ctrl+Shift+J
        return false;
    } else if (event.ctrlKey && event.keyCode === 85) { // منع Ctrl+U
        return false;
    }
}