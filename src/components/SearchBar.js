import React, { useState, useEffect } from 'react'

const SearchBar = props => {
    const [value, setValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncedValue(value)
        }, 350)
        return () => {
            clearTimeout(timeOut)
        }
    }, [value])

    useEffect(() => {
        if (debouncedValue) {
            if (isNaN(debouncedValue)) {
                props.term(debouncedValue)
            } else {
                props.id(debouncedValue)
            }
        } else {
            props.cancel()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    return (
        <div className="ui form">
            <div className="inline fields centered-container">
                <div className="sixteen wide field">
                    <label>Keresés</label>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Írd be egy ének sorszámát vagy címének egy részletét!"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar