import {FC} from "react";

interface ErrorMessageProps
{
    children: string;
    level: "warning" | "error";
}

const ErrorMessage: FC<ErrorMessageProps> = ({children, level}) => {
    return <div className={level}>{children}</div>
}

export default ErrorMessage;
