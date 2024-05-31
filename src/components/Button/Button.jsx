import "./Button.scss";
import {  toast } from 'react-toastify';

export default function Button(){
    const notifySuccess = () => toast.success("Operation was successful!");
  const notifyError = () => toast.error("Something went wrong!");
    return (
        <>
        <button className="button__simulation" onClick={notifySuccess}>
            Click Me
        </button>
        </>
    );
}