import {Link} from "react-router-dom";

const Button = ({children,disabled ,to,type}) => {
    const base='disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 bg-yellow-400 uppercase font-semibold text-stone-800 inline-block text-sm tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300'

    const styles={
        primary:base+' px-4 py-3 sm:px-6 sm:py-4',
        small:base+' py-2 px-2 sm:px-5 sm:py-2.5 text-xs',
        secondary:'px-4 py-2.5 sm:px-6 sm:py-3.5 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 border-2 border-stone-300 uppercase font-semibold text-sm text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300'
    }
    if (to) return <Link to={to} className={styles[type]}>{children}</Link>
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
};

export default Button;