type FormsPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: any) => void
}

const Form = (props: FormsPropsType) => {
  return (
    <form>
      <input type="text" name="city" placeholder="City Name" onChange={e => props.setCity(e.target.value)} />
      <button type="submit" onClick={props.getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;
