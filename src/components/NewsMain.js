import { timeConverter } from "./_getDateTime";

const NewsMain = ({ mainnews }) => {
  return (
    <div>
      <div className="mainnews-item">
        <div className="mainnews-header">
          <h1>{mainnews.headline}</h1>
          <p className="mainnews-subheader">
            {mainnews.source} | {timeConverter(mainnews.datetime)}
          </p>
          <p className="mainnews-summary">{mainnews.summary}</p>
        </div>
        <img src={mainnews.image} alt={mainnews.headline} />
      </div>
    </div>
  );
};

export default NewsMain;
