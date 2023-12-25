import React from 'react'

export const checkPasswordSame = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return false;
    } else {
        return true;
    }
}
