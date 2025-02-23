import { TextField, Button } from "@mui/material"
import { SearchBarContainer } from "./SearchBarStyles";

type SearchBarProps = {
    onClick: () => {};
    onChange: (city: String) => void;
    city: String;
};

const SearchBar: React.FC<SearchBarProps> = (SearchBarProps) => {
    const handleChange = (event: any) => {
        const selectedUnit = event.target.value;
        SearchBarProps.onChange(selectedUnit);
    };

    return (
        <SearchBarContainer>
            <TextField
                id="outlined-required"
                label="City name"
                defaultValue={SearchBarProps.city}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={SearchBarProps.onClick}> Get Weather</Button>
        </SearchBarContainer>
    );
};

export default SearchBar;