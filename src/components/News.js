import { timeConverter } from "./_getDateTime";

const News = ({ news }) => {
  return (
    <div>
      <div className="news-item">
        <div className="news-header">
          <h4>{news.headline}</h4>
          <p className="news-subheader">
            {news.source} | {timeConverter(news.datetime)}
          </p>
          <p className="news-summary">{news.summary}</p>
        </div>
        <img src={news.image} alt={news.headline} />
      </div>
      <hr></hr>
    </div>
  );
};

export default News;
