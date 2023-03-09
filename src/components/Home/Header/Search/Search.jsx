import React from 'react';

import Location from '../Location/Location';
import Form from './Form/Form';
import Button from './Button/Button';

function Search() {
	const [searchValue, setSearchValue] = React.useState(''); // значение строки поиска
	const [isSearch, setIsSearch] = React.useState(false); // показать / скрыть поле поиска
	const [isNearby, setIsNearby] = React.useState(false);

	return (
		<>
			{
				isSearch ?
					<Form searchValue={searchValue} setSearchValue={setSearchValue} setIsSearch={setIsSearch} setIsNearby={setIsNearby}/>
					:
					<>
						<Location isNearby={isNearby}/>

						<Button setSearchValue={setSearchValue} setIsSearch={setIsSearch} />
					</>
			}
		</>
	)
}

export default Search;
