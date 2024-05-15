import React from "react";

class Button extends React.Component{

                // // Event Handling & Control Re Rendering start
    shouldComponentUpdate(nextProps){
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale} = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        else{
            return true;
        }
    }

    render(){
        const {change, locale, show} = this.props;
        return(
            <>
                <button onClick={()=>change(locale)} >
                    {locale === "bn-BD" ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                { show && <p>Hello</p>}
                {/* js er e ekta par ekhane show true hole dekhabe, false hole bakitao false, dekhabe na */}
            </>
        )      
    }
}

export default Button