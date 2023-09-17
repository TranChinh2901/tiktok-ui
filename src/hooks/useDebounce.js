import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedvalue, setDebouncedvalue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedvalue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedvalue;
}
export default useDebounce;
