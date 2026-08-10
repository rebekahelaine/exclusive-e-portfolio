// template_q8qljhh
// service_721w6az
// PZxziNt2soWRWIOZP

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

let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}