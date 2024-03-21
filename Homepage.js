import { useEffect, useState } from 'react'
// import "./styles/reactcss.css"

const Homepage = () => {
    const [name, setName] = useState('')
    const [prevName, setPrevName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (age > 18) {
            setName('Gone Goa Gone')
        } else {
            setName(prevName)
        }
    }, [age])

    const clickSubmit = (e) => {
        e.preventDefault()

        console.log(name, age, email)
    }

    return (
        <form>
            <div className="container">
                <label className='spaceBtw name' for='name' id='name'> Name:{'  '}
                    <input name='name' type='text' placeholder='Enter Your Name.. ' onChange={(e) => {
                        setName(e.target.value)
                        setPrevName(e.target.value)
                    }} value={name}></input>
                </label>
                <label className='spaceBtw age' for='age' id='age'> Age:{'  '}
                    <input name='age' type='number' placeholder='Enter Your Age.. ' onChange={(e) => setAge(e.target.value)} value={age}></input>
                </label>
                <label className='spaceBtw age' for='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email}> Email:{'  '}
                    <input name='email' type='text' placeholder='Enter Your Email.. '></input>
                </label>
                <button className='btnbg' onClick={(e) => clickSubmit(e)} type='submit'>Submit </button>
            </div>
        </form>
    )
}

export default Homepage