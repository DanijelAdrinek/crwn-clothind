import { DirectoriesContainer } from './directory.styles.jsx';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({categories}) => {

    return (
        <DirectoriesContainer>
            { categories.map((category) => {
                return <DirectoryItem key={category.id} category={category} /> 
            }) }
        </DirectoriesContainer>
    )

}

export default Directory;