import { MenuItem, Select, FormControl, InputLabel } from "@mui/material"

type TemperatureSwitcherProps = {
  onChange: (unit: number) => void;
  unit: number;
};

const UnitSelector: React.FC<TemperatureSwitcherProps> = (TemperatureSwitcherProps) => {
  const handleChange = (event: any) => {
    const selectedUnit = event.target.value;
    TemperatureSwitcherProps.onChange(selectedUnit);
  };

  return (
    <FormControl variant="outlined" size="medium">
      <InputLabel>Unit</InputLabel>
      <Select value={TemperatureSwitcherProps.unit} onChange={handleChange} label="Unit">
        <MenuItem value={0}>Celsius (°C)</MenuItem>
        <MenuItem value={1}>Kelvin (K)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UnitSelector