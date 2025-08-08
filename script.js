//contact form
function handleSubmit(event) {
    event.preventDefault(); 
    alert("Thank you for contacting me!");
    event.target.reset();
}

window.open('https://deerzou-zine.carrd.co/#', '_blank');



  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.modal-title').forEach(title => {
      title.addEventListener('click', function () {
        const modalContent = this.closest('.modal-content');
        modalContent.querySelector('.modal-header')?.classList.toggle('color-toggled');
        modalContent.querySelector('.modal-body')?.classList.toggle('color-toggled');
        modalContent.querySelector('.modal-footer')?.classList.toggle('color-toggled');
      });
    });

    // Reset everything when modal is hidden
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('hidden.bs.modal', function () {
        this.querySelector('.modal-header')?.classList.remove('color-toggled');
        this.querySelector('.modal-body')?.classList.remove('color-toggled');
        this.querySelector('.modal-footer')?.classList.remove('color-toggled');
      });
    });
  });


  $(document).ready(function () {
    const $toggler = $('.navbar-toggler');
    const $collapse = $('#navbarNav');
    const $openIcon = $toggler.find('.open-icon');
    const $closeIcon = $toggler.find('.close-icon');

    // Toggle icons
    $collapse.on('show.bs.collapse', function () {
      $openIcon.hide();
      $closeIcon.show();
    });

    $collapse.on('hide.bs.collapse', function () {
      $openIcon.show();
      $closeIcon.hide();
    });

    // Close when clicking outside
    $(document).on('click', function (e) {
      const isClickInsideNavbar = $(e.target).closest('.navbar').length > 0;
      if (!isClickInsideNavbar && $collapse.hasClass('show')) {
        $collapse.collapse('hide');
      }
    });
  });


document.querySelectorAll("#works h1, #works h2, #works h3, #works h4, #works h5, #works h6")
.forEach(function(heading) {
  heading.addEventListener("click", function(e) {
    e.stopPropagation(); // prevent clicks from bubbling to other elements
    document.getElementById("works").classList.toggle("active");
  });
});

