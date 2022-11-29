import React, { FC } from 'react';

interface Props {
   message: string
}

const GlobalErrorMessage: FC<Props> = React.memo(({ message }) => {
   return <div className='globalErrorMessage preloader'>{message}</div>;
});

export default GlobalErrorMessage;