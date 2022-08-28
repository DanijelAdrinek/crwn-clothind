import { DirectoryItemContainer, BackgroundImage, Body, Title, Paragraph } from "./directory-item.styles.jsx";

import { useNavigate } from "react-router-dom";

const DirectoryItem  = ({ category }) => {
    const { title, imageUrl, route } = category;
    
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <Title>{title}</Title>
          <Paragraph>Shop Now</Paragraph>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;