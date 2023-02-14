import {
    ProfileButtonBase,
    ProfileImage
} from './ProfileButton.styles'


const ProfileButton = (props) => {
    return (
        <ProfileButtonBase onClick={() => { props.onClick() }}>
            <ProfileImage/>
        </ProfileButtonBase>
    )
}
export default ProfileButton;