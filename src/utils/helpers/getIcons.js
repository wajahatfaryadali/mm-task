import email from '../../assets/svgs/email-icon.svg'
import lock from '../../assets/svgs/lock-icon.svg'
import eyeOpen from '../../assets/svgs/eyeOpen.svg'
import eyeClose from '../../assets/svgs/eyeClose.svg'
import { text } from '../constants/strings'

export const getIcon = (type) => {

    console.log('type check ******* ', type)
    switch (type) {
        case text.email:
            return email;
        case text.password:
        case text.confirmPassword:
            // return [lock, eyeOpen, eyeClose];
            return { lock, eyeOpen, eyeClose };


        default:
            return ''
    }
}