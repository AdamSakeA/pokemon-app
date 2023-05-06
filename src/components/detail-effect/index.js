import { textToCapitalize, deleteSymbol } from "../../utils/settings";

import { Container, Content } from "./detailEffect.styles";

export default function DetailEffect({ data }) {
  const dataEntries = Object.entries(data?.damage_relations);

  const displayContent = dataEntries.map(([key, value], i) => {
    return <ContentEffect key={i} title={key} data={value} />;
  });

  return (
    <Container>
      <h1 className="title-effect">{textToCapitalize(data.name)}</h1>
      <div className="content-container">{displayContent}</div>
      <hr />
    </Container>
  );
}

const ContentEffect = ({ title, data }) => {
  return (
    <Content>
      <h3>{deleteSymbol(title)}</h3>
      <div className="skill-effect">
        {data.length === 0 && <p>No Effect</p>}
        {data.map((item, i) => {
          return <p key={i}>{textToCapitalize(item.name)}</p>;
        })}
      </div>
    </Content>
  );
};
