<script>
    // Get the form element by its ID
    const form = document.getElementById('internship-form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the First Name field
        const firstNameInput = document.getElementById('first-name-input');
        if (firstNameInput.value.trim() === '') {
            firstNameInput.classList.add('is-invalid');
        } else {
            firstNameInput.classList.remove('is-invalid');
        }

        // Validate the Last Name field
        const lastNameInput = document.getElementById('last-name-input');
        if (lastNameInput.value.trim() === '') {
            lastNameInput.classList.add('is-invalid');
        } else {
            lastNameInput.classList.remove('is-invalid');
        }

        // Validate the Email field
        const emailInput = document.getElementById('email-input');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
        }

        // Validate the College Name field
        const collegeInput = document.getElementById('college-input');
        if (collegeInput.value.trim() === '') {
            collegeInput.classList.add('is-invalid');
        } else {
            collegeInput.classList.remove('is-invalid');
        }

        // Validate the Roll No field
        const rollNoInput = document.getElementById('roll-no-input');
        if (rollNoInput.value.trim() === '') {
            rollNoInput.classList.add('is-invalid');
        } else {
            rollNoInput.classList.remove('is-invalid');
        }

        // Validate the Graduation Year field
        const graduationYearInput = document.getElementById('graduation-year-input');
        if (graduationYearInput.value === '') {
            graduationYearInput.classList.add('is-invalid');
        } else {
            graduationYearInput.classList.remove('is-invalid');
        }

        // Validate the Conditions Checkbox
        const conditionsCheckbox = document.getElementById('conditions-checkbox');
        if (!conditionsCheckbox.checked) {
            conditionsCheckbox.classList.add('is-invalid');
        } else {
            conditionsCheckbox.classList.remove('is-invalid');
        }

        // Check if any field is still invalid
        if (form.querySelectorAll('.is-invalid').length === 0) {
            // All fields are valid, you can proceed with form submission
            // For example, you can submit the form data to a server here
            alert('Form submitted successfully!');
            // Uncomment the next line to submit the form to a server
            // form.submit();
        }
    });
</script>
