const form = document.getElementById('resumeForm') as HTMLFormElement;
const previewBtn = document.getElementById('previewBtn') as HTMLButtonElement;
const downloadBtn = document.getElementById('downloadPdfBtn') as HTMLButtonElement;

// Add event listener to Preview Button
previewBtn.addEventListener('click', () => {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const workExp = (document.getElementById('workexp') as HTMLTextAreaElement).value;
  const academics = (document.getElementById('academics') as HTMLTextAreaElement).value;
  const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
  const achievements = (document.getElementById('achievements') as HTMLTextAreaElement).value;

  const profilePic = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0];
  const previewContainer = document.createElement('div');
  previewContainer.id = 'resumePreview';

  // Generate Preview
  let previewHTML = `
    <h2>${name}</h2>
    <h3>${title}</h>
    <p><strong>Objective:</strong> ${objective}</p>
    <p><strong>Work Experience:</strong> ${workExp}</p>
    <p><strong>Academics:</strong> ${academics}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Projects:</strong> ${projects}</p>
    <p><strong>Achievements:</strong> ${achievements}</p>
  `;

  if (profilePic) {
    const reader = new FileReader();
    reader.onload = () => {
      previewHTML = `<img src="${reader.result}" alt="Profile Picture" class="profile-picture">` + previewHTML;
      previewContainer.innerHTML = previewHTML;
      document.body.appendChild(previewContainer);
    };
    reader.readAsDataURL(profilePic);
  } else {
    previewContainer.innerHTML = previewHTML;
    document.body.appendChild(previewContainer);
  }
});
