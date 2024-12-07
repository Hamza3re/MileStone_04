var form = document.getElementById('resumeForm');
var previewBtn = document.getElementById('previewBtn');
var downloadBtn = document.getElementById('downloadPdfBtn');
// Add event listener to Preview Button
previewBtn.addEventListener('click', function () {
    var _a;
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var workExp = document.getElementById('workexp').value;
    var academics = document.getElementById('academics').value;
    var objective = document.getElementById('objective').value;
    var skills = document.getElementById('skills').value;
    var projects = document.getElementById('projects').value;
    var achievements = document.getElementById('achievements').value;
    var profilePic = (_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0];
    var previewContainer = document.createElement('div');
    previewContainer.id = 'resumePreview';
    // Generate Preview
    var previewHTML = "\n    <h2>".concat(name, "</h2>\n    <h3>").concat(title, "</h>\n    <p><strong>Objective:</strong> ").concat(objective, "</p>\n    <p><strong>Work Experience:</strong> ").concat(workExp, "</p>\n    <p><strong>Academics:</strong> ").concat(academics, "</p>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n    <p><strong>Projects:</strong> ").concat(projects, "</p>\n    <p><strong>Achievements:</strong> ").concat(achievements, "</p>\n  ");
    if (profilePic) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            previewHTML = "<img src=\"".concat(reader_1.result, "\" alt=\"Profile Picture\" class=\"profile-picture\">") + previewHTML;
            previewContainer.innerHTML = previewHTML;
            document.body.appendChild(previewContainer);
        };
        reader_1.readAsDataURL(profilePic);
    }
    else {
        previewContainer.innerHTML = previewHTML;
        document.body.appendChild(previewContainer);
    }
});
