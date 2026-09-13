import {PropsWithChildren} from "react";

export const PageContainer = ({children}: PropsWithChildren) =>
    <div className={'flex min-h-dvh flex-col mx-auto w-full max-w-5xl px-6'}>
        {children}
    </div>