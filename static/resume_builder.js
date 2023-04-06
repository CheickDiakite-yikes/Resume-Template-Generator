function updateResumeDisplay() {
    jQuery('.name').text(jQuery('#inputName').val());
    jQuery('.email').text(jQuery('#inputEmail').val());
    jQuery('.phone').text(jQuery('#inputPhone').val());

    updateSection('education', jQuery('#inputEducation').val());
    updateSection('experience', jQuery('#inputExperience').val());
    updateSection('leadership', jQuery('#inputLeadership').val());
    updateSection('skills', jQuery('#inputSkills').val());
    updateSection('athletics', jQuery('#inputAthletics').val());
    updateSection('awards', jQuery('#inputAwards').val());
}

jQuery(document).ready(function () {
    jQuery('#update-resume-btn').click(function () {
        updateResumeDisplay();
    });

    // existing code
});

//newwwww
function updateSection(section, value) {
    if (value.trim() !== '') {
        jQuery('#' + section + '-section').show();

        // Split input value into lines and create list items
        var lines = value.split('\n');
        var listItems = '';
        lines.forEach(function (line, index) {
            if (line.trim() !== '') {
                if (index === 0 || index === 1) { // Treat the first two lines differently
                    listItems += '<li class="first-two-items">' + line.trim() + '</li>';
                } else {
                    listItems += '<li>' + line.trim() + '</li>';
                }
            }
        });

        jQuery('.' + section).html(listItems);
    } else {
        jQuery('#' + section + '-section').hide();
    }
}

jQuery(document).ready(function () {
    jQuery('#update-resume-btn').click(function () {
        updateResumeDisplay();
    });

    jQuery('#download-resume-btn').click(function () {
        downloadResume();
    });

    // existing code
});





function downloadResume() {
  // Set page size and margins
  var pdf = new jspdf.jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'letter',
    hotfixes: ['px_scaling'],
  });

  html2canvas(document.querySelector('#resume-display-containers')).then((canvas) => {
    var imgData = canvas.toDataURL('image/png');
    var pageWidth = pdf.internal.pageSize.getWidth();
    var pageHeight = pdf.internal.pageSize.getHeight();
    var imgWidth = pageWidth - 1; // leave 0.5-inch margins on left and right
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight > pageHeight - 1) {
      imgHeight = pageHeight - 1; // leave 0.5-inch margins on top and bottom
      imgWidth = (canvas.width * imgHeight) / canvas.height;
    }

    var marginLeft = (pageWidth - imgWidth) / 2;
    var marginTop = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, 'PNG', marginLeft, marginTop, imgWidth, imgHeight);
    pdf.save('resume.pdf');
  });
}






jQuery(document).ready(function() {
    // Other code remains unchanged

    // Add click event listener to the download button
    jQuery('#download-resume-btn').click(function() {
        console.log("Download button clicked");
        downloadResume();
    });
});


// Handle the 'Add Experience' button functionality
$('#add-experience-btn').on('click', function() {
  const newExperienceInput = document.createElement('textarea');
  newExperienceInput.setAttribute('rows', '4');
  newExperienceInput.setAttribute('cols', '30');
  newExperienceInput.setAttribute('placeholder', 'Enter your work experience');
  document.querySelector('#experience-inputs').appendChild(newExperienceInput);
});

// Update the experience display
function updateExperienceDisplay() {
  const experienceInputs = document.querySelectorAll('#experience-inputs textarea');
  const experienceSectionContent = document.querySelector('.section-content.experience');
  experienceSectionContent.innerHTML = '';

  experienceInputs.forEach((input, index) => {
    if (input.value.trim() !== '') {
      const experienceItem = document.createElement('div');
      experienceItem.innerHTML = `${input.value}`;
      experienceSectionContent.appendChild(experienceItem);
    }
  });
}

// Update resume display
function updateResumeDisplay() {
  $('.name').text($('#inputName').val());
  $('.email').text($('#inputEmail').val());
  $('.phone').text($('#inputPhone').val());
  $('.section-content.education').text($('#inputEducation').val());
  updateExperienceDisplay();
  $('.section-content.leadership').text($('#inputLeadership').val());
  $('.section-content.skills').text($('#inputSkills').val());
  $('.section-content.athletics').text($('#inputAthletics').val());
  $('.section-content.awards').text($('#inputAwards').val());
}

$('#update-resume-btn').on('click', function() {
  updateResumeDisplay();
});
