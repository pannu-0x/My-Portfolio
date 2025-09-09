var Typed = new Typed(".multiple-text", {
    strings: ["Fronted Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.addEventListener("DOMContentLoaded", () => {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      navbar.classList.toggle('active');
      menuIcon.classList.toggle('bx-x'); // change icon when active
    };
  }
});


const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    formMessage.classList.add('hidden');
    formMessage.textContent = '';

    // Simple front-end validation
    if (!form.name.value.trim() || !form.email.value.trim() || !form.subject.value.trim() || !form.message.value.trim()) {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.classList.remove('hidden');
      return;
    }
    if (!validateEmail(form.email.value.trim())) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.classList.remove('hidden');
      return;
    }

    // Simulate form sending
    formMessage.textContent = 'Sending...';
    formMessage.classList.remove('hidden');

    setTimeout(() => {
      formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
      form.reset();
    }, 1500);
  });

  function validateEmail(email) {
    // Simple email regex for basic validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
