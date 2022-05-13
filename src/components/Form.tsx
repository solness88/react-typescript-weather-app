type FormsPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: any) => void
}

const Form = (props: FormsPropsType) => {
  return (
    <form className="flex justify-center mb-10 space-x-8">
      <input type="text" name="city" placeholder="City Name" onChange={e => props.setCity(e.target.value)} className="py-2 text-2xl" />
      <button type="submit" onClick={props.getWeather} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Weather</button>
    </form>
  );
};

export default Form;
