let rating

document.querySelectorAll('.rating').forEach(btn => {
    btn.addEventListener('click', e => {
        if(document.querySelector('.checked'))
            document.querySelector('.checked').classList.remove('checked')
        e.target.classList.add('checked')
        rating = e.target.id
    })
})

document.getElementById('submit').addEventListener('click', e => {
    if(rating){
        document.querySelector('.rating-card').classList.add('hide')
        document.querySelector('.thank-you').classList.add('flex')
        document.querySelector('.rating-number').innerHTML = rating
    }
    else{
        document.querySelector('.rating-card').classList.add('shake')
        setTimeout(() => {
            document.querySelector('.rating-card').classList.remove('shake')
        }, 500);
    }
})



