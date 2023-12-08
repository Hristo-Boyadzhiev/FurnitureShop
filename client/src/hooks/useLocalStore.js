import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key)
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized)
            return persistedState
        } else {
            return initialValue
        }
    })

    const setLocalStorage = (value) => {
        if (value) {
            setState(value)
            localStorage.setItem(key, JSON.stringify(value))
        } else {
            setState({})
            localStorage.removeItem(key)
        }
    }

    return [
        state,
        setLocalStorage
    ]
}
