import { getProviders, signIn as signIntoProvider} from 'next-auth/react';
import React from 'react'


// Browser
function SignIn({ providers }) {
    
    return (
        <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIntoProvider(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    )
}

// server side function
export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}

// ----------------------------------


// const SignIn = () => {
//     const [providers, setProviders] = useState(null);
  
//     useEffect(() => {
//       (async () => {
//         const res = await getProviders();
//         setProviders(res);
//       })();
//     }, []);
  
//     return (
//       <>
//         {providers &&
//           Object.values(providers).map((provider) => (
//             <div key={provider.name}>
//               <button onclick={() => { signIntoProvider(provider.id);}}>
//                 sign in with {provider.name}
//               </button>
//             </div>
//           ))}
//       </>
//     );
//   };




export default SignIn;