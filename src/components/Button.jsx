import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg"

export default function Button({className, href, onClick, children, px, white}) {
    
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-8 ${px || "px-7"} ${white ? "text-n-8": "text-n-1"} ${className || ""}`

    const spanClasses = "relative z-10"

    function renderButton(){
        return(
            <button className={classes} onClick={onClick}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </button>
        )
    }

    function renderLink(){
        return(
            <a className={classes} href={href}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </a>
        )
    }

  return(
        href ? renderLink() : renderButton()
  )
}
