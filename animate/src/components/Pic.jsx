import { useNavigate } from 'react-router-dom'
// import pics from '../../../models/pics'

const Pic = (props) => {
    let navigate = useNavigate()

    const showPic = (pics) => {
        navigate(`${pics._id}`)
    }

    return (
        <div>
            {
                props.pics?.map((pics) => (
                    <div onClick={() => showPic(pics)} key={pics.id}>
                    <img className="imgdetail"style={{display: 'block', width: '5em', height: '5em', justifyContent: 'center', alignItems: 'center'}} src={pics.image}/>
                    <h3>{pics.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Pic