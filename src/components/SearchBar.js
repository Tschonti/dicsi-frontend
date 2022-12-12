import React, { useState, useEffect } from 'react'

const SearchBar = props => {
    const [value, setValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')
    const [lyricsToo, setLyricsToo] = useState(false)

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
                props.term(debouncedValue, lyricsToo)
            } else {
                props.id(debouncedValue)
            }
        } else {
            props.cancel()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    useEffect(() => {
        if (value) {
            if (isNaN(value)) {
                props.term(value, lyricsToo)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lyricsToo])

    return (
        <div className="ui form">
            <div className="inline fields centered-container">
                <div className="thirteen wide field">
                    <label>Keresés</label>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ének sorszáma, vagy teljes szavak a címből vagy dalszövegből"/>
                </div>
                <div className="three wide field">
                    <div className="ui checkbox my-check">
                        <input id="lyricsCheckbox" type="checkbox" tabIndex="0" checked={lyricsToo} onChange={() => setLyricsToo(!lyricsToo)} />
                        <label htmlFor="lyricsCheckbox">dalszövegben is</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar