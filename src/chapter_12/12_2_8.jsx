const handleChange = (event) => {
  // 변경 전: setTemperature(event.target.value);
  props.onTemperatureChange(event.target.value);
};
