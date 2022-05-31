import Link from "next/link";
import { useEffect } from "react"; // Finds a function when the component first mounts
import { useRouter } from "next/router"; // Gives us access to a method we can use to redirect a user

const ErrorNotFOund = () => {
    const router = useRouter(); // contains a router object we can use to redirect the user

    // Empty dependency Array tells browser to fire once, only
    // when this component mounts and not for any state changes
    useEffect(() => {
        // setTimeout function takes in an argument that it'll fire after sometime
        setTimeout(() => {
            // router.go(-1) takes user to previous page
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>Bro, that Page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default ErrorNotFOund;