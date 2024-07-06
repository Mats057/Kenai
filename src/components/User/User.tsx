import UserPhoto from '../../../public/user.jpg'

function User({name} : {name: string}) {
    return (
        <div className='flex flex-col items-center'>
        <img src={UserPhoto} alt="Foto de usuário" className="rounded-full max-h-[120px] mb-4 xl:max-h-44" />
            <p className='text-lg xl:text-3xl'>{name}</p>
        </div>
    )
}

export default User;