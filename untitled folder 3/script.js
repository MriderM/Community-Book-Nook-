document.addEventListener('DOMContentLoaded', () => {

    // 1. DYNAMIC CONTENT: Search and Filter for Programs Page
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const programCards = document.querySelectorAll('.program-card');

    if (searchInput && filterSelect) {
        const filterPrograms = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filterValue = filterSelect.value.toLowerCase();

            programCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                const badge = card.querySelector('.badge') ? card.querySelector('.badge').textContent.toLowerCase() : '';
                
                const matchesSearch = text.includes(searchTerm);
                const matchesFilter = filterValue === 'all' || badge.includes(filterValue);

                if (matchesSearch && matchesFilter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        searchInput.addEventListener('input', filterPrograms);
        filterSelect.addEventListener('change', filterPrograms);
    }

    // 2. INTERACTIVE ELEMENTS: Modal
    const modal = document.getElementById('registrationModal');
    const openModalBtns = document.querySelectorAll('.open-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (modal && openModalBtns.length > 0) {
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('active');
            });
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // 3. FORM VALIDATION AND AJAX SUBMISSION
    const forms = document.querySelectorAll('form.ajax-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Validate required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                const errorMsg = field.nextElementSibling;
                if (!field.value.trim()) {
                    field.classList.add('input-error');
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.style.display = 'block';
                    }
                    isValid = false;
                } else {
                    field.classList.remove('input-error');
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.style.display = 'none';
                    }
                }
            });

            // Validate Email format
            const emailField = form.querySelector('input[type="email"]');
            if (emailField) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const errorMsg = emailField.nextElementSibling;
                if (!emailRegex.test(emailField.value) && emailField.value.trim() !== '') {
                    emailField.classList.add('input-error');
                    if (errorMsg) {
                        errorMsg.textContent = 'Please enter a valid email address.';
                        errorMsg.style.display = 'block';
                    }
                    isValid = false;
                }
            }

            if (isValid) {
                // Simulate AJAX Submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate network delay
                setTimeout(() => {
                    form.style.display = 'none';
                    const successMsg = form.parentElement.querySelector('.success-message');
                    if (successMsg) {
                        successMsg.style.display = 'block';
                    }
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 1500);
            }
        });
    });
});