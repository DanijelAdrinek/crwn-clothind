import { DirectoryItemContainer, BackgroundImage, Body, Title, Paragraph } from "./directory-item.styles.jsx";

const DirectoryItem  = ({ category }) => {
    const { title, imageUrl } = category;
    
    return (
        <DirectoryItemContainer>
        <BackgroundImage style={{
          backgroundImage: `url(${imageUrl})`
        }} />
        <Body>
          <Title>{title}</Title>
          <Paragraph>Shop Now</Paragraph>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;