import React from 'react'

const Button = () => {
    const user =
    {
        name: 'Lelouch',
        imgUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c1f49ac-ffe7-4662-8997-8532d9e13b1d/ddy5b85-5c323b4d-5b55-4742-8f66-e1ff82a8fdda.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMWY0OWFjLWZmZTctNDY2Mi04OTk3LTg1MzJkOWUxM2IxZFwvZGR5NWI4NS01YzMyM2I0ZC01YjU1LTQ3NDItOGY2Ni1lMWZmODJhOGZkZGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qZySfuIHP2SzgEvegzncTvNDuAbeKSXFssqkN8tHH04'
    }
    return (
        <div className='container'>
            <img className='pic' alt='pic' src={user.imgUrl}/>
            <h1>{user.name}</h1>
            <button>Click this!</button>
        </div>
    )
}

export default Button
