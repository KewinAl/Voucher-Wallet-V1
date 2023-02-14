import {
    TagOverlayDiv,
    TagButton,
    TagDiv
} from './TagOverlay.styles'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const TagOverlay = () => {

    const tags = useSelector((store) => store.tags.tags)
    const [preferences, setPreferences] = useState([
        'Food', 
        'Video Games', 
        'Sports', 
        'Fashion',
    ]);
    const [availableTags, setAvailableTags] = useState(tags.filter((tag => !preferences.includes(tag))))

    const removePreference = (e) => {
        let preferenceCopy = [...preferences];
        let indexToRemove = preferenceCopy.indexOf(e.target.value)
        let removedTag = preferenceCopy.splice(indexToRemove, 1)
        setPreferences(preferenceCopy)

        let availableTagsCopy = [...availableTags];
        availableTagsCopy.push(removedTag)
        setAvailableTags(availableTagsCopy)
    }

    const addPreference = (e) => {
        let availableTagsCopy = [...availableTags];
        let indexToRemove = availableTagsCopy.indexOf(e.target.value)
        let removedTag = availableTagsCopy.splice(indexToRemove, 1)
        setAvailableTags(availableTagsCopy)

        let preferenceCopy = [...preferences];
        preferenceCopy.push(removedTag)
        setPreferences(preferenceCopy)
    }

    return (
        <TagOverlayDiv>
            <div>
                <h1>Preferred Tags:</h1>
                <div>
                    <TagDiv>
                        {preferences.map((tag) => <TagButton onClick={(e) => { removePreference(e)}} key={tag} value={tag}>{tag}</TagButton>)}
                    </TagDiv>
                </div>
                <h2>Available Tags:</h2>
                <div>
                    <TagDiv>
                        {availableTags.map((tag) => <TagButton onClick={(e) => { addPreference(e) }} key={tag}>{tag}</TagButton>)}
                    </TagDiv>
                </div>
            </div>
        </TagOverlayDiv>

    )
}

export default TagOverlay;