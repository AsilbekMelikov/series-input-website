window.addEventListener('DOMContentLoaded', () => {
    const advertisement = document.querySelectorAll('.promo__adv img'),
          background = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          seriesList = document.querySelector('.promo__interactive-list'),
          formAdd = document.querySelector('form.add'),
          seriesInput = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type="checkbox"]')


const seriesDB = {  // why is array that is inside of object given instead of only array?
    series: [
        'Omar',
        'The final Legacy',
        'Ertugrul',
        'Magnificent Century',
        'The Great Seljuke Guardians'
    ]
};  

formAdd.addEventListener('submit', event => {
    event.preventDefault();

    let newSeries = seriesInput.value;
    const favourite = checkbox.checked;

    if (newSeries) {
        if (newSeries.length > 18) {
           newSeries = `${newSeries.substring(0,18)}...`;
        }
        if (favourite) {
            console.log('It is your favourite series')
        }   
        seriesDB.series.push(newSeries);
        sortArray(seriesDB.series);
        createSeries(seriesDB.series, seriesList);
    }
    event.target.reset();

})




const sortArray = arr => {
    arr.sort();
}   

const deleteAdv = adv => {
    adv.forEach(item => {
        item.remove();
    })
}

const makeChanges = () => {
    genre.textContent = 'Comedy';
    background.style.background = 'url("/Working with DOM/images/1.jpg")';
}

const createSeries = (series, parent) => {
    parent.innerHTML = '';
    sortArray(series);
    series.forEach((item, index) => {
        parent.innerHTML += `
         <li class="promo__interactive-item">${index+1} ${item}<div class="delete"></div></li>
        `
    })

    document.querySelectorAll('.delete').forEach((item, index) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            series.splice(index, 1);
            
            createSeries(series, parent);
        })
    })  
}


sortArray(seriesDB.series);
makeChanges();
deleteAdv(advertisement);
createSeries(seriesDB.series, seriesList);
})
