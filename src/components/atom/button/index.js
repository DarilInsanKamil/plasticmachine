import React from "react"
import { ButtonStyled } from "../../components.styled";

export const Button = ({ value, ...rest }) => {
    return (
        <ButtonStyled {...rest}>
            {value}
        </ButtonStyled>
    )
}