

const barBtn = document.querySelector('.navigation-bars')
const listItem = document.querySelectorAll('.navigation-item.d-none.d-sm-block')
const navList = document.querySelector('.navigation-list')

barBtn.onclick = () => {
    navList.classList.toggle('show-mobile')
    listItem.forEach((Item) => {
        Item.classList.toggle('show-mobile')
    })
}