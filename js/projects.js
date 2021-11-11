let projects = [
  {
    index: 1,
    name: "Lobelia Hotel",
    img: './images/projects/lobelia-hotel.png'
  },
  {
    index: 2,
    name: "Warehouse",
    img: './images/projects/warehouse.png'
  },
  {
    index: 3,
    name: "Mixed Use Building",
    img: './images/projects/mixed.png'
  },
  {
    index: 4,
    name: "Mixed Use Building",
    img: './images/projects/-2.png'
  }
]

let project_slider = document.getElementById('projects-carousel');
let slide_counter = document.getElementById('slide-counter');

let current = 1;

addSlides();

document.getElementById('prev-pr').addEventListener('click', () => {
  if(current > 1) {
    change(current - 1)
  }
})

document.getElementById('next-pr').addEventListener('click', () => {
  if(current < projects.length) {
    change(current + 1)
  }
})

project_slider.addEventListener('swiped-right', () => {
  if(current > 1) {
    change(current - 1)
  }
})

project_slider.addEventListener('swiped-left', () => {
  if(current < projects.length) {
    change(current + 1)
  }
})


function change(page) {
  for ( let i = 1; i < page; i ++ ) {
    let element = document.getElementById('project-' + i)
    element.classList.add('is-invisible');
    element.classList.remove('is-active');
  }
  for ( let i = page; i < projects.length + 1; i ++ ) {
    let element = document.getElementById('project-' + i)
    element.classList.remove('is-invisible');
    element.classList.remove('is-active');
  }
  current = page;
  let element = document.getElementById('project-' + current)
  element.classList.add('is-active');
  slide_counter.innerHTML = "0" + current + " of 0" + projects.length 
}



function addSlides(){
  projects.forEach(element => {
    let siema_image = document.createElement('div');
    siema_image.classList.add('siema-image')
    siema_image.id = 'project-' + element.index
    siema_image.style.setProperty('background-image', 'url(' + element.img + ')')
    if(element.index == 1){
      siema_image.classList.add('is-active')
    }

    let overlay = document.createElement('div');
    overlay.classList.add('after')

    let title = document.createElement('h4');
    title.className = 'display is-size-4 has-text-left py-4 pl-5 has-text-white'
    title.innerHTML = element.name

    siema_image.appendChild(overlay)
    siema_image.appendChild(title)

    siema_image.addEventListener('click', () => {
      change(element.index)
    })

    project_slider.appendChild(siema_image)
  });
  slide_counter.innerHTML = "01 of 0" + projects.length 
}
