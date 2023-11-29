import React, {FC, useState} from 'react';
import css from "./SearchForm.module.css"

type IProps = {
    onSubmit: CallableFunction,
}

const SearchForm:FC<IProps> = ({onSubmit}) => {

    const [query, setQuery] = useState('')

    return (
        <form className={css.form} onSubmit={(e)  => onSubmit(e)}>
            <input
                className={css.input}
                name="search"
                type="text"
                placeholder={'Search movie'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={css.button}>Search</button>
        </form>
    );
};

export {SearchForm};