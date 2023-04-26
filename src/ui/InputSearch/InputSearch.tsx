import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import { ChangeEvent, useState } from "react"

type InputSearchProps = {
	onSearch: (data: string) => any
}

export const InputSearch = ({ onSearch }: InputSearchProps) => {
	const [value, setValue] = useState<string>("")

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const onClick = () => {
		onSearch(value)
	}

	const onDeleteResultSearch = () => {
		onSearch("")
	}
	return (
		<Paper
			component='form'
			sx={{ p: "2px", mb: 1, display: "flex", alignItems: "center", width: 400 }}
		>
			<InputBase
				value={value}
				onChange={onChange}
				size='small'
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search'
			/>
			<IconButton onClick={onClick} type='button' sx={{ p: "10px" }} aria-label='search'>
				<SearchIcon />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
			<IconButton
				onClick={onDeleteResultSearch}
				type='button'
				sx={{ p: "10px" }}
				aria-label='delete'
			>
				<ClearIcon />
			</IconButton>
		</Paper>
	)
}
