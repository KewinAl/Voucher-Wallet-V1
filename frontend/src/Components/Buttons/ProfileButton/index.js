import {
    ProfileButtonBase,
    ProfileImage
} from './ProfileButton.styles'


const ProfileButton = (props) => {
    return (
        <div>
            <ProfileButtonBase onClick={() => { props.onClick() }}>
            <ProfileImage/>
            </ProfileButtonBase>
        </div>
    )
}
export default ProfileButton;