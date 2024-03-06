import { useEffect,useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import {oktaConfig} from '../lip/oktaConfig'

const OktaSignInWidget =({onSuccess,onError}:any)=> {
 
const widgetRef=useRef();
const widgetRef2 = useRef<HTMLDivElement>(null);


useEffect(() => {
    if (!widgetRef.current) {
      return;
    }
  
    const widget = new OktaSignIn(oktaConfig);
    widget.showSignInAndRedirect({ el: widgetRef.current }).then(onSuccess).catch(onError);
  
    return () => {
      widget.remove();
    };
  }, [widgetRef, onSuccess, onError]);
return (
    <div className="container my-5" >
        <div ref={widgetRef2} ></div>

    </div>
)

}

export default OktaSignInWidget