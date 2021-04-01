import React, { forwardRef } from 'react';
import styles from './Input.css';

const Input = forwardRef(({ type, action, autoComplete, values, required, pattern }, ref) => {
return <input data-testid="generic-input" className={styles.container} ref={ref} type={type} pattern={pattern} value={values && values.value} onChange={values && values.onChange} required={required} autoComplete={autoComplete}
onKeyDown={event => {event.key === 'Enter'? action() : undefined }}
            />
    });

export default Input;