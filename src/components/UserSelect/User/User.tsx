import { useNavigate } from 'react-router-dom';
import UserPhoto from '/user.jpg'

function User({name} : {name: string}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main')
    }
    return (
        <div className='group flex flex-col items-center cursor-pointer hover:scale-110 transition-all select-none' onClick={handleClick}>
        <img src={UserPhoto} alt="Foto de usuário" className="rounded-full max-h-[120px] mb-4 xl:max-h-44 group-hover:shadow-lg shadow-dark20" />
            <p className='text-lg xl:text-3xl'>{name}</p>
        </div>
    )
}

export default User;