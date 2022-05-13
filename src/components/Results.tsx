type ResultsPropsType = {
  results: {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string
  }
}

const Results = (props: ResultsPropsType) => {
  return (
    <div className="flex justify-center text-3xl font-serif">
      <div className="flex flex-col">
        <div>{props.results.cityName}</div>
        <div>{props.results.country}</div>
        {props.results.temperature &&
          <div><span>{props.results.temperature}</span>
            <span className="text-xl">°C</span>
          </div>}
        {props.results.conditionText &&
          <div className="flex justify-center align-center">
            <span>{props.results.conditionText}</span>
            <span><img src={props.results.icon} alt="weatherIcon" /></span>
          </div>}
      </div>
    </div>
  );
};

export default Results;
