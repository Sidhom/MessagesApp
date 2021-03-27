import React, { useRef } from "react";
import { useRecoilValue } from 'recoil';
import useAddMessage from "../../hooks/useAddMessage";
import useFormInput from '../../hooks/useFormInput';
import Button from "../Button";
import { loggedInUser } from '../../store/state';
import style from './AddMessage.css';

const AddMessage = () => {
    const messageRef = useRef();
    const privacyRef = useRef();
    const {value, onChange} = useFormInput('');
    const connectedUser = useRecoilValue(loggedInUser);

    const { send, error, message, loading, allFieldsAreValid } = useAddMessage({ messageRef,  message: value,privacyRef, destinationId: null, senderId: connectedUser._id });
    return (
        <form>
           <textarea name="message" value={message}
                className={style.messageContainer}
                ref={messageRef}
                onChange={onChange}>Enter text here...</textarea>
                <div className={style.sendMessage}>
                    <Button label={loading ? 'Loading...' : 'Send'} action={send} disabled={loading || !value} />
                </div>
        </form>
    );
       
        }
    
export default AddMessage;
