// template_q8qljhh
// service_721w6az
// PZxziNt2soWRWIOZP
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor

  for(let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0
    const boolInteger = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact() {
  event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overaly--visible"
  emailjs 
    .sendForm(
      'service_721w6az',
      'template_q8qljhh',
      event.target,
      'PZxziNt2soWRWIOZP'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please contact me directly at rebekah@titlesafe.tv."
      )
    })
}



function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}