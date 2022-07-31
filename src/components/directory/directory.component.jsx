import './directory.styles.scss';
import CategoryItem from '../categories/category-item.component.jsx';

const Directory = ({categories}) => {

    return (
        <div className="categories-container">
            { categories.map((category) => {
                return <CategoryItem key={category.id} category={category} /> 
            }) }
        </div>
    )

}

export default Directory;