export const Disclaimer = ({ part }: Props) => {
    return (
        <div className="components--disclaimer__container">
            By clicking "{part}" above, you acknowledge that you have read and agree to our <span className="link-mock">Terms & Conditions</span>.
        </div>
    )
}


type Props = {
    part: string
}