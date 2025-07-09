const fileInput = document.getElementById("file-upload");
const removeBtn = document.getElementById("remove-file");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const iconLabel = document.querySelector(".upload-icon");

  if (file) {
    const maxSizeMB = 50;
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (file.size > maxSizeMB * 1024 * 1024) {
      alert("❌ File too large. Please upload a file smaller than 50MB.");
      fileInput.value = "";
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      alert("❌ Invalid file type. Only PDF or DOCX files are allowed.");
      fileInput.value = "";
      return;
    }

    iconLabel.textContent = `📄 ${file.name}`;
    iconLabel.classList.add("file-selected");
    removeBtn.style.display = "inline";
  } else {
    iconLabel.textContent = "+";
    iconLabel.classList.remove("file-selected");
    removeBtn.style.display = "none";
  }
});

removeBtn.addEventListener("click", () => {
  fileInput.value = "";
  const iconLabel = document.querySelector(".upload-icon");
  iconLabel.textContent = "+";
  iconLabel.classList.remove("file-selected");
  removeBtn.style.display = "none";
});
