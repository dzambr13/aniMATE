import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Pic = (props) => {
    let navigate = useNavigate()
    console.log(props.picture)

    const showPic = (picture) => {
        navigate(`${picture._id}`)
    }

return (
    <div>
        <h1> wow </h1>
        <h2> HAHAHA</h2>
            {
                props.picture.picture?.map((pic) => (
                    <div onClick={() => showPic(pic)} key={pic._id}>
                    <img className="imgdetail"style={{display: 'block', width: '5em', height: '5em', justifyContent: 'center', alignItems: 'center'}} src={pic.image} alt="lol"/>
                    <h3>{pic.title}</h3>
                    </div>
                ))}
    </div>
    )
}

export default Pic