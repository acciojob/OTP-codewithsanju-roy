//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('keydown', (e) => {
        // Only allow number keys, backspace, arrows, tab
        if (
          (e.key >= '0' && e.key <= '9') ||
          e.key === 'Backspace' ||
          e.key === 'ArrowLeft' ||
          e.key === 'ArrowRight' ||
          e.key === 'Tab'
        ) {
          // Allow these keys
        } else {
          e.preventDefault();
        }
      });

      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length > 1) {
          // In case user pastes multiple digits, only keep the first digit
          e.target.value = value.charAt(0);
        }

        if (value.match(/[0-9]/)) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        } else {
          e.target.value = '';
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '') {
            if (index > 0) {
              inputs[index - 1].focus();
              inputs[index - 1].value = '';
              e.preventDefault(); // prevent the browser's default backspace action
            }
          }
        } else if (e.key === 'ArrowLeft') {
          if (index > 0) {
            inputs[index - 1].focus();
            e.preventDefault();
          }
        } else if (e.key === 'ArrowRight') {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
            e.preventDefault();
          }
        }
      });
    });

    // Optional: focus the first input on page load
    inputs[0].focus();