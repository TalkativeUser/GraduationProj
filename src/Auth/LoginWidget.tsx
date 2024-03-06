import { useOktaAuth } from '@okta/okta-react'
import { Navigate } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget'
import { ColorRing } from 'react-loader-spinner';

 const LoginWidget=({config}:any)=>{

    const {oktaAuth,authState}=useOktaAuth();
    const onSuccess=(tokens:any)=>{

        oktaAuth.handleLoginRedirect(tokens)
    }

    const onError=(err:any)=>{

        console.log('Sign in error ',err);
    }

    if(!authState) {

        return (

            <div className="vh-100  d-flex justify-content-center align-items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
        );

    }

    return authState.isAuthenticated ? <Navigate to={{pathname:'/'}} />:
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
}

export default LoginWidget

// export default LoginWidget
// import {Redirect} from 'react-router-dom'
// import { useOktaAuth } from '@okta/okta-react'

//  const LoginWidget=({config})=>{

//     const {oktaAuth,authState}=useOktaAuth();
//     const onSuccess=(tokens)=>{

//         oktaAuth.handleLoginRedirect(tokens)
//     }

//     const onError=(err)=>{

//         console.log('Sign in error ',err);
//     }

//     if(!authState) {

//         return (

//             <SpinnerLoading />
//         );

//     }

//     return authState.isAuthenticated ? <Redirect to={{pathname:'/'}} />:
//     <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
// }

// export default LoginWidget