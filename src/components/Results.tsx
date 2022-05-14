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
    <div className="flex justify-center font-sans font-light">
      <div className="flex flex-col">
        <div className="text-6xl flex justify-center">{props.results.cityName}</div>
        <div className="text-2xl flex justify-center">{props.results.country}</div>
        {props.results.temperature &&
          <div className="flex justify-center my-3"><span className="text-8xl text-orange-600 flex ">{props.results.temperature}</span>
            <span className="text-3xl text-orange-600 self-end">°C</span>
          </div>}
        {props.results.conditionText &&
          <div className="flex justify-center align-center">
            <span className="text-3xl flex justify-center self-center">{props.results.conditionText}</span>
            <span><img src={props.results.icon} alt="weatherIcon" /></span>
          </div>}
      </div>
    </div>
  );
};

export default Results;
