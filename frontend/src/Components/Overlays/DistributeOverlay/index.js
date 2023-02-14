import { OverlayDiv } from "./DIstributeCouponOverlay.styles"
import { useState } from 'react'

const DistributeCouponOverlay = (props) => {
    const [formData, setFormData] = useState({
        ageFrom: '',
        ageTo: '',
        gender: '',
        location: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleClose = (e) => {
        if (e.target.id = 'background') {
            props.exitFunction(!props.visible);
        }
    }

    return (
        <OverlayDiv visible={props.visible} id='background' onClick={(e) => handleClose(e)}>
            <div>
                <h1>Select target group</h1>
                <form>
                    <div>
                    <label htmlFor="ageFrom">Age (From):</label>
                    <input
                        type="number"
                        id="ageFrom"
                        name="ageFrom"
                        value={formData.ageFrom}
                        onChange={handleChange}
                    />

                    <label htmlFor="ageTo">Age (To):</label>
                    <input
                        type="number"
                        id="ageTo"
                        name="ageTo"
                        value={formData.ageTo}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="gender">Gender:</label>
                    <div>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            checked={formData.gender === 'male'}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            checked={formData.gender === 'female'}
                            />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            onChange={handleChange}
                            checked={formData.gender === 'other'}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="none"
                            name="gender"
                            value=""
                            onChange={handleChange}
                            checked={formData.gender === ''}
                            />
                        <label htmlFor="none">No Selection</label>
                    </div>
                    </div>
                    <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        />
                    </div>
                    <button>distribute</button>
                </form>


            </div>
        </OverlayDiv>
    )
}
export default DistributeCouponOverlay;