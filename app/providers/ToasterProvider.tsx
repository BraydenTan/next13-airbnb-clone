'use client';
//q: what is this 'use client' helping for ?
//a: 'use client' is helping for the client side of the app
//   it is used to define the client side of the app
import { Toaster } from "react-hot-toast";
//q: what is this react-hot-toast helping for ?
//a: react-hot-toast is a react hook that lets you show toast notifications
const ToasterProvider = () => {
  return ( 
    <Toaster />
   );
}
 
export default ToasterProvider;
