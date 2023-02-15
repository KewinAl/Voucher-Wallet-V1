import {
    TagOverlayDiv,
    TagButton,
    TagDiv
} from './TagOverlay.styles'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const TagOverlay = () => {

    const tags = useSelector((store) => store.tags.tags)
    const [selectedTags, setSelectedTags] = useState(tags.slice(0, 4));
    const [availableTags, setAvailableTags] = useState(tags.slice(4));

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
            setAvailableTags([...availableTags, tag]);
        } else if (availableTags.includes(tag)) {
            setAvailableTags(availableTags.filter((t) => t !== tag));
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <TagOverlayDiv>
            <div>
                <h1>Preferred Tags:</h1>
                <div>
                    <TagDiv>
                        {selectedTags.map((tag) => <TagButton onClick={(e) => { handleTagClick(e.target.value)}} key={tag} value={tag}>{tag}</TagButton>)}
                    </TagDiv>
                </div>
                <h2>Available Tags:</h2>
                <div>
                    <TagDiv>
                        {availableTags.map((tag) => <TagButton onClick={(e) => { handleTagClick(e.target.value) }} key={tag} value={tag}>{tag}</TagButton>)}
                    </TagDiv>
                </div>
            </div>
        </TagOverlayDiv>

    )
}

export default TagOverlay;