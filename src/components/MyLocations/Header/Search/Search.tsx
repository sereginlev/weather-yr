import React from 'react';

import Form from './Form/Form';
import Button from './Button/Button';

const Search: React.FC = () => {
	const [searchValue, setSearchValue] = React.useState(''); // значение строки поиска
	const [isSearch, setIsSearch] = React.useState(false); // показать / скрыть поле поиска

	return (
		<>
			{
				isSearch ?
					<Form searchValue={searchValue} setSearchValue={setSearchValue} setIsSearch={setIsSearch}/>
					:
					<Button setSearchValue={setSearchValue} setIsSearch={setIsSearch} />
			}
		</>
	)
}

export default Search;
