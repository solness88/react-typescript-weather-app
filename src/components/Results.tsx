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
    <div>
      <div>{props.results.cityName}</div>
      <div>{props.results.country}</div>
      <div>{props.results.temperature}</div>
      <div className="flex justify-center align-center">
        <span>{props.results.conditionText}</span>
        <span><img src={props.results.icon} alt="weatherIcon" /></span>
      </div>
    </div>
  );
};

export default Results;
